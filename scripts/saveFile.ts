import { parse, resolve } from 'path'
import repos from './repos'
import { ls, parseArgs, reservedDirs, cmd } from './utils'
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

const getArgs = () => {
  const args = parseArgs(process.argv)
  if (!args.file) {
    throw new Error(`
      "file" doit être défini.

      example:

      file=exercices/exercice1.md
    `)
  }
  if (!args.dir) {
    throw new Error(`
      "dir" doit être défini.

      example:

      dir=exercices/exercice1.md
    `)
  }
  if (reservedDirs.find(dir => args.dir === dir || args.dir.startsWith(`${dir}/`))) {
    throw new Error(`
      "dir" ne peut pas être un des dossier reservés.

      Dossiers reservés: ${reservedDirs.join(', ')}
    `)
  }
  return {
    file: args.file,
    outputDir: args.dir,
  }
}

const getPathsToRepo = (names: string[]) =>
  names
    .map(d => repos.find(({ nom }) => d === nom))
    .filter(Boolean)
    .map(({ dir }) => ({
      pathToDir: resolve(__dirname, '..', 'repos', dir),
      name: dir,
    }))

const copyFile = (outputDir: string, dir: string, base: string, ext: string) =>
  ({ pathToDir, name }: { pathToDir: string, name: string }) =>
    cmd(`cp ${resolve(pathToDir, dir, base)} ${resolve(outputDir, `${name}${ext}`)}`)

const run = async () => {
  const { file, outputDir } = getArgs()
  const { dir, base, ext } = parse(file)
  const result = await Promise.all(repos.map(checkOne(dir, base)))
  await cmd(`rm -rf ${outputDir}`)
  await cmd(`mkdir ${outputDir}`)
  const paths = getPathsToRepo(result.filter(d => d.hasFile).map(d => d.nom))
  await Promise.all(paths.map(copyFile(outputDir, dir, base, ext)))
  console.log(`Done copying ${file} to ${outputDir}`)
}

run()
