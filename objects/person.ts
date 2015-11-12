module objects {
	//Person class ---------------
class Person {
	//Private instance variables -----------
	private _name:string;
	private _age:number;
	private _weight:number;
	
	//Constructor -----------------
	constructor(name:string, age:number, weight:number){
		this._name = name;
		this._age = age;
		this._weight = weight;
	}
	
	//Public methods -------------
	public sayName():void {
		console.log("Your name is " + this._name);
	}
}
}