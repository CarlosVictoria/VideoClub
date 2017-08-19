'use strict';

(function(){

class UsuariosCreateComponent {
  constructor(usuariosService, $state) {
    this.usuariosService = usuariosService;
    this.$state = $state;
    this.showValidaDocumento = false;

  }

  createUser(){
  	this.usuariosService.save(this.usuario).$promise
  	.then(response => {
  		console.log("Usuario registrado correctamente ",response);
        this.$state.go('usuarios-list');
  	})
  	.catch(err=>{
  		console.log("Error al crear el usuario ",err);
  	})
  }


  validaNumDocumento(){
    console.log("NumDocumento", this.usuario.numDocumento);
    this.usuariosService.query({numDocumento:this.usuario.numDocumento}).$promise
    .then(response =>{
      console.log("valida", response);
      this.showValidaDocumento = tru;
    })
    .catch(err =>{
      console.log("No existe")
    })
  }

}
UsuariosCreateComponent.$inject = ['usuariosService','$state'];

angular.module('videoClubApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs: 'vm'
  });

})();
