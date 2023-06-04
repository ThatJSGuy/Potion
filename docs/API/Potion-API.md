# Potion API

Potion provides a rich API that allows you to interact with Vue.js components and leverage its features and functionalities. This section covers the key elements of the Potion API.

## `is` Keyword

The `is` keyword is used to define Vue.js components in Potion. It allows you to specify the component name and its properties.

```potion
MyComponent is
  data are
    message: 'Hello, world!'
```

In the example above, we define a component named `MyComponent` with a `message` data property.

## `data` Keyword

The `data` keyword is used to define data properties within a component. Data properties store and manage the component's reactive data.

```potion
MyComponent is
  data are
    count: 0
```

In the example above, we define a `count` data property with an initial value of 0.

## `computed property` Keyword

The `computed property` keyword is used to define computed properties within a component. Computed properties are derived values that are calculated based on other data properties.

```potion
MyComponent is
  data are
    count: 0

  computed property doubleCount is
    count * 2
```

In the example above, we define a computed property named `doubleCount` that calculates the double of the `count` data property.

## `watch` Keyword

The `watch` keyword is used to define watchers within a component. Watchers observe changes to specific data properties and execute a callback function when the property changes.

```potion
MyComponent is
  data are
    count: 0

  watch for changes in count, then (newValue, oldValue)
    // Code to run when count changes
```

In the example above, we define a watcher that triggers when the `count` data property changes. The watcher's callback function receives the new and old values of the property.

## Conclusion

The Potion API provides a comprehensive set of keywords and functionalities to build dynamic and interactive Vue.js components. Understanding and utilizing the Potion API will enable you to create powerful and responsive applications.

Please note that this example is a simplified representation of the content and formatting, and you may need to adjust it based on your specific documentation style and requirements.
