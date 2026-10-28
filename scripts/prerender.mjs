// Writes one fully rendered page per language: dist/index.html (English) and
// dist/ar/index.html (Arabic), each with its own <html lang dir> and <head> tags, so search
// engines and link previews get the content without running JavaScript. Runs after both
// Vite builds.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'

const serverDir = new URL('../dist-server/', import.meta.url)
const distDir = new URL('../dist/', import.meta.url)

const { render, headTags, htmlAttributes, locales } = await import(new URL('entry-server.js', serverDir).href)
const template = await readFile(new URL('index.html', distDir), 'utf8')

const marks = ['<html lang="en">', '<!--seo:start-->', '<!--seo:end-->', '<!--app-html-->']
for (const mark of marks) {
  if (!template.includes(mark)) throw new Error(`dist/index.html is missing ${mark}`)
}

for (const locale of locales) {
  const html = template
    .replace('<html lang="en">', `<html ${htmlAttributes(locale)}>`)
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, headTags(locale).trimStart())
    .replace('<!--app-html-->', render(locale))
  const dir = locale === 'en' ? distDir : new URL(`${locale}/`, distDir)
  await mkdir(dir, { recursive: true })
  await writeFile(new URL('index.html', dir), html)
  console.log(`Pre-rendered ${locale === 'en' ? 'dist/index.html' : `dist/${locale}/index.html`}`)
}

await rm(serverDir, { recursive: true, force: true })
