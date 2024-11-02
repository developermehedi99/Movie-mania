{
    // generic constraints with keyof operator
    type vicols = {
        car:string;
        bike:string;
        iPhone:string
    }

    type owner = "car" | "bike" | "iPhone";
    type owner2 = keyof vicols;

    // const person : owner = 'bike';
    // const person2 : owner2 = 'car';

    const getOutputAny = <X, Y extends keyof X>(obj:X, key:Y)=>{
        return obj[key];
    }
    const user ={
        model:'yamaha',
        price:23
    }
    const resu = getOutputAny(user, "model")
}