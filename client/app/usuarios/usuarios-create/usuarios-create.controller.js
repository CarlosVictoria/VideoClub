'use strict';

(function(){

class UsuariosCreateComponent {
  constructor(usuariosService) {
    this.usuariosService = usuariosService;
  }

  createUser(){
    this.usuariosService.save(this.usuario).$promise
    .then(response =>{
      console.log("El usuario se registro correctamente", response)
    })
    .catch(err =>{
      console.log("Error al registrar el usuario", err)
    })
  }
}
UsuariosCreateComponent.$inject = ['usuariosService'];
angular.module('videoClubApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs: 'vm'
  });

})();
