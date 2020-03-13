import { openJsonFile, saveFile, cmd } from './utils'
import { resolve } from 'path'
import { Repo } from './types'

const sanitizeName = (name: string = '') =>
  name.split(' ').join('_').toLowerCase()

const createTsArray = async (): Promise<Repo[]> => {
  const data = await openJsonFile(resolve(__dirname, '..', 'repos_eleves.json'))
  const repos = data.map(d => ({ ...d, dir: sanitizeName(d.nom) }))
  const file = `
import { Repo } from './types'

const repos: Repo[] = ${
  JSON.stringify(repos)
}

export default repos
  `
  await saveFile(resolve(__dirname, 'repos.ts'), file)
  return repos
}

const cloneRepo = ({ repo, dir }: Repo) =>
  cmd(`git clone ${repo} repos/${dir}`)

const run = async () => {
  const repos = await createTsArray()
  await cmd('rm -rf repos')
  await cmd('mkdir repos')
  await Promise.all(repos.map(cloneRepo))
  console.log('Done cloning repos')
}

run().catch(console.log)