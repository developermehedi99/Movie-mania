{
    // getter setter
    class amarBankBalance {
        public id:number;
        public name:string;
        protected _balance:number;

        constructor(id:number, name:string, _balance:number){
            this.id=id;
            this.name=name;
            this._balance=_balance;
        }

        // setter
        set depositeMoney(amount:number){
            this._balance = this._balance + amount;
        }

        // getter
        get myBalance (){
            return this._balance;
        }
    }

    const amarFokiraBalance = new amarBankBalance(21,"meehedi", 40);
    amarFokiraBalance.depositeMoney= 40000;
    const myMoney = amarFokiraBalance.myBalance;
    console.log(myMoney)


    // 
}