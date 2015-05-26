//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  var isTyler = function (name) {
  	if (name === 'Tyler') {
  		return true;
  	} else return false;
  }


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


var getName = function () {
	var name = prompt("GIVE ME YOUR NAME!!!", "Your name");
	return name;
}


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var getName = function () {
	var name = prompt("GIVE ME YOUR NAME!!!", "Your name");
	var welcome = function () {
		alert("Welcome, " + name + "!")
	};
	welcome();
};


//Next problem




//What is the difference between arguments and parameters?

// Parameters are just placeholder names inside a fn, and arguments are the things you pass into them.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


// Uuuuuh... checking is done like this: !element and, according to StackOverflow, here they are: 
// false
// 0
// -0
// ""
// ''
// null
// undefined
// NaN



//Next Problem



//Create a function called myName that returns your name

var myName = function () {
	return "Jeff";
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;


//Now alert the result of invoking newMyName

alert(newMyName())

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function () {
	return function () {
		return "Jeff";
	}
}


//Now save the result of invoking outerFn into a variable called innerFn.

var outerFn = function () {
	return function () {
		return "Jeff";
	}
}

var innerFn = outerFn();


//Now invoke innerFn.

innerFn()