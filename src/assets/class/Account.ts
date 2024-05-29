import AccountInterface from "../interface/AccountInterface";

class Account{
    private _id:number = -1;
    private _pseudo:string = "";
    private _email:string = "";
    private _password:string = "";
    private _MJ:boolean = false;

    constructor(props : AccountInterface){
        const{id, pseudo, email, password, MJ} = props;
        this.id = id;
        this.pseudo = pseudo;
        this.email = email;
        this.password = password;
        this.MJ = MJ;
    }

    get id(){
        return this._id;
    }

    set id(value){
        this._id = value;
    }

    get pseudo(){
        return this._pseudo;
    }

  set pseudo(value){
    this._pseudo = value;
    }

    get email(){
        return this._email;
    }

    set email(value){
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
        if(regex.test(value)){
            this._email = value;
        }else{
            throw new EvalError("$[value] n'est pas un mail valide");
        }
        
    }

    get password(){
        return this._password;
    }

    set password(value){
        this._password = value;
    }

    get MJ(){
        return this._MJ;
    }

    set MJ(value){
        this._MJ = value;
    }

    toJSON(){
        return{
            id : this.id,
        pseudo : this.pseudo,
        email : this.email,
        password : this.password,
        MJ : this.MJ
        }
    }
}

export default Account;