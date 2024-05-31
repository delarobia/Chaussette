import MotherScreen from "../class/MotherScreen";

class AccueilScreen extends MotherScreen{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    override render(){
        return `

        <div>${this.getGoodheader()}</div>

        <div class = "bg-image d-flex align-items-center justify-content-center pb-5">
            <div class="container row">
                <div class=" col-12 container bg-white bg-opacity-75 text-rouge-velours text-center border border-4 border-rouge-velours fs-4 py-5 px-4">
                    Bonjour aventurier en quête de gloire (ou de simple survie) dans l'univers rocambolesque des Donjons de Naheulbeuk ! 🌟 <br />
                    Bienvenue sur notre site web, le sanctuaire ultime pour les maîtres du jeu et les héros en herbe qui cherchent à plonger <br />
                    dans les aventures épiques (et souvent absurdes) de Naheulbeuk.<br />
                    Ici, vous pourrez gérer vos parties avec une aisance digne du ranger (sans vous perdre, promis),<br />
                    créer des quêtes aussi épiques que la fameuse "Course au saucisson",<br />
                    et partager vos exploits héroï-comiques avec une communauté aussi chaleureuse que le nain après sa troisième chopine.<br />
                    Alors, que vous soyez un elfe à la précision douteuse, un barbare avec un goût prononcé pour la casse,<br />
                    ou même un ménestrel dont les chansons font pleurer les trolls, notre site est fait pour vous!<br />
                    Préparez vos dés, affûtez vos haches et en avant pour des aventures mémorables où le ridicule ne tue pas… mais les pièges si.<br />
                    À bientôt dans les couloirs sombres et les tavernes bruyantes de Naheulbeuk ! 🗡️🎲🍺<br />
                </div>
            </div>
        </div>



    <footer><footer-component/></footer>

       `;
    }

}
customElements.define("accueil-screen", AccueilScreen);

export default AccueilScreen;