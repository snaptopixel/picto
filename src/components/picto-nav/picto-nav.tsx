import { Component, Prop, State, Watch, Event, EventEmitter } from '@stencil/core'
import { IComponent, IParsedMarkdown } from '@/model'
import { entries } from 'lodash-es'
import * as fm from 'front-matter'

@Component({
  tag: 'picto-nav',
  styleUrl: 'picto-nav.styl',
  shadow: true
})
export class Nav {
  @Prop() components: IComponent[]

  @Event() componentSelected: EventEmitter

  @State() selectedComponent!: IComponent
  @State() selectedUsages!: IParsedMarkdown[]
  @State() selectedUsage!: IParsedMarkdown

  @Watch('components')
  setUsages (val: any) {
    this.usages = this.components.reduce((a, c) => {
      const keys = Object.keys(c.usage)
      if (keys.length) {
        a[c.tag] = keys.reduce((u, k) => {
          u[k] = (fm as any).default(c.usage[k])
          return u
        }, {} as {[prop: string]: any})
      }
      return a
    }, {} as {[prop: string]: any})
  }

  get visibleComponents () {
    if (!this.usages) return []
    return this.components.filter(c => c.tag in this.usages)
  }

  @Watch('selectedComponent')
  setUsageData (c: IComponent) {
    console.log('aye', this.usages)
    this.selectedUsages = entries(this.usages[c.tag]).map(([key, u]) => u)
    this.selectedUsage = this.selectedUsages[0]
  }

  @Watch('selectedUsage')
  emitUsage () {
    this.componentSelected.emit({
      component: this.selectedComponent,
      usage: this.selectedUsage
    })
  }

  usages: {[tag: string]: {[usage: string]: IParsedMarkdown}}

  render () {
    return <ul>
      {this.visibleComponents.map(c => {
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
  }
}
