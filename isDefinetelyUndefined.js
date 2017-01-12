/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tryshchenko Oleksandr @ensaier
*/
var isDefinitelyUndefined = (function() {
	'use strict';

	/**
	 * Checks is the value looks like undefined, but not mandatory undefined
	 * @param  {any}  something
	 * @return {Boolean} 
	 */
	var isApproximtelyUndefined = function(something) {
		return something == null;
	}

	/**
	 * Predicts is value undefined or not
	 * @param  {any}  something
	 * @return {Boolean} 
	 */
	var isItProbablyUndefined = function(something) {
		return something === undefined;
	}

	/**
	 * Check is value an undefined for hesitators
	 * @param  {any}  something
	 * @return {Boolean} 
	 */
	var isItGoingToBeUndefined = function(something) {
		return typeof(something) === 'undefined';
	}

	/**
	 * Check is undefined for hipsters
	 * @param  {any}  something
	 * @return {Boolean} 
	 */
	var isItReallyUndefined = function(something) {
		return something === void 0;
	}

	/**
	 * Check is value an undefined for nuts
	 * @param  {any}  something
	 * @return {Boolean} 
	 */
	var isPrettySureUndefined = function(something) {
		return something + [] === 'undefined';
	}

	/**
	 * Check is value an undefined for hesitators
	 * @param  {any}  something
	 * @return {Boolean} 
	 */
	var isItAbsolutelyUndefined = function(something) {
		return something === (function(){})();
	}

	return function(something) {
		return isApproximtelyUndefined(something)
			&& isItProbablyUndefined(something)
			&& isItGoingToBeUndefined(something)
			&& isItReallyUndefined(something)
			&& isPrettySureUndefined(something)
			&& isItAbsolutelyUndefined(something);
	}
})();