<br>
<h1 align="center"> <b>Beyojar</b> : Mobile Application </h1>

<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#folder-structure">Folder structure</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#contributing">Contributing</a>
</p>

## Introduction

-   The mobile app has been built using [React-Native](https://reactnative.dev/) & [Expo](https://docs.expo.dev) as these allow you to build and deploy for both iOS and Android with ease.
-   [Styled System](https://styled-system.com/) has been used to develop the user interface as it provides utility functions to [styled-components](https://styled-components.com/) and add style props to your React components which allowing you to rapidly develop the user interfaces.
-   [Zustand](https://github.com/pmndrs/zustand) has been used to manage the global state as it is a small, fast and scalable bearbones state-management solution with simple APIs based on hooks.
-   [i18next](https://www.i18next.com) and [react-i18next](https://react.i18next.com) have been used for internationalization. Only English is supported at the moment, but any contribution towards adding support for other languages is highly appreciated.
-   This project follows [Atomic Design Pattern](https://atomicdesign.bradfrost.com/) to structure the components as it promotes consistency, modularity, and scalability.
-   Priority to [accessibility](https://www.a11yproject.com) has been given throughout the mobile app in order to ensure that the app can be used by everyone.
-   [Storybook](https://storybook.js.org) has been used as it allows developers to build components in isolation while increasing awareness of existing components. Interactions tests have also been included for stories and the test coverage reports are generated using all the stories and interaction tests written within storybook.
-   [ESLint](https://eslint.org/) has been used along with several plugins in order to ensure that high standards are maintained throughout the code. Pre-commit hooks as well as Github actions have also been added to verify that these rules are being followed.

## Folder structure

Following is the folder structure of the mobile app workspace

    ├── src
    │   ├── assets              # Assets such as image, fonts & icons
    |   |   ├── fonts           # Font files and configs
    |   |   ├── icons           # SVG based icon components
    |   |   └── images          # Images used within the app
    │   ├── common              # Common files such as constants, helpers & theme config
    │   ├── components          # All the reusable components of the mobile app
    |   |   ├── atoms           # Smallest building blocks built using styled system
    |   |   ├── molecules       # Stateless reusable components
    |   |   ├── organism        # More complex, reusable components
    |   |   ├── templates       # Reusable templates representing entire screens
    |   |   └── hoc             # Higher order components with reusable logics
    │   ├── hooks               # Custom reusable hooks
    │   ├── lang                # Languages files & react-i18next config
    │   ├── navigation          # @react-navigation configs & related components
    │   ├── providers           # Share data across all decedent nodes
    │   ├── screens             # Components representing individual screens/pages
    │   ├── store               # Zustand store to manage global state
    │   └── storybook           # Storybook config files
    ├── .eslintrc               # Contains all the lint rules
    ├── app.json                # Configure how a project loads in Expo Go
    ├── App.tsx                 # Starting point of the app
    ├── babel.config.js         # Ensure TS code is backwards compatible
    ├── eas.json                # Config for EAS CLI
    ├── metro.config.js         # Bundler config for react-native
    ├── tsconfig.json           # Required compiler options
    └── package.json            # All the dependencies & scripts needed to run the mobile app

## How To Use

Scripts related to running the app on android, IOS or web:

```bash
# Start the expo development server to work on your project by running:
$ npm run start

# Start the expo development server and launch the Android app by running:
$ npm run android
# Either an android emulator or an android device with usb-debugging turned on, must be available

# Start the expo development server and launch the IOS app by running:
$ npm run ios
# Xcode must to available in order to run this command

# Start the expo development server and launch the expo app in a browser by running:
$ npm run web
```

Scripts related to linting and formatting:

```bash
# Check if there are any linting issues by running:
$ npm run lint

# Check & fix fixable linting issues by running:
$ npm run lint:fix
```

Scripts related to storybook and testing:

```bash
# Open storybook in development mode by running:
$ npm run storybook

# Build storybook in production mode by running:
$ npm run build-storybook

# Run storybook tests by running:
$ npm run test-storybook
# Make sure to have storybook running in dev mode or production mode before running this command

# Build & test storybook in CI pipeline by running:
$ npm run test-storybook:ci

# Generate storybook coverage by running:
$ npm run test-storybook:coverage
# Make sure to have storybook running in dev mode or production mode before running this command

# Build & generate storybook coverage in CI pipeline by running:
$ npm run test-storybook:coverage:ci

# Generate storybook coverage report after running test-storybook:coverage:
$ npm run coverage-report
```

## Contributing

Please refer the [Contributing.md](../.github/CONTRIBUTING.md) in order to contribute towards this project
