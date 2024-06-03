abstract class MotherComponent extends HTMLElement{

    constructor(){
        super();
    }
    abstract render():string

}

export default MotherComponent;