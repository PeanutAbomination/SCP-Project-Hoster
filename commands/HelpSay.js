const { description } = require("./ping");

module.exports={
    name: 'HelpSay',
    description: "",
    execute(message,args){
        message.channel.send("test")
    }
}