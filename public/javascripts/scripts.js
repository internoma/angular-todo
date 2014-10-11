/*jslint browser: true, plusplus: true, regexp: true*/
/*global $, jQuery, angular, require, module*/

/**
 * App Angular JS
 **/


jQuery(document).on('ready', function () {
	'use strict';
	var myFunc = function (foo, bar) {
		foo = foo || 'defaultValueForFoo';
		bar = bar || 'defaultValueForbar';
	};
	window.console.log('jQuery Cargado');
	myFunc();
});
