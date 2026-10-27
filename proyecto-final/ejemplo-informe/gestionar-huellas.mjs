// Sin paquetes externos ni conexiones de red. Ejecutar con Node.js.
// node gestionar-huellas.mjs --verificar  (opcion predeterminada)
// node gestionar-huellas.mjs --generar    (solo tras una revision del material)
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, relative, sep } from 'node:path';
import assert from 'node:assert/strict';

const root = fileURLToPath(new URL('.', import.meta.url));
const manifests = new Map([['sha256', 'SHA256SUMS.txt'], ['md5', 'MD5SUMS.txt']]);
const excluded = new Set(manifests.values());
const mode = process.argv[2] ?? '--verificar';
assert.ok(['--generar', '--verificar'].includes(mode) && process.argv.length <= 3,
  'Uso: node gestionar-huellas.mjs [--verificar|--generar]');

function listFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const absolute = join(directory, entry.name);
    const name = relative(root, absolute).split(sep).join('/');
    assert.ok(!entry.isSymbolicLink(), `No se admiten enlaces simbolicos: ${name}`);
    if (entry.isDirectory()) return listFiles(absolute);
    assert.ok(entry.isFile(), `Tipo de archivo no admitido: ${name}`);
    assert.ok(!/[\r\n]/.test(name), 'Nombre de archivo no admitido');
    return excluded.has(name) ? [] : [name];
  });
}

const files = listFiles(root).sort();
const contents = new Map(files.map(name => [name, readFileSync(join(root, name))]));
// Ambos algoritmos se aplican a los mismos bytes leidos una sola vez.
for (const [algorithm, manifest] of manifests) {
  const expected = files.map(name => `${createHash(algorithm).update(contents.get(name)).digest('hex')}  ${name}`).join('\n') + '\n';
  if (mode === '--generar') writeFileSync(join(root, manifest), expected, 'utf8');
  else {
    const actual = readFileSync(join(root, manifest), 'utf8').replace(/\r\n/g, '\n');
    assert.equal(actual, expected, `${manifest}: hay cambios de contenido o de la relacion de archivos. Revisar antes de regenerar.`);
  }
  console.log(`${manifest}: ${files.length} archivos ${mode === '--generar' ? 'registrados' : 'verificados'}`);
}
console.log('Las huellas detectan cambios frente a una referencia conservada; no autentican el relato ni sustituyen la custodia.');
