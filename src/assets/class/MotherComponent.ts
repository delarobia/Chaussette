abstract class MotherComponent extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return ``;
    }


}

export default MotherComponent;