import { Component, Prop, State, Element } from '@stencil/core'
import { IComponent, IComponentProps } from '@/model'
import { kebabCase } from 'lodash-es'
import '@stencil/router'
import { getComponents } from '@/client'

@Component({
  tag: 'picto-graph',
  styleUrl: 'picto-graph.styl',
  shadow: true
})
export class Pictograph {
  @Element() el: HTMLElement
  @Prop() manifestUrl: string = '/components.json'
  @State() currentProps: IComponentProps
  @State() components: IComponent[] = []

  async componentWillLoad () {
    this.components = await getComponents(this.manifestUrl)
  }

  onPropsChanged = ({ detail: props }: CustomEvent<IComponentProps>) => {
    this.currentProps = props
  }

  render () {
    return [
      <stencil-router>
        <menu>
          <h4>{document.title} <ion-icon name='ios-repeat' onClick={() => this.componentWillLoad()}/></h4>
          <picto-nav components={ this.components }/>
        </menu>
        <main>
            <stencil-route url='/' exact={true} routeRender={() =>
              <picto-md class='index' source={this.el.textContent.replace(/^\s*/gm, '')}/>
            }/>
            {
              this.components.map(c =>
                <stencil-route url={`/${c.tag}`} routeRender={() => {
                  const index = <stencil-route url={`/${c.tag}`} exact={true} routeRender={() => [
                    <picto-preview component={c} usage={c.usage.index.attributes} componentProps={this.currentProps}></picto-preview>,
                    <picto-md source={c.usage.index.body}/>
                  ]}/>
                  const usageKeys = Object.keys(c.usage).filter(n => n !== 'index')
                  const usages = usageKeys.map(n =>
                    <stencil-route url={`/${c.tag}/${kebabCase(n)}`} routeRender={() => [
                      <picto-preview component={c} usage={c.usage[n].attributes} componentProps={this.currentProps}></picto-preview>,
                      <picto-md source={c.usage[n].body}/>
                    ]}/>
                  )
                  return [index, usages]
                }
                }/>
              )
            }
        </main>
        <aside>
          {
            this.components.map(c => {
              const index = <stencil-route exact={true} url={`/${c.tag}`} routeRender={() => [
                <picto-props component={c} usage={c.usage.index.attributes} onPropsChanged={this.onPropsChanged}/>
              ]}/>
              const usageKeys = Object.keys(c.usage).filter(n => n !== 'index')
              const usages = usageKeys.map(n =>
                <stencil-route url={`/${c.tag}/${kebabCase(n)}`} routeRender={() => [
                  <picto-props component={c} usage={c.usage[n].attributes} onPropsChanged={this.onPropsChanged}/>
                ]}/>
              )
              return [index, usages]
            })
          }
        </aside>
      </stencil-router>
    ]
  }
}
