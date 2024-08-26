Important Notes

# React is a light weight library that hold only react and react dom (for web) as a dependency with other testing packages.

# Library: 
A library is a collection of pre-written code that provides specific functionality, which you can call upon in your own application. Libraries offer tools to help with particular tasks but do not impose a particular structure on your application.It contains minimul things that make it ligher

# Framework:
A framework is a comprehensive set of tools and conventions for building applications. It often dictates the overall structure and design of your codebase, providing a skeleton around which you build your application.It is just like
a suite having routes,zone etc them makes them larger.

# Multiple ways to create react application

- npx create-react-app <<name>>: This is a react utility that support to create react app but it is taking much time
to create application with large bundle size, it contain those files which has no use and in document they havn't mention to use this way

command to create app: npm create-react-app <<name>>

    - index.js is injected by react scripts internally and when you inspect the page you will see bundle.js injected.

- vite: It is a module bundler and this is one of faster utility to create react app and it contains only minimul
things like react + reactDom only that makes its bundle small in size and make them faster.

    - main.jsx: It is loaded by index.js as a module

command to create app: npm create vite@latest

- Parcel

# Virtual dom

React has its own virtual dom and it compares with the virtual with main dom and put the updated changes in real dom.

# How React convert the JSX into the tree structure that react understand.

- React understand the object/tree structure

     when you return jsx then then it internally converted into that react understand
        const ReactElement = {
            type:'a',
            children:'click to visit google',
            props:{
                href:'https://www.google.com',
                target:'_blank'
            }
        } 
    
    but if you directly put ReactElement as an evaluation expression then react won't understand so we have to use

    React.createElement(
      'a',
      {href:'https://www.google.com',target:'_blank'},
      'Click to visit Google Site'
    )

# update state in UI/DOM

    React say, if you wanted to change the state in DOM at multiple places then you have to follow the instruction
    as suggested by react.


    const [counter,setCounter] = useState(0);

    addValue(){
        setCounter(counter + 1); // this will tell react to propagate the update value in DOM
    }

    Note: Handle state at component level. We have to rely on useState hook.


# Virtual DOM, Fibre and Re conciliation

    In React, concepts like the Virtual DOM, Fiber, and Reconciliation are key to understanding how the library efficiently updates and renders user interfaces. Here’s an overview of each concept:

    Virtual DOM

    CreateRoot: create a virtual DOM (refer main.js)

    - The Virtual DOM is a lightweight, in-memory representation of the real DOM. Instead of directly interacting with the actual DOM, React creates a Virtual DOM to track changes and optimize updates.

    - When a component’s state or props change, React creates a new Virtual DOM tree. It then compares this new tree with the previous one to detect what actually changed. This process is called diffing.

    - React then updates only the parts of the real DOM that have changed, rather than re-rendering the entire page, making updates faster and more efficient.

    Reconciliation

    - Reconciliation is the process by which React updates the DOM to match the Virtual DOM. It involves comparing the new Virtual DOM with the previous one and determining the most efficient way to update the actual DOM.

    - During reconciliation, React uses a diffing algorithm to determine the differences between the current and new Virtual DOM trees. It can decide whether to re-render, update, or reuse elements.

    - React also optimizes updates using the concept of keys for lists, which helps track which items have changed, been added, or removed


    Fiber:
    - Fiber is the re-implementation of React’s core reconciliation algorithm, introduced in React 16. It allows React to break rendering work into chunks and spread out the rendering over multiple frames. This leads to smoother user experiences, even for applications with complex interfaces.
    
    - Fiber divides work into units of work called fibers. It can pause, prioritize, and reuse tasks. The goal is to achieve concurrent rendering, which allows React to work on multiple tasks at once, without blocking the main thread.
    
    - React can interrupt work, process higher-priority tasks like animations or user input, and then resume lower-priority tasks when resources allow.



    How these concept works together

    - When a React component’s state or props change, a new Virtual DOM is generated.
    - Fiber helps React manage the rendering process, prioritizing and scheduling work to ensure a smooth experience.
    - Reconciliation then kicks in to figure out the most efficient way to update the actual DOM, minimizing the number of changes and improving performance












