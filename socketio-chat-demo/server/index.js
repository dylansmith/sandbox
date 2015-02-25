var path = require('path'),
    app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, './chat.html'));
});

io.on('connection', function(socket){

    socket.on('user.connected', function(data) {
        // welcome message
        io.emit('chat.message', {
            for: 'everyone',
            user: 'system',
            timestamp: Date.now(),
            content: [data.user, ' joined the room'].join('')
        });
    });

    socket.on('chat.message', function(msg){
        console.log('chat.message received: ', msg);
        msg.timestamp = Date.now();
        io.emit('chat.message', msg);
    });

});

http.listen(9000, function(){
    console.log('listening on *:9000');
});
