import * as React from 'react'
import { Module } from '../interfaces'


type ListDetailProps = {
  item: Module
}

const ListDetail = ({ item: module }: ListDetailProps) => (
  <div>
    <h1>Detail for {module.name}</h1>
    <p>ID: {module.id}</p>
  </div>
)

export default ListDetail
