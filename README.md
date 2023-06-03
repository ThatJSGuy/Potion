# Potion for Vue.js

Potion is a pseudo-code language for Vue.js that aims to maximize readability and make the code look more like English. It's inspired by languages like Elixir and Ruby.

## Components

In Potion, Vue.js components are defined using the `is` keyword:

```elixir
MyComponent is
  data are
    message: 'Hello, world!'
```

## Lifecycle Hooks

Lifecycle hooks are defined using the `before` and `after` keywords:

```elixir
MyComponent is
  before it is created
    # Code to run before the component is created

  after it is created
    # Code to run after the component is created
```

## Computed Properties and Watchers

Computed properties and watchers are defined using the `computed property` and `watch` keywords:

```elixir
MyComponent is
  data are
    count: 0

  computed property doubleCount is
    count * 2

  watch for changes in count, then (newValue, oldValue)
    # Code to run when count changes
```

## Directives

Directives are defined using the `show if` and `for each` keywords:

```elixir
MyComponent is
  template is
    <<-HTML
      <div show if="show">
        <p for each="item in items">{{ item }}</p>
      </div>
    HTML
```

## Components and Props

Child components and props are defined using the `are` keyword:

```elixir
ChildComponent is
  props are
    message: String

  template is
    <<-HTML
      <p>{{ message }}</p>
    HTML

ParentComponent is
  template is
    <<-HTML
      <ChildComponent message from="parentMessage" />
    HTML
```

## Vuex

Vuex stores, mutations, actions, and getters are defined using the `store`, `mutations`, `actions`, and `getters` keywords:

```elixir
store is
  state are
    count: 0

  mutations are
    increment(state)
      state.count += 1

  actions are
    increment(context)
      context.commit('increment')

  getters are
    doubleCount(state)
      state.count * 2
```

## Vue Router

Routes are defined using the `routes` keyword:

```elixir
routes are
  home: Home,
  about: About
```

## Mixins and Plugins

Mixins are defined using the `mixin` keyword:

```elixir
mixin LogMixin
  created
    console.log('mixin hook called')

MyComponent is
  mixins are
    LogMixin
```

## Error Handling and Validation

Error handling and validation are done using the `validate` keyword:

```elixir
MyComponent is
  props are
    message: String

  validate props
    if message is not String
      throw 'Invalid prop: message must be a string'
```

## Server-Side Rendering (SSR)

SSR is enabled using the `serverRendered` keyword:

```elixir
MyComponent is
  serverRendered: true
```

If this helps one person, I will be happy and my time spent will be worth it. Thank you Dev community :)
