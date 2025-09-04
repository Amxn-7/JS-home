class Human{
    //properties
    age;//public
    #wt = 80;//private
    ht = 180;
    constructor(newage,newheight,newweight){
        this.age = newage;
        this.ht = newheight;
        this.#wt = newweight;

    }
    //behaviour
    walking(){
        console.log("I am walking", this.#wt)
    }
    running(){
        console.log("I am running")
    }
    get fetchweight(){
        return this.#wt;
    }
    set modifyingweight(val){
        this.#wt = val;
    }
} 
let obj = new Human(50,190, 47);

console.log(obj.ht);
console.log(obj.fetchweight)
obj.walking();