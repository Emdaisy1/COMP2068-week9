//Person class ---------------
var Person = (function () {
    //Constructor -----------------
    function Person(name) {
        this._name = name;
    }
    //Public methods -------------
    Person.prototype.sayName = function () {
        console.log("Your name is " + this._name);
    };
    return Person;
})();
var Emma = new Person(Emma);
Emma.sayName();
//# sourceMappingURL=app.js.map