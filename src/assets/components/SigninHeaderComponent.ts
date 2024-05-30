//? import Account from "../class/Account";
import MotherComponent from "../class/MotherComponent";
import AccountService from "../services/AccountService";

class SigninHeaderComponent extends MotherComponent{

    private _form:HTMLFormElement;

    constructor(){
        super();
        this.innerHTML = this.render();

        this._form = this.querySelector('#formConnect') as HTMLFormElement
        this._form.onsubmit = this.handleBoutonConnect
    }
    
    handleBoutonConnect = (e:SubmitEvent):void => {
        e.preventDefault();
        let entries = Object.fromEntries(new FormData(this._form));
        try {
            // TODO : Trouver un seul profil via le pseudo
            // TODO : Vérifier le mot de passes
            const as = new AccountService();
            console.log(`Account Service : ${as.data} `)
            console.log(entries)

            // TODO : créer un cookie de connexion
            

        } catch (error) {
            console.warn(error);
        }
    }
    

    override render(){
        return `
        <nav id ="navbarre" class="navbar navbar-expand-lg bg-parchemin">
        <div class="container-fluid">
            <a class="navbar-brand" href="/" target="spa"><img class ="navSock" src="./src/assets/img/icon-park-outline_socks.svg"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active text-rouge-velours  fs-3" aria-current="page" href="#">Chaussette</a>
                    </li>
                </ul>
                <form id="formConnect" class="d-flex" role="connect" novalidate>
                    <div class="">
                        <div class="d-flex pb-2">
                            <div class="d-flex align-items-center">
                                <img class ="mx-2 navIcons" src="./src/assets/img/memory_email.svg">
                                <input class="form-control" type="text" placeholder="Identifiant" aria-label="Id" name="connectPseudo">
                            </div>
                            <div class="d-flex align-items-center">
                                <img class="mx-2 navIcons" src="./src/assets/img/memory_key.svg">
                                <input class="form-control" type="password" placeholder="Mot de passe" aria-label="Mdp" name="connectPassword">
                            </div>
                        </div>
                        <div class ="d-flex justify-content-end pe-1">
                            <button id="btnConnect" class="btn btn-sm btn-rouge-velours mx-2" type="submit">Connexion</button>
                            <button class="btn btn-sm btn-rouge-velours" type="button"><a class ="navBtn" href="/inscription" target="spa"> Chaussette ?</a></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </nav>`
    }
}

customElements.define('signin-header-component', SigninHeaderComponent);

export default SigninHeaderComponent;

