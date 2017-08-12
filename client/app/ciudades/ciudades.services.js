'use strict';

function ciudadesService(API, $resource) {
	   return $resource(API + "/ciudades/:id",{
       id:"@id"
     },{
       update:{
         method:"PUT"
			 },
			 getCiudades:{
			url:API+'/api/ciudades/find',
			method:'GET',
			isArray:true
       }
     })
}


angular.module('videoClubApp')
  .factory('ciudadesService', ciudadesService);
