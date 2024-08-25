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














