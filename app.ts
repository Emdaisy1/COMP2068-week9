//Person class ---------------
class Person {
	private _name:string;
	//Constructor -----------------
	constructor(name:string){
		this._name = name;
	}
	
	//Public methods -------------
	public sayName():void {
		console.log("Your name is " + this._name);
	}
}

var Emma = new Person(Emma);
Emma.sayName();