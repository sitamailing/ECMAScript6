"use strict";


/** 1. let **/

/** Javascript **/
var myFirstVariables = 2;  // 'var' has global scope
console.log(myFirstVariables);

/** ES6 **/
let myFirstVariable = 1; // 'let' has limit scope
console.log(myFirstVariable);


/** 2. const **/

/** ES6**/
const pi = 3.14;
console.log(pi); // print 3.14

//pi = 4;
//console.log(pi); // throw error because const variable cannot be modified.

/** 3. Object Literal **/

/** Javascript **/
//function foods(favFood, badFood){
//    return {
//        favFood : favFood,
//        badFood: badFood
//    }
//}

/** ES6 **/
function foods(favFood, badFood) {
    return {
        favFood,
        badFood
    }
}
var myFood = foods('Burger', 'Noting');
console.log(myFood);


/** 4. Destructuring **/
// Allows to assign value

var bestSitesInTheWorld = ['Google', 'Yahoo', 'Facebook', 'LinkedIn'];

/** Javascript **/
var first = bestSitesInTheWorld[0];
var second = bestSitesInTheWorld[1];
var third = bestSitesInTheWorld[2];
console.log(first); // print Google
console.log(second); // print Yahoo
console.log(third); // print Facebook

/** ES6 **/
var [first, second, third] = bestSitesInTheWorld;
console.log(first); // print Google
console.log(second); // print Yahoo
console.log(third); // print Facebook

var [first, second,,fourth] = bestSitesInTheWorld;

console.log(first); // print Google
console.log(fourth); // print LinkedIn
console.log(second); // print Yahoo

// three dots knows as spread operator
var [first, second, ...restList] = bestSitesInTheWorld;

console.log(first); // print Google
console.log(second); // print Yahoo
console.log(restList); //print ['Facebook', 'LinkedIn']

function doesEverythingPossibleTo2Bumbers(a, b) {
    return [a + b, a - b, a * b, a / b, a % b, a ^ b, a == b];
}

var [add, sub, mul, div, mod, po, eq] = doesEverythingPossibleTo2Bumbers(2, 3);
console.log(add);
console.log(mul);

var [add, sub, ...whatever] = doesEverythingPossibleTo2Bumbers(2, 3);
console.log(add);
console.log(whatever);

var food = {
    burgers: 'McBurger',
    coffee: 'Starbucks'
};
// Property can be used as a variable
var {burgers, coffee} = food;

console.log(coffee);


/** 5. Rest And Spread **/

var webLanguages = ['html', 'angular', 'ES2', 'css'];
var serverLanguages = ['php', 'asp', 'java'];
var computerLanguages = ['c', 'c++'];

// Create array with array
var fullStackLanguage = [webLanguages, serverLanguages];

// Create single array
var fullStackLanguage = [...webLanguages, ...serverLanguages];

fullStackLanguage.push(...computerLanguages);
console.log(fullStackLanguage);

// Spread examples
function myfunction(arg1, arg2, ...rest){
    console.log(rest);
}

myfunction(1, 2, 3, 4, 5, 6, 7); // print [3, 4, 5, 6, 7]


/** 6. Add default to an argument in a function **/
/** javascript **/
//function myfun(arg1, arg2){
//    if(arg2 == undefined){
//      arg2 = 100;
//    }
//    console.log(arguments)
//}
//
//myfun(50);

/** ES6 **/
function myfun(arg1, arg2 = 100) {
    console.log(arguments);
    console.log(arg2);
    console.log(arg1 + arg2);
}

myfun(50);


/** 7. Fat Arrow Functions **/

//var add = function(num1, num2){
//    return num1 + num2;
//};

// ES6
var addition = (num1, num2) =>
{
    return num1 + num2;
};
console.log(addition(10, 40));

// OR

var add = (num1, num2) =>
num1 + num2;

console.log(add(10, 40));

var addValue = (...num1) => num1;
console.log(addValue(10, 20, 30, 40));


/** 8. Lexical Scope (this) **/
//
//function startGame(){
//    this.lives = 0;
//    var that = this;
//    this.addLives = function(){
//        this.oneUp = setTimeout(function(){
//            console.log(++that.lives);
//        }, 1000);
//    }
//}

