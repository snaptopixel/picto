/*! Built with http://stenciljs.com */
const { h } = window.pictograph;

import { a as entries, b as frontMatter, c as frontMatter$1, d as test_1, e as commonjsGlobal, f as commonjsRequire, g as unwrapExports, h as createCommonjsModule } from './chunk-61daf39b.js';

class Guide {
    constructor() {
        this.componentProps = {};
        this.rawProps = {};
        this.controlFactories = {
            string: this.createInput.bind(this, 'text'),
            boolean: this.createCheckbox.bind(this),
            number: this.createInput.bind(this, 'number')
        };
    }
    setProps(usage) {
        this.componentProps = Object.assign({}, usage.props);
        this.rawProps = entries(usage.props).reduce((a, [p, v]) => {
            a[p] = JSON.stringify(v, null, 2);
            return a;
        }, {});
    }
    componentDidLoad() {
        this.setProps(this.usage);
    }
    createInput(type, prop) {
        return (h("label", null,
            h("div", null,
                prop.attr,
                " ",
                h("code", null, prop.type)),
            h("input", { type: type, value: this.componentProps[prop.name], onInput: e => {
                    this.componentProps = Object.assign({}, this.componentProps, { [prop.name]: e.currentTarget.value });
                } })));
    }
    createCheckbox(prop) {
        return (h("label", null,
            h("input", { type: 'checkbox', checked: this.componentProps[prop.name], onChange: e => {
                    this.componentProps = Object.assign({}, this.componentProps, { [prop.name]: e.target.checked });
                } }),
            "\u00A0",
            prop.attr,
            " ",
            h("code", null, prop.type)));
    }
    createJSON(prop) {
        return h("label", null,
            h("div", null,
                prop.attr,
                " ",
                h("code", null, prop.type)),
            h("textarea", { value: this.rawProps[prop.name], onInput: e => {
                    let data = e.target.value;
                    this.rawProps[prop.name] = data;
                    try {
                        data = new Function(`return ${data}`)();
                    }
                    catch (err) {
                        // noop
                    }
                    this.componentProps = Object.assign({}, this.componentProps, { [prop.name]: data });
                } }));
    }
    render() {
        const controls = this.component.props.map(p => {
            if (p.type && this.controlFactories[p.type]) {
                return this.controlFactories[p.type](p);
            }
            else {
                return this.createJSON(p);
            }
        });
        const preview = h(this.component.tag, Object.assign({}, this.componentProps, { innerHTML: this.usage.innerHTML }));
        return [
            h("section", null,
                h("h5", null, "Component props"),
                controls),
            h("section", null,
                h("h5", null, "Component preview"),
                preview)
        ];
    }
    static get is() { return "picto-gram"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "component": {
            "type": "Any",
            "attr": "component"
        },
        "componentProps": {
            "state": true
        },
        "usage": {
            "type": "Any",
            "attr": "usage",
            "watchCallbacks": ["setProps"]
        }
    }; }
    static get style() { return ":host {\n  display: block;\n  position: relative;\n  font-family: var(--picto-font-family);\n  font-size: calc(var(--picto-font-size) * 1);\n  line-height: calc(var(--picto-line-height) * 2);\n  color: #616161;\n}\n:host :host-context(.grid-visible) {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(90%, transparent), to(rgba(255,0,0,0.4)));\n  background: linear-gradient(transparent 90%, rgba(255,0,0,0.4));\n  background-size: 100% calc(var(--picto-line-height) * 1);\n  background-attachment: fixed;\n}\n:host * {\n  margin: 0;\n  padding: 0;\n  line-height: calc(var(--picto-line-height) * 1);\n  margin-bottom: calc(var(--picto-line-height) * 1);\n}\n.grid-visible :host * {\n  background: rgba(128,0,128,0.1);\n}\n:host *,\n:host *::before,\n:host *::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: inherit;\n}\n:host ul {\n  list-style: none;\n}\n:host input,\n:host textarea {\n  display: block;\n}\n:host input[type=\"checkbox\"],\n:host input[type=\"radio\"] {\n  display: inline-block;\n  margin-bottom: 0;\n}\n:host table {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n:host td,\n:host th {\n  line-height: calc(var(--picto-line-height) * 2);\n  padding-left: calc(var(--picto-line-height) * 2);\n  padding-right: calc(var(--picto-line-height) * 2);\n  text-align: left;\n  border: 1px solid #f00;\n}\n:host hr {\n  margin-top: -2px;\n  margin-bottom: calc(var(--picto-line-height) * 2);\n}\n:host h1 {\n  font-size: calc(var(--picto-font-size) * 2.4);\n  line-height: calc(var(--picto-line-height) * 3);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host h2 {\n  font-weight: bold;\n  font-size: calc(var(--picto-font-size) * 2);\n  line-height: calc(var(--picto-line-height) * 3);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host h3 {\n  font-weight: bold;\n  font-size: calc(var(--picto-font-size) * 1.6);\n  line-height: calc(var(--picto-line-height) * 2);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host h4 {\n  font-weight: bold;\n  font-size: calc(var(--picto-font-size) * 1.2);\n  line-height: calc(var(--picto-line-height) * 2);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host h5 {\n  font-weight: bold;\n  font-size: calc(var(--picto-font-size) * 1);\n  line-height: calc(var(--picto-line-height) * 2);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host p {\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n  line-height: calc(var(--picto-line-height) * 2);\n}\n:host label {\n  line-height: calc(var(--picto-line-height) * 2);\n  display: block;\n  font-weight: bold;\n  font-size: calc(var(--picto-font-size) * 1.2);\n}\n:host label code {\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: normal;\n  display: inline-block;\n  font-size: calc(var(--picto-font-size) * 0.8);\n  vertical-align: middle;\n  margin: 0;\n  padding-left: calc(var(--picto-line-height) * 0.2);\n  padding-right: calc(var(--picto-line-height) * 0.2);\n  background: rgba(0,0,0,0.1);\n  border-radius: 3px;\n}\n:host input,\n:host textarea {\n  font-size: calc(var(--picto-font-size) * 0.8);\n  font-family: 'Courier New', Courier, monospace;\n  width: 100%;\n  border: none;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 0 0 1px inset rgba(0,0,0,0.2);\n  box-shadow: 0 0 0 1px inset rgba(0,0,0,0.2);\n  background-image: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.03) 10px);\n}\n:host input {\n  height: calc(var(--picto-line-height) * 2);\n}\n:host textarea {\n  resize: vertical;\n  line-height: calc(var(--picto-line-height) * 1);\n  height: calc(var(--picto-line-height) * 10);\n}\n:host section h5 {\n  margin-left: calc(var(--picto-line-height) * -6);\n  margin-right: calc(var(--picto-line-height) * -6);\n  padding-left: calc(var(--picto-line-height) * 6);\n  background: rgba(0,0,0,0.05);\n  -webkit-box-shadow: 0 -1px 0 inset rgba(0,0,0,0.15);\n  box-shadow: 0 -1px 0 inset rgba(0,0,0,0.15);\n  line-height: calc(var(--picto-line-height) * 3);\n}\n:host section:last-child {\n  margin-top: calc(var(--picto-line-height) * 2);\n}"; }
}

