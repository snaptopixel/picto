import { Component, Prop, State, Watch, Element } from '@stencil/core'
import { IComponent, IParsedMarkdown } from '@/model'
import { entries } from 'lodash-es'

import * as fm from 'front-matter'

@Component({
  tag: 'picto-graph',
  styleUrl: 'picto-graph.styl',
  shadow: true
})
export class Book {
  @Prop() manifestUrl = 'components.json'
  @Prop() guidesUrl = '/guides'
  @Element() el: HTMLElement

  @State() components: IComponent[] = []
  @State() selectedComponent!: IComponent
  @State() selectedUsages!: IParsedMarkdown[]
  @State() selectedUsage!: IParsedMarkdown

  @Watch('selectedComponent')
  setUsageData (c: IComponent) {
    this.selectedUsages = entries(this.usages[c.tag]).map(([key, u]) => u)
    this.selectedUsage = this.selectedUsages[0]
  }

  usages: {[tag: string]: {[usage: string]: IParsedMarkdown}}

  async componentWillLoad () {
    const { components }: {components: IComponent[]} = await fetch(this.manifestUrl).then(res => res.json())
    this.usages = components.reduce((a, c) => {
      const keys = Object.keys(c.usage)
      if (keys.length) {
        a[c.tag] = keys.reduce((u, k) => {
          u[k] = (fm as any).default(c.usage[k])
          return u
        }, {} as {[prop: string]: any})
      }
      return a
    }, {} as {[prop: string]: any})
    this.components = components.filter(c => c.tag in this.usages)
  }

  render () {
    return [
      <menu>
        <h4>Components</h4>
        <ul class='menu-list'>
          {this.components.map(c => {
            return <li>
              <a href=''
                onClick={
                  e => {
                    e.preventDefault()
                    this.selectedComponent = c
                  }
                }
              >{c.tag}</a>
              {this.selectedUsages && this.selectedComponent === c &&
              <ul>
                {this.selectedUsages.map(u =>
                  <li>
                    &nbsp;&nbsp;<a href='' onClick={e => {
                      e.preventDefault()
                      this.selectedUsage = u
                    }}>{u.attributes.title}</a>
                  </li>
                )}
              </ul>
              }
            </li>
          })}
        </ul>
      </menu>,
      <main>
        {!this.selectedUsage && <picto-md source={this.el.textContent.replace(/^\s*/gm, '')}></picto-md>}
        {this.selectedUsage && <picto-md source={this.selectedUsage.body}/>}
        {this.selectedComponent && <picto-gram component={this.selectedComponent} usage={this.selectedUsage.attributes}></picto-gram>}
      </main>
    ]
  }
}
