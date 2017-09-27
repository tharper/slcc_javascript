//////////////////PROBLEM 1////////////////////


//Create a function called isWeekEnd that accepts a day of the week (Monday - Sunday) as it's only parameter.
//If the argument you passed in is equal to 'Saturday', return true. If it's not, return false.

//Code Here
function isWeekEnd(day) {
    if (day == "Saturday") {
        return true
    }
    return false;
}
//Tests
isWeekEnd("Saturday")
isWeekEnd("Monday")

//////////////////PROBLEM 2////////////////////


//Use the same function in problem 1 and check to see if day is equal to Saturday or Sunday. Return true or false.


//Code Here
function isWeekEnd(day) {
    if (day == "Saturday" || day == "Sunday") {
        return true
    }
    return false;
}
//Tests
isWeekEnd("Saturday")
isWeekEnd("Monday")
//////////////////PROBLEM 3////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


//Code Here
function getName() {
    var userName = prompt("Please input your name")
    return userName
}
//Tests
getName()

//////////////////PROBLEM 4////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

//Code Here
function getName() {
    var userName = prompt("Please input your name")
    return userName
}
function welcome(){
    var x = "Welcome, "
    alert(x + getName());
}
//Test
welcome()


//////////////////PROBLEM 5////////////////////



//Create a function called myName that returns your name

//Code Here
function myName(){
    return "Marissa Smith"
}
//Test
myName()


//Now save the function definition of myName into a new variable called newMyName

//Code Here

var newMyName= myName()

alert(newMyName())
//Now alert the result of invoking newMyName



//////////////////PROBLEM 6////////////////////



//Create a function  to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

//Code Here
function n(x, y){
    if(x==y){
        return (x+y)*3
    }
    return x+y;
}
n()



//////////////////PROBLEM 7////////////////////



//Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.

//Code Here
function n(x, y){
    if(x==50 || y==50 || x+y==50){
        return true
    }
    return false
}
n()


//OR
function n(x, y){
    return ((x==50|| y==50 || x+y==50))
}
n()
