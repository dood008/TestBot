const os = require("os"); // استيراد مكتبة 'os'


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

  Discord,

  ChannelType,
} = require("discord.js");

//const config = require("./verify.js");

//const config1 = require("./config2.json");  //.

const { joinVoiceChannel } = require("@discordjs/voice");

const QRCode = require("qrcode");

const { SlashCommandBuilder } = require("@discordjs/builders");

const fetch = require("node-fetch");

const client2 = new Client({
  intents: 131071,
});

//7676

client2.on("ready", () => {
  console.log(`🤖 - Logged in as ${client2.user.tag}!`);

  console.log(`tax is done ﹣ 🚀`);

  client2.user.setActivity("Ping ${ping}ms", { type: 0 });

  client2.user.setStatus("idle");

  // تحديث النشاط كل 1 دقائق

  setInterval(() => {
    const ping = Math.round(client2.ws.ping);

    client2.user.setActivity(`Ping \` ${ping}ms \` .`, { type: 3 });
  }, 1000);
});

const prefix = "!"; // البريفكس .

const owner = "714200387048964107"; // ايدي الاونر .

const feedbackChannel = [
  "1222638896651829258",
  "1227357793334464612",
  "1227694880839569496",
  "1230192540481753243",
]; // ايدي روم الفيدباك

client2.on("messageCreate", async (message) => {
  // if (message.channelId === feedbackChannel) {

  if (!feedbackChannel.includes(message.channel.id)) return;

  if (message.author.bot) return;
  try {
    const menu = new StringSelectMenuBuilder()
      .setCustomId("feedback-menu")
      .setPlaceholder("اختر عدد النجوم")
      .addOptions(
        { label: "⭐⭐⭐⭐⭐", value: "5" },
        { label: "⭐⭐⭐⭐", value: "4" },
        { label: "⭐⭐⭐", value: "3" },
        { label: "⭐⭐", value: "2" },
        { label: "⭐", value: "1" }
      );
    const row = new ActionRowBuilder().addComponents(menu);
    const reply = await message.reply({ components: [row] });
    const filter = (i) =>
      i.customId === "feedback-menu" && i.user.id === message.author.id;
    const collector = await reply.createMessageComponentCollector({
      filter,
      max: 1,
      time: 30000,
    });
    collector.on("collect", async (interaction) => {
      const rating = interaction.values[0];
      const embed = new EmbedBuilder()
        .setColor("#00c9ff")
        .setAuthor({
          name: interaction.user.displayName,
          iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
        })
        .addFields({ name: "Stars :", value: "**`⭐`** ".repeat(rating) })

        .setThumbnail(message.author.displayAvatarURL())

        .setDescription("```" + message.content + "```");

      await message.delete().catch((err) => console.error(err));
      await reply.delete().catch((err) => console.error(err));
      const qe = await interaction.channel.send({ embeds: [embed] });

      await qe.react("<:discotoolsxyzicon12:1233815322193039441>");
      await qe.react("<:discotoolsxyzicon17:1233815363301408848>");
      await qe.react("<:discotoolsxyzicon23:1233815419450560593>");
      await qe.react("<:discotoolsxyzicon20:1233815391424479272>");

      //  await feedbackChannel.send('https://cdn.discordapp.com/attachments/1231303044453372047/1232036798310514769/ecf5c174ae1ca16e.jpg?ex=6627ff2e&is=6626adae&hm=3eb437cfc5c0b4559e8471354b6d6aeef1c355443b716d4e9f37325747bb3ac5&');

      message.channel
        .send(
          "https://cdn.discordapp.com/attachments/1231303044453372047/1232036798310514769/ecf5c174ae1ca16e.jpg?ex=6627ff2e&is=6626adae&hm=3eb437cfc5c0b4559e8471354b6d6aeef1c355443b716d4e9f37325747bb3ac5&"
        )
        .then(() => {});
    });

    collector.on("end", async (collected) => {
      if (collected.size === 0) {
        await message.delete().catch((err) => console.error(err));
        await reply.delete().catch((err) => console.error(err));
      }
    });
  } catch (error) {
    console.error(error);
  }
  // }
});

////////---- ت.ن.ك فيدباك -----///////

client2.on("ready", function () {
  // تعريف المتغيرات

  let voiceConnection; // تعريف المتغير لتخزين الاتصال الصوتي

  let joinedVoice = false; // تهيئة المتغير للتحقق مما إذا كان البوت قد انضم بالفعل

  // عند تشغيل البوت

  setInterval(async () => {
    // كل فترة زمنية (مثل 1000 ميلي ثانية)

    client2.channels

      .fetch("1227730648639213589")

      .then((channel) => {
        // عند العثور على القناة

        if (!joinedVoice) {
          // إذا لم يتم الانضمام بعد

          voiceConnection = joinVoiceChannel({
            // انضمام البوت إلى القناة الصوتية

            channelId: channel.id,

            guildId: channel.guild.id,

            adapterCreator: channel.guild.voiceAdapterCreator,
          });

          console.log("C2 voice joined DONE ﹣ ✅ "); // رسالة عند الانضمام بنجاح

          joinedVoice = true; // تحديث قيمة المتغير للإشارة إلى أن الانضمام تم بالفعل
        }
      })

      .catch((error) => {
        return;
      });
  }, 1000);

  // إضافة حدث للتحقق من خروج البوت من القناة الصوتية

  if (voiceConnection) {
    voiceConnection.on("disconnect", (oldState, newState) => {
      console.log("C2 voice left the channel."); // رسالة عند خروج البوت من القناة الصوتية

      joinedVoice = false; // إعادة تهيئة المتغير للسماح بإرسال رسالة جديدة عند الانضمام مرة أخرى
    });
  }
});

