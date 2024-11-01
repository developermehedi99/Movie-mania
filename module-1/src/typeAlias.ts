{
    type Student = {
        name:string;
        age:number;
        location:string;
        isMerriaa:boolean,
        phone:string
    }

    const student1: Student= {
        name:'sundori',
        age:17,
        location:'raj',
        isMerriaa:true,
        phone:'2973202'
    }
    const student2:{
        name:string;
        age:number;
        location:string;
        isMerriaa:boolean,
        phone:string
    } = {
        name:'nice',
        age:27,
        location:'raj',
        isMerriaa:false,
        phone:'2973202'
    }
    const student3: Student= {
        name:'wow beautiful',
        age:19,
        location:'raj',
        isMerriaa:true,
        phone:'2973202'
    }

    type Add = (x:number, y:number) => number;

    const add =(a:number, b:number):number => a + b

    const add2:Add =(a, b)=> a + b
}