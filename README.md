# 🪐 Star Wars Application

## 🐧 Links

- `Project` https://l-Oskar.github.io/StarWars
- `Repository` https://github.com/l-Oskar/StarWars
- `StoryBook` https://l-Oskar.github.io/StarWars/storybook

---

## 🐶 Available Scripts and Commands

```bash
# Install
npm i                    # install dependencies
```

```bash
# General
npm run vite            # run app in the development mode
npm run storybook        # run storybook
npm run deploy           # deploy app on Github Pages
```

```bash
# Deploy (part of "deploy" script)
npm run build            # builds the app for production
npm run build-storybook  # storybook build
npm run build-gh-pages   # deploy on Github Pages
```

---

## 🦄 API

- https://swapi.dev (main API)
- https://starwars-visualguide.com (photos for API)
- https://static.wikia.nocookie.net/starwars (fallback photos)

---

## 🐼 Technologies used in the project

<details><summary>React.js</summary>

- Deployment of the application with `Vite`
- `useState`, `useEffect`, `useContext`, `useCallback` Hooks
- Creating custom hooks
- Fragments
- `Higher-Order Component` pattern
- `State Lifting` pattern
- Event handling
- Controlled Components
- Connecting CSS, `css-modules`, `classnames` library
- Lists and keys `Reconciliation Algorithm`
- Lazy loading components with `React.lazy()`
- `prop-types` library for props validation
</details>

<details><summary>React Router</summary>

- Basic routing
- URL Parameters
- Query Parameters
- 404 (Not Found) page handling
- `useLocation` and `useHistory` hooks
</details>

<details><summary>Redux</summary>

- Basic structure of a `react-redux` application
- `useDispatch`, `useSelector` Hooks
- Redux Middleware
- Creating asynchronous actions with `redux-thunk`
- Store state tracking with `redux-devtools-extension`
</details>

<details><summary>General</summary>

- Setting up Aliases in a Vite application
- Deploying the application to GitHub Page (`gh-pages` library)
- Creating a UI-Kit from visual components and publishing in `@storybook`
- `lodash` library
- `Visual Studio Code`. snippets and plugins
</details>

<details><summary>JavaScript</summary>

- Array methods: `map`, `filter`, `forEach`
- Asynchronous programming: `Promise`, `Async Functions`
- ES6 modules (import и export)
- Spread operator for objects (props in a component)
- Destructuring arrays and objects
- Ternary operators
- Working with Local Storage
- Fetching data from an API using `Fetch`
</details>

<details><summary>Styling</summary>

- CSS Custom Properties, modifying via JavaScript
- CSS Filters
- CSS Flexbox
- CSS Multi Columns
- Site-wide theme change
- Styling scrollbars
</details>

---

## 🐣 Rules

<details><summary>Import Order</summary>

- Libraries
- Context
- HOCs
- UI components
- Components
- Images
- Hooks
- Routes
- Services
- Utilities
- Constants
- Styles
</details>
