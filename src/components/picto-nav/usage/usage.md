---
title: Examples
props:
  components:
    - tag: item-no-usage
    - tag: item-usage-one
      usage:
        one: |
          ---
          title: Example One
          ---
        two: |
          ---
          title: Example Two
          ---
        three: |
          ---
          title: Example One
          ---
    - tag: item-usage-two
      usage:
        one: |
          ---
          title: Example One
          ---
---

# Navigation menu
Displays links for all of the components listed in components.json that have usage examples.

### Creating usage examples
Add a directory in your component's folder named "usage" and add any number of .md files