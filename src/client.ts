import { IComponent } from '@/model'
import FM from 'front-matter'

const parseUsage = (c: IComponent) => {
  for (const k of Object.keys(c.usage)) {
    c.usage[k] = FM(c.usage[k] as any as string)
  }
  c.usage['index'] = FM(c.readme as any as string)
  return c
}

export async function getComponents (url: string) {
  const { components }: {components: IComponent[]} = await fetch(url).then(res => res.json())
  return components.map(parseUsage)
}
