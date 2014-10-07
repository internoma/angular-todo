/*jslint browser: true*/
/*global angular, $, jQuery*/

/**
 * App Angular JS
 **/

// @TODO [ ] Aprender angular JS.

var appTodo = angular.module('appTodo', []);

function ngPruebasController($scope) {

	'use strict';

	$scope.tareas = [{
		texto: 'Mi primera tarea',
		hecho: true
	}, {
		texto: 'Mi tercera tarea',
		hecho: false
	}, {
		texto: 'Mi segunda tarea',
		hecho: true
	}];

	$scope.agregarTarea = function () {
		if ($scope.textoNuevaTarea) {
			$scope.tareas.push({
				texto: $scope.textoNuevaTarea,
				hecho: false
			});
			$scope.textoNuevaTarea = '';
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
