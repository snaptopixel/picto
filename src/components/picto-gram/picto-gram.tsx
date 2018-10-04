import { Component, Prop, State, Watch } from '@stencil/core'
import { IComponent, IComponentProp, IUsage } from '@/model'
import { entries } from 'lodash-es'

@Component({
  tag: 'picto-gram',
  styleUrl: 'picto-gram.styl',
  shadow: true
})
export class Guide {
  @Prop() component!: IComponent
  @Prop() usage: IUsage
  @State() componentProps: {[prop: string]: any} = {}

  @Watch('usage')
  setProps (usage: IUsage) {
    this.componentProps = { ...usage.props }
    this.rawProps = entries(usage.props).reduce((a, [p, v]) => {
      a[p] = JSON.stringify(v, null, 2)
      return a
    }, {} as {[prop: string]: any})
  }

  componentDidLoad () {
    this.setProps(this.usage)
  }

  private rawProps: {[prop: string]: any} = {}

  controlFactories = {
    string: this.createInput.bind(this, 'text'),
    boolean: this.createCheckbox.bind(this),
    number: this.createInput.bind(this, 'number')
  } as any

  createInput (type: string, prop: IComponentProp) {
    return (
      <label>
        <div>{prop.attr} <code>{prop.type}</code></div>
        <input type={type}
          value={this.componentProps[prop.name]}
          onInput={
            e => {
              this.componentProps = {
                ...this.componentProps,
                [prop.name]: (e.currentTarget as HTMLInputElement).value
              }
            }
          }
        ></input>
      </label>
    )
  }

  createCheckbox (prop: IComponentProp) {
    return (
      <label>
        <input type='checkbox'
          checked={this.componentProps[prop.name]}
          onChange={
            e => {
              this.componentProps = {
                ...this.componentProps,
                [prop.name]: (e.target as HTMLInputElement).checked
              }
            }
          }
        ></input>&nbsp;
        {prop.attr} <code>{prop.type}</code>
      </label>
    )
  }

  createJSON (prop: IComponentProp) {
    return <label>
      <div>{prop.attr} <code>{prop.type}</code></div>
      <textarea
        value={this.rawProps[prop.name]}
        onInput={
          e => {
            let data = (e.target as HTMLInputElement).value
            this.rawProps[prop.name] = data
            try {
              data = new Function(`return ${data}`)()
            } catch (err) {
              // noop
            }
            this.componentProps = {
              ...this.componentProps,
              [prop.name]: data
            }
          }
        }
      ></textarea>
    </label>
  }

  render () {
    const controls = this.component.props.map(p => {
      if (p.type && this.controlFactories[p.type]) {
        return this.controlFactories[p.type](p)
      } else {
        return this.createJSON(p)
      }
    })
    const preview = <this.component.tag {...this.componentProps} innerHTML={this.usage.innerHTML}></this.component.tag>
    return [
      <section>
        <h5>Component props</h5>
        {controls}
      </section>,
      <section>
        <h5>Component preview</h5>
        {preview}
      </section>
    ]
  }
}
