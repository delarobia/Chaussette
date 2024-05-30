import MotherComponent from "../class/MotherComponent";

class OnlineHeaderComponent extends MotherComponent{

    constructor(){
        super();
        this.innerHTML = this.render()
    }

    // TODO : Mettre ici la navbar d'un utilisateur connecté 
    render(): string {
        return `<h1>NAVBAR ONLINE</h1>`
    }
}
customElements.define("online-header-component", OnlineHeaderComponent)

export default OnlineHeaderComponent;