import MotherComponent from "../class/MotherComponent";

class FooterComponent extends MotherComponent{
    
    override render(){
        return `
        <footer class="">
        <div class="container-fluid">
            <div class="row bg-parchemin fixed-bottom ">
                <div class="col text-rouge-velours d-flex justify-content-center my-4 fs-4">
                    Tu veux un chiantos ?
                </div>
            </div>
        </div>
    </footer>
        `
    }
}
customElements.define("footer-component", FooterComponent);
export default FooterComponent;