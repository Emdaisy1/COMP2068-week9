var objects;
(function (objects) {
    //Person class ---------------
    var Person = (function () {
        //Constructor -----------------
        function Person(name, age, weight) {
            this._name = name;
            this._age = age;
            this._weight = weight;
        }
        //Public methods -------------
        Person.prototype.sayName = function () {
            console.log("Your name is " + this._name);
        };
        return Person;
    })();
    objects.Person = Person;
})(objects || (objects = {}));
//# sourceMappingURL=person.js.map