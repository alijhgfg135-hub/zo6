require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ]
});

const GUILD_ID = "1403699841388773386";
const CHANNEL_ID = "1547430969504698409";

client.once("clientReady", async () => {
  console.log(`البوت اشتغل: ${client.user.tag}`);

  const channel = await client.channels.fetch(CHANNEL_ID);

  joinVoiceChannel({
    channelId: channel.id,
    guildId: GUILD_ID,
    adapterCreator: channel.guild.voiceAdapterCreator,
    selfDeaf: true
  });

  console.log("البوت دخل الروم الصوتي 🎤");
});

client.login(process.env.TOKEN);