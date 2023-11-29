<template>
<div id='login'>
  <div v-if='!logon' class='container my-3 border rounded'
       style='width:350px'>
    <div class='row'>
      <div class='col-12 text-center'><h3>{{pdTitulo}}</h3></div>
    </div>
    <div class="form-group">
         <label for="email" class="cols-sm-2 control-label">
           {{pdCampo1}}</label>
         <div class="cols-sm-10">
           <div class="input-group">
             <span class="pt-2 px-3 input-group-addon bg-info">
               <i class="fa fa-envelope fa" aria-hidden="true"></i>
             </span>
             <input v-model='pdEmail' type="email"
                    v-bind:class="'form-control ' + valid"
                    ref='pdEmail' id='pdEmail'
                    v-bind:placeholder='pdCampo1'
                    v-on:keyup.enter="changeFocus($event)"
                    v-on:change='manejaChange($event)'/>
           </div>
         </div>
       </div>
    <div class="form-group">
         <label for="password" class="cols-sm-2 control-label"
                v-text='pdCampo2'></label>
         <div class="cols-sm-10">
           <div class="input-group">
             <span class="pt-2 px-3 input-group-addon bg-info">
               <i class="fa fa-lock fa-lg" aria-hidden="true"></i>
             </span>
             <input v-model='pdPass' type="password"
                    class="form-control" ref='pdPass' id='pdPass'
                    :placeholder="'Ingrese la '+pdCampo2"
                    v-on:keyup.enter='changeFocus($event)'/>
           </div>
         </div>
       </div>
    <div class="form-group ">
         <button type="button" class="btn btn-primary"
                 id='btnIngresar' ref='btnIngresar'
                 v-on:click='validateLogin'>Ingresar</button>
    </div>
  </div>
  <div v-else>
    <div class='text-center'><h2>Bienvenido al Sistema</h2></div>
    <div class='text-center'>Hola usuario: {{pdEmail}}</div>
  </div>
</div>
</template>

<script>
  var logon = new Vue({
    el:'#login',
    data: {
      pdTitulo: 'Ingreso al Sistema',
      pdCampo1:'Correo Electrónico',
      pdCampo2:'Contraseña',
      logon: false,
      pdEmail:'',
      pdPass:'',
      valid:''
    },
    methods : {
      changeFocus: function(e){
        if (e.target.id==='pdEmail'){
          this.$refs.pdPass.focus();
        }
        else if (e.target.id==='pdPass'){
          this.validateLogin();
        }
      },
      validateLogin: function(){
        if (this.emailValido(this.pdEmail) &&
            this.passValido(this.pdPass))
          this.logon=true;
        else
          alert('Usuario o Contraseña inválidos');
      },
      emailValido:function(email){
        reEmail=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return reEmail.test(email);
      },
      passValido:function(pass){
        rePass=/.{3,14}/;
        return rePass.test(pass);
      },
      manejaChange: function(e){
        if (e.target.id==='pdEmail'){
          this.valid = this.emailValido(this.pdEmail) ?
            'is-valid' : 'is-invalid';
        }
        else if (e.target.id==='pdPass'){
          this.validateLogin();
        }
      }
    }
  })
</script>

