import { exec } from 'child_process'
import { readFile, writeFile } from 'fs'

export const cmd = (cmd: string) =>
  new Promise((resolve, reject) =>
    exec(cmd, (error, stdout, stderr) => {
      if (error) { return reject(error) }
      if (stdout) { console.log(stdout) }
      if (stderr) { console.log(stderr) }
      return resolve()
    })
  )

export const openFile = async (path: string): Promise<string> =>
  new Promise((resolve, reject) =>
    readFile(path, 'utf-8', (err, file) => err ? reject(err) : resolve(file))
  )

export const saveFile = async (path: string, file: string): Promise<void> =>
  new Promise((resolve, reject) =>
    writeFile(path, file, 'utf-8', err => err ? reject(err) : resolve())
  )

export const openJsonFile = async (path: string) =>
  JSON.parse(await openFile(path))

export const saveJsonFile = async (path: string, file: string) =>
  saveFile(path, JSON.stringify(file))