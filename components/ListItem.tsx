import React from 'react'
import Link from 'next/link'

import { Module } from '../interfaces'

type Props = {
  data: Module
}

const ListItem = ({ data }: Props) => (
  <Link href="/modules/[id]" as={`/modules/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
