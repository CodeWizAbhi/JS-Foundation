function User(name){
    this.name = name;
    this.sayHi = function(){
        alert("My name is: "+name);
    };
}
let john = User("John")
john.sayHi();