const { io } = require('../server');

io.on('connection',(client)=>{
    console.log('Usuario conectado');

    client.emit('enviarMensaje',{
        usuario : 'Administrador',
        mensaje:'Bienvenido'
    });
    
    client.on('disconnect',()=>{
        console.log('Usuario desconectado');
    });

    //escuchar el cliente
    client.on('enviarMensaje',(data,callback)=>{

        console.log(data);

        client.broadcast.emit('enviarMensaje',data);

        // if(data.usuario){
        //     callback({
        //         resp: 'Todo salió bien'
        //     });
        // }else{
        //     callback({
        //         resp: '¡No se envió el usuario!'
        //     });
        // }
    });

});