import { Component, Prop, Element } from '@stencil/core'

import mts from 'marked-ts'
import hljs from 'highlight.js'

mts.Marked.setOptions({ highlight: (code, lang) => hljs.highlight(lang, code).value, langPrefix: 'hljs lang-' })

@Component({
  tag: 'picto-md',
  styleUrls: ['picto-md.styl', 'nord.css'],
  shadow: true
})
export class Markdown {
  @Prop() source: string
  @Element() el: HTMLElement
  render () {
    return [
      <div class='markdown' innerHTML={mts.Marked.parse(this.source)}/>
    ]
  }
}
