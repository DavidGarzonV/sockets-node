var socket = io();
        
//escuchar 
socket.on('connect',function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect',function(){
    console.log('Conexion perdida con el servidor');
});

//enviar informacion 
socket.emit('enviarMensaje',{
    usuario:'David',
    mensaje:'Hola'
},function(resp){
    console.log("Respuesta server: ",resp);
});

//escuchar informacion
socket.on('enviarMensaje',function(mensaje){
    console.log("Servidor: ",mensaje);
});