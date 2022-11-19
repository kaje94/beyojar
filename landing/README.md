<br>
<h1 align="center"> <b>Beyojar</b> : Landing page </h1>

<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#folder-structure">Folder structure</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#contributing">Contributing</a>
</p>

## Introduction

-   The landing page has been built using [Qwik](https://qwik.builder.io) as its perfect for pre-rendered content and offers awesome performance due to its focus on resumability and lazy loading.
-   [Tailwind CSS](https://tailwindcss.com) has been used to style the user interface as it provides flexibility to developers by providing simple utility-first CSS classes.
-   [Qwik Speak](https://github.com/robisim74/qwik-speak) has been used for internationalization as it is easy to be integrated with [Qwik](https://qwik.builder.io).
-   Using [Qwik](https://qwik.builder.io) has allowed search engines to easily understand the contents of the page and also reach a [Google Lighthouse](https://github.com/GoogleChrome/lighthouse) score of <b>100</b>.

## Folder structure

Following is the folder structure of the landing page workspace

    ├── public                  # Any static assets, like images, can be placed in the public directory
    │   └── fonts               # Language files used in the landing page
    │   └── i18n                # Language files for different languages
    │   └── images              # Images used throughout the landing page
    ├── src
    │   ├── components          # Recommended directory for components
    │   └── routes              # Provides directory based routing
    ├── .eslintrc               # Contains all the lint rules
    ├── tailwind.config.js      # Tailwind css config
    ├── tsconfig.json           # Required compiler options
    ├── vite.config.ts          # Vite configurations
    └── package.json            # All the dependencies & scripts needed to run the landing page

## How To Use

Scripts related to building and running the landing page

```bash
# Start the landing page in dev mode by running:
$ npm run start

# Build the landing page in production mode by running:
$ npm run build

# Deploy the landing page build files in localhost by running:
$ npx http-server dist
# Can also use alternatives such as Browsersync, lite-server, serve or static-server

# Directly build & run the landing page in production mode by running:
$ npm run preview
# The preview server is only for convenience to locally preview a production build, and it should not be used as a production server.
```

Scripts related to linting and formatting:

```bash
# Check if there are any linting issues by running:
$ npm run lint

# Check & fix fixable linting issues by running:
$ npm run lint:fix
```

## Contributing

Please refer the [Contributing.md](../.github/CONTRIBUTING.md) in order to contribute towards this project