class Book {
    constructor() {
        this.manifestUrl = 'components.json';
        this.guidesUrl = '/guides';
        this.components = [];
    }
    setUsageData(c) {
        this.selectedUsages = entries(this.usages[c.tag]).map(([key, u]) => u);
        this.selectedUsage = this.selectedUsages[0];
    }
    async componentWillLoad() {
        const { components } = await fetch(this.manifestUrl).then(res => res.json());
        this.usages = components.reduce((a, c) => {
            const keys = Object.keys(c.usage);
            if (keys.length) {
                a[c.tag] = keys.reduce((u, k) => {
                    u[k] = frontMatter(c.usage[k]);
                    return u;
                }, {});
            }
            return a;
        }, {});
        this.components = components.filter(c => c.tag in this.usages);
    }
    render() {
        return [
            h("menu", null,
                h("h4", null, "Components"),
                h("ul", { class: 'menu-list' }, this.components.map(c => {
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
                }))),
            h("main", null,
                !this.selectedUsage && h("picto-md", { source: this.el.textContent.replace(/^\s*/gm, '') }),
                this.selectedUsage && h("picto-md", { source: this.selectedUsage.body }),
                this.selectedComponent && h("picto-gram", { component: this.selectedComponent, usage: this.selectedUsage.attributes }))
        ];
    }
    static get is() { return "picto-graph"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "components": {
            "state": true
        },
        "el": {
            "elementRef": true
        },
        "guidesUrl": {
            "type": String,
            "attr": "guides-url"
        },
        "manifestUrl": {
            "type": String,
            "attr": "manifest-url"
        },
        "selectedComponent": {
            "state": true,
            "watchCallbacks": ["setUsageData"]
        },
        "selectedUsage": {
            "state": true
        },
        "selectedUsages": {
            "state": true
        }
    }; }
    static get style() { return ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  font-family: var(--picto-font-family);\n  font-size: calc(var(--picto-font-size) * 1);\n  line-height: calc(var(--picto-line-height) * 2);\n  color: #616161;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n:host :host-context(.grid-visible) {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(90%, transparent), to(rgba(255,0,0,0.4)));\n  background: linear-gradient(transparent 90%, rgba(255,0,0,0.4));\n  background-size: 100% calc(var(--picto-line-height) * 1);\n  background-attachment: fixed;\n}\n:host * {\n  margin: 0;\n  padding: 0;\n  line-height: calc(var(--picto-line-height) * 1);\n  margin-bottom: calc(var(--picto-line-height) * 1);\n}\n.grid-visible :host * {\n  background: rgba(128,0,128,0.1);\n}\n:host *,\n:host *::before,\n:host *::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: inherit;\n}\n:host ul {\n  list-style: none;\n}\n:host input,\n:host textarea {\n  display: block;\n}\n:host input[type=\"checkbox\"],\n:host input[type=\"radio\"] {\n  display: inline-block;\n  margin-bottom: 0;\n}\n:host table {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n:host td,\n:host th {\n  line-height: calc(var(--picto-line-height) * 2);\n  padding-left: calc(var(--picto-line-height) * 2);\n  padding-right: calc(var(--picto-line-height) * 2);\n  text-align: left;\n  border: 1px solid #f00;\n}\n:host hr {\n  margin-top: -2px;\n  margin-bottom: calc(var(--picto-line-height) * 2);\n}\n:host h1 {\n  font-size: calc(var(--picto-font-size) * 2.4);\n  line-height: calc(var(--picto-line-height) * 3);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host h2 {\n  font-weight: bold;\n  font-size: calc(var(--picto-font-size) * 2);\n  line-height: calc(var(--picto-line-height) * 3);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host h3 {\n  font-weight: bold;\n  font-size: calc(var(--picto-font-size) * 1.6);\n  line-height: calc(var(--picto-line-height) * 2);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host h4 {\n  font-weight: bold;\n  font-size: calc(var(--picto-font-size) * 1.2);\n  line-height: calc(var(--picto-line-height) * 2);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host h5 {\n  font-weight: bold;\n  font-size: calc(var(--picto-font-size) * 1);\n  line-height: calc(var(--picto-line-height) * 2);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host p {\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n  line-height: calc(var(--picto-line-height) * 2);\n}\n:host > menu {\n  padding: calc(var(--picto-line-height) * 3) calc(var(--picto-line-height) * 2);\n  height: 100vh;\n  background: rgba(0,0,0,0.05);\n  min-width: 260px;\n}\n:host > main {\n  padding: calc(var(--picto-line-height) * 3) calc(var(--picto-line-height) * 6);\n  height: 100vh;\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  overflow: scroll;\n}"; }
}