/////////////------1212121212-------///////
/*
const channelId = "1227732289052737547";

client2.once("ready", () => {
  const channel = client2.channels.cache.get(channelId);
  if (channel) {
    const embed = new EmbedBuilder()
      .setTitle("<:kkk:1225381218762100797>  تم تشغيل البوتات")
      .setDescription(
        "<:discotoolsxyzicon4:1225381315826946049> البوتات ` Encode , System ` جاهز للعمل ."
      )
      .setColor("#00ff00")

      .setThumbnail(client2.user.displayAvatarURL());

    channel.send({ embeds: [embed] });
  } else {
    console.error("لا يمكن العثور على القناة.");
  }
});

// للتعامل مع الأخطاء
process.on("uncaughtException", (error) => {
  const channel = client2.channels.cache.get(channelId);
  if (channel) {
    const embed = new EmbedBuilder()
      .setTitle(" <a:057:1222638989350146170> حدث خطأ ")
      .setDescription(`\`\`\`${error.stack}\`\`\``) // يقوم بإرسال الخطأ بشكل كود ليكون منظمًا في الإيمبد
      .setColor("#ff0000");

    channel.send({ embeds: [embed] });
  } else {
    console.error("لا يمكن العثور على القناة.");
  }
});

//للتعامل مع الإشارة SIGINT

process.on("SIGINT", () => {
  const channel = client2.channels.cache.get(channelId);
  if (channel) {
    const embed = new EmbedBuilder()
      .setTitle(" :cancell: تم إيقاف تشغيل البوت")
      .setDescription("البوت تم إيقاف تشغيله.")
      .setColor("#ff0000");

    channel.send({ embeds: [embed] });
  } else {
    console.error("لا يمكن العثور على القناة.");
  }

  // قم بإيقاف تشغيل البرنامج بعد إرسال الرسالة
  process.exit();
});
*/
/////////////////---------6-6-6-6-6-6-6/////////////

const Ids = ["1227726807630090310"];

client2.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!Ids.includes(message.channel.id)) return;

  const loadingMessages = [
    "Generating.",
    "Generating..",
    "Generating...",
    "Generating....",
  ];
  const loadingMessage = await message.reply("Generating QR Code...");

  for (const loadingText of loadingMessages) {
    await loadingMessage.edit(loadingText);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  const userText = message.content.toLowerCase();
  const qrCodeBuffer = await QRCode.toBuffer(userText);
  const qrCodeAttachment = new AttachmentBuilder(qrCodeBuffer, "qrcode.png");

  await loadingMessage.edit({
    content: `${message.author}\n**Here's Your QR Code:**`,
    files: [qrCodeAttachment],
  });
});

/////////-//-/-/-/-/-/-/QR       QR

////////////

let messageId = null; // يحمل ID الرسالة التي تحتوي على الأزرار

client2.on(
  "messageCreate",
  (message) => {
    if (message.content === prefix + "dt") {
      if (message.author.id !== owner) return message.delete();

      //   if (message.member.permissions.has("ADMINISTRATOR")) {

      const embed = new EmbedBuilder()
        .setDescription(
          "** `Ticket - : 🎟️`\n\n`Closed - : 🎯`\n\n`Clone - : 🎭`\n\n`Bot - : 🧭`\n\n`Design -  : 💎`**"
        )
        .setColor("#ff0000");

      let row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel("ticket-")
          .setStyle("Danger")
          .setCustomId("ticket")
          .setEmoji("🎟️"),
        new ButtonBuilder()
          .setLabel("closed-")
          .setStyle("Danger")
          .setCustomId("closed")
          .setEmoji("🎯"),
        new ButtonBuilder()
          .setLabel("clone-")
          .setStyle("Danger")
          .setCustomId("clone")
          .setEmoji("🎭"),
        new ButtonBuilder()
          .setLabel("bot-")
          .setStyle("Danger")
          .setCustomId("bot")
          .setEmoji("🤖"),
        new ButtonBuilder()
          .setLabel("design-")
          .setStyle("Danger")
          .setCustomId("design")
          .setEmoji("💎")
      );

      message.reply({ embeds: [embed], components: [row] }).then((m) => {
        messageId = m.id; // حفظ ID الرسالة
      });
    }
  }
  //}
);

