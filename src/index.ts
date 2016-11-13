import * as fs from 'fs'
let thriftParser = require('thrift-parser')
import { compile } from 'handlebars'
import { registerHelpers } from './ts-helpers'

function readFile(fileName: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

function getStructs(idl: any) {
  return Object.keys(idl.struct).map(key => ({
    fields: idl.struct[key],
    name: key,
  }))
}

async function generateTypes(types: any) {
  const template: HandlebarsTemplateDelegate = await loadTemplate('./templates/types.hbs')
  return types.map(template)
}

function getServices(idl: any) {
  return Object.keys(idl.service).map(key => ({
    name: key,
    params: idl.service[key],
  }))
}

async function generateServices(services: any) {
  const template: HandlebarsTemplateDelegate = await loadTemplate('./templates/services.hbs')
  return services.map(template)
}

export async function loadTemplate(fileName: string): Promise<HandlebarsTemplateDelegate> {
  const src = await readFile(fileName)
  return compile(src)
}

export function parseFile(fileName: string): Promise<any> {
  return readFile(fileName).then(idl => {
    return thriftParser(idl)
  })
}

export async function generateCode(fileName: string): Promise<string[]> {
  registerHelpers()
  const idl = await parseFile(fileName)
  const structs = getStructs(idl)
  return generateTypes(structs)
}

export async function generateServiceScript(fileName: string): Promise<string[]> {
  registerHelpers()
  const idl = await parseFile(fileName)
  const services = getServices(idl)
  return generateServices(services)
}