var renderer = createCommonjsModule(function (module, exports) {
/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/KostyaTretyak/marked-ts
 */
Object.defineProperty(exports, "__esModule", { value: true });

var Renderer = /** @class */ (function () {
    function Renderer(options) {
        this.options = options || marked.Marked.options;
    }
    Renderer.prototype.code = function (code, lang, escaped) {
        if (this.options.highlight) {
            var out = this.options.highlight(code, lang);
            if (out != null && out !== code) {
                escaped = true;
                code = out;
            }
        }
        if (!lang) {
            return '\n<pre><code>' + (escaped ? code : this.options.escape(code, true)) + '\n</code></pre>\n';
        }
        return '\n<pre><code class="' + this.options.langPrefix + this.options.escape(lang, true) + '">'
            + (escaped ? code : this.options.escape(code, true))
            + '\n</code></pre>\n';
    };
    Renderer.prototype.blockquote = function (quote) {
        return '<blockquote>\n' + quote + '</blockquote>\n';
    };
    Renderer.prototype.html = function (html) {
        return html;
    };
    Renderer.prototype.heading = function (text, level, raw) {
        var id = this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-');
        return "<h" + level + " id=\"" + id + "\">" + text + "</h" + level + ">\n";
    };
    Renderer.prototype.hr = function () {
        return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    };
    Renderer.prototype.list = function (body, ordered) {
        var type = ordered ? 'ol' : 'ul';
        return "\n<" + type + ">\n" + body + "</" + type + ">\n";
    };
    Renderer.prototype.listitem = function (text) {
        return '<li>' + text + '</li>\n';
    };
    Renderer.prototype.paragraph = function (text) {
        return '<p>' + text + '</p>\n';
    };
    Renderer.prototype.table = function (header, body) {
        return "\n<table>\n<thead>\n" + header + "</thead>\n<tbody>\n" + body + "</tbody>\n</table>\n";
    };
    Renderer.prototype.tablerow = function (content) {
        return '<tr>\n' + content + '</tr>\n';
    };
    Renderer.prototype.tablecell = function (content, flags) {
        var type = flags.header ? 'th' : 'td';
        var tag = flags.align
            ? '<' + type + ' style="text-align:' + flags.align + '">'
            : '<' + type + '>';
        return tag + content + '</' + type + '>\n';
    };
    //*** Inline level renderer methods. ***
    Renderer.prototype.strong = function (text) {
        return '<strong>' + text + '</strong>';
    };
    Renderer.prototype.em = function (text) {
        return '<em>' + text + '</em>';
    };
    Renderer.prototype.codespan = function (text) {
        return '<code>' + text + '</code>';
    };
    Renderer.prototype.br = function () {
        return this.options.xhtml ? '<br/>' : '<br>';
    };
    Renderer.prototype.del = function (text) {
        return '<del>' + text + '</del>';
    };
    Renderer.prototype.link = function (href, title, text) {
        if (this.options.sanitize) {
            var prot = void 0;
            try {
                prot = decodeURIComponent(this.options.unescape(href))
                    .replace(/[^\w:]/g, '')
                    .toLowerCase();
            }
            catch (e) {
                return text;
            }
            if (prot.indexOf('javascript:') === 0
                || prot.indexOf('vbscript:') === 0
                || prot.indexOf('data:') === 0) {
                return text;
            }
        }
        var out = '<a href="' + href + '"';
        if (title) {
            out += ' title="' + title + '"';
        }
        out += '>' + text + '</a>';
        return out;
    };
    Renderer.prototype.image = function (href, title, text) {
        var out = '<img src="' + href + '" alt="' + text + '"';
        if (title) {
            out += ' title="' + title + '"';
        }
        out += this.options.xhtml ? '/>' : '>';
        return out;
    };
    Renderer.prototype.text = function (text) {
        return text;
    };
    return Renderer;
}());
exports.Renderer = Renderer;
});

unwrapExports(renderer);
var renderer_1 = renderer.Renderer;

