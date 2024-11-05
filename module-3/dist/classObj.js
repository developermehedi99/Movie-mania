{
    // class
    var Animal = /** @class */ (function () {
        function Animal(name, specipik, sound) {
            this.name = name;
            this.specipik = specipik;
            this.sound = sound;
        }
        Animal.prototype.theirDak = function () {
            return ("the ".concat(this.name, " is sound ").concat(this.sound));
        };
        return Animal;
    }());
    var dog = new Animal("kukur", "dog", 'ghew ghew kore');
    var cat = new Animal("bilai", "cat", "meyao mewao");
    dog.theirDak();
    // 
}
