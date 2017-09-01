  class banPlugin {

    constructor() {}
    default (command) {
      var self = this;
      var embed = Math.floor(Math.random() * 0x999099);
      if (self.disnode.botConfig.ownerID.indexOf(command.msg.author.id) != -1) {
      self.disnode.bot.DeleteMessage(command.msg.channel_id, command.msg.id);
        if (command.params[0] == undefined) {
          self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "<:Police:352748150747955201> Warning.", " No user has been inputed.", embed);
        } else if (command.params[1] == undefined) {
          var uid = command.params[0];
          uid = uid.replace(/\D/g, '');
          self.disnode.bot.GetUser(uid).then(function(user) {
            //var mid = self.disnode.bot.users[uid].username;
            self.disnode.bot.BanUser(command.msg.guildID, uid);
            self.disnode.bot.SendCompactEmbed(command.msg.channel_id, ":white_check_mark: Success.", `User ** ${user.username}  ** -  ${uid} has been banned.`, embed);
            // self.caseLog('ban', uid, user.username, command);
          });
        } else {
          var uid = command.params[0];
          uid = uid.replace(/\D/g, '');
          self.disnode.bot.GetUser(uid).then(function(user) {
            //var mid = self.disnode.bot.users[uid].username;
            self.disnode.bot.BanUser(command.msg.guildID, uid, command.params[1]);
            self.disnode.bot.SendCompactEmbed(command.msg.channel_id, `User **  ${user.username}  ** -  ${uid} has been banned`, `messages from ${command.params[1]} day(s) deleted.`, embed);
            // self.caseLog('ban', uid, user.username, command);
          });
        }
      } else self.AccessDenied(command)
    }
    guildRole(command) {
      var self = this;
      return new Promise(function(resolve, reject) {
        self.DB.Find("servers", {
          "id": command.msg.guildID
        }).then(function(found) {
          if (found == 'undefined') resolve(false);
          var gg = found[0];
          var roles = '<352784319787302912>';
          var guild = self.disnode.bot.guilds[gg.id];
          for (var i = 0; i < guild.members.length; i++) {
            if (guild.members[i].user.id == command.msg.author.id) {
              roles = guild.members[i].roles;
            }
          }
          if (roles.indexOf(gg.role) > -1 == true) {
            resolve(true);
          } else resolve(false);
        });
      });
    }

    AccessDenied(command) {
      var Logging = require('disnode-logger');
      var self = this;
      var embed = Math.floor(Math.random() * 0x999099);
      self.disnode.bot.SendEmbed(command.msg.channel_id, {
        color: embed,
        author: {},
        fields: [{
          name: "<:Police:352748150747955201>",
          inline: false,
          value: `**${command.msg.author.username} you do not have access to use ~ban ${command.params}**`,
        }],
        footer: {}
      });
      Logging.Warning(command.msg.author.username, command.msg.author.id, "Tried using " + command.msg.content);
    }

  }

  module.exports = banPlugin
