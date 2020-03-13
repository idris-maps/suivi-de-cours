import { parse, resolve } from 'path'
import repos from './repos'
import { ls, parseArgs } from './utils'
import { Repo } from './types'

interface CheckResponse {
  nom: string
  hasFile: boolean
}

const checkOne = (pathInRepo: string, file: string) =>
  async ({ nom, dir }: Repo): Promise<CheckResponse> => {
    const dirPath = resolve(__dirname, '..', 'repos', dir, pathInRepo)
    try {
      const files = await ls(dirPath)
      return { nom, hasFile: files.includes(file) }
    } catch (e) {
      return { nom, hasFile: false }
    }
  }

const run = async () => {
  const args = parseArgs(process.argv)
  if (!args.file) {
    throw new Error(`
      "file" doit être défini.

      example:

      file=exercices/exercice1.md
    `)
  }
  const { dir, base } = parse(args['file'])
  const result = await Promise.all(repos.map(checkOne(dir, base)))

  console.log(
    JSON.stringify(
      result
      .sort((a, b) => a.nom > b.nom ? 1 : -1)
      .map(({ nom, hasFile }) => `${nom}: ${hasFile ? 'OUI' : 'NON' }`),
      null,
      2
    )
  )
}

run()
