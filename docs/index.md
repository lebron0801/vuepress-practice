---
home: true
heroImage: /hero.png
actionText: Get Started →
actionLink: /guide/getting-started
---

::: slot footer
MIT Licensed | Copyright © 2018-present [Lebron Zhu](https://github.com/lebron0801)
:::

<div class="features">
  <div class="feature">
    <h2>Simplicity First</h2>
    <p>Minimal setup with markdown-centered project structure helps you focus on writing.</p>
  </div>
  <div class="feature">
    <h2>Vue-Powered</h2>
    <p>Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.</p>
  </div>
  <div class="feature">
    <h2>Performant</h2>
    <p>VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.</p>
  </div>
</div>

### It's as easy as counting 1, 2, 3

``` bash
# install
yarn global add vuepress # or：npm install -g vuepress

# create markdown file
echo '# Hello VuePress!' > README.md

# begin write
vuepress dev .

# build static files
vuepress build .
```

::: warning notice
Make sure your version of Node.js is >= 8.6.
:::
