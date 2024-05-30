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
        let regex = /^[a-zA-Z0-9-_&@]{3,}/
        if(regex.test(value)){
            this._pseudo = value;
        } else {
            throw new EvalError(`${value} n'est pas pseudo valide`);
        }
    }

    get email(){
        return this._email;
    }

    set email(value){
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
        if(regex.test(value)){
            this._email = value;
        } else {
            throw new EvalError(`${value} n'est pas un mail valide`);
        }
        
    }

    get password(){
        return this._password;
    }

    set password(value){
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/
        if (regex.test(value)){
            this._password = value;
        } else {
            throw new EvalError(`"${value}" n'estne correspond pas à un mot de passe valide`);
        }
        
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

    toString(){
        return `Id : ${this.id}, Pseudo : ${this.pseudo}, Mail : ${this.email}, Mot de passe : ${this.password} et ${this.MJ?"est un MJ":"n'est pas un MJ"}`
    }
}

export default Account;