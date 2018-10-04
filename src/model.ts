export interface IComponentProp {
  name: string
  type: string
  attr: string
  docs: string
}

export interface IComponent {
  tag: string
  styles: any[]
  props: IComponentProp[]
  readme: string
  usage: {[filename: string]: string},
  methods: any[]
  events: any[]
}

export interface IGuide {
  label: string,
  props?: {[prop: string]: any},
  innerHTML?: string
}

export interface IGuideConfig {
  category: string
  name: string
  guides: IGuide[]
}

export interface IUsage {
  title: string
  props: {[prop: string]: any}
  innerHTML: string
}

export interface IParsedMarkdown {
  attributes: IUsage
  body: string
  frontmatter: string
}
