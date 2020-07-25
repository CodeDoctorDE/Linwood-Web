import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Module } from '../../interfaces'
import { sampleModuleData } from '../../utils/sample-data'
import List from '../../components/List'


type Props = {
  items: Module[]
}

const WithStaticProps = ({ items }: Props) => (
  <div>
    <h1>Modules List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /modules</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </div>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Module[] = sampleModuleData
  return { props: { items } }
}

export default WithStaticProps