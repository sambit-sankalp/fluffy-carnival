
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<br />
<p align="center">
  <a href="https://github.com/sambit-sankalp/fluffy-carnival">
    <img src="https://i.pinimg.com/originals/5f/df/a9/5fdfa98001a201aed81d5119d0456915.jpg" alt="Logo" width="130">
  </a>

  <h3 align="center">Watcher</h3>

  <p align="center">
    The repository for the website of Movies
    <br />
    <a href="https://fluffy-carnival-pi.vercel.app/">View Live</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      </ul>
        <li><a href="#built-with">Built With</a></li>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#running-the-project">Running the project</a></li>
      </ul>
    </li>
    <li><a href="#problems-faced">Problems Faced</a></li>
    <li><a href="#contributors-">Contributors</a></li>
  </ol>
</details>

## About The Project

The Movies website to search for movies

## Built With

Following technologies and libraries are used for the development of this website
  
### Frontend
- [React](https://reactjs.org/) : Used for building the interfaces for the project due to various features like reusable components etc.
- [Axios](https://axios-http.com/docs/intro) : Used on the client side so that data can be fetched using APIs.
- [TailwindCSS](https://tailwindcss.com/) : Used for adding CSS to the pages of the website.

## Getting Started

To setup the project locally the steps below.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)

  ```sh
  # Homebrew
  brew install nodejs

  # Sudo apt
  sudo apt install nodejs

  # Packman
  pacman -S nodejs

  # Module Install
  dnf module install nodejs:<stream> # stream is the version

  # Windows (chocolaty)
  cinst nodejs.install

  ```

- [Git](https://git-scm.com/downloads)

```sh
  # Homebrew
  brew install git

  # Sudo apt
  apt-get install git

  # Packman
  pacman -S git

  # Module Install (Fedora)
  dnf install git

```


### Running the project.

```
## Install Dependencies
npm install

## Run the Project
npm run start

```

Following are the commands to remove/add new dependencies using npm

```
## Add a new Package
npm i <package-name>

## Remove an existing Package
npm uninstall <package-name>

## Save Package as a Dev Dependency
npm i <package-name> --save-dev
```

## Code Architecture

`src` directory: This is the root directory of the project and contains all the source code.

`public` directory: This directory contains the HTML file that serves as the entry point for the application and any other static assets that need to be served.

`components` directory: This directory contains the individual React components that make up the application.

`pages` directory: This directory contains the single React pages that consists of various components make up the application.

`index.js` file: This file serves as the entry point for the application and renders the root component to the DOM.

`package.json` file: This file contains the project's dependencies and scripts for building and running the application.

`tailwind.config.js` file: This file contains the configuration for the tailwindcss, which is used to add style to the application's .jsx/.js files.


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/sambit-sankalp"><img src="https://avatars.githubusercontent.com/u/82284130?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sambit Sankalp</b></sub></a><br /><a href="https://github.com/sambit-sankalp/project-pilot/commits?author=sambit-sankalp" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
