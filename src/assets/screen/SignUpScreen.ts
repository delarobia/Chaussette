import Account from "../class/Account";
import MotherScreen from "../class/MotherScreen";
import AccountService from "../services/AccountService";

class SignUpScreen extends MotherScreen{

    private _form: HTMLFormElement;

constructor(){
    super();
    this.innerHTML = this.render();

    this._form = this.querySelector('#createAccount') as HTMLFormElement;
    this._form.onsubmit = this.handleFormSubmit;
}

handleFormSubmit = (e:SubmitEvent):void => {
    e.preventDefault();
    const entries = Object.fromEntries(new FormData(this._form));
    try{
        //TODO vérifier que create password = à confirmPassword (Solen)
        //TODO id + MJ ?
        let testaccount = new Account({
            id:0,
            pseudo:entries.createPseudo.toString(),
            password:entries.createPassword.toString(),
            MJ:false,
            email:entries.createEmail.toString()
        })
        const AcService = new AccountService();
        AcService.create(testaccount);

    } catch (error){
        console.warn(error);
    }
    console.log("passes pas ici");
}

    override render(){
        return `
    <header><signin-header-component/></header>
    <div class = "bg-image d-flex align-items-center">
        <div class=" container col-7 mx-auto">
            <form novalidate id="createAccount">
                <div id="againstBT" class="container bg-parchemin text-rouge-velours py-3 border border-4 border-rouge-velours"> 
                    <div class="d-flex justify-content-center mt-3 mb-5 text-uppercase fw-bold fs-3">Rejoins Chaussette !</div>
                    <div class="form_display mb-3 row">
                        <div class ="col-6 d-flex justify-content-between align-items-center">
                            <img class ="formIcons" src="./src/assets/img/memory_sword.svg">
                            <label for="inputPseudo" class="col-form-label fs-5">Pseudo : </label>
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" id="inputPseudo" name="createPseudo">
                        </div>
                    </div>
                    <div class="form_display mb-3 row">
                        <div class ="col-6 d-flex justify-content-between align-items-center">
                            <img class ="formIcons" src="./src/assets/img/memory_email.svg">
                            <label for="input" class="col-form-label fs-5">Email : </label>
                        </div>
                        <div class="col-4">
                            <input type="text"  class="form-control" id="inputEmail" name="createEmail">
                        </div>
                    </div>
                    <div class="form_display mb-3 row">
                        <div class ="col-6 d-flex justify-content-between align-items-center">
                            <img class ="formIcons" src="./src/assets/img/memory_key.svg">
                            <label for="inputPassword" class="col-form-label fs-5">Mot de passe : </label>
                        </div>
                        <div class="col-4">
                            <input type="password" class="form-control" id="inputPassword" name="createPassword">
                        </div>
                    </div>
                    <div class="form_display mb-3 row">
                        <div class ="col-6 d-flex justify-content-between align-items-center">
                            <img class ="formIcons" src="./src/assets/img/memory_key.svg">
                            <label for="inputPassword2" class="col-form-label fs-5">Confirmez le mot de passe : </label>
                        </div>
                        <div class="col-4">
                            <input type="password" class="form-control" id="confirmPassword" name="confirmPassword">
                        </div>
                    </div>
                    <div class="form_display mb-3 row">
                        <div class ="col-6 d-flex justify-content-between align-items-center">
                            <img  class ="formIcons" src="./src/assets/img/fa-solid_crown.svg">
                            <label for="flexRadio" class="col-form-check-input fs-5" >Je souhaite devenir MJ : </label>
                        </div>
                        <div class="col-4 d-flex">
                            <input type="checkbox" class="form-check-label " id="mjCheckbox" name="createMJ">
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="btn text-rouge-velours bg-white fs-5 fw-bold">Chaussette !</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <footer-component>
        `
    }
}

customElements.define("signup-screen", SignUpScreen);
export default SignUpScreen;