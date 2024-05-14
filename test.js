const os = require("os"); // استيراد مكتبة 'os'
const axios = require("axios")

const {
  Client,

  GatewayIntentBits,

  EmbedBuilder,

  PermissionsBitField,

  ButtonBuilder,

  ButtonStyle,

  userMention,

  ActionRowBuilder,

  ModalBuilder,

  TextInputBuilder,

  TextInputStyle,

  ModalSubmitInteraction,

  permissionOverwrites,

  Permissions,

  StringSelectMenuBuilder,

  DiscordClient,

  VoiceConnection,

  MessageAttachment,

  AttachmentBuilder,

  Partials,

  MessageEmbed,
premiumTier,
  Discord,

  ChannelType,
} = require("discord.js");


const client2 = new Client({
  intents: 131071,
});

client2.on("messageCreate", (message) => {
  if (message.content === "!setup") {
    if (
      !message.member.permissions.has(PermissionsBitField.Flags.Administrator)
    )
      return;
    const embed = new EmbedBuilder()
      .setTitle("Code project")
      .setDescription("أضـغـط فـي الاسـفـل لنشر تصويت")
      .setColor("#ff0000"); // لون الإعلان
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setStyle(ButtonStyle.Success)
        .setLabel("ShareVote")
        .setCustomId("voteButton")
    );
    const channel = message.guild.channels.cache.get("1229763132344369162");
    if (!channel) return;
    channel.send({
      embeds: [embed],
      components: [row],
    });
  }
});


client2.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "voteButton") {
      const modal = new ModalBuilder()
        .setTitle("إرسال تصويت")
        .setCustomId("submitButton");
      const nameComponent = new TextInputBuilder()
        .setCustomId("111")
        .setLabel(`تصويت على ؟`)
        .setRequired(true)
        .setStyle(TextInputStyle.Short);
      const ageComponent = new TextInputBuilder()
        .setCustomId("222")
        .setLabel(`شرح عن الشيء ؟`)
        .setStyle(TextInputStyle.Paragraph)
        .setRequired(true);
      const whyYou = new TextInputBuilder()
        .setCustomId(`333`)
        .setLabel(`ضع هنا رابط صوره للشرح ( اختيارية)`)
        .setStyle(TextInputStyle.Short)
        .setRequired(false); //////false
      const q4 = new TextInputBuilder()
        .setCustomId("444")
        .setLabel(`كم عدد الرياكشن المطلوب ؟`)
        .setStyle(TextInputStyle.Short)
        .setRequired(true);
      const rows = [nameComponent, ageComponent, whyYou, q4].map(
        (component) => new ActionRowBuilder().addComponents(component)
      );
      modal.addComponents(...rows);
      interaction.showModal(modal);
    }
    const newDisabledRow = "1";
    if (newDisabledRow) {
      interaction.message.edit({ components: [newDisabledRow] });
    }
  }

  if (interaction.isModalSubmit()) {
    if (interaction.customId === "submitButton") {
      const q111 = interaction.fields.getTextInputValue("111");
      const q222 = interaction.fields.getTextInputValue("222");
      const q333 = interaction.fields.getTextInputValue("333");
      const q444 = interaction.fields.getTextInputValue("444");
      if (!q111 || !q222 || !q444) {
        return interaction.reply({
          content: "الرجاء ملء جميع الحقول.",
          ephemeral: true,
        });
      }
      interaction.reply({
        content: "تم إرسال الكود بنجاح.",
        ephemeral: true,
      });
      const staffSubmitChannel22 = interaction.guild.channels.cache.get(
        "1231303918865092618"
      );
      if (!staffSubmitChannel22) return;
      const embed = new EmbedBuilder()
        .setTitle("**<:discotoolsxyzicon32:1233815508638503074> New Vote! **")
      .setDescription(`**<:discotoolsxyzicon29:1233815470876917821> \` Vote For \` :  ${q111}  **`)
        .setColor("#00c9ff")
        .setTimestamp()
        .addFields(
          {
            name: `**<:de:1235905671376146492> \` Description For it : \`**`,
            value: `** ${q222} **`,
            inline: true,
          },
          {
            name: `** <:Vote:1235903545044238377> \` Reactions needed to share : \` **`,
            value: `** \` ${q444} Vote \`**`,
            inline: true,
          },
        );

      if (q333) {
        embed.setImage(q333);
      }

      const texted = `** New Vote by  <@!${interaction.user.id}>  | <@&1231283454268669953> **`;
      const sentEmbed = await staffSubmitChannel22.send({
        content: texted,
        embeds: [embed],
      });

      await sentEmbed.react("<:tt:1232061219913859193>");
      await sentEmbed.react("<:cc:1232061279863312526>");
      await staffSubmitChannel22.send(
        "https://cdn.discordapp.com/attachments/1231303044453372047/1232036798310514769/ecf5c174ae1ca16e.jpg?ex=6627ff2e&is=6626adae&hm=3eb437cfc5c0b4559e8471354b6d6aeef1c355443b716d4e9f37325747bb3ac5&"
      
      );
    }
  }
});





