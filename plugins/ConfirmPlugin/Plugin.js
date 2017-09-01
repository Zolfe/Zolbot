class Confirm {

  Init(onComplete) {
    var self = this;
    self.eventjoin()

    onComplete()
  }

  eventjoin() {
    var self = this
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.on("guild_memeber_add", function(member) {
      self.disnode.bot.SendEmbed('347298120603795466', {
        color: embed,
        fields: [{
          name: `Hello ${member.user.username}`,
          inline: true,
          value: `Welcome to Zolfes Official Server type ~c Dfdrg3F@Zo to get access to all the channels`,
        }]
      })
      var id = member.user.id;
      self.disnode.bot.AddRole("345094248233697293", `${id}`, "347298271661785088")
    })
  }



  commandconfirm(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    var id = command.msg.author.id
    self.disnode.bot.AddRole("345094248233697293", `${id}`, "345096294320177153")
    self.disnode.bot.RemoveRole("345094248233697293", `${id}`, "347298271661785088")
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Command", `Your code is verified :white_check_mark:`, embed)

  }

}

module.exports = Confirm;
