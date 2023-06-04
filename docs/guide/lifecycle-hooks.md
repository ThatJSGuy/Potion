# Lifecycle Hooks in Potion

In Potion, lifecycle hooks are special methods that get called at various stages in the lifecycle of a Vue.js component. They allow you to run code at specific times, such as before the component is created, after it's mounted to the DOM, before it's updated, after it's updated, and before it's unmounted.

## Defining Lifecycle Hooks

In Potion, you define lifecycle hooks using the `before` and `after` keywords. Here's an example of a component that uses the `created` and `mounted` lifecycle hooks:

```potion
MyComponent is
  before it is created
    # Code to run before the component is created

  after it is mounted
    # Code to run after the component is mounted
```

In this example, the `before it is created` block will run before the component is created, and the `after it is mounted` block will run after the component is mounted to the DOM.

## Available Lifecycle Hooks

Here are the lifecycle hooks available in Vue.js, along with their Potion equivalents:

- `beforeCreate`: Use `before it is created` in Potion.
- `created`: Use `after it is created` in Potion.
- `beforeMount`: Use `before it is mounted` in Potion.
- `mounted`: Use `after it is mounted` in Potion.
- `beforeUpdate`: Use `before it is updated` in Potion.
- `updated`: Use `after it is updated` in Potion.
- `beforeUnmount`: Use `before it is unmounted` in Potion.
- `unmounted`: Use `after it is unmounted` in Potion.

## Using Lifecycle Hooks

You can use lifecycle hooks to run code at specific times in the lifecycle of a component. For example, you might use the `created` hook to fetch data from an API, the `mounted` hook to set up a DOM event listener, and the `beforeUnmount` hook to clean up the event listener.

Here's an example of how you might use lifecycle hooks in Potion:

```potion
MyComponent is
  data are
    message: 'Hello, world!'

  before it is created
    fetchMessage()

  after it is mounted
    setupEventListener()

  before it is unmounted
    cleanupEventListener()

  method fetchMessage is
    # Code to fetch message from an API

  method setupEventListener is
    # Code to set up a DOM event listener

  method cleanupEventListener is
    # Code to clean up the DOM event listener
```

In this example, the `fetchMessage` method is called before the component is created, the `setupEventListener` method is called after the component is mounted, and the `cleanupEventListener` method is called before the component is unmounted.