client2.on("messageCreate", message => {
    if (message.content === '!server') {
        if (message.guild.memberCount !== message.guild.members.cache.size) message.guild.members.fetch();
        
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache.size;
        const stickers = message.guild.stickers.cache.size;

        const bots = members.filter(member => member.user.bot).size; 
        const human = members.filter(member => !member.user.bot).size; 

        let onlineMembers = members.filter(member => member.presence?.status == "online").size;
        let dndMembers = members.filter(member => member.presence?.status == "dnd").size;
        let idleMembers = members.filter(member => member.presence?.status == "idle").size;

        let premiumTier = message.guild.premiumTier ? message.guild.premiumTier.replace("TIER_", "") : "None";
        
        let Embed = new EmbedBuilder()
            .setColor('#00B4F0')
            .setAuthor({ name: `${message.guild.name}'s Info`, iconURL: message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }) })
            .setThumbnail(message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
            .addFields(
                { name: '🆔 Server ID: ', value: `${message.guildId}`, inline: true },
                { name: '📆 Created On: ', value: `**<t:${Math.floor(message.guild.createdTimestamp / 1000)}:R>**`, inline: true },
                { name: '👑 Owned by:', value: `<@!${message.guild.ownerId}>`, inline: true },
                { name: `👥  Members (${message.guild.memberCount}): `, value: ` **${onlineMembers + dndMembers + idleMembers}** Online | **${bots}** Bots | **${human}** Humans  `, inline: true},
                { name: `💬 Channels (${channels.size}) & Roles: `, value: `** ${channels.filter(channel => channel.type === 'GUILD_TEXT').size}** Text |  **${channels.filter(channel => channel.type === 'GUILD_VOICE').size} ** Voice | ** ${message.guild.roles.cache.size} **Roles `, inline: true },
                { name: '⭐ Emojies & stickers: ', value: `** ${stickers} ** Stickers | ** ${emojis} **Emojis `, inline: true },
                { name: `💎 Boost Tier:`, value: `Boost Tier(** ${premiumTier} **)  |   ** ${message.guild.premiumSubscriptionCount} ** Boosts `},
              
                { name: `🌐 Region:` , value: `${message.guild.preferredLocale}`, inline: true },
                { name: `🛡️ Verification:`, value: `${message.guild.verificationLevel}`, inline: true }
            );

        message.reply({ embeds: [Embed] });
    }
});



const channel_id = '1239867287993843742'; // ايدي الروم

async function errorEmbed(text, message) {
  const newEmbed = new EmbedBuilder()
   .setColor('#FF7676')
   .setDescription(`**❌ | ${text} **`);
  return message.channel.send({ embeds: [newEmbed] });
}

client2.on('messageCreate', async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  try {
    if (message.channel.id!== channel_id) return;
    const res = await axios.get(`http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=1&msg=${encodeURIComponent(message.content)}`);
    message.reply({ content: res.data.cnt });
  } catch {
    errorEmbed(`Bot error, please try again!`, message);
  }
});


client2.login("MTIwMTkyODI5Nzg1NzE1NTA5Mg.G1UhIa.mgno2Bjpt_gScd5YEHIMNN5ynezKjMD3l4I26A");
