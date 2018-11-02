export interface IComponentProp {
  name: string
  type: string
  attr: string
  docs: string
}

export interface IComponentEvent {
  event: string
  bubbles: boolean
  cancelable: boolean
  composed: boolean
  docs: string
  detail: string
}

export interface IComponentMethod {

}

export interface IComponent {
  tag: string
  styles: any[]
  props: IComponentProp[]
  readme: IParsedMarkdown
  usage: {[filename: string]: IParsedMarkdown}
  methods: IComponentMethod[]
  events: IComponentEvent[]
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

export interface IParsedMarkdown {
  attributes: IUsage
  body: string
  frontmatter?: string
}

export interface IUsage {
  title?: string
  controls?: {[prop: string]: string}
  props?: {[prop: string]: any}
  background?: string
  styles: {[prop: string]: string}
  innerHTML?: string
}

export interface IComponentProps {
  [prop: string]: any
}
