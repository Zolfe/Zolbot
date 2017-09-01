class helpPlugin {

  constructor() {}

  default (command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    var msg = "";
    var cmd = "";
    var cls = "";

    for (var i = 0; i < self.commands.length; i++) {
      msg += `${self.disnode.botConfig.prefix}` + self.config.prefix + " " + self.commands[i].cmd + " - " + self.commands[i].desc + "\n";
    }
    for (var j = 0; j < self.commands.length; j++) {
      cmd += `${self.disnode.botConfig.prefix}` + self.config.prefix + " " + self.commands[j].cmd + " - " + self.commands[j].desc + "\n";
    }
    self.disnode.bot.SendEmbed(command.msg.channel_id, {
      color: embed,
      author: {},
      fields: [{
        name: "```|=========[ OWNER COMMANDS ]=========|```",
        inline: true,
        value: msg.slice(0, -545)
      }, {
        name: "```|=======[ MODERATOR COMMANDS ]=======|```",
        inline: true,
        value: cmd.slice(124, -292)
      }, {
        name: "```|=======[ GENERAL COMMANDS ]=========|```",
        inline: true,
        value: msg.slice(377)
      }],
      footer: {},
    });
  }


  commandBan(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "<:Police:352748150747955201> Only moderators can use this", "to use this command type `~ban <@testuser>`", embed);
  }
  commandKick(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "<:Police:352748150747955201> Only moderators can use this", "to use this command type `~kick <@testuser>`", embed);
  }
  commandSoftban(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "<:Police:352748150747955201> Only moderators can use this", "to use this command type `~softban <@testuser>`", embed);
  }
  commandDelete(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "<:Police:352748150747955201> Only moderators can use this", "to use this command type `~purge <1-100>`", embed);
  }
  commandMute(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "<:Police:352748150747955201> Only moderators can use this", "to use this command type `~mute <@testuser>`", embed);
  }
  commandeval(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "<:Police:352748150747955201> Only the bot owners can use this", "to use this command type `~o eval <command>`", embed);
  }
  commandSetGame(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "<:Police:352748150747955201> Only the bot owners can use this", "to use this command type `~o sg <status>`", embed);
  }
  commandexec(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "<:Police:352748150747955201> Only the bot owners can use this", "to use this command type `~o exec <command>`", embed);
  }
  commandUptime(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "<:Police:352748150747955201> Only the bot owners can use this", "to use this command type `~o uptime`", embed);
  }
  commandSysinfo(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "<:Police:352748150747955201> Only the bot owners can use this", "to use this command type `~o sysinfo`", embed);
  }
  commandYT(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, " <:Welcome:353006096119758850>EVERYONE can use this", "to use this command type `~z yt`", embed);
  }
  commandurl(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, " <:Welcome:353006096119758850>EVERYONE can use this", "to use this command type `~z url`", embed);
  }
  commandTwitter(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, " <:Welcome:353006096119758850>EVERYONE can use this", "to use this command type `~z twitter`", embed);
  }
  commandinvite(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, " <:Welcome:353006096119758850>EVERYONE can use this", "to use this command type `~z invite`", embed);
  }
  commandDonate(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, " <:Welcome:353006096119758850>EVERYONE can use this", "to use this command type `~z donate`", embed);
  }
}

//Aptheosis Dev Team
module.exports = helpPlugin;