/** ES6 **/
//function startGame(){
//    this.lives = 0;
//    this.addLives = () => {
//        this.oneUp = setInterval(() =>{
//            console.log(++this.lives);
//        }, 1000);
//    }
//}
//
//var mario = new startGame();
//mario.addLives();


/** 9. String Templates **/

var name = "Hello 2";
var helloWorld = `Hello from ECMA 6 ${name} this should print`;

console.log(helloWorld);

var addValueWithString = `2 + 5 equals = ${5 + 2}`;
console.log(addValueWithString);

function something() {
    return 'something';
}
var addValueWithFunction = `2 + 5 equals = ${something()}`;
console.log(addValueWithFunction);

// multi line string
/** Javascript **/
var myStr = ['This is my firsy line', 'This is my second line'].join('');
console.log(myStr);

// With template string
/** ES6 **/
var stringValue = `my string is really god and can be really long without having any sort of breaks.`;
console.log(stringValue);


/** 10. Classes **/
/** javascript **/
//Object.Prototype....

/** ES6 OOP **/
//class shape{
//
//    //this.myArray = [1,2,3]; // this is not allow in the ES6
//
//    constructor(shapeName, dimensions){
//        this.allowedShapes = ['square', 'rectangle'];
//        this.shapeName = shapeName;
//        this.validateShape();
//        this.dimensions = dimensions;
//        console.log('Hello Shape');
//    }
//
//    area(){
//        if(this.validateShape()){
//            if(this.shapeName == 'square'){
//                return this.dimensions[0] * this.dimensions[0];
//            }else if(this.shapeName == 'rectangle'){
//                return this.dimensions[0] * this.dimensions[1];
//            }
//            return false;
//        }
//
//        return false;
//    }
//
//    validateShape(){
//        return (this.allowedShapes.indexOf(this.shapeName) > -1);
//    }
//
//}
//
//var myShape = new shape("square",[10]);
//console.log(myShape.area());


/** 11. Weakmaps */
// allows to bind key value pair

//var myShape = new shape("square",[10]);
//myShape.shapeName = 'square';// Resign the value
//console.log(myShape.area());

var shape = (function () {

    let allowedShapes = new WeakMap();
    let shapeName = new WeakMap();
    let dimensions = new WeakMap();

    class shape {

        //this.myArray = [1,2,3]; // this is not allow in the ES6

        constructor(MyShapeName, MyDimensions) {
            allowedShapes.set(this, ['square', 'rectangle']);
            shapeName.set(this, MyShapeName);
            this.validateShape();
            dimensions.set(this, MyDimensions);
            console.log('Hello Shape');
        }

        area() {
            if (this.validateShape()) {
                if (shapeName.get(this) == 'square') {
                    return dimensions.get(this)[0] * dimensions.get(this)[0];
                } else if (shapeName.get(this) == 'rectangle') {
                    return dimensions.get(this)[0] * dimensions.get(this)[1];
                }
                return false;
            }

            return false;
        }

        validateShape() {
            return (allowedShapes.get(this).indexOf(shapeName.get(this)) > -1);
        }

    }
    // returning class
    return shape;

}());

var myShape = new shape("rectangle", [4, 10]);
myShape.shapeName = 'square';// Resign the value
console.log(myShape.area());

/** 12. Inherit Other Class **/
class myColor{

    getRandomColors(){
        var colors = ['red', 'green', 'pink', 'black','blue','yellow'];
        return colors[Math.floor(Math.random() * 6)];
    }
}

class shapeClassExample extends myColor{

    //this.myArray = [1,2,3]; // this is not allow in the ES6

    constructor(shapeName, dimensions){
        super();
        this.allowedShapes = ['square', 'rectangle'];
        this.shapeName = shapeName;
        this.dimensions = dimensions;
        console.log('Hello Shape Class Example');
    }

    draw(){
        if(this.shapeName == 'square'){
            console.log("hello");
            document.write('<div style="width:' + this.dimensions[0] + 'px; height:' + this.dimensions[0] +'px;background: '+ super.getRandomColors() + '</div>');
        }else if(this.shapeName == 'rectangle'){
            document.write('<div style="width:' + this.dimensions[0] + 'px; height:' + this.dimensions[1] +'px;background: '+ super.getRandomColors() + '</div>');
        }
    }

}

var shapeClassExampleVariable = new shapeClassExample("square",[10]);
console.log(shapeClassExampleVariable.draw());

