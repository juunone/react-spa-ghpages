# React SPA with CRA and deploy ghpages

## Description

- create app with create-react-app
- use react-router-dom libray make SPA environment
- add gh-pages with yarn or npm and deploy your git/repository

## Demo

- [Link](https://juunone.github.io/react-spa-ghpages/)

## Project Tree

```
|-- build
|-- node_modules
|-- public
    |-- index.html
    |-- favicon.ico
    |-- manifest.json
|-- src
    |-- App.css
    |-- App.js
    |-- App.test.js
    |-- Home.js
    |-- index.css
    |-- index.js
    |-- Layout.css
    |-- Layout.js
    |-- logo.svg
    |-- NotFound.js
    |-- Page.js
    |-- serviceWorker.js
|-- .gitignore
|-- package.json
|-- README.md
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