var extendRegexp = createCommonjsModule(function (module, exports) {
/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/KostyaTretyak/marked-ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ExtendRegexp = /** @class */ (function () {
    function ExtendRegexp(regex, flags) {
        if (flags === void 0) { flags = ''; }
        this.source = regex.source;
        this.flags = flags;
    }
    /**
     * Extend regular expression.
     *
     * @param groupName Regular expression for search a group name.
     * @param groupRegexp Regular expression of named group.
     */
    ExtendRegexp.prototype.setGroup = function (groupName, groupRegexp) {
        var newRegexp = typeof groupRegexp == 'string' ? groupRegexp : groupRegexp.source;
        newRegexp = newRegexp.replace(/(^|[^\[])\^/g, '$1');
        // Extend regexp.
        this.source = this.source.replace(groupName, newRegexp);
        return this;
    };
    /**
     * Returns a result of extending a regular expression.
     */
    ExtendRegexp.prototype.getRegexp = function () {
        return new RegExp(this.source, this.flags);
    };
    return ExtendRegexp;
}());
exports.ExtendRegexp = ExtendRegexp;
});

unwrapExports(extendRegexp);
var extendRegexp_1 = extendRegexp.ExtendRegexp;

var inlineLexer = createCommonjsModule(function (module, exports) {
/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/KostyaTretyak/marked-ts
 */
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });



/**
 * Inline Lexer & Compiler.
 */
var InlineLexer = /** @class */ (function () {
    function InlineLexer(staticThis, links, options, renderer$$1) {
        if (options === void 0) { options = marked.Marked.options; }
        this.staticThis = staticThis;
        this.links = links;
        this.options = options;
        this.renderer = renderer$$1 || this.options.renderer || new renderer.Renderer(this.options);
        if (!this.links)
            throw new Error("InlineLexer requires 'links' parameter.");
        this.setRules();
    }
    /**
     * Static Lexing/Compiling Method.
     */
    InlineLexer.output = function (src, links, options) {
        var inlineLexer = new this(this, links, options);
        return inlineLexer.output(src);
    };
    InlineLexer.getRulesBase = function () {
        if (this.rulesBase)
            return this.rulesBase;
        /**
         * Inline-Level Grammar.
         */
        var base = {
            escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
            autolink: /^<([^ <>]+(@|:\/)[^ <>]+)>/,
            tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^<'">])*?>/,
            link: /^!?\[(inside)\]\(href\)/,
            reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
            nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
            strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
            em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
            code: /^(`+)([\s\S]*?[^`])\1(?!`)/,
            br: /^ {2,}\n(?!\s*$)/,
            text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/,
            _inside: /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,
            _href: /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,
        };
        base.link = new extendRegexp.ExtendRegexp(base.link)
            .setGroup('inside', base._inside)
            .setGroup('href', base._href)
            .getRegexp();
        base.reflink = new extendRegexp.ExtendRegexp(base.reflink)
            .setGroup('inside', base._inside)
            .getRegexp();
        return this.rulesBase = base;
    };
    InlineLexer.getRulesPedantic = function () {
        if (this.rulesPedantic)
            return this.rulesPedantic;
        return this.rulesPedantic = __assign({}, this.getRulesBase(), {
            strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
        });
    };
    InlineLexer.getRulesGfm = function () {
        if (this.rulesGfm)
            return this.rulesGfm;
        var base = this.getRulesBase();
        var escape = new extendRegexp.ExtendRegexp(base.escape)
            .setGroup('])', '~|])')
            .getRegexp();
        var text = new extendRegexp.ExtendRegexp(base.text)
            .setGroup(']|', '~]|')
            .setGroup('|', '|https?://|')
            .getRegexp();
        return this.rulesGfm = __assign({}, base, {
            escape: escape,
            url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
            del: /^~~(?=\S)([\s\S]*?\S)~~/,
            text: text
        });
    };
    InlineLexer.getRulesBreaks = function () {
        if (this.rulesBreaks)
            return this.rulesBreaks;
        var inline = this.getRulesGfm();
        var gfm = this.getRulesGfm();
        return this.rulesBreaks = __assign({}, gfm, {
            br: new extendRegexp.ExtendRegexp(inline.br).setGroup('{2,}', '*').getRegexp(),
            text: new extendRegexp.ExtendRegexp(gfm.text).setGroup('{2,}', '*').getRegexp()
        });
    };
    InlineLexer.prototype.setRules = function () {
        if (this.options.gfm) {
            if (this.options.breaks) {
                this.rules = this.staticThis.getRulesBreaks();
            }
            else {
                this.rules = this.staticThis.getRulesGfm();
            }
        }
        else if (this.options.pedantic) {
            this.rules = this.staticThis.getRulesPedantic();
        }
        else {
            this.rules = this.staticThis.getRulesBase();
        }
        this.hasRulesGfm = this.rules.url !== undefined;
    };
    /**
     * Lexing/Compiling.
     */
    InlineLexer.prototype.output = function (nextPart) {
        nextPart = nextPart;
        var execArr;
        var out = '';
        while (nextPart) {
            // escape
            if (execArr = this.rules.escape.exec(nextPart)) {
                nextPart = nextPart.substring(execArr[0].length);
                out += execArr[1];
                continue;
            }
            // autolink
            if (execArr = this.rules.autolink.exec(nextPart)) {
                var text = void 0, href = void 0;
                nextPart = nextPart.substring(execArr[0].length);
                if (execArr[2] === '@') {
                    text = this.options.escape(execArr[1].charAt(6) === ':'
                        ? this.mangle(execArr[1].substring(7))
                        : this.mangle(execArr[1]));
                    href = this.mangle('mailto:') + text;
                }
                else {
                    text = this.options.escape(execArr[1]);
                    href = text;
                }
                out += this.renderer.link(href, null, text);
                continue;
            }
            // url (gfm)
            if (!this.inLink
                && this.hasRulesGfm
                && (execArr = this.rules.url.exec(nextPart))) {
                var text = void 0, href = void 0;
                nextPart = nextPart.substring(execArr[0].length);
                text = this.options.escape(execArr[1]);
                href = text;
                out += this.renderer.link(href, null, text);
                continue;
            }
            // tag
            if (execArr = this.rules.tag.exec(nextPart)) {
                if (!this.inLink && /^<a /i.test(execArr[0])) {
                    this.inLink = true;
                }
                else if (this.inLink && /^<\/a>/i.test(execArr[0])) {
                    this.inLink = false;
                }
                nextPart = nextPart.substring(execArr[0].length);
                out += this.options.sanitize
                    ? this.options.sanitizer
                        ? this.options.sanitizer(execArr[0])
                        : this.options.escape(execArr[0])
                    : execArr[0];
                continue;
            }
            // link
            if (execArr = this.rules.link.exec(nextPart)) {
                nextPart = nextPart.substring(execArr[0].length);
                this.inLink = true;
                out += this.outputLink(execArr, {
                    href: execArr[2],
                    title: execArr[3]
                });
                this.inLink = false;
                continue;
            }
            // reflink, nolink
            if ((execArr = this.rules.reflink.exec(nextPart))
                || (execArr = this.rules.nolink.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                var keyLink = (execArr[2] || execArr[1]).replace(/\s+/g, ' ');
                var link = this.links[keyLink.toLowerCase()];
                if (!link || !link.href) {
                    out += execArr[0].charAt(0);
                    nextPart = execArr[0].substring(1) + nextPart;
                    continue;
                }
                this.inLink = true;
                out += this.outputLink(execArr, link);
                this.inLink = false;
                continue;
            }
            // strong
            if (execArr = this.rules.strong.exec(nextPart)) {
                nextPart = nextPart.substring(execArr[0].length);
                out += this.renderer.strong(this.output(execArr[2] || execArr[1]));
                continue;
            }
            // em
            if (execArr = this.rules.em.exec(nextPart)) {
                nextPart = nextPart.substring(execArr[0].length);
                out += this.renderer.em(this.output(execArr[2] || execArr[1]));
                continue;
            }
            // code
            if (execArr = this.rules.code.exec(nextPart)) {
                nextPart = nextPart.substring(execArr[0].length);
                out += this.renderer.codespan(this.options.escape(execArr[2].trim(), true));
                continue;
            }
            // br
            if (execArr = this.rules.br.exec(nextPart)) {
                nextPart = nextPart.substring(execArr[0].length);
                out += this.renderer.br();
                continue;
            }
            // del (gfm)
            if (this.hasRulesGfm
                && (execArr = this.rules.del.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                out += this.renderer.del(this.output(execArr[1]));
                continue;
            }
            // text
            if (execArr = this.rules.text.exec(nextPart)) {
                nextPart = nextPart.substring(execArr[0].length);
                out += this.renderer.text(this.options.escape(this.smartypants(execArr[0])));
                continue;
            }
            if (nextPart)
                throw new Error('Infinite loop on byte: ' + nextPart.charCodeAt(0));
        }
        return out;
    };
    /**
     * Compile Link.
     */
    InlineLexer.prototype.outputLink = function (execArr, link) {
        var href = this.options.escape(link.href);
        var title = link.title ? this.options.escape(link.title) : null;
        return execArr[0].charAt(0) !== '!'
            ? this.renderer.link(href, title, this.output(execArr[1]))
            : this.renderer.image(href, title, this.options.escape(execArr[1]));
    };
    /**
     * Smartypants Transformations.
     */
    InlineLexer.prototype.smartypants = function (text) {
        if (!this.options.smartypants)
            return text;
        return text
            .replace(/---/g, '\u2014')
            .replace(/--/g, '\u2013')
            .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
            .replace(/'/g, '\u2019')
            .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
            .replace(/"/g, '\u201d')
            .replace(/\.{3}/g, '\u2026');
    };
    /**
     * Mangle Links.
     */
    InlineLexer.prototype.mangle = function (text) {
        if (!this.options.mangle)
            return text;
        var out = '', length = text.length;
        for (var i = 0; i < length; i++) {
            var str = void 0;
            if (Math.random() > 0.5) {
                str = 'x' + text.charCodeAt(i).toString(16);
            }
            out += '&#' + str + ';';
        }
        return out;
    };
    return InlineLexer;
}());
exports.InlineLexer = InlineLexer;
});

unwrapExports(inlineLexer);
var inlineLexer_1 = inlineLexer.InlineLexer;

var helpers = createCommonjsModule(function (module, exports) {
/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/KostyaTretyak/marked-ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
function merge(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < args.length; i++) {
        var target = args[i];
        for (var key in target) {
            obj[key] = target[key];
        }
    }
    return obj;
}
exports.merge = merge;
var escapeTest = /[&<>"']/;
var escapeReplace = /[&<>"']/g;
var replacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};
var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
function escape(html, encode) {
    if (encode) {
        if (escapeTest.test(html)) {
            return html.replace(escapeReplace, function (ch) { return replacements[ch]; });
        }
    }
    else {
        if (escapeTestNoEncode.test(html)) {
            return html.replace(escapeReplaceNoEncode, function (ch) { return replacements[ch]; });
        }
    }
    return html;
}
exports.escape = escape;
function unescape(html) {
    // Explicitly match decimal, hex, and named HTML entities 
    return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function (_, n) {
        n = n.toLowerCase();
        if (n === 'colon')
            return ':';
        if (n.charAt(0) === '#') {
            return n.charAt(1) === 'x'
                ? String.fromCharCode(parseInt(n.substring(2), 16))
                : String.fromCharCode(+n.substring(1));
        }
        return '';
    });
}
exports.unescape = unescape;
});

unwrapExports(helpers);
var helpers_1 = helpers.merge;
var helpers_2 = helpers.escape;
var helpers_3 = helpers.unescape;

var interfaces = createCommonjsModule(function (module, exports) {
/**
 * @license
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/KostyaTretyak/marked-ts
 */
Object.defineProperty(exports, "__esModule", { value: true });

var TokenType;
(function (TokenType) {
    TokenType[TokenType["space"] = 1] = "space";
    TokenType[TokenType["text"] = 2] = "text";
    TokenType[TokenType["paragraph"] = 3] = "paragraph";
    TokenType[TokenType["heading"] = 4] = "heading";
    TokenType[TokenType["listStart"] = 5] = "listStart";
    TokenType[TokenType["listEnd"] = 6] = "listEnd";
    TokenType[TokenType["looseItemStart"] = 7] = "looseItemStart";
    TokenType[TokenType["looseItemEnd"] = 8] = "looseItemEnd";
    TokenType[TokenType["listItemStart"] = 9] = "listItemStart";
    TokenType[TokenType["listItemEnd"] = 10] = "listItemEnd";
    TokenType[TokenType["blockquoteStart"] = 11] = "blockquoteStart";
    TokenType[TokenType["blockquoteEnd"] = 12] = "blockquoteEnd";
    TokenType[TokenType["code"] = 13] = "code";
    TokenType[TokenType["table"] = 14] = "table";
    TokenType[TokenType["html"] = 15] = "html";
    TokenType[TokenType["hr"] = 16] = "hr";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
var MarkedOptions = /** @class */ (function () {
    function MarkedOptions() {
        this.gfm = true;
        this.tables = true;
        this.breaks = false;
        this.pedantic = false;
        this.sanitize = false;
        this.mangle = true;
        this.smartLists = false;
        this.silent = false;
        this.langPrefix = 'lang-';
        this.smartypants = false;
        this.headerPrefix = '';
        /**
         * Self-close the tags for void elements (&lt;br/&gt;, &lt;img/&gt;, etc.)
         * with a "/" as required by XHTML.
         */
        this.xhtml = false;
        /**
         * The function that will be using to escape HTML entities.
         * By default using inner helper.
         */
        this.escape = helpers.escape;
        /**
         * The function that will be using to unescape HTML entities.
         * By default using inner helper.
         */
        this.unescape = helpers.unescape;
    }
    return MarkedOptions;
}());
exports.MarkedOptions = MarkedOptions;
});

unwrapExports(interfaces);
var interfaces_1 = interfaces.TokenType;
var interfaces_2 = interfaces.MarkedOptions;

var parser = createCommonjsModule(function (module, exports) {
/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/KostyaTretyak/marked-ts
 */
Object.defineProperty(exports, "__esModule", { value: true });




/**
 * Parsing & Compiling.
 */
var Parser = /** @class */ (function () {
    function Parser(options) {
        this.simpleRenderers = [];
        this.line = 0;
        this.tokens = [];
        this.token = null;
        this.options = options || marked.Marked.options;
        this.renderer = this.options.renderer || new renderer.Renderer(this.options);
    }
    Parser.parse = function (tokens, links, options) {
        var parser = new this(options);
        return parser.parse(links, tokens);
    };
    Parser.prototype.parse = function (links, tokens) {
        this.inlineLexer = new inlineLexer.InlineLexer(inlineLexer.InlineLexer, links, this.options, this.renderer);
        this.tokens = tokens.reverse();
        var out = '';
        while (this.next()) {
            out += this.tok();
        }
        return out;
    };
    Parser.prototype.debug = function (links, tokens) {
        this.inlineLexer = new inlineLexer.InlineLexer(inlineLexer.InlineLexer, links, this.options, this.renderer);
        this.tokens = tokens.reverse();
        var out = '';
        while (this.next()) {
            var outToken = this.tok();
            this.token.line = this.line += outToken.split('\n').length - 1;
            out += outToken;
        }
        return out;
    };
    Parser.prototype.next = function () {
        return this.token = this.tokens.pop();
    };
    Parser.prototype.getNextElement = function () {
        return this.tokens[this.tokens.length - 1];
    };
    Parser.prototype.parseText = function () {
        var body = this.token.text;
        var nextElement;
        while ((nextElement = this.getNextElement()) && nextElement.type == interfaces.TokenType.text) {
            body += '\n' + this.next().text;
        }
        return this.inlineLexer.output(body);
    };
    Parser.prototype.tok = function () {
        switch (this.token.type) {
            case interfaces.TokenType.space:
                {
                    return '';
                }
            case interfaces.TokenType.paragraph:
                {
                    return this.renderer.paragraph(this.inlineLexer.output(this.token.text));
                }
            case interfaces.TokenType.text:
                {
                    if (this.options.isNoP)
                        return this.parseText();
                    else
                        return this.renderer.paragraph(this.parseText());
                }
            case interfaces.TokenType.heading:
                {
                    return this.renderer.heading(this.inlineLexer.output(this.token.text), this.token.depth, this.token.text);
                }
            case interfaces.TokenType.listStart:
                {
                    var body = '', ordered = this.token.ordered;
                    while (this.next().type != interfaces.TokenType.listEnd) {
                        body += this.tok();
                    }
                    return this.renderer.list(body, ordered);
                }
            case interfaces.TokenType.listItemStart:
                {
                    var body = '';
                    while (this.next().type != interfaces.TokenType.listItemEnd) {
                        body += this.token.type == interfaces.TokenType.text
                            ? this.parseText()
                            : this.tok();
                    }
                    return this.renderer.listitem(body);
                }
            case interfaces.TokenType.looseItemStart:
                {
                    var body = '';
                    while (this.next().type != interfaces.TokenType.listItemEnd) {
                        body += this.tok();
                    }
                    return this.renderer.listitem(body);
                }
            case interfaces.TokenType.code:
                {
                    return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                }
            case interfaces.TokenType.table:
                {
                    var header = '', body = '', row = void 0, cell = void 0;
                    // header
                    cell = '';
                    for (var i = 0; i < this.token.header.length; i++) {
                        var flags = { header: true, align: this.token.align[i] };
                        var out = this.inlineLexer.output(this.token.header[i]);
                        cell += this.renderer.tablecell(out, flags);
                    }
                    header += this.renderer.tablerow(cell);
                    for (var i = 0; i < this.token.cells.length; i++) {
                        row = this.token.cells[i];
                        cell = '';
                        for (var j = 0; j < row.length; j++) {
                            cell += this.renderer.tablecell(this.inlineLexer.output(row[j]), { header: false, align: this.token.align[j] });
                        }
                        body += this.renderer.tablerow(cell);
                    }
                    return this.renderer.table(header, body);
                }
            case interfaces.TokenType.blockquoteStart:
                {
                    var body = '';
                    while (this.next().type != interfaces.TokenType.blockquoteEnd) {
                        body += this.tok();
                    }
                    return this.renderer.blockquote(body);
                }
            case interfaces.TokenType.hr:
                {
                    return this.renderer.hr();
                }
            case interfaces.TokenType.html:
                {
                    var html = !this.token.pre && !this.options.pedantic
                        ? this.inlineLexer.output(this.token.text)
                        : this.token.text;
                    return this.renderer.html(html);
                }
            default:
                {
                    if (this.simpleRenderers.length)
                        for (var i = 0; i < this.simpleRenderers.length; i++) {
                            if (this.token.type == ('simpleRule' + (i + 1))) {
                                return this.simpleRenderers[i].call(this.renderer, this.token.execArr);
                            }
                        }
                    var errMsg = "Token with \"" + this.token.type + "\" type was not found.";
                    if (this.options.silent) {
                        console.log(errMsg);
                    }
                    else {
                        throw new Error(errMsg);
                    }
                }
        }
    };
    return Parser;
}());
exports.Parser = Parser;
});

unwrapExports(parser);
var parser_1 = parser.Parser;

var marked = createCommonjsModule(function (module, exports) {
/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/KostyaTretyak/marked-ts
 */
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });




var Marked = /** @class */ (function () {
    function Marked() {
    }
    /**
     * Merges the default options with options that will be set.
     *
     * @param options Hash of options.
     */
    Marked.setOptions = function (options) {
        this.options = helpers.merge(this.options, options);
        return this;
    };
    /**
     * Setting simple block rule.
     */
    Marked.setBlockRule = function (regexp, renderer) {
        if (renderer === void 0) { renderer = function () { return ''; }; }
        blockLexer.BlockLexer.simpleRules.push(regexp);
        this.simpleRenderers.push(renderer);
        return this;
    };
    /**
     * Accepts Markdown text and returns text in HTML format.
     *
     * @param src String of markdown source to be compiled.
     * @param options Hash of options. They replace, but do not merge with the default options.
     * If you want the merging, you can to do this via `Marked.setOptions()`.
     */
    Marked.parse = function (src, options) {
        if (options === void 0) { options = this.options; }
        try {
            var _a = this.callBlockLexer(src, options), tokens = _a.tokens, links = _a.links;
            return this.callParser(tokens, links, options);
        }
        catch (e) {
            return this.callMe(e);
        }
    };
    /**
     * Accepts Markdown text and returns object with text in HTML format,
     * tokens and links from `BlockLexer.parser()`.
     *
     * @param src String of markdown source to be compiled.
     * @param options Hash of options. They replace, but do not merge with the default options.
     * If you want the merging, you can to do this via `Marked.setOptions()`.
     */
    Marked.debug = function (src, options) {
        if (options === void 0) { options = this.options; }
        var _a = this.callBlockLexer(src, options), tokens = _a.tokens, links = _a.links;
        var origin = tokens.slice();
        var parser$$1 = new parser.Parser(options);
        parser$$1.simpleRenderers = this.simpleRenderers;
        var result = parser$$1.debug(links, tokens);
        /**
         * Translates a token type into a readable form,
         * and moves `line` field to a first place in a token object.
         */
        origin = origin.map(function (token) {
            token.type = interfaces.TokenType[token.type] || token.type;
            var line = token.line;
            delete token.line;
            if (line)
                return __assign({ line: line }, token);
            else
                return token;
        });
        return { tokens: origin, links: links, result: result };
    };
    Marked.callBlockLexer = function (src, options) {
        if (src === void 0) { src = ''; }
        // Preprocessing.
        src = src
            .replace(/\r\n|\r/g, '\n')
            .replace(/\t/g, '    ')
            .replace(/\u00a0/g, ' ')
            .replace(/\u2424/g, '\n')
            .replace(/^ +$/gm, '');
        return blockLexer.BlockLexer.lex(src, options, true);
    };
    Marked.callParser = function (tokens, links, options) {
        if (this.simpleRenderers.length) {
            var parser$$1 = new parser.Parser(options);
            parser$$1.simpleRenderers = this.simpleRenderers;
            return parser$$1.parse(links, tokens);
        }
        else {
            return parser.Parser.parse(tokens, links, options);
        }
    };
    Marked.callMe = function (err) {
        err.message += '\nPlease report this to https://github.com/KostyaTretyak/marked-ts';
        if (this.options.silent) {
            return '<p>An error occured:</p><pre>' + this.options.escape(err.message + '', true) + '</pre>';
        }
        throw err;
    };
    Marked.options = new interfaces.MarkedOptions;
    Marked.simpleRenderers = [];
    return Marked;
}());
exports.Marked = Marked;
});

unwrapExports(marked);
var marked_1 = marked.Marked;

var blockLexer = createCommonjsModule(function (module, exports) {
/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/KostyaTretyak/marked-ts
 */
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });



var BlockLexer = /** @class */ (function () {
    function BlockLexer(staticThis, options) {
        this.staticThis = staticThis;
        this.links = {};
        this.tokens = [];
        this.options = options || marked.Marked.options;
        this.setRules();
    }
    /**
     * Accepts Markdown text and returns object with tokens and links.
     *
     * @param src String of markdown source to be compiled.
     * @param options Hash of options.
     */
    BlockLexer.lex = function (src, options, top, isBlockQuote) {
        var lexer = new this(this, options);
        return lexer.getTokens(src, top, isBlockQuote);
    };
    BlockLexer.getRulesBase = function () {
        if (this.rulesBase)
            return this.rulesBase;
        var base = {
            newline: /^\n+/,
            code: /^( {4}[^\n]+\n*)+/,
            hr: /^( *[-*_]){3,} *(?:\n+|$)/,
            heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
            lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
            blockquote: /^( *>[^\n]+(\n[^\n]+)*\n*)+/,
            list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
            html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
            paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
            text: /^[^\n]+/,
            bullet: /(?:[*+-]|\d+\.)/,
            item: /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/
        };
        base.item = new extendRegexp.ExtendRegexp(base.item, 'gm')
            .setGroup(/bull/g, base.bullet)
            .getRegexp();
        base.list = new extendRegexp.ExtendRegexp(base.list)
            .setGroup(/bull/g, base.bullet)
            .setGroup('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
            .setGroup('def', '\\n+(?=' + base.def.source + ')')
            .getRegexp();
        var tag = '(?!(?:'
            + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
            + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
            + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';
        base.html = new extendRegexp.ExtendRegexp(base.html)
            .setGroup('comment', /<!--[\s\S]*?-->/)
            .setGroup('closed', /<(tag)[\s\S]+?<\/\1>/)
            .setGroup('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
            .setGroup(/tag/g, tag)
            .getRegexp();
        base.paragraph = new extendRegexp.ExtendRegexp(base.paragraph)
            .setGroup('hr', base.hr)
            .setGroup('heading', base.heading)
            .setGroup('lheading', base.lheading)
            .setGroup('blockquote', base.blockquote)
            .setGroup('tag', '<' + tag)
            .setGroup('def', base.def)
            .getRegexp();
        return this.rulesBase = base;
    };
    BlockLexer.getRulesGfm = function () {
        if (this.rulesGfm)
            return this.rulesGfm;
        var base = this.getRulesBase();
        var gfm = __assign({}, base, {
            fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
            paragraph: /^/,
            heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
        });
        var group1 = gfm.fences.source.replace('\\1', '\\2');
        var group2 = base.list.source.replace('\\1', '\\3');
        gfm.paragraph = new extendRegexp.ExtendRegexp(base.paragraph)
            .setGroup('(?!', "(?!" + group1 + "|" + group2 + "|")
            .getRegexp();
        return this.rulesGfm = gfm;
    };
    BlockLexer.getRulesTable = function () {
        if (this.rulesTables)
            return this.rulesTables;
        return this.rulesTables = __assign({}, this.getRulesGfm(), {
            nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
            table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
        });
    };
    BlockLexer.prototype.setRules = function () {
        if (this.options.gfm) {
            if (this.options.tables) {
                this.rules = this.staticThis.getRulesTable();
            }
            else {
                this.rules = this.staticThis.getRulesGfm();
            }
        }
        else {
            this.rules = this.staticThis.getRulesBase();
        }
        this.hasRulesGfm = this.rules.fences !== undefined;
        this.hasRulesTables = this.rules.table !== undefined;
    };
    /**
     * Lexing.
     */
    BlockLexer.prototype.getTokens = function (src, top, isBlockQuote) {
        var nextPart = src;
        var execArr;
        mainLoop: while (nextPart) {
            // newline
            if (execArr = this.rules.newline.exec(nextPart)) {
                nextPart = nextPart.substring(execArr[0].length);
                if (execArr[0].length > 1) {
                    this.tokens.push({ type: interfaces.TokenType.space });
                }
            }
            // code
            if (execArr = this.rules.code.exec(nextPart)) {
                nextPart = nextPart.substring(execArr[0].length);
                var code = execArr[0].replace(/^ {4}/gm, '');
                this.tokens.push({
                    type: interfaces.TokenType.code,
                    text: !this.options.pedantic ? code.replace(/\n+$/, '') : code
                });
                continue;
            }
            // fences code (gfm)
            if (this.hasRulesGfm
                && (execArr = this.rules.fences.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                this.tokens.push({
                    type: interfaces.TokenType.code,
                    lang: execArr[2],
                    text: execArr[3] || ''
                });
                continue;
            }
            // heading
            if (execArr = this.rules.heading.exec(nextPart)) {
                nextPart = nextPart.substring(execArr[0].length);
                this.tokens.push({
                    type: interfaces.TokenType.heading,
                    depth: execArr[1].length,
                    text: execArr[2]
                });
                continue;
            }
            // table no leading pipe (gfm)
            if (top
                && this.hasRulesTables
                && (execArr = this.rules.nptable.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                var item = {
                    type: interfaces.TokenType.table,
                    header: execArr[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
                    align: execArr[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                    cells: []
                };
                for (var i = 0; i < item.align.length; i++) {
                    if (/^ *-+: *$/.test(item.align[i])) {
                        item.align[i] = 'right';
                    }
                    else if (/^ *:-+: *$/.test(item.align[i])) {
                        item.align[i] = 'center';
                    }
                    else if (/^ *:-+ *$/.test(item.align[i])) {
                        item.align[i] = 'left';
                    }
                    else {
                        item.align[i] = null;
                    }
                }
                var td = execArr[3].replace(/\n$/, '').split('\n');
                for (var i = 0; i < td.length; i++) {
                    item.cells[i] = td[i].split(/ *\| */);
                }
                this.tokens.push(item);
                continue;
            }
            // lheading
            if (execArr = this.rules.lheading.exec(nextPart)) {
                nextPart = nextPart.substring(execArr[0].length);
                this.tokens.push({
                    type: interfaces.TokenType.heading,
                    depth: execArr[2] === '=' ? 1 : 2,
                    text: execArr[1]
                });
                continue;
            }
            // hr
            if (execArr = this.rules.hr.exec(nextPart)) {
                nextPart = nextPart.substring(execArr[0].length);
                this.tokens.push({ type: interfaces.TokenType.hr });
                continue;
            }
            // blockquote
            if (execArr = this.rules.blockquote.exec(nextPart)) {
                nextPart = nextPart.substring(execArr[0].length);
                this.tokens.push({ type: interfaces.TokenType.blockquoteStart });
                var str = execArr[0].replace(/^ *> ?/gm, '');
                // Pass `top` to keep the current
                // "toplevel" state. This is exactly
                // how markdown.pl works.
                this.getTokens(str);
                this.tokens.push({ type: interfaces.TokenType.blockquoteEnd });
                continue;
            }
            // list
            if (execArr = this.rules.list.exec(nextPart)) {
                nextPart = nextPart.substring(execArr[0].length);
                var bull = execArr[2];
                this.tokens.push({ type: interfaces.TokenType.listStart, ordered: bull.length > 1 });
                // Get each top-level item.
                var str = execArr[0].match(this.rules.item);
                var length_1 = str.length;
                var next = false, space = void 0, blockBullet = void 0, loose = void 0;
                for (var i = 0; i < length_1; i++) {
                    var item = str[i];
                    // Remove the list item's bullet so it is seen as the next token.
                    space = item.length;
                    item = item.replace(/^ *([*+-]|\d+\.) +/, '');
                    // Outdent whatever the list item contains. Hacky.
                    if (item.indexOf('\n ') !== -1) {
                        space -= item.length;
                        item = !this.options.pedantic
                            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
                            : item.replace(/^ {1,4}/gm, '');
                    }
                    // Determine whether the next list item belongs here.
                    // Backpedal if it does not belong in this list.
                    if (this.options.smartLists && i !== length_1 - 1) {
                        blockBullet = this.staticThis.getRulesBase().bullet.exec(str[i + 1])[0];
                        if (bull !== blockBullet && !(bull.length > 1 && blockBullet.length > 1)) {
                            nextPart = str.slice(i + 1).join('\n') + nextPart;
                            i = length_1 - 1;
                        }
                    }
                    // Determine whether item is loose or not.
                    // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
                    // for discount behavior.
                    loose = next || /\n\n(?!\s*$)/.test(item);
                    if (i !== length_1 - 1) {
                        next = item.charAt(item.length - 1) === '\n';
                        if (!loose)
                            loose = next;
                    }
                    this.tokens.push({ type: loose ? interfaces.TokenType.looseItemStart : interfaces.TokenType.listItemStart });
                    // Recurse.
                    this.getTokens(item, false, isBlockQuote);
                    this.tokens.push({ type: interfaces.TokenType.listItemEnd });
                }
                this.tokens.push({ type: interfaces.TokenType.listEnd });
                continue;
            }
            // html
            if (execArr = this.rules.html.exec(nextPart)) {
                nextPart = nextPart.substring(execArr[0].length);
                var attr = execArr[1];
                var isPre = (attr === 'pre' || attr === 'script' || attr === 'style');
                this.tokens.push({
                    type: this.options.sanitize ? interfaces.TokenType.paragraph : interfaces.TokenType.html,
                    pre: !this.options.sanitizer && isPre,
                    text: execArr[0]
                });
                continue;
            }
            // def
            if (top && (execArr = this.rules.def.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                this.links[execArr[1].toLowerCase()] =
                    {
                        href: execArr[2],
                        title: execArr[3]
                    };
                continue;
            }
            // table (gfm)
            if (top
                && this.hasRulesTables
                && (execArr = this.rules.table.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                var item = {
                    type: interfaces.TokenType.table,
                    header: execArr[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
                    align: execArr[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                    cells: []
                };
                for (var i = 0; i < item.align.length; i++) {
                    if (/^ *-+: *$/.test(item.align[i])) {
                        item.align[i] = 'right';
                    }
                    else if (/^ *:-+: *$/.test(item.align[i])) {
                        item.align[i] = 'center';
                    }
                    else if (/^ *:-+ *$/.test(item.align[i])) {
                        item.align[i] = 'left';
                    }
                    else {
                        item.align[i] = null;
                    }
                }
                var td = execArr[3].replace(/(?: *\| *)?\n$/, '').split('\n');
                for (var i = 0; i < td.length; i++) {
                    item.cells[i] = td[i]
                        .replace(/^ *\| *| *\| *$/g, '')
                        .split(/ *\| */);
                }
                this.tokens.push(item);
                continue;
            }
            // simple rules
            if (this.staticThis.simpleRules.length) {
                var simpleRules = this.staticThis.simpleRules;
                for (var i = 0; i < simpleRules.length; i++) {
                    if (execArr = simpleRules[i].exec(nextPart)) {
                        nextPart = nextPart.substring(execArr[0].length);
                        var type = 'simpleRule' + (i + 1);
                        this.tokens.push({ type: type, execArr: execArr });
                        continue mainLoop;
                    }
                }
            }
            // top-level paragraph
            if (top && (execArr = this.rules.paragraph.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                if (execArr[1].slice(-1) === '\n') {
                    this.tokens.push({
                        type: interfaces.TokenType.paragraph,
                        text: execArr[1].slice(0, -1),
                    });
                }
                else {
                    this.tokens.push({
                        type: this.tokens.length > 0 ? interfaces.TokenType.paragraph : interfaces.TokenType.text,
                        text: execArr[1],
                    });
                }
                continue;
            }
            // text
            // Top-level should never reach here.
            if (execArr = this.rules.text.exec(nextPart)) {
                nextPart = nextPart.substring(execArr[0].length);
                this.tokens.push({ type: interfaces.TokenType.text, text: execArr[0] });
                continue;
            }
            if (nextPart) {
                throw new Error('Infinite loop on byte: ' + nextPart.charCodeAt(0) + (", near text '" + nextPart.slice(0, 30) + "...'"));
            }
        }
        return { tokens: this.tokens, links: this.links };
    };
    BlockLexer.simpleRules = [];
    return BlockLexer;
}());
exports.BlockLexer = BlockLexer;
});

unwrapExports(blockLexer);
var blockLexer_1 = blockLexer.BlockLexer;

var dist = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(blockLexer);
__export(helpers);
__export(inlineLexer);
__export(interfaces);
__export(marked);
__export(parser);
__export(renderer);
__export(extendRegexp);
});

var index = unwrapExports(dist);

const { Marked } = index;
class Markdown {
    render() {
        return h("div", { innerHTML: Marked.parse(this.source) });
    }
    static get is() { return "picto-md"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "source": {
            "type": String,
            "attr": "source"
        }
    }; }
    static get style() { return ":host {\n  display: block;\n  position: relative;\n  font-family: var(--picto-font-family);\n  font-size: calc(var(--picto-font-size) * 1);\n  line-height: calc(var(--picto-line-height) * 2);\n  color: #616161;\n}\n:host :host-context(.grid-visible) {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(90%, transparent), to(rgba(255,0,0,0.4)));\n  background: linear-gradient(transparent 90%, rgba(255,0,0,0.4));\n  background-size: 100% calc(var(--picto-line-height) * 1);\n  background-attachment: fixed;\n}\n:host * {\n  margin: 0;\n  padding: 0;\n  line-height: calc(var(--picto-line-height) * 1);\n  margin-bottom: calc(var(--picto-line-height) * 1);\n}\n.grid-visible :host * {\n  background: rgba(128,0,128,0.1);\n}\n:host *,\n:host *::before,\n:host *::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: inherit;\n}\n:host ul {\n  list-style: none;\n}\n:host input,\n:host textarea {\n  display: block;\n}\n:host input[type=\"checkbox\"],\n:host input[type=\"radio\"] {\n  display: inline-block;\n  margin-bottom: 0;\n}\n:host table {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n:host td,\n:host th {\n  line-height: calc(var(--picto-line-height) * 2);\n  padding-left: calc(var(--picto-line-height) * 2);\n  padding-right: calc(var(--picto-line-height) * 2);\n  text-align: left;\n  border: 1px solid #f00;\n}\n:host hr {\n  margin-top: -2px;\n  margin-bottom: calc(var(--picto-line-height) * 2);\n}\n:host h1 {\n  font-size: calc(var(--picto-font-size) * 2.4);\n  line-height: calc(var(--picto-line-height) * 3);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host h2 {\n  font-weight: bold;\n  font-size: calc(var(--picto-font-size) * 2);\n  line-height: calc(var(--picto-line-height) * 3);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host h3 {\n  font-weight: bold;\n  font-size: calc(var(--picto-font-size) * 1.6);\n  line-height: calc(var(--picto-line-height) * 2);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host h4 {\n  font-weight: bold;\n  font-size: calc(var(--picto-font-size) * 1.2);\n  line-height: calc(var(--picto-line-height) * 2);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host h5 {\n  font-weight: bold;\n  font-size: calc(var(--picto-font-size) * 1);\n  line-height: calc(var(--picto-line-height) * 2);\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n}\n:host p {\n  margin-top: calc(var(--picto-line-height) * -0.5);\n  margin-bottom: calc(var(--picto-line-height) * 1.5);\n  line-height: calc(var(--picto-line-height) * 2);\n}"; }
}

export { Guide as PictoGram, Book as PictoGraph, Markdown as PictoMd };
