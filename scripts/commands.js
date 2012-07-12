var commands = {};

var handleCommand = function(src, command, data, tar, channel) {
    var user = SESSION.users(src);

    if (command in commands) {
        commands[command][1]({"user":user, "data":data, "target":tar, "channel":channel});
    }
};

commands['commands'] = ["get a list of commands.", function(params) {
    var user = params.user;
    //user.print("blank","");
    user.print("***", "Commands");
    user.print("blank","");

    for(var command in commands) {
        user.print("/"+command, commands[command][0]);
    }

    user.print("blank", "");
}];

commands['help'] = ["get started.", function(params) {
    var user = params.user;
    user.print("Meowth", "This is a RPG server in construction! Nothing to see just yet, be patient ~");
}];

ret = ({handleCommand: handleCommand});
