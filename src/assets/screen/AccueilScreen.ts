class AccueilScreen extends HTMLElement{

    constructor(){
        super();
        // TODO Composant Header
        // TODO Composant Footer
        this.innerHTML = this.render();
    }

    render(){
        return`
        <h1> je suis uns page HTML</h1>`
    }

}
customElements.define("accueil-screen", AccueilScreen)

export default AccueilScreen;