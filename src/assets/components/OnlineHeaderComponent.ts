import MotherComponent from "../class/MotherComponent";

class OnlineHeaderComponent extends MotherComponent{

    constructor(){
        super();
        this.innerHTML = this.render()
    }

    // TODO : Mettre ici la navbar d'un utilisateur connecté 
    render(): string {
        return `<nav class="navbar navbar-expand-lg bg-parchemin">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Création de personnage</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Jouer</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Information de compte</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">MJ</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`
    }
}
customElements.define("online-header-component", OnlineHeaderComponent)

export default OnlineHeaderComponent;