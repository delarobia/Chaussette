import MotherScreen from "../class/MotherScreen";

class SignUpScreen extends MotherScreen{

constructor(){
    super();
    this.innerHTML = this.render();
}


    override render(){
        return `
    <header><signin-header-component/></header>
    <div class = "bg-image d-flex align-items-center">
        <div class=" container col-7 mx-auto">
            <div id="againstBT" class="container bg-parchemin text-rouge-velours py-3 border border-4 border-rouge-velours"> 
                <div class="d-flex justify-content-center mt-3 mb-5 text-uppercase fw-bold fs-3">Rejoins Chaussette !</div>
                <div class="form_display mb-3 row">
                    <div class ="col-6 d-flex justify-content-between align-items-center">
                        <img class ="formIcons" src="./src/assets/img/memory_sword.svg">
                        <label for="inputPseudo" class="col-form-label fs-5">Pseudo : </label>
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control" id="inputPseudo">
                    </div>
                </div>
                <div class="form_display mb-3 row">
                    <div class ="col-6 d-flex justify-content-between align-items-center">
                        <img class ="formIcons" src="./src/assets/img/memory_email.svg">
                        <label for="input" class="col-form-label fs-5">Email : </label>
                    </div>
                    <div class="col-4">
                        <input type="text"  class="form-control" id="inputEmail">
                    </div>
                </div>
                <div class="form_display mb-3 row">
                    <div class ="col-6 d-flex justify-content-between align-items-center">
                        <img class ="formIcons" src="./src/assets/img/memory_key.svg">
                        <label for="inputPassword" class="col-form-label fs-5">Mot de passe : </label>
                    </div>
                    <div class="col-4">
                        <input type="password" class="form-control" id="inputPassword">
                    </div>
                </div>
                <div class="form_display mb-3 row">
                    <div class ="col-6 d-flex justify-content-between align-items-center">
                        <img class ="formIcons" src="./src/assets/img/memory_key.svg">
                        <label for="inputPassword2" class="col-form-label fs-5">Confirmez le mot de passe : </label>
                    </div>
                    <div class="col-4">
                        <input type="password" class="form-control" id="confirmPassword">
                    </div>
                </div>
                <div class="form_display mb-3 row">
                    <div class ="col-6 d-flex justify-content-between align-items-center">
                        <img  class ="formIcons" src="./src/assets/img/fa-solid_crown.svg">
                        <label for="flexRadio" class="col-form-check-input fs-5" >Je souhaite devenir MJ : </label>
                    </div>
                    <div class="col-4 d-flex">
                        <input type="checkbox" class="form-check-label " id="mjRadio">
                    </div>
                </div>
                <div class="text-center">
                    <button class="btn text-rouge-velours bg-white fs-5 fw-bold">Chaussette !</button>
                </div>
            </div>
        </div>
    </div>

    <footer-component>
        `
    }
}

customElements.define("signup-screen", SignUpScreen);
export default SignUpScreen;