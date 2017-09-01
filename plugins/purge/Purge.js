  class PurgePlugin {

    constructor() {}
    default (command) {
      var self = this;
      var embed = Math.floor(Math.random() * 0x999099);
      self.disnode.bot.DeleteMessage(command.msg.channel_id, command.msg.id);
      if (self.disnode.botConfig.ownerID.indexOf(command.msg.author.id) != -1) {
        var fieldEmbed = [];
        var self = this;
        //self.guildRole(command).then(function(role) {  DONT USE FAG
        //  if (role) {   DONT USE FAG
        if (command.params[0] == undefined) {
          self.disnode.bot.SendCompactEmbed(command.msg.channel_id, ":warning:Warning", "Pick an amount of messages to delete. (1-100)", embed);
        } else {
          self.disnode.bot.GetMessages(command.msg.channel_id, {
              before: command.msg.id,
              limit: parseInt(command.params[0])
            })
            .then(function(messageArry) {
              var ids = [];
              for (var i = 0; i < messageArry.length; i++) {
                ids.push(messageArry[i].id);
              }
              self.disnode.bot.DeleteMessages(command.msg.channel_id, ids);
              self.disnode.bot.DeleteMessage(command.msg.channel_id, command.msg.id);
            });
        }
      } else self.AccessDenied(command)
    }
    AccessDenied(command) {
      var Logging = require('disnode-logger');
      var self = this;
      var embed = Math.floor(Math.random() * 0x999099);
      self.disnode.bot.SendEmbed(command.msg.channel_id, {
        color: embed,
        author: {},
        fields: [{
          name: "<:Police:352748150747955201>STOP!",
          inline: false,
          value: `**${command.msg.author.username} you do not have access to use ~purge ${command.params}**`,
        }],
        footer: {}
      });
      Logging.Warning(command.msg.author.username, command.msg.author.id, "Tried using " + command.msg.content);
    }


  }

  module.exports = PurgePlugin
