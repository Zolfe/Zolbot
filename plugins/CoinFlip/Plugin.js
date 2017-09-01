class CoinFlip {
  constructor() {

  }
  default (command) { // This is the default command that is ran when you do your bot prefix and your plugin prefix example   !ping
    var self = this;
    var answer = Math.floor(Math.random() * 2);
    var embed = Math.floor(Math.random() * 0x999099);
    if (answer == 1) {
      self.disnode.bot.SendEmbed(command.msg.channel_id, {
        color: embed,
        image: {
          url: "https://cdn.discordapp.com/attachments/348782474144382986/348784446876680193/2006_Quarter_Proof.png"
        },
        fields: [{
          name: "Coin Flip:",
          inline: true,
          value: `You landed on... **HEADS**.
=================`,
        }]
      })
    } else {
      self.disnode.bot.SendEmbed(command.msg.channel_id, {
        color: embed,
        image: {
          url: "https://cdn.discordapp.com/attachments/348782474144382986/348784457584476161/1393621733287511319tails-hi.png"
        },
        fields: [{
          name: "Coin Flip:",
          inline: false,
          value: `You landed on... **TAILS**.
=================`,
        }],
        footer: {}
      })
    }
  }
}
  module.exports = CoinFlip;
