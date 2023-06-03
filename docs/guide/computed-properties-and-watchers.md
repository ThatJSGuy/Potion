# Computed Properties and Watchers

In Potion, computed properties and watchers allow you to perform dynamic calculations and react to changes in data. They provide a way to automate updates and perform side effects based on specific conditions.

## Computed Properties

Computed properties are functions that calculate and cache a value based on other reactive properties. They are defined using the `computed property` keyword within a component block.

```potion
MyComponent is
  data are
    count: 0

  computed property doubleCount is
    count * 2
```

In the example above, the `doubleCount` computed property is dependent on the `count` data property. Whenever the `count` changes, the `doubleCount` value is automatically recalculated.

## Watchers

Watchers allow you to perform custom logic in response to changes in data properties. They are defined using the `watch` keyword followed by the property to watch and a callback function.

```potion
MyComponent is
  data are
    count: 0

  watch for changes in count, then (newValue, oldValue)
    // Code to run when count changes
```

The watcher defined in the example above will be triggered whenever the `count` data property changes. The `newValue` and `oldValue` arguments in the callback function provide access to the new and old values of the property.

By using watchers, you can perform actions such as making API calls, updating UI elements, or triggering other methods based on specific data changes.

## Conclusion

Computed properties and watchers are powerful features in Potion that allow you to create dynamic and reactive behavior in your components. They enable you to perform calculations, automate updates, and respond to data changes in an efficient and declarative manner.

By leveraging computed properties and watchers, you can enhance the interactivity and responsiveness of your Potion components, creating more dynamic and engaging user experiences.

Please note that this example is a simplified representation of the content and formatting, and you may need to adjust it based on your specific documentation style and requirements.
