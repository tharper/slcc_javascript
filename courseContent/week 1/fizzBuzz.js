for ( var n=100; n >= 1; n--) {
    var output ="";
    if (n%3==0){
        output= "fizz";
    }
    if (n%5==0){
        output = "buzz";
    }
    console.log(output || n)

}

var message = "how";
message = " are";
message += " you Tyson";

console.log(message);