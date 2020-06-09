import Client from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/master/module/client.ts.ts';
import { eventHandler } from './src/events/eventHandler.ts.ts';
import { Intents } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/master/types/options.ts.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts.ts';
import clc from 'https://deno.land/x/color/index.ts.ts';

const env = config();

export const bot = Client({
  token: env.DISCORD_TOKEN,
  botID: "0",
  intents: [Intents.GUILDS, Intents.GUILD_MESSAGES, Intents.GUILD_VOICE_STATES],
  eventHandlers: eventHandler
}).catch((error) => {
    console.log(clc.red.text('Discord ' + error));
    Deno.exit(0);
});
