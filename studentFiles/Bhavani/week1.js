//Create a function called isWeekEnd that accepts a day of the week (Monday - Sunday) as it's only parameter.
//If the argument you passed in is equal to 'Saturday', return true. If it's not, return false.

//Code Here
var day;
 function isweekend(day) {

if(day=="Saturday"){

    return true;}

    else

    return false;
 }

 isweekend("Monday");


//////////////////PROBLEM 2////////////////////


//Use the same function in problem 1 and check to see if day is equal to Saturday or Sunday. Return true or false.


var day;
function isweekend(day) {

    if(day=="Saturday"||"Sunday")
     {

        return true;}

    else

        return false;
}

isweekend("Monday");

//////////////////PROBLEM 3////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
var x=prompt("name");
function getname(){

    return x;
}
getname();

//////////////////PROBLEM 4////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.
var x=prompt("name");
function getname(){

    return x;
}
function welcome(){
 var  y=getname();
    alert("welcome," +y);
}

welcome();
//////////////////PROBLEM 5////////////////////



//Create a function called myName that returns your name
var x;
function myName(x){
    return x;
}

myName("lithika");

//Now save the function definition of myName into a new variable called newMyName

function myName()
{
    var name;
    name=prompt("name");
    return name;
};

   var newMYName=myName();
    alert('Mynewname is,'+newMYName);




//Now alert the result of invoking newMyName



//////////////////PROBLEM 6////////////////////



//Create a function  to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

var x,y;
function  triplesum(x,y)
{

    if (x==y)
    {
        return 3*(x+y);
    }

}

triplesum(5,5);



//////////////////PROBLEM 7////////////////////



//Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.

//Code Here

function test50(x,y) {
    if (x == 50) {
        return x;
    }

    if (y == 50) {
        return y;
    }

    if (x + y == 50) {
        return (x + y);
    }
}

 test50(50,10);