client2.on("interactionCreate", async (interaction) => {
  if (!interaction.isButton()) return;

  if (
    interaction.customId === "ticket" ||
    interaction.customId === "closed" ||
    interaction.customId === "clone" ||
    interaction.customId === "bot" ||
    interaction.customId === "design"
  ) {
    const channelMessage = await interaction.channel.messages.fetch(messageId);

    let channelsToDelete;
    let successMessage;

    switch (interaction.customId) {
      case "ticket":
        channelsToDelete = interaction.guild.channels.cache.filter((channel) =>
          channel.name.startsWith("ticket-")
        );
        successMessage = "Ticket";
        break;
      case "closed":
        channelsToDelete = interaction.guild.channels.cache.filter((channel) =>
          channel.name.startsWith("closed-")
        );
        successMessage = "ClosedTicket";
        break;
      case "clone":
        channelsToDelete = interaction.guild.channels.cache.filter((channel) =>
          channel.name.startsWith("clone-")
        );
        successMessage = "Clone";
        break;
      case "bot":
        channelsToDelete = interaction.guild.channels.cache.filter((channel) =>
          channel.name.startsWith("bot-")
        );
        successMessage = "Bot";
        break;
      case "design":
        channelsToDelete = interaction.guild.channels.cache.filter((channel) =>
          channel.name.startsWith("design-")
        );
        successMessage = "Design";
        break;
    }

    await Promise.all(channelsToDelete.map((channel) => channel.delete()));

    channelMessage.edit({
      content: `**✅ | The "${successMessage}" rooms have been successfully deleted.**`,
      components: [],
      embeds: [],
    });
  }
});

///////////

/*
const roleColor = '#9d8444'; // يمكنك استبدال هذا اللون باللون الذي ترغب فيه

client.on('ready', () => {
    client.guilds.cache.forEach(guild => {
        guild.roles.cache.forEach(role => {
            if (role.hexColor === '#00c9ff') {
                role.setColor(roleColor)
                    .then(updated => console.log(`تم تغيير لون الدور ${updated.name} إلى ${updated.hexColor}`))
                    .catch(console.error);
            }
        });
    });
});
*/

/*
client.once('ready', async () => {
    try {
        // ID للسيرفر الأصلي
       const sourceGuildId = '1231281733211525151';
        // ID للسيرفر المستهدف
        const targetGuildId = '1222810013064757268'

      
      
              // ID للسيرفر الأصلي
      ///  const targetGuildId = '1230164344952590396';
        // ID للسيرفر المستهدف
      ///  const sourceGuildId = '1134456814155604009'
        
        
        
        const sourceGuild = await client.guilds.fetch(sourceGuildId);
        const targetGuild = await client.guilds.fetch(targetGuildId);

        // جلب كافة الرتب من السيرفر المستهدف
        const targetRoles = Array.from(targetGuild.roles.cache.values());

        // حذف جميع الرتب في السيرفر المستهدف
        for (const role of targetRoles) {
            try {
                await role.delete();
                console.log(`تم حذف الرتبة ${role.name} بنجاح من السيرفر المستهدف`);
            } catch (error) {
                console.error(`حدث خطأ أثناء حذف الرتبة ${role.name}:`, error);
            }
        }

        // جلب كافة الرتب من السيرفر الأصلي
        const roles = Array.from(sourceGuild.roles.cache.values())
            .sort((a, b) => b.position - a.position) // ترتيب الأدوار بحسب الوضع (من الأعلى إلى الأسفل)
            .filter(role => role.name !== '@everyone'); // استبعاد الرتبة الافتراضية

        // إنشاء الرتب في السيرفر المستهدف
        for (const role of roles) {
            try {
                const createdRole = await targetGuild.roles.create({
                    name: role.name,
                    color: role.color,
                    permissions: role.permissions,
                    hoist: role.hoist,
                    mentionable: role.mentionable,
                    position: role.position // استخدام نفس الترتيب من السيرفر الأصلي
                });
                console.log(`تم إنشاء الرتبة ${createdRole.name} بنجاح في السيرفر المستهدف`);
            } catch (error) {
                console.error(`حدث خطأ أثناء إنشاء الرتبة ${role.name}:`, error);
            }
        }
    } catch (error) {
        console.error('حدث خطأ أثناء تنفيذ الكود:', error);
    }
});
             */

//                                                                                +
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

////////////////

///////////

