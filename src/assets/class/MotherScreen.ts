import FooterComponent from "../components/FooterComponent";

abstract class MotherScreen extends HTMLElement{

    protected _props:any;
    
    constructor(){
        super();
        
        this._props = {};
        this._props.onlineHeader;//TODO
        this._props.SigninHeader//TODO
        this._props.footer = new FooterComponent();

        this.innerHTML = this.render();
    }
    abstract render():string
    
}
export default MotherScreen;