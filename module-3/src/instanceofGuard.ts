{
    // 
    class Animal {
        name:string;
        category:string;

        constructor(name:string, category:string){
            this.name = name;
            this.category=category;
        }

        makeSound(){
            console.log('the animal is sounding');
        }
    }

    class Dog extends Animal {
        constructor(name:string, category:string){
            super(name, category);
        }

        makeBar(){
            console.log('the dog is barking')
        }
    }
    
    class Cat extends Animal{
        constructor(name:string, category:string){
            super(name,category)
        }

        makeMeyaw(){
            console.log('the cat is mew mew')
        }
    }

    // smart way handle 
    const isDog =(animal:Animal): animal is Dog => {
        return animal instanceof Dog;
    }
    const isCat =(animal:Animal): animal is Cat =>{
        return animal instanceof Cat;
    }

    const getAnimal=(animal:Animal)=> {
        if(isDog(animal)){
            animal.makeBar();
        }else if(isCat(animal)){
            animal.makeMeyaw();
        }else{
            animal.makeSound();
        }
    }

    const dog = new Dog ("pagla dog", "dog");
    const cat = new Cat ("bilas mew", "cat");
    
    getAnimal(cat);
    getAnimal(dog);

    // 
}