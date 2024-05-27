import App from "../../App";

class Router {
    // Screen
    #screen = null
    get screen(){
        return this.#screen;
    }

    // ? Mettre un setter au screen ?

    // constructeur

    // Click Handler
    clickHandler = (e) => {
        const link = e.target.closest('[target="spa"]');
        if(link){
            e.preventDefault();
            history.pushState(null, "", link.href);
            this.navigate()
        }
    }

    navigate = (e) => {
        switch(location.pathname){
            case '/':
            case '/accueil':
            case '/home':
            case '/index':
            case '/connect':
            case '/connexion':
                // ici mettre l'écran d'accueil
                break;
            case '/signup':
            case '/inscription':
                // page de créaion de compte
                break;
            default:
                // Afficher notre superbe page d'erreur conçue avec tout l'amour du nain  et des excuses de sbires
        }
        App.instance.render()
    }
}

export default Router;