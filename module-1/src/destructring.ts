{
const user={
    id:9023,
    name:{
        fName:'mehedi',
        mName:'hasan',
        lName:'rana'
    },
    village:'borboria',
    isEducate:true
}

const {id, name:{mName},isEducate} = user;


// array destructing
const money:number[] = [23,45,83,98,11,34];
const [a,,c,...rest] = money;
console.log(a);
}