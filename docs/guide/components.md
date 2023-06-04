# Components in Potion

In Potion, Vue.js components are the building blocks of your application. They are self-contained, reusable pieces of code that encapsulate the HTML, JavaScript, and CSS needed to render a part of your user interface.

## Defining a Component

In Potion, you define a component using the `is` keyword. Here's an example of a simple component:

```potion
MyComponent is
  data are
    message: 'Hello, world!'
```

In this example, `MyComponent` is the name of the component, and `data` is an object that contains the component's data. The `are` keyword is used to define the data object.

## Using a Component

To use a component in Potion, you simply include it in your template:

```potion
MyComponent is
  template is
    <<-HTML
      <div>{{ message }}</div>
    HTML
```

In this example, the `template` keyword is used to define the component's template, which is a string of HTML that Vue.js will render into the DOM. The `{{ message }}` syntax is used to interpolate the `message` data property into the template.

## Props

Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance.

In Potion, you define props using the `props are` keyword:

```potion
ChildComponent is
  props are
    message: String

ParentComponent is
  template is
    <<-HTML
      <ChildComponent message from="parentMessage" />
    HTML
```

In this example, `ChildComponent` has a prop named `message`, and `ParentComponent` is passing a value to this prop using the `message from` syntax.

## Computed Properties and Methods

Computed properties and methods are defined in a similar way to data:

```potion
MyComponent is
  data are
    count: 0

  computed property doubleCount is
    count * 2

  method increment is
    count += 1
```

In this example, `doubleCount` is a computed property that returns twice the value of `count`, and `increment` is a method that increments `count`.
