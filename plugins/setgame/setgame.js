  class setgamePlugin {

    constructor() {}
    default (command) {
      var self = this;
       self.disnode.bot.DeleteMessage(command.msg.channel_id, command.msg.id);
      if (self.disnode.botConfig.ownerid.indexOf(command.msg.author.id) != -1) {
        if (command.params[0] != undefined) {
          self.disnode.bot.SetStatus(command.params.join(" "))
          self.disnode.bot.SendEmbed(command.msg.channel_id, {
            color: 0x00ff40,
            description: `Status set to Playing: **${command.params.join(" ")}**`
          })
        } else self.disnode.bot.SendEmbed(command.msg.channel_id, {
          color: 0xff8080,
          description: 'No status was inputed!'
        })
      } else self.AccessDenied(command)
    }
    AccessDenied(command) {
      var Logging = require('disnode-logger');
      var self = this;
      self.disnode.bot.SendEmbed(command.msg.channel_id, {
        color: 15158332,
        author: {},
        fields: [{
          name: "<:Police:352748150747955201> STOP",
          inline: false,
          value: `**${command.msg.author.username} you do not have access to use ~sg ${command.params}**`,
        }],
        footer: {}
      });
      Logging.Warning(command.msg.author.username, command.msg.author.id, "Tried using " + command.msg.content);
    }


  }

  module.exports = setgamePlugin
