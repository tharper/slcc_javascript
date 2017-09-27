var Person = {
    firstname:"JIMI",
    lastname:"JAISON",
    age: 35,
    changeAge:function(){
        return this.age+1;
    }
    greet:function(){
        return "Hi, "+ this.firstname;
    }
};
console.log(Person.firstname);
console.log(Person.lastname);
console.log(Person.age);
console.log(Person.changeAge());
console.log(Person.greet());
/*Car
Attributes:Make,Model,Year,Sunroof,Lights
Methods:Honk,changelights,sunroof
 */
var car={
    Make:"Honda",
    Model:"civic",
    Year:2012,
    Sunroof:1,
    SRStatus:0,
    Lights:0,

    Honk:function(){
        return "bannnnnnnnnnnn";
    },


    Changelights:function(){
        if (Lights=1) {
            Lights = 0;
            return "Turn off the lights";
            return this.Lights;
        } else {
            return "Turn ON the lights";
            Lights=1;
            return this.Lights;
        }
    },

    checksunroof:function(){

        if (Sunroof = 1){
            if (SRStatus = 1){
                return "Sunroof is open";
            } else return "Sunroof is closed";
        }

        else return "No Sunroof";

    }


};

console.log(car.Make);
console.log(car.Year);
console.log(car.Model);
console.log(car.Lights);
console.log(car.Honk());
console.log(car.Changelights());
console.log(car.checksunroof());


/*****Calculator*/
/*****Atributes:Type
 Methods:Add,Subtract,Multiply,Divide*/

var Calculator= {
    Number: [ 1, 2, 3, 4, 5, 6, 7, 8, 9,0],
    type: ['Scientific', 'Normal'],

    Addition: function (x, y) {

        return (this.Number[2]+this.Number[3]);

    },


    Subraction:function(){
    return (this.Number[9]-this.Number[6]);
    },


    Multiply:function(){

        return(this.Number[2]*this.Number[5]*this.Number[0]);
    },


    Division:function(){

        return(this.Number[5]%this.Number[1]);


        return(this.Number[5]/this.Number[1]);


    }


    };



console.log(Calculator.Addition());
console.log(Calculator.Subraction());
console.log(Calculator.Multiply());
console.log(Calculator.Division());
console.log(Calculator.Division());



/*Dog
&&&&&&
Attribute:Breed,Colour,Eyes,Gender,Weight.
&&&&&&&&&
Method:
@@@@@@@ Bark,Fetch,Grow.
 */


var Dog={
    Name:"amigo",
    Breed:"Labrador Retriever",
    Color:"Yellow",
    Type:"American lab",
    Weight:60,
    Gender:"Male",
    Ball:0,
    Danger:0,
    Treats:0,

    Bark:function(){
        if(this.Danger == 1){
            alert("Barks");
        }
        else if(this.Danger == 0){
            alert("Happy Dog");
        }
    },

    Greet:function(){
        alert("Shake Hands");
    },

    Fetch:function(){
        if (this.ball == 1){
            alert(this.Name +" fetched the ball");
        }
        else{
            alert(this.Name +"sad");
        }
    },


    Grow:function(){
        if (this.treat == 1){
            this.Weight=75;
            return this.Weight;
        }else  return this.Weight;

}

};

console.log(Dog.Name);
console.log(Dog.Type);
console.log(Dog.Breed);
console.log(Dog.Bark());
console.log(Dog.Fetch());
console.log(Dog.Greet());
console.log(Dog.Grow());


/*Radio*/
/******/


var Radio{


    brand:'Sony'

}
