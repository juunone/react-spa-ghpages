# React SPA with CRA and deploy gh-pages

## Description

- create app with create-react-app
- use react-router-dom libray make SPA environment
- add gh-pages with yarn or npm and deploy your git/repository

## Demo

- [Link](https://juunone.github.io/react-spa-ghpages/)

## Project Tree

```
|-- node_modules
|-- public
    |-- index.css
    |-- index.html
    |-- favicon.ico
|-- src
    |-- components
        |-- App.js
        |-- DynamicPage.js
        |-- Home.js
        |-- Layout.css
        |-- Layout.js
        |-- Loading.js
        |-- NoMatch.js
    |-- index.js
|-- .babelrc
|-- package.json
|-- postcss.config.js
|-- webpack.config.development.js
|-- webpack.config.production.js
|-- yarn.lock
```

## Development

<pre><code><span style="color:orange">git</span> clone</code></pre>

```
# you can see 'homepage' in package.json

homepage: "https://[username].github.io/[repository]"

# change it yours!
```

<pre><code><span style="color:orange">yarn</span> install
<span style="color:orange">yarn</span> build 
<span>dev : http://localhost:3000</span>
</code></pre>

## Deploy

<pre><code><span style="color:orange">yarn</span> predeploy
<span style="color:orange">yarn</span> deploy
</code></pre>

> Finish! check your github pages with your repository path
