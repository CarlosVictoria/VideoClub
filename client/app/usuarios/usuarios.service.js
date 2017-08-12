'use strict';

function usuariosService(API, $resource) {
	   return $resource(API + "/usuarios",{
       id:"@id"
     },{
       update:{
         method:"PUT"
       }
     })
}
usuariosService.$inject = ['API','$resource'];
angular.module('videoClubApp')
  .factory('usuariosService', usuariosService);
