<p align="center">
  <img src="https://raw.githubusercontent.com/snaptopixel/picto/master/assets/logo.svg" width="150"/>
</p>

---
## Getting started

Stencil provides the tooling, picto brings the ui and conventions that allow you to rapidly and attractively document, display and develop your component libraries.

You'll only need to do a few things to get it up and running for local development:
- Create an index.html file
- Create an additional stencil config
- Add a script in package.json

Once you've got the basics up and running you can create preconfigured examples for your components using slots, props and custom markdown documentation (we'll get to that later.)

### src/index.html

```html
<!doctype html>
<html lang=en>

<head>
  <meta charset=utf-8>
  <title>My Component Library</title>
  <!-- Make sure you replace your-namespace with your namespace ;) -->
  <script src=/build/your-namespace.js></script>
  <link rel=stylesheet href=/build/your-namespace.css>
  <script src=https://unpkg.com/@snaptopixel/picto/dist/picto.js></script>
  <link rel=stylesheet href=https://unpkg.com/@snaptopixel/picto/dist/themes/default.css>
</head>

<body>
  <picto-graph>
    # Markdown to display as the home/index page
  </picto-graph>
</body>

</html>
```

### stencil.dev.ts
This should be a duplicate of your `stencil.config.ts` replacing your `dist` outputTarget with the following:

```ts
outputTargets: [{
  type: 'www',
  dir: 'docs'
}],
```

### package.json
Add the following to the `scripts` portion (you can name it whatever you'd like):

> ⚠️&nbsp;&nbsp;Make sure you replace `[YOUR NAMESPACE]` with the `namespace` value from your stencil config!
```json
"picto": "stencil build --config stencil.dev.ts --dev --watch --serve --docs-json docs/build/[YOUR NAMESPACE]/components.json"
```

### Run it!
Use your preferred package manager to run the newly added script `yarn picto` or `npm run picto`. Your browser will launch once compiled and you'll be able to preview and play with your components with hot-reloading etc.

> ⚠️&nbsp;&nbsp;After running, you'll notice a new `docs` directory, you can add this to `.gitignore` or even deploy it to your repo and host on github for an auto-updating docs site.

### Documenting components
After running for the first time you'll notice that `readme.md` files have been created next to your components (via Stencil). This is your entry point for documenting and configuring your example components.

Any markdown you add above the auto-generated content will be rendered below your component preview. You can use standard markdown and will also get syntax-highlighting with code blocks.

### Configuring component previews
You configure your previews using YAML "frontmatter" at the top of your markdown files. In its most basic form it looks like this:

```yaml
---
props:
  propString: Hello World
  propNumber: 123
  propBoolean: true
  propArray:
    - Hello
    - World
  propObj:
    message: Hi
    name: Bob 
---

Markdown here…
```

#### All supported options
- **props**  
Optional hash containing prop name/value pairs that will be pre-populated
- **background**  
css `background` value for the component preview, `dark` or `light` is also supported for predefined values
- **innerHTML**  
HTML that will be inserted _inside_ the component, useful for testing slots etc.
- **title**  
When creating multiple usage examples will be used as the title in the sub-navigation menu
- **controls**  
Customize the ui control used in the prop inspector, current supported values are  
  - **string**: `input[type=text]`
  - **boolean**: `checkbox`
  - **number**: `input[type=number]`
  - (any value): `textarea` _*parsed as javascript_

### Specifying additional configurations
There may be instances where you want to show additional or optional usages of a single-component.

picto also supports markdown files that are placed in a component's `usage` directory. Simply add a markdown file following the conventions already mentioned and it will appear in a sub-menu under the component's main navigation item.