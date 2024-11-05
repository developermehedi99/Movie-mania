{
    // type of -> type guard
    const add=(a:number | string, b: number | string): number | string =>{
        if(typeof a === "number" && typeof b === "number"){
            return a + b;
        } else{
            return a.toString() + b.toString();
        }
    }
    const result = add('23',65);
    console.log(result  )


    // in guard 
    type NormalUser = {
        name:string;
    }
    type AdmisUser = {
        name:string;
        roll:"admin"
    }

    const getUser =(user:NormalUser | AdmisUser)=>{
        if("roll" in user){
            console.log(`my name is ${user.name} and my roll is ${user.roll}`)
        } else{
            console.log(`my name is ${user.name}`)
        }
    }

    const normalUser : NormalUser ={
        name:'talukdar'
    }
    const adminUser : AdmisUser = {
        name:'sarkar',
        roll:"admin"
    }

    getUser(adminUser);
    
}