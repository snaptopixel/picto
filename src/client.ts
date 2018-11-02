import { IComponent } from '@/model'
import FM from 'front-matter'

const parseComponent = (c: IComponent) => {
  addReadmeEvents(c)
  addReadmeProps(c)
  addUsage(c)
  return c
}

const fixMarkdown = (source: string) => {
  source = source.replace(/\n/gm, '<br>')
  source = source.replace(/\"/gm, "'")
  source = source.replace(/\|/gm, 'ǀ')
  return source
}

const addUsage = (c: IComponent) => {
  for (const k of Object.keys(c.usage)) {
    c.usage[k] = FM(c.usage[k] as any as string)
  }
  c.usage['index'] = FM(c.readme as any as string)
}

const addReadmeProps = (c: IComponent) => {
  if (c.props.length) {
    (c.readme as any) += `
      ### Props
      | Property | Attribute | Description | Type |
      | -------- | --------- | ----------- | ---- |
      ${c.props.map(p => `| ${'`' + p.name + '`' || '—'} | ${'`' + p.attr + '`' || '—'} | ${fixMarkdown(p.docs) || '—'} | ${'`' + fixMarkdown(p.type) + '`' || '—'} |`).join('\n')}
    `.replace(/^\s*/gm, '')
  }
}

const addReadmeEvents = (c: IComponent) => {
  if (c.events.length) {
    (c.readme as any) += `
      ### Events
      | Event | Detail | Description |
      | ----- | ------ | ----------- |
      ${c.events.map(e => `| ${'`' + e.event + '`' || '—'} | ${'`' + e.detail + '`' || '—'} | ${fixMarkdown(e.docs) || '—'} |`).join('\n')}
    `.replace(/^\s*/gm, '')
  }
}

export async function getComponents (url: string) {
  const { components }: {components: IComponent[]} = await fetch(url).then(res => res.json())
  return components.map(parseComponent)
}
