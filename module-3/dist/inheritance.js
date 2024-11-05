var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    // inheritance 
    // parent
    var Person = /** @class */ (function () {
        function Person(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        Person.prototype.sleepOf = function (sleepOfHourse) {
            console.log("the ".concat(this.name, " sleep ").concat(sleepOfHourse, " hourse"));
        };
        return Person;
    }());
    // student
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, address) {
            return _super.call(this, name, age, address) || this;
        }
        return Student;
    }(Person));
    var student1 = new Student("badol", 29, "rajshahi");
    student1.sleepOf(5);
    // teacher
    var Teacher = /** @class */ (function (_super) {
        __extends(Teacher, _super);
        function Teacher(name, age, address, position) {
            var _this = _super.call(this, name, age, address) || this;
            _this.position = position;
            return _this;
        }
        Teacher.prototype.hisPosi = function () {
            console.log("the ".concat(this.name, " position is ").concat(this.position));
        };
        Teacher.prototype.takeClass = function (classNum) {
            console.log("the ".concat(this.name, " take class is ").concat(classNum));
        };
        return Teacher;
    }(Person));
    var teacher1 = new Teacher("kadol sir", 39, "rajshahi", "professor");
    teacher1.sleepOf(8);
    teacher1.hisPosi();
    teacher1.takeClass(6);
    // 
}
