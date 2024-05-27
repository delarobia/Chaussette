class AccueilScreen extends HTMLElement{
    constructor(){
        super();

        //appeler composants
        // TODO Header
        // TODO Footer
        this.innerHTML = this.render();
    }

    render(){
        return `<nav class="navbar navbar-expand-lg bg-parchemin">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="./src/assets/img/icon-park-outline_socks.svg"
                    style="width:8vw; height:8vh;"></a>
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
                                <img src="./src/assets/img/memory_email.svg" style="width:5vw; height:4vh;">
                                <input class="form-control" type="text" placeholder="Identifiant" aria-label="Id">
                            </div>
                            <div class="d-flex align-items-center">
                                <img class="mx-2" src="./src/assets/img/memory_key.svg" style="width:3vw; height:4vh;">
                                <input class="form-control" type="password" placeholder="Mot de passe" aria-label="Mdp">
                            </div>
                        </div>
                        <div class="d-flex justify-content-end pe-1">
                            <button class="btn btn-sm btn-rouge-velours mx-2" type="submit">Connection</button>
                            <button class="btn btn-sm btn-rouge-velours" type="submit">Chaussette ?</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </nav>

    <div class = "bg-image d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card text-rouge-velours text-center">
                        Bonjour aventurier en quête de gloire (ou de simple survie) dans l'univers rocambolesque des Donjons
                        de
                        Naheulbeuk ! 🌟 <br />
                        Bienvenue sur notre site web, le sanctuaire ultime pour les maîtres du jeu et les héros en herbe qui
                        cherchent à plonger <br />
                        dans les aventures épiques (et souvent absurdes) de Naheulbeuk.<br />
                        Ici, vous pourrez gérer vos parties avec une aisance digne du ranger (sans vous perdre,
                        promis),<br />
                        créer des quêtes aussi épiques que la fameuse "Course au saucisson",<br />
                        et partager vos exploits héroï-comiques avec une communauté aussi chaleureuse que le nain après sa
                        troisième chopine.<br />
                        Alors, que vous soyez un elfe à la précision douteuse, un barbare avec un goût prononcé pour la
                        casse,<br />
                        ou même un ménestrel dont les chansons font pleurer les trolls, notre site est fait pour vous
                        !<br />
                        Préparez vos dés, affûtez vos haches et en avant pour des aventures mémorables où le ridicule ne tue
                        pas… mais les pièges si.<br />
                        À bientôt dans les couloirs sombres et les tavernes bruyantes de Naheulbeuk ! 🗡️🎲🍺<br />
                    </div>

                </div>
            </div>
        </div>
    </div>

    <footer class="">
        <div class="container-fluid">
            <div class="row bg-parchemin fixed-bottom ">
                <div class="col text-rouge-velours d-flex justify-content-center my-4 fs-4">
                    Copyright
                </div>
            </div>
        </div>
    </footer>`;
    }
}
customElements.define("accueil-screen", AccueilScreen);
export default AccueilScreen;