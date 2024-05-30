import Account from "../class/Account";

class AccountService{
    private _data:Account[] = [];

    get data(){
        return this._data;
    }

    constructor(){
        const Ls = localStorage.getItem('AccountList');
        if(Ls){
            this._data = JSON.parse(Ls).map((account:Account) => new Account(account));
        }else{
            localStorage.setItem('AccountList', JSON.stringify(this._data));
        }
    }
    //Methode CRUD
    create(anAccount:Account){
        //setItem
        this._data.push(anAccount);
        localStorage.setItem('AccountList', JSON.stringify(this._data));
    }

    read(filtre:(item:Account)=>Account[]){
        const Ls = localStorage.getItem('AccountList');
        if(Ls){
            this._data = JSON.parse(Ls).map((account:Account) => new Account(account));
            return this._data.filter(filtre);
        }
    }

    // update(){}

    // delete(){}
}

export default AccountService;