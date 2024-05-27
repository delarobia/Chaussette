class Router{
    //Screen
    #screen = null;
    get screen(){
        return this.#screen;
    }

    //Setter pour screen ?

    //Constructeur
    constructor(){

    }

    //Click Handler
    clickHandler = (e) => {
        const link = e.target.closest('[target="spa"]');
        if(link){
            e.preventDefault();
            history.pushState(null, "", link.href);
            this.navigate();
        }
    }

    //Navigate
    navigate = (e) => {
        switch(location.pathname){
            case "/" :
            case "/accueil":
            case "/home":
            case "/index":
            case "/connect":
            case "/connexion":
                //ici mettre écran d'acceuil
                break;
            case "/signup":
            case "/inscription" :
                //ici  mettre écran de création de compte
                break;
            default:
                //afficher notre superbe page d'erreur conçue avec tout l'amour du nain et des excuses de sbires
        }
        App.instance.render();
    }

}

export default Router;