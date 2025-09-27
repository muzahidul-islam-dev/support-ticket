* Question: What is JSX, and why is it used?
Ans: JSX is JavaScript XML and it allows writing HTML-like syntax in JavaScript.


* Question: What is the difference between State and Props?
Ans:
1. Props: Props are known as properties it can be used to pass data from one component to another Components.
2. State: The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.


* Question: What is the useState hook, and how does it work?

Ans: The useState hook in React is used to add state to functional components. It returns a state value and a function to update it. When the state is updated, the component re-renders with the new value.


* Question: How can you share state between components in React?

 Ans:
 1. Context API
 2. State Management Libraries


* Question: How is event handling done in React?
Ans: React uses camelCase event handlers and functions.

function sayHello() {
  alert('Hello Jhankar mahbub vai.');
}

<button onClick={sayHello}>Click Me</button>