class animal {
    constructor(name, legcount, speaks) {
        this.name = name
        this.legcount = legcount
        this.speaks = speaks

    }
speak(){
     console.log("hi there" + this.speaks)
}

}
let dog = new animal("dog",4, "bhow bhow");
let cat = new animal("cat",4,"meow meow");

cat.speak();
