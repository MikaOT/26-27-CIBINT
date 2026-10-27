// Datos ficticios; solo lee archivos de esta carpeta y no realiza consultas de red.
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

function csv(name) {
  const lines = readFileSync(new URL(`datos/${name}`, import.meta.url), 'utf8').trim().split(/\r?\n/);
  const keys = lines.shift().split(',');
  return lines.map(line => {
    const cells = line.split(','); // Estas muestras no contienen comas dentro de celdas.
    assert.equal(cells.length, keys.length, `Columnas incorrectas: ${name}`);
    return Object.fromEntries(keys.map((key, index) => [key, cells[index]]));
  });
}

const timeline = csv('cronologia.csv'), vpn = csv('vpn.csv');
const impact = Object.fromEntries(csv('impacto.csv').map(row => [row.variable, Number(row.valor)]));
const evidenceText = readFileSync(new URL('expediente.md', import.meta.url), 'utf8');
const knownEvidence = new Set([...evidenceText.matchAll(/^\| (E-\d{2}) \|/gm)].map(match => match[1]));
assert.equal(knownEvidence.size, 32, 'El expediente debe contener 32 evidencias');
for (const name of ['vpn.csv', 'inventario.csv', 'osint-socmint.csv', 'infraestructura.csv', 'datos-en-mensajeria.csv']) {
  const rows = csv(name);
  for (const row of rows) assert.ok(knownEvidence.has(row.evidencia), `Referencia desconocida en ${name}`);
  if (name === 'datos-en-mensajeria.csv') assert.ok(rows.every(row => row.valor_incluido === 'no'), 'La muestra solo debe incluir categorias de datos');
}
let previous = -Infinity;
const identifiers = new Set();
for (const row of timeline) {
  const time = Date.parse(row.fecha_hora_utc);
  assert.ok(Number.isFinite(time) && time >= previous, 'Fechas incorrectas o desordenadas');
  assert.ok(knownEvidence.has(row.evidencia), 'Referencia E desconocida');
  assert.ok(!identifiers.has(row.evento_id), 'Identificador repetido');
  identifiers.add(row.evento_id); previous = time;
}
const eventTime = id => Date.parse(timeline.find(row => row.evento_id === id).fecha_hora_utc);
const vpnTime = id => Date.parse(vpn.find(row => row.evento === id).fecha_hora_utc);
const firstUse = (vpnTime('primera_sesion') - vpnTime('emision')) / 1000;
const beforeDelivery = (vpnTime('primera_entrega_documentada') - vpnTime('primera_sesion')) / 1000;
const webHours = (eventTime('C04') - eventTime('C02')) / 3600000;
const maintenanceHours = (eventTime('C19') - eventTime('C18')) / 3600000;
assert.deepEqual([firstUse, beforeDelivery, webHours, maintenanceHours], [70, 13130, 32, 72]);
const authorityHours = (eventTime('C23') - eventTime('C22')) / 3600000;
const affectedHours = (eventTime('C24') - eventTime('C22')) / 3600000;
assert.deepEqual([authorityHours, affectedHours], [41, 44]);
const restoreGap = (eventTime('C16') - Date.parse('2026-05-13T00:00:00Z')) / 60000;
assert.equal(restoreGap, 1570);
const volume = impact.operaciones_diarias * impact.importe_medio * impact.dias_mantenimiento;
const response = impact.horas_extra * impact.coste_hora_extra + impact.coste_proveedor;
const margin = recovery => volume * (1 - recovery) * impact.margen_contribucion;
assert.deepEqual([volume, response, response + margin(impact.recuperacion_comercial)], [576000, 61200, 130320]);
const rounded = n => Math.round(n * 100) / 100;
console.log('Operación Faro · Comprobaciones de los datos docentes');
console.log(`Eventos ordenados con referencias conocidas: ${timeline.length}`);
console.log(`Referencias del expediente: ${knownEvidence.size}; corpus OSINT/SOCMINT: ${csv('osint-socmint.csv').length} piezas; infraestructura: ${csv('infraestructura.csv').length} relaciones`);
console.log('Mensajeria: categorias documentadas sin valores personales ni secretos');
console.log(`Brecha: notificacion a autoridad en ${authorityHours} horas; informacion a personas en ${affectedHours} horas desde constancia suficiente`);
console.log(`Emisión a primer uso VPN: ${firstUse} segundos`);
console.log(`Primera sesión antes de la entrega documentada: ${beforeDelivery} segundos (3:38:50)`);
console.log(`Retirada de webs: ${webHours} horas; mantenimiento de gestión: ${maintenanceHours} horas`);
console.log('Antigüedad del punto restaurado respecto al borrado: 26 horas y 10 minutos');
console.log(`Repositorios recuperados por número: ${rounded(406 / 418 * 100)} %; no mide integridad`);
console.log(`Volumen comercial teórico expuesto: ${volume} EUR; no es pérdida confirmada`);
console.log(`Coste de respuesta modelado: ${response} EUR`);
console.log(`Margen no recuperado modelado al 60 % de recuperación: ${rounded(margin(0.6))} EUR`);
for (const recovery of [0.8, 0.6, 0.4]) console.log(`Escenario conjunto con recuperación ${recovery * 100} %: ${rounded(response + margin(recovery))} EUR`);
console.log('Rescate: 0.5 BTC exigidos; no incluido como coste pagado');
console.log('La aritmética no autentica evidencias ni identifica personas.');
