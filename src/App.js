import Router from "./assets/Scripts/Router";

class App {
    // Variable instance 
    static #instance = null
    static get instance(){
        return new App();
    }

    // Variable Router
    #router = null;
    get router(){
        return this.#router
    }
    
    // Constructeur 
    constructor(){
        if(App.#instance != null && App.#instance instanceof App){
            return App.#instance;
        }
        App.#instance = this;
        this.#router = new Router()
    }

    // Méthode Render 
    render(){
        document.getElementById('main').firstElementChild?.remove();
        document.getElementById('main').append(this.router.screen);
    }
}

export default App;