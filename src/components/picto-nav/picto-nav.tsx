import { Component, Prop, Watch, Element } from '@stencil/core'
import { IComponent, IUsage } from '@/model'
import { kebabCase } from 'lodash-es'

function createSubmenu (baseurl: string, { usage, tag }: IComponent) {
  const usageKeys = Object.keys(usage).filter(k => k !== 'index')
  if (usageKeys.length === 0) return
  const baseUrl = baseurl + tag
  return [
    <stencil-route url={baseUrl} routeRender={props =>
      <ul class='menu-secondary'>{
        usageKeys.map(n =>
          createSubmenuLink(
            baseUrl + '/' + kebabCase(n),
            usage[n].attributes.title
          )
        )
      }</ul>
    }/>
  ]
}

function createSubmenuLink (url: string, label: string) {
  return [
    <li class='link'>
      <ion-icon name='ios-list'></ion-icon>
      <stencil-route-link url={url} activeClass='is-active'>{label}</stencil-route-link>
    </li>
  ]
}

@Component({
  tag: 'picto-nav',
  styleUrl: 'picto-nav.styl',
  shadow: true
})
export class Nav {
  @Prop() components: IComponent[] = []
  @Prop() baseurl: string = '/'
  render () {
    return [
      <ul class='menu-primary'>{
        this.components.map(component => {
          const { usage, tag } = component
          return [
            <li class='link'>{[
              <stencil-route-link url={this.baseurl + tag} class={{ hasSubmenu: Object.keys(usage).length > 1 }} activeClass='is-active'>{tag}</stencil-route-link>,
              createSubmenu(this.baseurl, component)
            ]}</li>
          ]
        })
      }</ul>
    ]
  }
}
