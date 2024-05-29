
import AccueilScreen from "../screen/AccueilScreen";
import ErrorScreen from "../screen/ErrorScreen";
import SignUpScreen from "../screen/SignUpScreen";
import App from "./App";

class Router{
    //Screen
    private _screen : HTMLElement | null = null;
    get screen(){
        if(this._screen){
            return this._screen;
        }else{
            throw new TypeError('Screen is not an HTML Element');
        }
    }
    //Setter ?

    //Constructeur
    constructor(){
        window.onclick = this.clickHandler;
        window.onload = this.navigate;
        window.onpopstate = this.navigate;
    }

    //Click Handler
    clickHandler = (e:any) => {
        const link = e.target.closest('[target="spa"]');
        if(link){
            e.preventDefault();
            history.pushState(null, "", link.href);
            this.navigate();
        }
    }

    //Navigate
    navigate = () => {
        switch(location.pathname){
            case "/" :
            case "/accueil":
            case "/home":
            case "/index":
            case "/connect":
            case "/connexion":
                this._screen = new AccueilScreen();
                // TODO ici mettre écran d'accueil
                break;
            case "/signup":
            case "/inscription" :
                this._screen = new SignUpScreen();
                // TODO ici  mettre écran de création de compte
                break;
            default:
                this._screen = new ErrorScreen();
        }
        App.instance.render();
    }
}

export default Router;