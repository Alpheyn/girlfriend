class GirlFriend{
is_single: boolean;
name: string;
age: string;
does_love_you: boolean;
is_hot: boolean;
is_beautiful: boolean;
is_pretty: boolean;
is_awesome: boolean;
is_cute: boolean;
is_funny: boolean;
is_sweet: boolean;
    constructor() {
        this.name = "Kitagawa";
        this.age = "20";
        this.is_hot = true;
        this.does_love_you = true;
        this.is_single = false;
        this.is_pretty = true;
        this.is_beautiful = true;
        this.is_cute = true;
        this.is_awesome = true;
        this.is_funny = true;
        this.is_sweet = true;}
        kiss_me() {
            console.log("Kissing you");
          }
        
          hug_me() {
            console.log("Hugging you");
          }
        
          introduce_yourself() {
            console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old.");
          }
        
}
export default GirlFriend;