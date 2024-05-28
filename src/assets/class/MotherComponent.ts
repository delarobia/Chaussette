abstract class MotherComponent extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = this.render();
    }

    abstract render():string


}

export default MotherComponent;