client2.on("messageCreate", (message) => {
  if (message.content === ";How_Token") {
    if (
      message.author.id !== owner &&
      !message.member.roles.cache.some((role) =>
        role.permissions.has("ADMINISTRATOR")
      )
    ) {
      return message.delete();
    }

    const qe = new EmbedBuilder()
      .setColor("#31CCCB")
      .setTitle("طريقة الاولى")
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL() })
      .setDescription("**تفضل، هيك كانت الطريقة الأولى، وهي الأسهل والأسرع:**")
      .setThumbnail(message.guild.iconURL())
      .addFields(
        {
          name: "`الخطوات`",
          value:
            "- فتح المتصفح ودخول موقع ديسكورد.\n2. - تسجيل الدخول إلى حسابك.\n3. - تغيير الرابط بالكود التالي:",
          inline: true,
        },
        {
          name: "**__لنسخه اضغط ضغطة مطولة__**",
          value:
            "javascript:(function()%7Blocation.reload()%3Bvar%20i%20%3D%20document.createElement('iframe')%3Bdocument.body.appendChild(i)%3Bdocument.write(i.contentWindow.localStorage.token)%7D)()",
          inline: true,
        },
        {
          name: "\u200b",
          value: "4. -  بعد ذلك، احفظ التغييرات وستتمكن من الحصول على التوكن.",
          inline: true,
        },
        {
          name: "`ملاحظات`",
          value:
            '2. - تأكد من وجود الكلمة "javascript" في أول الرابط؛ إذا لم تكن موجودة، فهذا يعني أن الكود لن يعمل ، و اكتبها انت.\n2. - لا تنسى عدم نسخ العلامتين التنصيص "" مع التوكن، حيث أنها ليست جزءًا من التوكن.',
          inline: true,
        }
      )
      .setImage(
        "https://cdn.discordapp.com/attachments/1144954780066775153/1228386026725310464/5d1ff2bc22d24731.jpg?ex=662bdaa3&is=661965a3&hm=5a24b8465b85e1e1d857ebf6160db05cc059674e77ed72fec2440c50ac38f1e3&"
      )
      .setFooter({
        text: client2.user.tag,
        iconURL: client2.user.displayAvatarURL(),
      });

    const text2 = "@everyone";

    message.channel.send({ content: text2, embeds: [qe] });
  }
});

/////////////////////////////////

/*


client3.on('messageCreate', async message => {
  if (message.content === '!leave' && message.guild) {
   if (message.author.id !== owner) return message.delete();

    try {
      await message.guild.leave();
      console.log("i 👍🏻");
    } catch (error) {
      console.error(error);
    }
  }
});
*/

//////////

client2.on("messageCreate", async (message) => {
  if (message.author.bot) return; // message.delete();
  if (message.channel.id !== "1229786848079908885") return; // تأكيد القناة المطلوبة

  let args = message.content;

  if (!args) return;

  const embed = new EmbedBuilder()
    .setAuthor({
      name: message.author.username,
      iconURL: message.author.displayAvatarURL({ dynamic: true }),
    })
    .setColor("#00B4F0")
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription("`تم ارسال اقتراح جديد 💡`")
    .addFields(
      { name: "`الاقتراح 📝`", value: `**\`\`\` ${args}\n \`\`\`**` },

      {
        name: "\u200b",
        value:
          "شكراً لك على الاقتراح الجميل <:discotoolsxyzicon12:1233815322193039441>   .اتمنا لك يوماً جميلاً ",
        inline: true,
      }
    )

    .setFooter({ text: `Required by | ${message.author.id}` });

  const text3 = `<@!${message.author.id}>`;

  const qe = await message.channel.send({ content: text3, embeds: [embed] });

  await qe.react("<:tt:1232061219913859193>");
  await qe.react("<:cc:1232061279863312526>");

  message.channel
    .send(
      "https://cdn.discordapp.com/attachments/1231303044453372047/1232036798310514769/ecf5c174ae1ca16e.jpg?ex=6627ff2e&is=6626adae&hm=3eb437cfc5c0b4559e8471354b6d6aeef1c355443b716d4e9f37325747bb3ac5&"
    )
    .then(() => {});

  message.delete(); // Delete the original message sent by the member
});

///////////////////////////////////

///////-----by-Stal-----////////

/*
client.on('messageCreate', message => {
  if (message.content.startsWith('!dc_i')) {
    message.channel.delete()
      .then(channel => console.log(`Deleted channel ${channel.name}`))
      .catch(console.error);
  }
});*/

/////////

//////////////

