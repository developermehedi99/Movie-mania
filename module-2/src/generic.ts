{
    //Generics type
    type GenericsArray<T> = Array<T>
    
    // const rollNumbers:number[]= [23,56,78,32];
    // const rollNumbers: Array<number> = [23,56,78,32];
    const rollNumbers: GenericsArray<number> = [23,56,78,32];
    
    const names: GenericsArray<string> = ['usaila','mim','nurmoni','jannat'];

    const boolAry : GenericsArray<boolean> = [true, false,true]

    // generic array of objects
    type GenericArrayObjects<T> = Array<T>

    const user:GenericArrayObjects<{name:string;age:number;}> = [
        {
            name:'mehedi',
            age:23
        },
        {
            name:'jhankar mahbub',
            age:34
        },
    ];

    // generic tuple
    type genericsTuple<X,Y> = [X, Y];
    const user4:genericsTuple<string,string> = ['mr.x','mr.y']
    const man:genericsTuple<number,{name:string;email:string}> = [1, {name:'jhankar', email:'j@gmail.com'}]
}