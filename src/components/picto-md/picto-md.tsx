import { Component, Prop, Element } from '@stencil/core'
import * as M from 'marked-ts'
const { Marked } = (M as any).default
@Component({
  tag: 'picto-md',
  styleUrl: 'picto-md.styl',
  shadow: true
})
export class Markdown {
  @Prop() source: string
  @Element() el: HTMLElement
  render () {
    return <div innerHTML={Marked.parse(this.source)}/>
  }
}
