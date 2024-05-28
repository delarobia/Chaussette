import MotherComponent from "../class/MotherComponent";

class SigninHeaderComponent extends MotherComponent{
    
    override render(){
        return `
        <nav id ="navbarre" class="navbar navbar-expand-lg bg-parchemin">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img class ="navSock" src="./src/assets/img/icon-park-outline_socks.svg"></a>
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
                <form class="d-flex" role="connect">
                    <div class="">
                        <div class="d-flex pb-2">
                            <div class="d-flex align-items-center">
                                <img class ="mx-2 navIcons" src="./src/assets/img/memory_email.svg">
                                <input class="form-control" type="text" placeholder="Identifiant" aria-label="Id">
                            </div>
                            <div class="d-flex align-items-center">
                                <img class="mx-2 navIcons" src="./src/assets/img/memory_key.svg">
                                <input class="form-control" type="password" placeholder="Mot de passe" aria-label="Mdp">
                            </div>
                        </div>
                        <div class ="d-flex justify-content-end pe-1">
                            <button class="btn btn-sm btn-rouge-velours mx-2" type="submit">Connection</button>
                            <button class="btn btn-sm btn-rouge-velours" type="submit">Chaussette ?</button>
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

