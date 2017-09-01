class Template {

  constructor() {
    // if you want to have global vars in your plugin youd put them here
    this.somear = 'xd';
  }

  default (command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.DeleteMessage(command.msg.channel_id, command.msg.id);;
    self.disnode.bot.SendEmbed(command.msg.channel_id, {
      color: embed,
      thumbnail: {
        url: "https://cdn.discordapp.com/attachments/346789645700562974/348606333223960586/giphy.gif"
      },
      author: {},
      fields: [{
          name: "Prefix",
          inline: false,
          value: `The prefix for Zolbot is ~ and for Apotheosis is =`,
        },
        {
          name: "~z yt",
          inline: false,
          value: `Displays links to the youtube accounts of the owners`,
        },
        {
          name: "~z invite",
          inline: false,
          value: "Displays a link that invites Apotheosis to your own server",
        },
        {
          name: "~z donate",
          inline: false,
          value: "Displays a link to Zolfe's paypal",
        },
        {
          name: "~z url",
          inline: false,
          value: "Displays a link to Zolfe's website",
        },
        {
          name: "~z twitter",
          inline: false,
          value: "Displays links to the twitter accounts of the owners                ====================================",
        }
      ],
      footer: {
        text: `${command.msg.author.username} | These are how to correctly input commands.`
      },
      timestamp: new Date(),
    })
  }

  commandinvite(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.DeleteMessage(command.msg.channel_id, command.msg.id);
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "INVITE APOTHEOSIS TO YOUR SERVER:", "https://discordapp.com/oauth2/authorize?permissions=1341643971&scope=bot&client_id=332385757668835328" , embed)
  }
  commandyt(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.DeleteMessage(command.msg.channel_id, command.msg.id);
    self.disnode.bot.SendEmbed(command.msg.channel_id, {
      color: embed,
      thumbnail: {
        url: "https://cdn.discordapp.com/attachments/346789645700562974/347890380857016332/6-2-youtube-png-picture.png"
      },
      author: {},
      fields: [{
          name: "Zolfe's Youtube:",
          inline: true,
          value: `https://www.youtube.com/channel/UC-8bGtCppF9SMwfL7hD1uLQ`,
        },
        {
          name: "Aiir's Youtube:",
          inline: true,
          value: `https://www.youtube.com/channel/UCpG9K0EoyTNZl97Yw6nmHEg`,
        },
        {
          name: "Xynf's Youtube",
          inline: true,
          value: 'https://www.youtube.com/channel/UC85edk9m1tRgncjVRFEdtAA',
        }
      ],
      footer: {}
    })
  }
  commandwebsite(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.DeleteMessage(command.msg.channel_id, command.msg.id);
    self.disnode.bot.SendEmbed(command.msg.channel_id, {
      color: embed,
      thumbnail: {
        url: ""
      },
      author: {},
      fields: [{
        name: "Zolfe's Website:",
        inline: false,
        value: `============
https://Zolfe.us`,
      }],
      footer: {}
    });
  }
  commandpaypal(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.DeleteMessage(command.msg.channel_id, command.msg.id);
    self.disnode.bot.SendEmbed(command.msg.channel_id, {
      color: embed,
      thumbnail: {
        url: "https://cdn.discordapp.com/attachments/346789645700562974/348032812454117376/paypal_PNG7.png"
      },
      author: {},
      fields: [{
        name: "DONATE HERE:",
        inline: false,
        value: `============
https://www.paypal.me/Zolfe`,
      }],
      footer: {}
    });
  }

  commandtwitter(command) {
    var self = this;
    var embed = Math.floor(Math.random() * 0x999099);
    self.disnode.bot.DeleteMessage(command.msg.channel_id, command.msg.id);
    self.disnode.bot.SendEmbed(command.msg.channel_id, {
      color: embed,
      thumbnail: {
        url: "https://cdn.discordapp.com/attachments/346789645700562974/347892662663249922/Twitter.png"
      },
      author: {},
      fields: [{
          name: "Zolfe's Twitter:",
          inline: false,
          value: `https://www.twitter.com/ZolfeYT`,
        },
        {
          name: "Aiir's Twitter:",
          inline: false,
          value: `https://www.twitter.com/XBLAiir`,
        },
        {
          name: "Xynf's Twitter:",
          inline: false,
          value: `https://www.twitter.com/XBLXynf`,
        }
      ],
      footer: {}
    })
  }




}
module.exports = Template;



// this is the base of every plugin
