const dateFormat = require('dateformat');

  class infoPlugin {

    constructor() {}
    default (command) {
  var self = this;
  var embed = Math.floor(Math.random() * 0x999099);
  self.disnode.bot.DeleteMessage(command.msg.channel_id, command.msg.id);
  var msg = "";
  for (var i = 0; i < self.commands.length; i++) {
    msg += self.disnode.botConfig.prefix + self.config.prefix + " " + self.commands[i].cmd + " - " + self.commands[i].desc + "\n";
  }
  self.disnode.bot.SendEmbed(command.msg.channel_id, {
    color: embed,
    thumbnail: {
      url: "https://cdn.discordapp.com/attachments/348782474144382986/352780138213015552/Avatar-v1.png"
    },
    author: {},
    fields: [{
        name: `Hello ${command.msg.author.username}, These are the information commands.`,
        inline: true,
        value: msg,
      }
    ],
    footer: {}
  })
}
commandServer(command) {
  var self = this;
  var embed = Math.floor(Math.random() * 0x999099);
  var id = `${command.msg.guildID}`
  var serv = self.disnode.bot.guilds[id];
  var own = serv.owner_id;
  var now = self.disnode.util.GetSnowflakeDate(command.msg.guildID);
  var roles = "";
  for (var ids in serv.roles) {
    if (serv.roles.hasOwnProperty(ids)) {
      roles += serv.roles[ids].name + '  > ';
    }
  }
  // var status = self.disnode.bot.GetUserStatus(self.server,command.msg.userID );
  var emotes = "";
  for (var ids in serv.emojis) {
    if (serv.emojis.hasOwnProperty(ids)) {
      emotes += "<:" + serv.emojis[ids].name + ':' + serv.emojis[ids].id + '> ';
    }
  }

  self.disnode.bot.SendEmbed(command.msg.channel_id, {
    color: embed,
    thumbnail: {},
    author: {
      name: command.msg.author.username
    },
    fields: [{
        name: `Region`,
        inline: true,
        value: serv.region
      },
      {
        name: `ServerID`,
        inline: true,
        value: id
      },
      {
        name: `Roles `,
        inline: false,
        value:  roles.slice(11),
      },
      {
        name: `Members `,
        inline: true,
        value: serv.member_count
      },
      {
        name: `Owner`,
        inline: true,
        value: `<@${serv.owner_id}>`
      },
      {
        name: "Owners Account Creation Date",
        inline: true,
        value: dateFormat(self.disnode.util.GetSnowflakeDate(serv.owner_id), "mmmm dS, yyyy, h:MM:ss TT")
      },
      {
        name: "Bot Join Date",
        inline: true,
        value: dateFormat(serv.joined_at,  "mmmm dS, yyyy, h:MM:ss TT"),
      },
      {
        name: "Server Created On",
        inline: true,
        value: dateFormat(now, "mmmm dS, yyyy, h:MM:ss TT"),
      },
      {
        name: `Emojis`,
        inline: false,
        value: emotes
      }
    ],
    footer: {}
  })

}
    CommandBot (command) {
      var self = this;
      var embed = Math.floor(Math.random() * 0x999099);
      self.disnode.bot.DeleteMessage(command.msg.channel_id, command.msg.id)
      if (self.disnode.botConfig.ownerID.indexOf(command.msg.author.id) != -1) {
        var uptime = self.disnode.stats.getUptime();
        var servers = Object.keys(self.disnode.bot.guilds).length;
        var channels = Object.keys(self.disnode.bot.channels).length;
        var users = Object.keys(self.disnode.bot.users).length;
        var members = self.disnode.bot.guilds[command.msg.guildID].member_count
        var ids = self.disnode.botConfig.ownerID
        self.disnode.bot.SendEmbed(command.msg.channel_id, {
          color: embed,
          thumbnail: {
            url: "https://cdn.discordapp.com/attachments/348782474144382986/352780138213015552/Avatar-v1.png"
          },
          author: {

          },
          fields: [{
              name: "Servers:",
              inline: true,
              value: `${servers}`,
            },
            {
              name: 'Channels:',
              inline: true,
              value: `${channels}`,
            },
            {
              name: 'Online Users:',
              inline: true,
              value: `${users}`,
            },
            {
              name: 'Server Members:',
              inline: true,
              value: `${members}`,
            },
            {
              name: 'Bot Owner',
              inline: true,
              value: `Zolfe#6373`,
            },
            {
              name: 'Bot Uptime:',
              inline: true,
              value: `${uptime}`,
            }
          ],
          footer: {}
        })
      } else self.AccessDenied(command)
    }
    commandUser(command) {
      var self = this;
      self.disnode.bot.SendMessage("true");
    }
    AccessDenied(command) {
      var Logging = require('disnode-logger');
      var self = this;
      var embed = Math.floor(Math.random() * 0x999099);
      self.disnode.bot.SendEmbed(command.msg.channel_id, {
        color: embed,
        author: {},
        fields: [{
          name: "Stop",
          inline: false,
          value: `**${command.msg.author.username} you do not have access to use ~info ${command.params}**`,
        }],
        footer: {}
      });
      Logging.Warning(command.msg.author.username, command.msg.author.id, "Tried using " + command.msg.content);
    }


  }

  module.exports = infoPlugin
