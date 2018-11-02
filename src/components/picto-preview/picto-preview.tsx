import { Component, Prop, State, Watch, Event } from '@stencil/core'
import { IComponent, IUsage, IComponentProps } from '@/model'
import { EventEmitter } from '@stencil/state-tunnel/dist/types/stencil.core';

@Component({
  tag: 'picto-preview',
  styleUrl: 'picto-preview.styl',
  shadow: true
})
export class Preview {
  @Prop() component: IComponent
  @Prop() usage: IUsage
  @Prop() componentProps: IComponentProps = {}

  @State() bgMode: 'light' | 'dark' | 'custom'

  @Event() rendered: EventEmitter

  @Watch('usage')
  setBgMode () {
    if (!this.usage) return
    switch (this.usage.background) {
      case 'light':
      case 'dark':
        this.bgMode = this.usage.background
        break
      case undefined:
        this.bgMode = 'light'
        break
      default:
        this.bgMode = 'custom'
    }
  }

  componentDidLoad () {
    this.setBgMode()
  }

  render () {
    if (!this.component || !this.component.tag) {
      return null
    }
    const preview = <this.component.tag ref={(el: HTMLElement) => this.rendered.emit(el)} {...this.componentProps} style={this.usage.styles} innerHTML={this.usage.innerHTML}></this.component.tag>
    return [
      <div class={{ switcher: true, disabled: this.bgMode !== 'custom' }}>
        <button class={{ selected: this.bgMode === 'light' }} onClick={() => this.bgMode = 'light'}>light</button>
        <button class={{ selected: this.bgMode === 'dark' }} onClick={() => this.bgMode = 'dark'}>dark</button>
      </div>,
      <section class={{ dark: this.bgMode === 'dark' }} style={{ background: this.bgMode === 'custom' ? this.usage.background : '' }}>
        <div class='preview'>{preview}</div>
      </section>
    ]
  }
}
