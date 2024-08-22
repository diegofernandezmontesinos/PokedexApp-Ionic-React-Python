This is the info that user will need to start project:

1. **Install IONIC**:
    in ther terminal, write: 
        ionic start <nameOfTheApp> 
        selec react as framework-library
    
2. **Adding PandaCSS**: 
    npm install -D @pandacss/dev
    npx panda init
    
3. **Dependecies**:
    React Query 
    React Router Dom 
    Flask
    PandaCss
    Fortawesome (npm install @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome)

4. **Clon repo from github**:
    The repo is ubicated in github, this is the route:
     https://github.com/diegofernandezmontesinos/pokedexDFM

5. **Production Deploy**:
    This is the url for the production deploy: 
    https://dfm-pokedex-p63k40dd8-diego-fernandezs-projects-4f566536.vercel.app/   

6. **Port info**:
    Make shure that your localhost is using port 8100, so avoid issues with the apiService component.

7. **Testing**:
     npm install --save-dev jest @types/jest @testing-library/react @testing-library/jest-dom ts-jest
   


**FYI**:

This app was created by Diego Fernández Montesinos, css was used, however I was trying to apply pandaCss but an issue happens doing it, same thing with React Query, I tried to fix it, however it was really complicated.

The app include a LandingPage, that give you a warming welcome and a login button, in the navbar user can find the pokedex, Home, login, and Info about the author, each tab goes to differents pages.

In this case I just apply test in the login component.

The project use python in the backend and React library with typescript in the frontend.  

