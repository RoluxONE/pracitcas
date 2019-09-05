$('.carousel').carousel({
    interval:3000,
    pause:"hove.r"
})
 
var elvue=new Vue({
el: "#AppVue",
    data: {
        cantidad: 8,
        clientes: [],
        estado1:true,
        estado2:true,
        estado3:true,
        estado4: true,
        aceptados: 0,
        rechazados: 0,
        buscar:'',
    },
     
    methods:{
        obtenerClientes: function(){
          axios
          .get('https://randomuser.me/api/?results=' + this.cantidad)
          .then(response => {
              this.clientes = response.data.results;
          })
          console.log(JSON.stringify(this.clientes));
        },
         
        aceptarCliente: function(posicion){
            this.aceptados++;
            this.clientes.splice(posicion,1);
            //alert("cliente: "+ posicion);
        },
        rechazarCliente: function(posicion){
            this.rechazados++;
            this.clientes.splice(posicion,1);
        },
  
    elFiltrado: function (busqueda) {
        if (busqueda.includes(this.buscar) > 0) {
            return true;
        }
        return false;
    }
},
    
})