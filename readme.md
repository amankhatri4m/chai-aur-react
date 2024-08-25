# Library vs Framework  
    Library: Lib gives us free hold like naming convention, folder structure and it hold very minimal things that makes him lighter as compared to framework.
    Framework: It has set of rules and we have to follow them and it gives us all kinds of utility like router and other package which makes them heavy.

# way to create react app
    npx : node package executor
    create-react-app: (React way)
        - It's a bulky utility of software that helps us to create react app

    npx create-react-app <<appName>>: It provide large bundle as create-react-app is a bulky utility which contain lots of files that generally not needed.It takes lot of time for installation.It documentation they have not mentioned but this is older approach that we need to know.
    
    vite (LightBundler): Recommended (faster way).It includes minimul files that is necessary for react project at initial stage
    
    parcel: Recommended (faster way).

# react has its own virtual dom which compare the changes with main dom and reflect the changed portion in main dom.

# 01basicreact: 
    As you can see in index.html we are not injecting any scripts then how index.js is executing so answer is "react-scripts" is injecting behind the scene

# Vite directly load main.jsx in index.html as a module.

# Recommended: File and Component name to be used UpperCased but some lib like vite forced to use .jsx extension but some not like in react create-react-app