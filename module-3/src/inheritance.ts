{
    // inheritance 

    // parent
    class Person {
        name:string;
        age:number;
        address:string

        constructor(name:string, age:number, address:string){
            this.name= name;
            this.age=age;
            this.address=address;
        }

        sleepOf(sleepOfHourse:number){
            console.log(`the ${this.name} sleep ${sleepOfHourse} hourse`);
        }
    }

    // student
    class Student extends Person {
        constructor(name:string, age:number, address:string){
            super(name,age,address);
        }
    }

    const student1 = new Student("badol", 29,"rajshahi");
    student1.sleepOf(5)

    // teacher
    class Teacher extends Person{
        position:string

        constructor(name:string, age:number, address:string, position:string){
            super(name,age,address);
            this.position=position;
        }
        hisPosi(){
            console.log(`the ${this.name} position is ${this.position}`);
        }
        takeClass(classNum:number){
            console.log(`the ${this.name} take class is ${classNum}`);
        }
    }

    const teacher1 = new Teacher("kadol sir", 39,"rajshahi","professor");
    teacher1.sleepOf(8);
    teacher1.hisPosi();
    teacher1.takeClass(6);





    // 
}