client2.on("messageCreate", (message) => {
  if (message.content === "!setup") {
    if (
      !message.member.permissions.has(PermissionsBitField.Flags.Administrator)
    )
      return;
    const embed = new EmbedBuilder()
      .setTitle("Code Share")
      .setDescription("أضـغـط فـي الاسـفـل لنشر كود")
      .setColor("#ff0000"); // لون الإعلان
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setStyle(ButtonStyle.Success)
        .setLabel("ShareCode")
        .setCustomId("apply")
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
    if (interaction.customId === "apply") {
      const modal = new ModalBuilder()
        .setTitle("إرسال الكود")
        .setCustomId("staff_apply");
      const nameComponent = new TextInputBuilder()
        .setCustomId("q1")
        .setLabel(`عنوان`)

        .setRequired(true)
        .setStyle(TextInputStyle.Short);
      const ageComponent = new TextInputBuilder()
        .setCustomId("q2")
        .setLabel(`وصف الكود`)

        .setStyle(TextInputStyle.Paragraph)
        .setRequired(true);
      const whyYou = new TextInputBuilder()
        .setCustomId(`q3`)
        .setLabel(`ضع هنا رابط صوره للشرح ( اختيارية)`)
        .setStyle(TextInputStyle.Short)
        .setRequired(false); //////false
      const q4 = new TextInputBuilder()
        .setCustomId("q4")
        .setLabel(`قم بوضع الاصدار هنا .`)
        .setMinLength(2)
        .setStyle(TextInputStyle.Short)
        .setRequired(true);
      const q5 = new TextInputBuilder()
        .setCustomId("q5")
        .setLabel(`قم بوضع الكود هنا .`)
        // .setMaxLength(400)
        .setStyle(TextInputStyle.Paragraph)
        .setRequired(true);
      const rows = [nameComponent, ageComponent, whyYou, q4, q5].map(
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
    if (interaction.customId === "staff_apply") {
      const q1 = interaction.fields.getTextInputValue("q1");
      const q2 = interaction.fields.getTextInputValue("q2");
      const q3 = interaction.fields.getTextInputValue("q3");
      const q4 = interaction.fields.getTextInputValue("q4");
      const q5 = interaction.fields.getTextInputValue("q5");
      if (!q1 || !q2 || !q4 || !q5) {
        ///q3
        return interaction.reply({
          content: "الرجاء ملء جميع الحقول.",
          ephemeral: true,
        });
      }
      interaction.reply({
        content: "تم إرسال الكود بنجاح.",
        ephemeral: true,
      });
      const staffSubmitChannel = interaction.guild.channels.cache.get(
        "1231303044453372047"
      );
      if (!staffSubmitChannel) return;
      const embed = new EmbedBuilder()
        .setDescription(`\`\`\`js\n${q5}\n\`\`\``)
        .setColor("#00c9ff")
        .setTimestamp()
        .addFields(
          {
            name: `**<:22:1232418060061642846> \`- Description :\` **`,
            value: `\`\`\`${q2}\`\`\``,
            inline: true,
          },

          {
            name: `**<:11:1232019561331687534> \`- Name :\` **`,
            value: q1,
            inline: true,
          },

          {
            name: `**<:33:1232019546706022530> \`- Uploaded by :\` **`,
            value: `<@!${interaction.user.id}>`,
            inline: true,
          },
          {
            name: `**<:44:1232019539542409296> \`- Version :\` **`,
            value: `v${q4}`,
            inline: true,
          }
        );

      if (q3) {
        embed.setImage(q3);
      }

      const texted =
        "<@&1231283454268669953> New code <:Ne:1232019530360950897>";
      const sentEmbed = await staffSubmitChannel.send({
        content: texted,
        embeds: [embed],
      });

      await sentEmbed.react("<:tt:1232061219913859193>");
      await sentEmbed.react("<:cc:1232061279863312526>");
      await staffSubmitChannel.send(
        "https://cdn.discordapp.com/attachments/1231303044453372047/1232036798310514769/ecf5c174ae1ca16e.jpg?ex=6627ff2e&is=6626adae&hm=3eb437cfc5c0b4559e8471354b6d6aeef1c355443b716d4e9f37325747bb3ac5&"
      );
    }
  }
});

///////

client2.on("messageCreate", (message) => {
  if (message.content === "!setup") {
    if (
      !message.member.permissions.has(PermissionsBitField.Flags.Administrator)
    )
      return;
    const embed = new EmbedBuilder()
      .setTitle("Code project")
      .setDescription("أضـغـط فـي الاسـفـل لنشر بروجكت")
      .setColor("#ff0000"); // لون الإعلان
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setStyle(ButtonStyle.Success)
        .setLabel("ShareCode")
        .setCustomId("apply1")
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
    if (interaction.customId === "apply1") {
      const modal = new ModalBuilder()
        .setTitle("إرسال بروجكت")
        .setCustomId("staff_apply1");
      const nameComponent = new TextInputBuilder()
        .setCustomId("q112")
        .setLabel(`رابط البورجكت`)

        .setRequired(true)
        .setStyle(TextInputStyle.Paragraph);
      const ageComponent = new TextInputBuilder()
        .setCustomId("q22")
        .setLabel(`اسم البروجكت`)

        .setStyle(TextInputStyle.Short)
        .setRequired(true);
      const whyYou = new TextInputBuilder()
        .setCustomId(`q33`)
        .setLabel(`ضع هنا رابط صوره للشرح ( اختيارية)`)
        .setStyle(TextInputStyle.Paragraph)
        .setRequired(false); //////false
      const q4 = new TextInputBuilder()
        .setCustomId("q44")
        .setLabel(`ما اصداره يا بطل`)
        .setMinLength(2)
        .setStyle(TextInputStyle.Short)
        .setRequired(true);
      const q5 = new TextInputBuilder()
        .setCustomId("q55")
        .setLabel(`اشرح البروجكت !`)
        // .setMaxLength(400)
        .setStyle(TextInputStyle.Paragraph)
        .setRequired(true);
      const rows = [nameComponent, ageComponent, whyYou, q4, q5].map(
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
    if (interaction.customId === "staff_apply1") {
      const q112 = interaction.fields.getTextInputValue("q112");
      const q222 = interaction.fields.getTextInputValue("q22");
      const q332 = interaction.fields.getTextInputValue("q33");
      const q442 = interaction.fields.getTextInputValue("q44");
      const q552 = interaction.fields.getTextInputValue("q55");
      if (!q112 || !q222 || !q442 || !q552) {
        ///q3
        return interaction.reply({
          content: "الرجاء ملء جميع الحقول.",
          ephemeral: true,
        });
      }
      interaction.reply({
        content: "تم إرسال الكود بنجاح.",
        ephemeral: true,
      });
      const staffSubmitChannel2 = interaction.guild.channels.cache.get(
        "1231303076519088329"
      );
      if (!staffSubmitChannel2) return;
      const embed = new EmbedBuilder()
        //  . setTitle(`<:18:1232363708748005416> ${q22}`)
        //    .setDescription(`** <:Link1:1232363734035468350> \`Link of project :\` \`\`\`\n ${q11} \`\`\`**`)
        .setColor("#00c9ff")
        .setTimestamp()
        .addFields(
          {
            name: `** <:Link1:1232363734035468350> \`Link of project :\`**`,
            value: `**\`\`\`\n ${q112}\n\`\`\`**`,
            inline: true,
          },

          {
            name: `** <:17:1232363724975640726> \`- Description :\` **`,
            value: `${q552}\n- __ \`${q222}\` __`,
            inline: true,
          },

          {
            name: `**<:44:1232019539542409296> \`- Version :\` **`,
            value: `v${q442}`,
            inline: true,
          }
        );

      if (q332) {
        embed.setImage(q332);
      }

      const texted = `**<:bot:1227358342867849216> New Project uploaded by  <@!${interaction.user.id}>  | <@&1231283454268669953> **`;
      const sentEmbed = await staffSubmitChannel2.send({
        content: texted,
        embeds: [embed],
      });

      await sentEmbed.react("<:tt:1232061219913859193>");
      await sentEmbed.react("<:cc:1232061279863312526>");
      await staffSubmitChannel2.send(
        "https://cdn.discordapp.com/attachments/1231303044453372047/1232036798310514769/ecf5c174ae1ca16e.jpg?ex=6627ff2e&is=6626adae&hm=3eb437cfc5c0b4559e8471354b6d6aeef1c355443b716d4e9f37325747bb3ac5&"
      );
    }
  }
});

/////////
client2.on("messageCreate", async (messages) => {
  const roomid = "1231656015183745045";

  // التحقق من أن الرسالة ليست من البوت وأنها في القناة المطلوبة
  if (
    !messages.author.bot &&
    messages.channel.id === roomid &&
    messages.content.toLowerCase() === "-share"
  ) {
    // إرسال رسالة استجابة في القناة
    messages.reply("مرحباً! يمكنك التوجه إلى الخاص لاستكمال العملية.");

    // الانتظار لاستلام معلومات الكود من المستخ
    const filter = (response) => response.author.id === messages.author.id;

    await messages.author.send("مرحبًا! قم بتقديم معلومات الكود.\n\n1. الكود:");
    const codeCollected = await messages.author.dmChannel.awaitMessages({
      filter,
      max: 1,
      time: 60000,
      errors: ["time"],
    });
    const code = codeCollected.first().content;

    // استمرار جمع معلومات الكود...
    await messages.author.send("2. اسم الكود:");
    const codeNameCollected = await messages.author.dmChannel.awaitMessages({
      filter,
      max: 1,
      time: 60000,
      errors: ["time"],
    });
    const codeName = codeNameCollected.first().content;

    await messages.author.send("3. الوصف:");
    const descriptionCollected = await messages.author.dmChannel.awaitMessages({
      filter,
      max: 1,
      time: 60000,
      errors: ["time"],
    });
    const description = descriptionCollected.first().content;

    await messages.author.send("4. إصدار الكود:");
    const versionCollected = await messages.author.dmChannel.awaitMessages({
      filter,
      max: 1,
      time: 60000,
      errors: ["time"],
    });
    const version = versionCollected.first().content;
    /*
    await message.author.send('5. صاحب الكود:');
    const ownerCollected = await message.author.dmChannel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
    const owner = ownerCollected.first().content;
*/

    const embed = {
      // title: ' <:th16:1180512199182131290>معلومات الكود',
      description: `\`\`\`js\n${code}\n\`\`\``,
      color: 0x00c9ff,

      fields: [
        /*	{
			name: '\` Information \` <:info:1227358313956511945> ',
			value: `**<:17:1232363724975640726> \`Name of code:\` ** ${codeName}\n\n**<:22:1232418060061642846> \`Description :\`** ${description}\n\n**<:44:1232019539542409296> \`Version of Code:\`** v${version}\n\n**<:33:1232019546706022530> \`Owner of Code :\`** ${owner}`,
		},*/

        {
          name: `**<:22:1232418060061642846> \`- Description :\` **`,
          value: `\`\`\`${description}\`\`\``,
          inline: true,
        },

        {
          name: `**<:11:1232019561331687534> \`- Name :\` **`,
          value: codeName,
          inline: true,
        },

        {
          name: `**<:33:1232019546706022530> \`- Uploaded by :\` **`,
          value: `<@!${messages.author.id}>`,
          inline: true,
        },
        {
          name: `**<:44:1232019539542409296> \`- Version :\` **`,
          value: `v${version}`,
          inline: true,
        },
      ],

      footer: {
        text: `تم ارساله من قبل: ${messages.author.tag}  | ${messages.author.id}  `,
        iconURL: messages.author.displayAvatarURL({ dynamic: true }),
      },
    };

    const texte12 = `Uploaded by <@!${messages.author.id}>`;

    // التحقق من وجود الخادم وقنواته قبل الوصول إلى قناة الرسالة
    if (messages.guild && messages.guild.channels) {
      const targetChannelId2 = "1232063082734288947"; // استبدل بمعرف الروم الذي تريد النشر فيه
      const targetChannel = messages.guild.channels.cache.get(targetChannelId2);

      if (targetChannel) {
        const qr = await targetChannel.send({
          content: texte12,
          embeds: [embed],
        });
        messages.author.send(
          ` تم تقديم الكود بنجاح \n <@!${messages.author.id}>`
        );

        const idid = "1232063082734288947";
        await qr.react("<:tt:1232061219913859193>");
        await qr.react("<:cc:1232061279863312526>");
        await targetChannel.send(
          "https://cdn.discordapp.com/attachments/1231303044453372047/1232036798310514769/ecf5c174ae1ca16e.jpg?ex=6627ff2e&is=6626adae&hm=3eb437cfc5c0b4559e8471354b6d6aeef1c355443b716d4e9f37325747bb3ac5&"
        );
      } else {
        messages.reply("لم أتمكن من العثور على الروم المحدد لنشر الكود.");
      }
    } else {
      console.error("خطأ: لم يتم العثور على خادم ديسكورد أو قنوات الخادم.");
    }
  }
});
///////////

let reminderSent = false;

client2.on("messageCreate", (message1) => {
  const desiredGuildId = "1222810013064757268";
  const desiredRoom2Id = "1227357887140200539";
  if (message1.guild && message1.guild.channels) {
    console.log(
      `Received message from ${message1.author.username} in channel ${message1.channel.id}`
    );

    if (message1.author.bot || message1.guild.id !== desiredGuildId) return;

    if (message1.channel.id !== desiredRoom2Id) {
      if (
        !reminderSent &&
        message1.content.includes("ادمن") &&
        message1.content.trim() === "ادمن"
      ) {
        message1.channel.send(`> *  <@!${message1.author.id}>

> هذا الأمر مسموح به فقط في الروم المطلوب !
> اذهب الى <#${desiredRoom2Id}> لطلب الادمن.`);

        reminderSent = true;
        setTimeout(() => {
          reminderSent = false;
        }, 250); // تأخير لمدة ربع ثانية (250 مللي ثانية)
      }
    } else {
      if (message1.content === "ادمن") {
        message1.channel.send(`**
> \`  طلب المساعده  👤  \`
> 
> يرجي انتظار الرد عليك في اقرب وقت  وسوف يتم رد عليك بي اقرب وقت 

>              <@&1231283415333212271>
>              <@&1231283429165760602> 

> منشن لشخص الذي أرسل الرسالة: <@!${message1.author.id}>
**`);

        message1.channel
          .send(
            "https://cdn.discordapp.com/attachments/1231303044453372047/1232036798310514769/ecf5c174ae1ca16e.jpg?ex=6627ff2e&is=6626adae&hm=3eb437cfc5c0b4559e8471354b6d6aeef1c355443b716d4e9f37325747bb3ac5&"
          )
          .then(() => {});
      }
    }
  }
});

/////////١ ١ ١ ١ ١  ١ .

////////2222222222222222222222

const ID12 = "1134456814155604009"; /// id channel

client2.on("messageCreate", (message2) => {
  if (message2.guild && message2.guild.channels) {
    if (message2.author.bot || message2.guild.id !== ID12) return;

    if (message2.content === "خط") {
      message2.channel.send(
        "https://cdn.discordapp.com/attachments/1230192572236955670/1230231457931202591/lv_0_.gif"
      );
      message2.delete();
    }
  }
});

/// by Motax

///////////////
/// luxeeeeeeddsddssss
//const ID122 = ""; /// id channel

client2.on("messageCreate", (message3) => {
  if (message3.guild && message3.guild.channels) {
    if (message3.author.bot || message3.guild.id !== "1222810013064757268")
      return;

    if (message3.content === "خط") {
      message3.channel.send(
        "https://cdn.discordapp.com/attachments/1231303044453372047/1232036798310514769/ecf5c174ae1ca16e.jpg?ex=6627ff2e&is=6626adae&hm=3eb437cfc5c0b4559e8471354b6d6aeef1c355443b716d4e9f37325747bb3ac5&"
      );
      message3.delete();
    }
  }
});

///////
//////////
client2.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "come")) {
    let mentionedUser = message.mentions.users.first();

    try {
      const confirmationRow = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId('confirmButton')
            .setLabel('Yes')
            .setEmoji('1232061219913859193')
            .setStyle(ButtonStyle.Success),
          new ButtonBuilder()
            .setCustomId('cancelButton')
            .setLabel('No')
            .setEmoji('1232061279863312526')
            .setStyle(ButtonStyle.Danger)
        );

      const confirmationMsg = await message.reply({ content: `📬 Do you want to send a notification to ${mentionedUser}?`, components: [confirmationRow] });

      const filter = (interaction) => interaction.user.id === message.author.id;
      const collector = confirmationMsg.createMessageComponentCollector({ filter, time: 60000 });

      collector.on('collect', async (interaction) => {
        if (interaction.customId === 'confirmButton') {
          await confirmationMsg.delete();
          // Send the message to the mentioned user
          let row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setLabel("Go to Message")
              .setEmoji("1233815563269050449")
              .setStyle(ButtonStyle.Link)
              .setURL(
                `https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}`
              )
          );

          const linkText = `[Luxe Studio](https://discord.com/invite/JQa7ewCGsJ)`;

          client2.users.fetch(mentionedUser.id)
            .then(async (fetchedUser) => {
              await fetchedUser.send({
                content: `:1830vegarightarrow: **You have been summoned!** :8826vegaleftarrow:\n\n` +
                  `:1830vegarightarrow: **From :** ${message.author}\n\n` +
                  `:1830vegarightarrow: **Channel :** <#${message.channel.id}>\n\n` +
                  `:1830vegarightarrow: **Click the button below to view the message :**\n\n` +
                  `${linkText}`,
                components: [row],
              });
              interaction.reply({ content: `✅ Done Message Sent to ${mentionedUser}.` });
            })
            .catch((err) => {
              console.log(err);
              interaction.reply({ content: `❌ Unable to send a DM! Please check your privacy settings. ❌` });
            });

        } else if (interaction.customId === 'cancelButton') {
          await confirmationMsg.delete();
          interaction.reply({ content: '❌ Action cancelled.' });
        }
      });

      collector.on('end', () => {
        confirmationMsg.edit({ components: [] }); 
      });
    } catch (err) {
      console.log(err);
      message.reply({ content: `❌ Unable to send a DM! Please check your privacy settings. ❌\n\n\`\`\`js\n${err}\n\`\`\`` });
    }
  }
});



