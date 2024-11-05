{
    // access modify
    class BalanceAccount {
       public id:number;
       public name:string;
       protected _balance:number

        constructor(id:number, name:string,  balance:number){
            this.id = id;
            this.name= name;
            this._balance= balance;
        }

        addDeposite(amount:number){
            this._balance = this._balance + amount;
        }

        getBalance(){
            return this._balance;
        }
    }

    // class StudentBalance extends BalanceAccount{
    //     test(){
    //         this._balance
    //     }
    // }

    const goribManusBalance = new BalanceAccount(21,"rana",20);
    goribManusBalance.addDeposite(20);
    const myAccount = goribManusBalance.getBalance();
    console.log(myAccount);
    // 
}
