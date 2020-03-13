import { cmd } from './utils'
import repos from './repos'
import { Repo } from './types'

const pull = async ({ dir }: Repo) => {
  await cmd(`(cd repos/${dir}; git pull; cd ..; cd ..)`)
}

const run = async () => {
  await Promise.all(repos.map(pull))
  console.log('Done pulling repos')
}

run().catch(console.log)