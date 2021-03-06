Type: Object {#Object}
======================

A collection of Object functions.

### Tutorial/Demo

* [Online Tutorial/Demo][]

[Online Tutorial/Demo]:http://www.clientcide.com/wiki/cnet-libraries/03-native/02-hash.extras


### See Also

- [Object][]


Object Function: getFromPath {#Object:Object-getFromPath}
-------------------------------------

Returns a value of an object by its path.

### Syntax

	Object.getFromPath(myObject, path);

### Arguments

1. object - (*object*) The object to search in
2. path - (*string*) the path to the key for the value you wish to retrieve

### Returns

* (*null* or *mixed*) if the path has no value, *null* is returned; otherwise the value that corresponds to the path is returned.

### Example

	Object.getFromPath({
		food: {
			fruits: {
				apples: "red",
				lemon: "yellow"
			}
		}
	}, 'food.fruits.apples');
	//returns "red"


Object Function: cleanValues {#Object:Object-cleanValues}
---------------------------------------------------------

Removes values from the object.

### Syntax

	Object.cleanValues(myObject, method);

### Arguments

1. object - (*object*) The original object that should be cleaned up
1. method - (*function*) The function that each value in the Hash is passed. If it returns `true` the value is kept. Defaults to check if the value `!= null`.

### Returns

* (*object*) - The cleaned object

### Example

	Object.cleanValues({
		foo: 'bar',
		something: 'else',
		missing: null
	});

	//remove all values < 0
	Object.cleanValues({
		a: -1,
		b: 2,
		c: 0,
		d: -5
	}, function(value){
		if (typeOf(value) != "number") return true;
		return value > 0;
	});

Object Function: run {#Object:Object-run}
-----------------------------------------

Runs all the methods that are values of the object.

### Syntax

	Object.run(object)

### Example

	var initMyPage = {
		setupNav: function(){
			//set up the nav
		},
		setupSearch: function(){
			//set up the search
		}
	};
	window.addEvent('domready', Object.run(initMyPage));

[Object]: /more/Types/Object
