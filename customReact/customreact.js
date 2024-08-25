const container = document.getElementById('root');

function customRender(reactElement,container){
    const element = document.createElement();
    element.innerHTML = reactElement.children;
    for(let prop in reactElement.props){
        element.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(element);
}

// This is the element structure that react understand.
const reactElement = {
    type:'a',
    children:'click to visit google',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    }
}

customRender(reactElement,container);

