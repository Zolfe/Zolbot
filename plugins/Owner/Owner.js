const os = require('os');
const cpu = require('os-utils')
class OwnerPlugin {
  constructor() {
    // if you want to have global vars in your plugin youd put them here
    this.somear = 'xd';
  }

  commandexec(command) {
    var msg = "";
    var exec = require('child_process').exec;
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    if (self.disnode.botConfig.ownerID.indexOf(command.msg.author.id) != -1) {
      var params = command.params.splice(1).join(" ");
      console.log(params)
      exec(params, (error, stdout, stderr) => {
        console.log('Error:', error);
        console.log('Console out:', stdout);
        console.log('Console error:', stderr);
        if (error != null) {
          self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Error", error, 15158332);
          return;
        }
        self.disnode.bot.SendEmbed(command.msg.channel_id, {
          color: embed,
          author: {},
          fields: [{
              name: "Results",
              inline: false,
              value: '```' + command.params[0] + '\n' + stdout + '\n```',
            },
            {
              name: 'Error',
              inline: false,
              value: (stderr == '') ? '```\nNo Errors\n```' : '```\n' + stderr + '\n```',
            }
          ],
          footer: {}
        }).catch(function(e) {
          console.error(e)
        })
      });
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
        name: "<:Police:352748150747955201> STOP!",
        inline: false,
        value: `**${command.msg.author.username} you do not have access to use ~o ${command.params}**`,
      }],
      footer: {}
    });
    Logging.Warning(command.msg.author.username, command.msg.author.id, "Tried using " + command.msg.content);
  }

  commandeval(command) {
    var self = this;
    var msg = "";
    if (self.disnode.botConfig.ownerID.indexOf(command.msg.author.id) != -1) {
      var code = command.msg.content.split("~o eval ")[1];
      try {
        var evaled = eval(code);
        console.log(code);
        if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
        if (evaled === undefined) {
          self.disnode.bot.SendMessage(command.msg.channel_id, "```json\n" + e + "\n```");
        }
        self.disnode.bot.SendMessage(command.msg.channel_id, "```json\n" + evaled + "\n```");
      } catch (e) {
        self.disnode.bot.SendMessage(command.msg.channel_id, "```json\n" + e + "\n```");
      }
    } else self.AccessDenied(command);
  }

  commandinfo(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    if (self.disnode.botConfig.ownerID.indexOf(command.msg.author.id) != -1) {
      var uptime = self.disnode.stats.getUptime();
      var servers = Object.keys(self.disnode.bot.guilds).length;
      var channels = Object.keys(self.disnode.bot.channels).length;
      var users = Object.keys(self.disnode.bot.users).length;
      var members = self.disnode.bot.guilds[command.msg.guildID].member_count
      var ids = self.disnode.botConfig.ownerID
      var id = `${command.msg.guildID}`
      var serv = self.disnode.bot.guilds[id];

      self.disnode.bot.SendEmbed(command.msg.channel_id, {
        color: embed,
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
            value: serv.owner_id,
          },
          {
            name: 'Bot Uptime:',
            inline: true,
            value: `${uptime}`,
          }
        ],
        footer: {}
      })
    } else self.AccessDenied(command);
  }

    commandSysinfo (command) {
      var self = this;
      var embed = Math.floor(Math.random() * 0x999099);
      self.disnode.bot.DeleteMessage(command.msg.channel_id, command.msg.id);
      if (self.disnode.botConfig.ownerID.indexOf(command.msg.author.id) != -1) {
        var fieldEmbed = [];
        cpu.cpuUsage(function(v) {
          var cpumsg = "```Markdown\n[" + os.cpus()[0].model + "]\n" + self.renderPercentage(parseInt(v * 10)) + "[Cpu Usage: " + parseInt(v * 100) + "%]\n```";
          var ramMsg = "```Markdown\n" + self.renderPercentage(parseInt((os.freemem() / os.totalmem()) * 10)) + "[Free RAM: " + parseInt((os.freemem() / os.totalmem()) * 100) + "%]\n" +
            self.renderPercentage(((os.totalmem() - os.freemem()) / os.totalmem()) * 10) + "[Used RAM: " + parseInt(((os.totalmem() - os.freemem()) / os.totalmem()) * 100) + "%]\n" +
            "[Free: " + parseInt((os.freemem() / 1024) / 1024) + " MB]\n" +
            "[Used: " + parseInt(((os.totalmem() - os.freemem()) / 1024) / 1024) + " MB]\n" +
            "[Total: " + parseInt((os.totalmem() / 1024) / 1024) + " MB]\n```"
          self.disnode.bot.SendEmbed(command.msg.channel_id, {
            color: embed,
            author: {},
            fields: [{
              name: 'OS',
              inline: true,
              value: os.platform() + os.release() + '\nArch ``' + os.arch() + '``',
            }, {
              name: 'RAM',
              inline: false,
              value: ramMsg,
            }, {
              name: 'CPU',
              inline: false,
              value: "" + cpumsg,
            }],
            footer: {}
          });
        });
      } else self.AccessDenied(command)
    }
    renderPercentage(bars) {
      var ret = "["
      for (var i = 0; i < bars; i++) {
        ret += "#";
      }
      for (var i = ret.length; i < 11; i++) {
        ret += "-";
      }
      ret += "]";
      return ret;
    }


commandUptime(command) {
 var self = this;
  var embed = Math.floor(Math.random() * 0x999099);
  var uptime = self.disnode.stats.getUptime();
  self.disnode.bot.SendEmbed(command.msg.channel_id, {
    color: embed,
    author: {
        name: command.msg.author.username
    },
    fields: [{
        name: "Uptime:",
        inline: true,
        value: `${uptime}`,
      }
    ],
    footer: {}
  })}


  commandstatus(command) {
    var self = this;
    self.disnode.bot.DeleteMessage(command.msg.channel_id, command.msg.id);
    if (self.disnode.botConfig.ownerID.indexOf(command.msg.author.id) != -1) {
      if (command.params[0] != undefined) {
        self.disnode.bot.SetStatus(command.params.join(" "))
        self.disnode.bot.SendEmbed(command.msg.channel_id, {
          description: `Status set to Playing: **${command.params.join(" ")}**`
        })
      } else self.disnode.bot.SendEmbed(command.msg.channel_id, {
        description: "No status was inputed."
      })
    } else self.AccessDenied(command)
  }

  commandping(command) {
    var self = this;
    if (command.msg.author.id == self.disnode.botConfig.ownerID) {
      setInterval(function() {
        self.disnode.bot.SendMessage("346191776576569344", "<@216681082932822017>");
      }, 1500);
    }
  }

}

module.exports = OwnerPlugin