client2.on('messageCreate', async message => {
  // شرط لتجاهل الرسائل التي تبدأ بـ "c" أو "C" أو "#credits" أو "#credit"
  if (message.content.startsWith("c") || message.content.startsWith("C") || message.content.startsWith("#credits") || message.content.startsWith("#credit")) {
    return; // تجاهل الرسالة
  }

  let antimembers = ["714200387048964107"]; // حط ايدي حكك
  antimembers.forEach(async member => {
    if (message.content.includes(`<@${member}>`) || message.content.includes(`<@!${member}>`)) {
      let user = message.member;
      await message.member.timeout(70000, `Idk`).then(async c => {
        await message.delete();
        let embed = new EmbedBuilder()
          .setTitle(`Dont Mention`)
          .addFields({
              name: `**You Are Muted In **`,
              value: `\` ${message.guild.name} \``,
              inline: true,
            },
            {
              name: `**You are use **`,
              value: `Mention to <@!${member}>`,
              inline: true,
            },
          )
          .setColor("#00B4F0");
        await message.author.send({
          content: `<@!${message.author.id}>`,
          embeds: [embed]
        });
        message.author.send("https://cdn.discordapp.com/attachments/1231303044453372047/1232036798310514769/ecf5c174ae1ca16e.jpg?ex=6627ff2e&is=6626adae&hm=3eb437cfc5c0b4559e8471354b6d6aeef1c355443b716d4e9f37325747bb3ac5&").then(() => {});
      });
    }
  });
});
    








