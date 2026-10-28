// Fills dist/index.html with the server-rendered page, so search engines and link
// previews see the content without running JavaScript. Runs after both Vite builds.
import { readFile, rm, writeFile } from 'node:fs/promises'

const serverDir = new URL('../dist-server/', import.meta.url)
const indexFile = new URL('../dist/index.html', import.meta.url)

const { render } = await import(new URL('entry-server.js', serverDir).href)
const html = await readFile(indexFile, 'utf8')
const placeholder = '<!--app-html-->'
if (!html.includes(placeholder)) throw new Error(`dist/index.html has no ${placeholder} placeholder`)

await writeFile(indexFile, html.replace(placeholder, render()))
await rm(serverDir, { recursive: true, force: true })
console.log('Pre-rendered dist/index.html')
