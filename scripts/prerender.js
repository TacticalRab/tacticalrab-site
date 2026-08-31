import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distIndex = path.join(root, 'dist', 'index.html')

const { render } = await import(path.join(root, 'dist-ssr', 'entry-server.js'))
const appHtml = render()

const template = fs.readFileSync(distIndex, 'utf-8')

if (!template.includes('<div id="root"></div>')) {
  console.error('prerender: could not find the root div in dist/index.html')
  process.exit(1)
}

const output = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
)

fs.writeFileSync(distIndex, output)

const kb = (Buffer.byteLength(output, 'utf-8') / 1024).toFixed(1)
console.log(`prerender: injected ${appHtml.length} chars — dist/index.html is now ${kb} kB`)
