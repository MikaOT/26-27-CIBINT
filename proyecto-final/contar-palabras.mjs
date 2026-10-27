// Uso desde la raiz del curso:
// node proyecto-final/contar-palabras.mjs ruta/informe.md
// node proyecto-final/contar-palabras.mjs ruta/propuesta.md --propuesta
// Solo lee el archivo indicado. No instala paquetes ni realiza conexiones de red.
import { readFileSync } from 'node:fs';

const [file, option] = process.argv.slice(2);
if (!file || (option && option !== '--propuesta') || process.argv.length > 4) {
  console.error('Uso: node contar-palabras.mjs archivo.md [--propuesta]');
  process.exit(1);
}

function withoutFencedCode(text) {
  let fence = null;
  return text.split('\n').filter(line => {
    const mark = line.match(/^\s*(`{3,}|~{3,})/);
    if (!fence && mark) { fence = mark[1]; return false; }
    if (fence) {
      if (mark && mark[1][0] === fence[0] && mark[1].length >= fence.length && line.trim() === mark[1]) fence = null;
      return false;
    }
    return true;
  }).join('\n');
}

function words(text) {
  const visible = withoutFencedCode(text)
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/^\s*\[[^\]]+\]:\s+\S+.*$/gm, '')
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]*>/g, '')
    .replace(/\bhttps?:\/\/[^\s)<>]+/gi, '');
  // Las marcas de Markdown no son palabras. Numeros e identificadores cuentan.
  return (visible.match(/[\p{L}\p{N}]+(?:['\u2019.,-][\p{L}\p{N}]+)*/gu) ?? []).length;
}

try {
  const text = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  let body;
  if (option === '--propuesta') {
    const start = text.search(/^## 1\. /m);
    const end = text.search(/^## 8\. /m);
    if (start < 0 || end <= start) throw new Error('Faltan los apartados 1 y 8 de la plantilla de propuesta.');
    body = text.slice(start, end).replace(/^## 5\. [^\n]*\n[\s\S]*?(?=^## 6\. )/m,
      section => section.split('\n').filter(line => !line.trimStart().startsWith('|')).join('\n'));
    console.log(`Propuesta sin tabla de referencias ni resolución de aprobación: ${words(body)} palabras`);
  } else {
    const start = text.search(/^## 1\. Resumen ejecutivo\s*$/m);
    const end = text.search(/^## 11\. Referencias\s*$/m);
    if (start < 0 || end <= start) throw new Error('Faltan los apartados 1 y 11 de la plantilla de informe.');
    body = text.slice(start, end);
    console.log(`Cuerpo del informe (apartados 1 a 10): ${words(body)} palabras`);
    const summaryEnd = body.search(/^## 2\. /m);
    if (summaryEnd > 0) console.log(`Resumen ejecutivo, incluido en el cuerpo: ${words(body.slice(0, summaryEnd))} palabras`);
  }
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
