import Router from "./Router";

class App{
    //Variable instance
    private static _instance:App | null = null;
    static get instance(){
        return new App();
    }

    //Variable Router
    private _router:Router |null = null;
    get router(){
        if (this._router){
             return this._router;
        }else{
            throw new TypeError ('Votre router est de type null')
        }
    }

    //Constructeur
    constructor(){
        if(App._instance != null && App._instance instanceof App){
            return App._instance;
        }
        App._instance = this;
        this._router = new Router();

    }

    //Méthode Render
    render(){
        const page = document.getElementById("main");
        if(page){
            page.firstElementChild?.remove();
            console.log("remove");
            if(this.router.screen){
                 page.append(this.router.screen);
                 console.log("append");
            }
        }
    }
}

export default App;