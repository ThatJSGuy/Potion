# Directives

Directives in Potion provide a way to apply special behaviors to elements in your Vue.js components. They allow you to manipulate the DOM, conditionally render elements, and iterate over lists.

## `show` Directive

The `show` directive allows you to conditionally show or hide an element based on a given expression. It is used with the `if` keyword.

```potion
MyComponent is
  template is
    <<-HTML
      <div show if="show">
        Content to be shown if 'show' is true.
      </div>
    HTML
```

In the example above, the `<div>` element will only be displayed if the `show` expression evaluates to `true`. If the expression is `false`, the element will be hidden.

## `for each` Directive

The `for each` directive enables you to iterate over a collection and render multiple instances of an element. It is used with the `in` keyword.

```potion
MyComponent is
  template is
    <<-HTML
      <ul>
        <li for each="item in items">
          {{ item }}
        </li>
      </ul>
    HTML
```

In the example above, the `<li>` element will be rendered for each item in the `items` collection, displaying the value of each item.

## Conclusion

Directives are powerful tools in Potion that enhance the flexibility and functionality of your Vue.js components. The `show` directive allows you to conditionally control the visibility of elements, while the `for each` directive simplifies the process of iterating over collections and rendering dynamic content.

By utilizing directives effectively, you can create dynamic and interactive components that adapt to changing data and provide a more engaging user experience.

Please note that this example is a simplified representation of the content and formatting, and you may need to adjust it based on your specific documentation style and requirements.
