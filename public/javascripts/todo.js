/*jslint browser: true, plusplus: true, regexp: true*/
/*global $, jQuery, angular, cacheService, require, module, Modernizr*/


/**
 * App Angular JS
 **/

// @TODO [ ] Aprender angular JS.

var appTodo = angular.module('appTodo', []);


appTodo.factory('storageService', function ($rootScope) {

	'use strict';

	return {

		get: function (key) {
			return JSON.parse(localStorage.getItem(key));
		},

		save: function (key, data) {
			localStorage.setItem(key, angular.toJson(data));
		},

		remove: function (key) {
			localStorage.removeItem(key);
		},

		clearAll: function () {
			localStorage.clear();
		}
	};
});

appTodo.factory('cacheService', function ($http, storageService) {

	'use strict';

	return {

		getData: function (key) {
			return storageService.get(key);
		},

		setData: function (key, data) {
			storageService.save(key, data);
		},

		removeData: function (key) {
			storageService.remove(key);
		}
	};
});

if (Modernizr.localstorage) {
	// window.localStorage is available!
	window.console.info('window.localStorage is available!');
} else {
	// no native support for HTML5 storage :(
	window.console.info('no native support for HTML5 storage :');
}

function ngPruebasController($scope, cacheService) {

	'use strict';

	// obtener tareas desde localstorage
	$scope.tareas = cacheService.getData('tareas');

	if (!$scope.tareas) {
		$scope.tareas = [];
	}

	window.console.log($scope.tareas);

	$scope.agregarTarea = function () {
		if ($scope.textoNuevaTarea) {
			$scope.tareas.push({
				texto: $scope.textoNuevaTarea,
				hecho: false
			});
			$scope.textoNuevaTarea = '';
			// guardar tareas en localstorage
			cacheService.setData('tareas', $scope.tareas);
		}
		document.getElementById('nuevaTarea').focus();
	};

	$scope.contHecho = function () {
		var cont = 0;
		angular.forEach($scope.tareas, function (tarea) {
			cont += tarea.hecho ? 0 : 1;
		});
		return cont;
	};

	$scope.eliminar = function () {
		var tareasViejas = $scope.tareas;
		$scope.tareas = [];
		angular.forEach(tareasViejas, function (tarea) {
			if (!tarea.hecho) {
				$scope.tareas.push(tarea);
			}
		});
		cacheService.setData('tareas', $scope.tareas);
	};

	$scope.ordenar = function (orden) {
		orden = orden || 'hecho';
		$scope.ordenSeleccionado = orden;
	};

	$scope.porcentaje = function () {
		var pendientes = 0,
			total = $scope.tareas.length;
		pendientes = ($scope.contHecho() / total) * 100;
		return pendientes;
	};

} // ngPruebasController
