class AccueilScreen extends HTMLElement{
    constructor(){
        super();

        //appeler composants
        // TODO Header
        // TODO Footer
        this.innerHTML = this.render();
    }

    render(){
        return `<h1>Titre</h1>`;
    }
}
customElements.define("accueil-screen", AccueilScreen);
export default AccueilScreen;