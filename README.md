# Ezetradein Test

## Current functionality

1. List of restaurant.
* Load a list of restaurant.
* Search for restaurants based on location.
* Click to view individaul restaurant.
* Inifinite scroll.

2. Individaul restaurant.
* View an individaul restaurant.
* Functional Map view (google maps)
* Click to call.
* Click to visit website.
* Click for map directions

## Stack
* React-native with Expo SDK
* MobX
* Axios
* Eslint
* Esdoc (full app wide documentation within 'documentation' folder).
* Jest (tests unavailable due to config/dependency issues).

## Genral Setup For Development

Clone this repository, install dependencies and start application:

```bash
git clone git@github.com:ekpo-d/ezetradein.git
cd ezetradein
npm install
```
Create a folder called `env` in the project root and add the project's environment variables within `env/env.js` based on the sample file.

```bash
npm start # For development, starts up expo, eslint and jest.
```

Dependencies have been installed correctly if you get this after running the above: `Your app is running at...`

## Other useful commands
* `npm run docs` - generates documentation
* `npm run lint` - runs linter (eslint)
* `npm run lint-test` - runs eslint and jest simultaneously
