/*! Built with http://stenciljs.com */
const { h } = window.pictograph;

import { a as entries, b as frontMatter, c as frontMatter$1, d as test_1 } from './chunk-61daf39b.js';

class Nav {
    setUsages(val) {
        this.usages = this.components.reduce((a, c) => {
            const keys = Object.keys(c.usage);
            if (keys.length) {
                a[c.tag] = keys.reduce((u, k) => {
                    u[k] = frontMatter(c.usage[k]);
                    return u;
                }, {});
            }
            return a;
        }, {});
    }
    get visibleComponents() {
        if (!this.usages)
            return [];
        return this.components.filter(c => c.tag in this.usages);
    }
    setUsageData(c) {
        console.log('aye', this.usages);
        this.selectedUsages = entries(this.usages[c.tag]).map(([key, u]) => u);
        this.selectedUsage = this.selectedUsages[0];
    }
    emitUsage() {
        this.componentSelected.emit({
            component: this.selectedComponent,
            usage: this.selectedUsage
        });
    }
    render() {
        return h("ul", null, this.visibleComponents.map(c => {
            return h("li", null,
                h("a", { href: '', onClick: e => {
                        e.preventDefault();
                        this.selectedComponent = c;
                    } }, c.tag),
                this.selectedUsages && this.selectedComponent === c &&
                    h("ul", null, this.selectedUsages.map(u => h("li", null,
                        "\u00A0\u00A0",
                        h("a", { href: '', onClick: e => {
                                e.preventDefault();
                                this.selectedUsage = u;
                            } }, u.attributes.title)))));
        }));
    }
    static get is() { return "picto-nav"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "components": {
            "type": "Any",
            "attr": "components",
            "watchCallbacks": ["setUsages"]
        },
        "selectedComponent": {
            "state": true,
            "watchCallbacks": ["setUsageData"]
        },
        "selectedUsage": {
            "state": true,
            "watchCallbacks": ["emitUsage"]
        },
        "selectedUsages": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "componentSelected",
            "method": "componentSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ":host {\n  display: inline-block;\n  position: relative;\n  font-family: var(--picto-font-family);\n  font-size: calc(var(--picto-font-size) * 1);\n  line-height: calc(var(--picto-line-height) * 2);\n  color: #616161;\n}\n:host :host-context(.grid-visible) {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(90%, transparent), to(rgba(255,0,0,0.4)));\n  background: linear-gradient(transparent 90%, rgba(255,0,0,0.4));\n  background-size: 100% calc(var(--picto-line-height) * 1);\n  background-attachment: fixed;\n}\n:host * {\n  margin: 0;\n  padding: 0;\n  line-height: calc(var(--picto-line-height) * 1);\n  margin-bottom: calc(var(--picto-line-height) * 1);\n}\n.grid-visible :host * {\n  background: rgba(128,0,128,0.1);\n}\n:host *,\n:host *::before,\n:host *::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: inherit;\n}\n:host ul {\n  list-style: none;\n}\n:host input,\n:host textarea {\n  display: block;\n}\n:host input[type=\"checkbox\"],\n:host input[type=\"radio\"] {\n  display: inline-block;\n  margin-bottom: 0;\n}\n:host table {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n:host td,\n:host th {\n  line-height: calc(var(--picto-line-height) * 2);\n  padding-left: calc(var(--picto-line-height) * 2);\n  padding-right: calc(var(--picto-line-height) * 2);\n  text-align: left;\n  border: 1px solid #f00;\n}\n:host hr {\n  margin-top: -2px;\n  margin-bottom: calc(var(--picto-line-height) * 2);\n}\n:host h1 {\n  font-size: calc(var(--picto-font-size) * 2.4);\n  line-height: calc(var(--picto-line-height) * 3);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host h2 {\n  font-weight: bold;\n  font-size: calc(var(--picto-font-size) * 2);\n  line-height: calc(var(--picto-line-height) * 3);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host h3 {\n  font-weight: bold;\n  font-size: calc(var(--picto-font-size) * 1.6);\n  line-height: calc(var(--picto-line-height) * 2);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host h4 {\n  font-weight: bold;\n  font-size: calc(var(--picto-font-size) * 1.2);\n  line-height: calc(var(--picto-line-height) * 2);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host h5 {\n  font-weight: bold;\n  font-size: calc(var(--picto-font-size) * 1);\n  line-height: calc(var(--picto-line-height) * 2);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host p {\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n  line-height: calc(var(--picto-line-height) * 2);\n}"; }
}

export { Nav as PictoNav };
