import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// but as we are seeing MyApp render an object with tree structure so reactElement should also render
function MyApp(){

  const userName = "chai aur code";

  return (
    <div>Checking {userName}</div>
    // userName is evaluated expression means {userName} having final output it will not calculate any thing,reason being
    // as this structure return object tree and is it possible to put conditional statement in object, no check below example

    
    /*

    It returns object like we create reactElement
     React.createElement(
      'div',
      {},
      'Checking'
      userName  // so are you really think that in object we can put condition like this way if(true) not possible
    )
      
    }
    */

  )
}

// const ReactElement = {
//   type:'a',
//   children:'click to visit google',
//   props:{
//       href:'https://www.google.com',
//       target:'_blank'
//   }
// }

const ReactElementWithJSX = (
   <a href="https://www.google.com" target="_blank">Click to visit Google Site</a>
)


createRoot(document.getElementById('root')).render(
    // MyApp() // it called but not recommended use <MyApp/> recommended
    // ReactElement : will not render because react has its own keys /object syntax to create a tree structure so we need to follow React.createElement
    /*
     React.createElement(
      'a',
      {href:'https://www.google.com',target:'_blank'},
      'Click to visit Google Site'
    )
    */ 
    
    ReactElementWithJSX 
    /*
    ReactElementWithJSX is working so after analyzing i observe ReactElement is okay but as we are using react render
    so it will expect its structure not the custom one that we created.So we have to follow React.createElement
    
    * ReactElementWithJSX internally converts into because react understand it in object way.

    // Babble inject this element in DOM.
    React.createElement(
      'a',
      {href:'https://www.google.com',target:'_blank'},
      'Click to visit Google Site'
    )
    // further it converts into JS so browser can understand it
    
    
    */ 
)
