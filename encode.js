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

  ChannelType

} = require("discord.js");

const client = new Client({

  intents: 131071,

});


client.login(process.env.encode); //





const prefix = ";"; // البريفكس

client.on("ready", () => {

  console.log(`🤖 - Logged in as ${client.user.tag}!`);

  console.log(`✅ - index.js`);

  client.user.setStatus('idle')
    
  
  client.user.setActivity(

    `in \` ${client.guilds.cache.size} \` Gulibs , ;help `,

    { type: 3 }

  );

const owner = "714200387048964107"; // ايدي الاونر

const wordReplacements = {

  حساب: "7ُـســـاب",

  نيترو: "نيتر9",

  ديسكورد: "ديىىــــىـ√ــ9رد",

  شوب: "ش9ب",

  بروجكت: "بر9جكت",

  ستور: "ستـ9ر",

  بوت: "بــ9ت",

  توكن: "تـ9كن",

  توكنات: "تـ9كنات",

  بروجكت: "بر9جكت",

  بروجكتات: "بر9جكتات",

  سعر: "سـ3ـر",

  متوفر: "متــ9فر",

  شراء: "شر|ء",

  اشتري: "اشــtـري",

  للبيع: "للبيـ3",

  ابيعه: "ابيـ3ـه",

  ينباع: "ينبا3",

  اشتريه: "اشـtـريه",

  سيرفر: "سيــrفر",

  سيرفرات: "سيـrفرات",

  بوست: "بــ9ست",

  بوستات: "بـ9ستات",

  نيتروهات: "نيتر9هات",

  اسعار: "اســ3ـار",

  دفع: "دفـ3",

  شاهد: "شاhـد",

  نتفلكس: "نــtفليكس",

  ستيم: "ستيــm",

  test: "test!",

  دسكورد: "دىىــــىـ√ــورد",

  بيع: "بيـ3",

  Account: "acc",

  كريديت: "كريـ ـــديــt",

  منشور: "منـشــ9ر",

  منشورك: "منشــ9رك",

  منشوراتك: "منشــ9راىـtــك",

  منشورات: "منشــ9رات",

  بضريبة: "بضــr يبة",

  متجر: "متــGـير",

  نصاب: "نــsـاب",

  فيزا: "فيــz ا",

  كربتو: "كوربـtـو",

  دولار: "د9لار",

  بائع: "بائــ3",

  ثمن: "ثمـــn",

  هكر: "هــKـر",

};

client.on("messageCreate", (message) => {

  if (message.content === prefix + "setup") {

    /* 

 if (message.author.id !== owner) return message.delete();

  

const roleWithPermission = message.member.roles.cache.some(role => role.permissions.has("Administrator"));

if (!roleWithPermission) return;   

   

    ذ

    */

    if (

      message.author.id !== owner &&

      !message.member.roles.cache.some((role) =>

        role.permissions.has("ADMINISTRATOR")

      )

    ) {

      return message.delete();

    }

    const embed = new EmbedBuilder()

      .setTitle("قـسـم التـشـفـيـر")

      .setColor("#9d8444")

      .setDescription(

        `مرحبًا بك في قسم التشفير السريع  \n\n لسيرفر \` ${message.guild.name} \` لتشفير منشوراتك`

      )

      .addFields(

        {

          name: "خطوة ** __1__**",

          value:

            "**لتشفير منشورك، ما عليك سوى الضغط على زر `شفر 📇` ووضع المنشور داخله، **",

        },

        {

          name: "\u200b",

          value: "\u200b",

          inline: false,

        },

        {

          name: "خطوة **__2__**",

          value:

            "**- بمجرد تشفير المنشور، قم بنسخ النص الذي تمت عملية التشفير عليه.\n1. - بعد ذلك، انتظر استلام رسالة خاصة تحتوي على النص المشفر.\n2. - قم بنسخ النص المشفر من الرسالة الخاصة واستخدمه كما تشاء.**",

        }

        /*  {

                 name: '\u200b',

                    value: '\u200b',

                    inline: false

                },*/

      )

      .setThumbnail(

        "https://cdn.discordapp.com/attachments/1215752360626753688/1225327678458953748/img_2024349439.jpg?ex=6620ba54&is=660e4554&hm=6f4cfe1e1984e0eba5977ccaab67e24f08bf1f30244b7da8f437e0e3b7f39bfb&"

      )

      .setImage(

        "https://cdn.discordapp.com/attachments/1215752360626753688/1225327665636966481/cacd7495e26ac9ee.jpg?ex=6620ba50&is=660e4550&hm=194edcb6a56aab6ee0ce07071688283435c070216055c763d25a0be94288946d&"

      );

    const text = `@everyone`;

    const btn = new ButtonBuilder()

      .setCustomId("tshfir")

      .setStyle(ButtonStyle.Primary)

      .setLabel("شـفـر")

      .setEmoji("📇");

    const btn2 = new ButtonBuilder()

      .setLabel("الدعم الفني")

      .setURL("https://discord.com/invite/JQa7ewCGsJ")

      .setStyle(ButtonStyle.Link)

      .setEmoji("🛠️");

    const row = new ActionRowBuilder().addComponents(btn, btn2);

    message.delete();

    message.channel.send({ content: text, embeds: [embed], components: [row] });

  }

});

client.on("interactionCreate", (interaction) => {

  if (interaction.customId == "tshfir") {

    const modal = new ModalBuilder()

      .setTitle("تشفير منشور")

      .setCustomId("tshfirmodal");

    const inp = new TextInputBuilder()

      .setLabel("منشورك")

      .setPlaceholder("ضع منشورك هنا")

      .setCustomId("inp1")

      .setStyle(TextInputStyle.Paragraph)

      .setMaxLength(2000);

    const row = new ActionRowBuilder().addComponents(inp);

    modal.addComponents(row);

    interaction.showModal(modal);

  } else if (interaction.customId == "tshfirmodal") {

    const btn = new ButtonBuilder()

      .setCustomId("copytxt")

      .setLabel("انسخ نص")

      .setStyle(ButtonStyle.Primary)

      .setEmoji("📋");

    const row = new ActionRowBuilder().addComponents(btn);

    const v = interaction.fields.getTextInputValue("inp1");

    let modifiedContent = v;

    for (const word in wordReplacements) {

      if (wordReplacements.hasOwnProperty(word)) {

        const replacement = wordReplacements[word];

        modifiedContent = modifiedContent.replace(

          new RegExp(word, "gi"),

          replacement

        );

      }

    }

    interaction.reply({

      content: `${modifiedContent}`,

      components: [row],

      ephemeral: true,

    });

  } else if (interaction.customId == "copytxt") {

    const msgc = interaction.message.content;

    interaction.user

      .send(`__**\`منشورك بعد التشفير :\`**__\n\n ${msgc}`)

      .then(() => {

        interaction.reply({

          content: "تم ارسال المنشور الى خاصك انسخه من هناك",

          ephemeral: true,

        });

      })

      .catch(() =>

        interaction.reply({ content: "عذرا خاصك مغلق", ephemeral: true })

      );

  }

});

client.on("messageCreate", (message2) => {

  if (message2.content.toLowerCase() === prefix + "help") {

    const helpEmbed = new EmbedBuilder()

      .setColor(0xff0000)

      .setTitle("قائمة الأوامر والبرفكس")

      .setAuthor({

        name: "بوت إعلاناتك المشفرة",

        iconURL:

          "https://cdn.discordapp.com/attachments/1215752360626753688/1225327678458953748/img_2024349439.jpg?ex=6620ba54&is=660e4554&hm=6f4cfe1e1984e0eba5977ccaab67e24f08bf1f30244b7da8f437e0e3b7f39bfb&",

      })

      .setDescription("مرحبًا بك في قائمة الأوامر لبوت إعلاناتك المشفرة.")

      .setThumbnail(

        "https://cdn.discordapp.com/attachments/1215752360626753688/1225327678458953748/img_2024349439.jpg?ex=6620ba54&is=660e4554&hm=6f4cfe1e1984e0eba5977ccaab67e24f08bf1f30244b7da8f437e0e3b7f39bfb&"

      )

      .addFields(

        {

          name: "\u200b",

          value: "\u200b",

          inline: false,

        },

        {

          name: "` ما هي بادئة أو برفكس البوت ؟ `",

          value: `برفكس البوت هو  \` '   ${prefix}   ' \`  وهي التي تبدأ بالأمر مثلاً    \`;help\``,

        },

        {

          name: "\u200b",

          value: "\u200b",

          inline: false,

        },

        {

          name: "` الأمر setup `",

          value:

            "يستخدم لإضافة بانل أو رسالة تشفير منشورات. يتطلب صلاحية بأحد رتبك\n `Administrator`.",

          inline: true,

        },

        {

          name: "\u200b",

          value: "\u200b",

          inline: false,

        },

        {

          name: "` الأمر help `",

          value: "يستخدم لعرض قائمة المساعدة ومعلومات عن البوت.",

          inline: true,

        },

        {

          name: "\u200b",

          value: "\u200b",

          inline: false,

        },

        {

          name: "` من صانع البوت ؟ `",

          value: "صانع البوت و ملكيته \n لـــــ<@!714200387048964107> .",

          inline: true,

        },

        {

          name: "\u200b",

          value: "\u200b",

          inline: false,

        },

        {

          name: "` ملاحظات مهمه `",

          value: ` في حال وجت خلل في بوت توجه إلى الدعم الفني \n\n اذا لديك اقتراحات لتطوير البوت توجه إلى سيرفر الدعم الفني \n 

[الدعم الفني / support team ](https://discord.com/invite/JQa7ewCGsJ) 📡   🛠️ `,

          inline: false,

        }

      )

      .setImage(

        "https://cdn.discordapp.com/attachments/1133349725446352976/1218325256662679685/dabe3ef552e0da16.jpg?ex=660740d0&is=65f4cbd0&hm=36a1be5f99e87057e4683bfb4bd7a55c234606ff18cd8ed48effc227594588d4&"

      )

      .setTimestamp()

      .setFooter({

        text: "help cmd   |   قائمه المساعدة     .",

        iconURL:

          "https://cdn.discordapp.com/attachments/1133349725446352976/1218325561987043348/img_20242821393.png?ex=66074119&is=65f4cc19&hm=57343d22da00d8215dbcba39a8de2d1d54872d2ba785197a3ec4c51356ed6850&",

      });

    const inviteButton = new ButtonBuilder()

      .setStyle(ButtonStyle.Link)

      .setLabel(`دعوة البوت`)

      .setEmoji("🎯")

      .setURL(

        "https://discord.com/oauth2/authorize?client_id=1215743542308376636&permissions=8&scope=bot+applications.commands"

      );

    const supportButton = new ButtonBuilder()

      .setStyle(ButtonStyle.Link)

      .setLabel(`الدعم الفني`)

      .setEmoji("🛰️")

      .setURL("https://discord.com/invite/JQa7ewCGsJ");

    const row = new ActionRowBuilder().addComponents(

      inviteButton,

      supportButton

    );  

    message2.react("🛠️");

    // بعت رسالة للشب

    message2.member

      .send({ embeds: [helpEmbed], components: [row] })

      .catch((error) => {

        console.error("ما قدرت أبعت رسالة المساعدة:", error);

        message2.channel.send(

          "ما قدرت أبعت رسالة المساعدة عالخاص. تأكد من فتح الرسائل الخاصة."

        );

      });

  }

  })
});




