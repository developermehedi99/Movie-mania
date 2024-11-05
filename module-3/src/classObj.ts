{
    // class
    class Animal {
        // name:string ;
        // specipik:string;
        // sound:string;

        // parameter propertise
        constructor(public name:string, public specipik:string, public sound:string){
            // this.name= name;
            // this.specipik=specipik;
            // this.sound=sound;
        }

        theirDak():string{
            return (`the ${this.name} is sound ${this.sound}`);
        }
    }
    
    const dog = new Animal("kukur","dog",'ghew ghew kore');
    const cat = new Animal("bilai", "cat", "meyao mewao");
   dog.theirDak();
   cat.theirDak();






    // 
}