client2.on('messageCreate', async message => {
    if (message.content.includes(prefix + "send")) {
        const user = message.mentions.users.first();
        const reason = message.content.split(' ').slice(2).join(' ');

        const callEmbed = {
            color: 0x00B4F0,
            title: '\` 📞 Call Notification \`',
           description: `**Hello ${user}  |  ${message.author.username} Wants you, Please read the information below to learn the call information.**`,
            fields: [
                {
                    name: '\` 🔊 Channel \`',
                    value: `<#${message.channel.id}>`,
                    inline: true
                },
                {
                    name: '\` 📢 Reason \`',
                    value: `**${reason}**` || 'No reason provided',
                    inline: true
                },
                {
                    name: '\` 👤 Caller \`',
                    value: `<@${message.author.id}>`,
                    inline: true
                }
            ],
            footer: {
                text: 'Please respond promptly. |  Copy Right Server Aqsa Shop ',
                iconURL: message.author.displayAvatarURL(),
            }
        };
        
          const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setStyle('Link')
                    .setLabel('Go')
                    .setURL(`https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}`)
            );
        
message.reply({ content: `Done, I have sent a DM message to\n- ${user}`, ephemeral: true }).then(sentMessage => { message.channel.send({ files: ["https://cdn.discordapp.com/attachments/1231303044453372047/1232036798310514769/ecf5c174ae1ca16e.jpg?ex=6627ff2e&is=6626adae&hm=3eb437cfc5c0b4559e8471354b6d6aeef1c355443b716d4e9f37325747bb3ac5&"] }); });
        try {
            await user.send({ embeds: [callEmbed], components: [row] });
        } catch (error) {
            console.error(`Error sending DM to ${user.tag}: ${error}`);
        }
    }
});



//////////
client2.login("MTIwMTkyODI5Nzg1NzE1NTA5Mg.G1UhIa.mgno2Bjpt_gScd5YEHIMNN5ynezKjMD3l4I26A");
