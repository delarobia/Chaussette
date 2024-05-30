import FooterComponent from "../components/FooterComponent";
import SigninHeaderComponent from "../components/SigninHeaderComponent";

abstract class MotherScreen extends HTMLElement{

    protected _props:any;
    
    constructor(){
        super();
        
        this._props = {};
        this._props.onlineHeader;//TODO
        this._props.SigninHeader = new SigninHeaderComponent();
        this._props.footer = new FooterComponent();
    }
    abstract render():string
    
}
export default MotherScreen;