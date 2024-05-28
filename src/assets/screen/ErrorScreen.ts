import MotherScreen from "../class/MotherScreen";

let tabqui :string[]= [
    "qu' un zombie", "que le troll érudit",
    "que l'un des gardiens", "qu' un rat mutant",
    "que l'aubergiste", "que le bourreau ivre",
    "qu'un ménestrel moche", "que le gobelin de ménage",
    "qu'un orque d'élite", "que le sorcier stagiaire",
    "qu'un type suspect", "que le prisonier barbu",
    "que l'herboriste", "que le chien d'un voisin",
    "qu'un garde de la ville", "qu'un colporteur",
    "qu'un aventurier", "que le plombier",
    "que l'ingénieur gobelin", "qu'un vieux fou",
];
let tabquoi = [
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
let tabou = [
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
let tabadjectif = [
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
let tabtruc = [
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
let tabquesque = [
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

class ErrorScreen extends MotherScreen {

    constructor() {
        super();
        this.innerHTML = this.render();
    }

    render() {
        let element = this.getErreurRandom();
        return `
        <div><signin-header-component></div>

        <div class="container">
            <div class="row my-5 align-items-center">
                <div class="col-sm-7">
                    <div class="card ">
                        <div class="card-body bg-parchemin">
                            <div class="text-rouge-velours text-center"> Je suis désolé, la page demandée n'existe pas, <br/>
                            c'est parce ${element.qui} ${element.quoi} dans ${element.ou} <br/>
                            et tout ça à cause ${element.adjectif} ${element.truc} qui ${element.quesque} <br/>
                            donc <a href="/">retournez à l'accueil</a>.</div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-5">
                    <img class="img-fluid" src="./src/assets/img/Nain_Art_corrigé.png" alt="Le nain">
                </div>
            </div>
        </div>

        <div><footer-component></div>`;
    }

    getErreurRandom() {
        let qui, quoi, ou, quesque, truc, adjectif;
        qui = this.getRandom(tabqui);
        quoi = this.getRandom(tabquoi);
        ou = this.getRandom(tabou);
        quesque = this.getRandom(tabquesque);
        truc = this.getRandom(tabtruc);
        adjectif = this.getRandom(tabadjectif);
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