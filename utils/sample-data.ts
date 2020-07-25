import { Module, Guild } from '../interfaces'

export const sampleGuildData: Guild[] = [
  {id: 1203, name: "Sample Module", description: "a nice guild"}
]
export const sampleModuleData: Module[] = [
  { id: 101, name: 'Alice', description: "first module", author: sampleGuildData[0] },
  { id: 102, name: 'Bob', description: "another module", author: sampleGuildData[0] },
  { id: 103, name: 'Caroline', description: "3rd module", author: sampleGuildData[0] },
  { id: 104, name: 'Dave', description: "nice module", author: sampleGuildData[0] },
]
