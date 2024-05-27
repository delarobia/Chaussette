class ErrorScreen extends HTMLElement {
    private tabqui = [
        "qu' un zombie",
        "que le troll érudit",
        "que l'un des gardiens",
        "qu' un rat mutant",
        "que l'aubergiste",
        "que le bourreau ivre",
        "qu'un ménestrel moche",
        "que le gobelin de ménage",
        "qu'un orque d'élite",
        "que le sorcier stagiaire",
        "qu'un type suspect",
        "que le prisonier barbu",
        "que l'herboriste",
        "que le chien d'un voisin",
        "qu'un garde de la ville",
        "qu'un colporteur",
        "qu'un aventurier",
        "que le plombier",
        "que l'ingénieur gobelin",
        "qu'un vieux fou",
    ];
    private tabquoi = [
        "a glissé",
        "a dérapé",
        "a cassé un bidule",
        "a brisé un truc",
        "a vomi",
        "a perdu ses clés",
        "a fait ses besoins",
        "était bloqué",
        "s'est perdu",
        "est tombé",
        "s'est endormi",
        "a passé la nuit",
        "s'est reveillé",
        "s'est tué",
        "s'est fait mal",
        "a trébuché",
        "était coincé",
        "s'est battu",
        "a causé des ennuis",
        "a mis le feu",
    ];
    private tabou = [
        "la cave",
        "le souterrain nord",
        "le grenier",
        "mon bureau",
        "la remise à ingrédients",
        "les cuisines",
        "la niches des chiens",
        "la volière à corbeaux",
        "la fosse à scorpions",
        "votre bureau",
        "l'escalier du deuxième niveau",
        "le bac du limon glaireux",
        "le couloir principal",
        "le hangar de bricolage",
        "l'atelier de forge",
        "la salle de fouettage",
        "le dortoir des orques",
        "l'antre de Golbarg",
        "le magasin",
        "votre bibliothèque",
    ];
    private tabadjectif = [
        "de cette bête",
        "de cette stupide",
        "d'une grosse",
        "d'une infâme",
        "d'une étrange",
        "d'une incroyable",
        "de l'improbable",
        "de la fameuse",
        "de cette imbécile de",
        "de la ridicule",
        ", c'est ballot, de la",
        "de l'existance d'une",
        "de l'embûche causée par une",
        "du piège que représentait une",
        "de la présence de cette",
        ", vous allez rire, d'une",
        ", c'est bien dommage, de la",
        "de la position d'une",
        "de son penchant pour une",
        "d'une médiocre",
    ];
    private tabtruc = [
        "brouette rouillée",
        "manivelle tordue",
        "scie tordue",
        "bassine oubliée",
        "clé de douze",
        "corbeille de linge",
        "hallebarde tordue",
        "chouette empaillée",
        "terrien piegée",
        "flûte empoisonnée",
        "tête de goule",
        "faux venimeuse",
        "guitare disloquée",
        "bielle biscornue",
        "salière brisée",
        "peau de banane",
        "perruque décrépie",
        "chaussette rouge",
        "babouche verte",
        "pantoufle usée",
    ];
    private tabquesque = [
        "venait de ma grand-mère",
        "était justement là",
        "est apparue comme par magie",
        "venait de votre cousin",
        "avait été abandonnée",
        "était suspecte",
        "n'aurait pas dû se trouver là",
        "avait justement l'air fourbe",
        "était dans l'ombre",
        "n'avait l'air de rien",
        "a été laissée par un voisin",
        "était bel et bien dangereuse",
        "était pourtant chère",
        "avait une odeur inquiétante",
        "avait changé de place",
        "aurait dû être rangée",
        "vous appartient",
        "s'est révélée glissante",
        "était peut-être à moi",
        "pose toujours des problèmes",
    ];

    constructor() {
        super();
        this.innerHTML = this.render();
    }

    render() {
        let element = this.getErreurRandom();
        return `
        <nav class="navbar navbar-expand-lg bg-parchemin">
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
                </ul>
                <form class="d-flex" role="connect">
                    <input class="form-control me-2" type="text" placeholder="Identifiant" aria-label="Id">
                    <input class="form-control me-2" type="password" placeholder="Mot de passe" aria-label="Mdp">
                    <button class="btn btn-outline-success" type="submit">Connection</button>
                </form>
            </div>
        </div>
        </nav>

        <div class="text-rouge-velours bg-light"> Je suis désolé, la page demandée n'existe pas, c'est parce ${element.qui} ${element.quoi} dans ${element.ou} et tout ça à cause ${element.adjectif} ${element.truc} qui ${element.quesque} donc <a href="/">retournez à l'accueil</a>.</div>
        
        <footer class="">
        <div class="container-fluid">
            <div class="row bg-parchemin fixed-bottom ">
                <div class="col text-rouge-velours d-flex justify-content-center my-4">
                    Copyright
                </div>
            </div>
        </div>
        </footer>`;
    }

    getErreurRandom() {
        let qui, quoi, ou, quesque, truc, adjectif;
        qui = this.getRandom(this.tabqui);
        quoi = this.getRandom(this.tabquoi);
        ou = this.getRandom(this.tabou);
        quesque = this.getRandom(this.tabquesque);
        truc = this.getRandom(this.tabtruc);
        adjectif = this.getRandom(this.tabadjectif);
        return {
            qui: qui,
            quoi: quoi,
            ou: ou,
            quesque: quesque,
            truc: truc,
            adjectif: adjectif,
        };
    }

    getRandom(tab: string[]) {
        return tab[Math.floor(Math.random() * tab.length)];
    }
}
customElements.define("error-screen", ErrorScreen);

export default ErrorScreen;