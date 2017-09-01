const os = require('os');
const cpu = require('os-utils')
class Sysinfo {
  constructor() {}
  default (command) {
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


  AccessDenied(command) {
    var Logging = require('disnode-logger');
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.SendEmbed(command.msg.channel_id, {
      color: embed,
      author: {},
      fields: [{
        name: "<:Police:352748150747955201> STOP",
        inline: false,
        value: `**${command.msg.author.username} you do not have access to use ${self.disnode.botConfig.prefix}sysinfo ${command.params}**`,
      }],
      footer: {}
    });
    Logging.Warning(command.msg.author.username, command.msg.author.id, "Tried using " + command.msg.content);
  }

}
module.exports = Sysinfo;
