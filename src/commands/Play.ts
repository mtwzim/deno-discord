// import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/master/structures/message.ts";
// import { YouTube } from "https://deno.land/x/youtube_deno/src/mod.ts";
// import { WebSocket } from "https://deno.land/x/websocket/mod.ts";
// 
// 
// Este código está em desenvolvimento
// 
// 
// export class Play {
//   youtube = new YouTube("AIzaSyA6GzfBUiR2c5eeivu14O73YMU01LxxOjA", false);
//   ws: WebSocket = new WebSocket("wss://gateway.discord.gg/?v=6&encoding=json");

//   constructor(param: string, command: Message) {
//     this.youtube
//       .search_list({ part: "id, snippet", q: param, type: "video" })
//       .then((res) => {
//           const video = res.items[0];
//         this.ws.send(`{
//                     "op": 2,
//                     "d": {
//                      "heartbeat_interval": 60000,
//                       "token": "NzEzNzczNjM5OTE2NDU0MDA2.XsqyJg.XaYRAAZJWd14E0c05ZlNbRrM90c",
//                       "properties": {
//                         "$os": "windows",
//                         "$browser": "disco",
//                         "$device": "disco"
//                       },
//                       "compress": false,
//                       "large_threshold": 250,
//                       "guild_subscriptions": true,
//                       "shard": [0, 1],
//                       "presence": {
//                         "game": {
//                           "name": "Cards Against Humanity",
//                           "type": 0
//                         },
//                         "status": "dnd",
//                         "since": 91879201,
//                         "afk": false
//                       },
//                       "intents": 1
//                     }
//                   }`);
//         let READY: any;
//         let VOICE_SERVER_UPDATE: any;

//         this.ws.send(`{
//                         "op": 4,
//                         "d": {
//                           "guild_id": "713002229677948968",
//                           "channel_id": "713003009210187776",
//                           "self_mute": false,
//                           "self_deaf": false
//                         }
//                       }`);
//                       this.ws.on('error', (res:any) => {
//                         console.log(res);
//                     }) 
//                     this.ws.on('close', (res:any) => {
//                         console.log(res);
//                     })
//         this.ws.on("message", (res: any) => {
//             console.log(res);
//           res = JSON.parse(res);
//           if (res.t == "VOICE_SERVER_UPDATE") {
//             VOICE_SERVER_UPDATE = res;
//           }
//           if (res.t == "READY") {
//             READY = res;
//           }

//           if (
//             typeof READY !== "undefined" &&
//             typeof VOICE_SERVER_UPDATE !== "undefined"
//           ) {
//             // run connection
//             console.log("RUN!");
//             console.log(res);
//             console.log(JSON.parse(`{
//                 "op": 0,
//                 "d": {
//                   "server_id":  "`+ VOICE_SERVER_UPDATE.d.guild_id +`",
//                   "user_id": "`+ READY.d.user.id +`",
//                   "session_id":  "`+ READY.d.session_id +`",
//                   "token":  "`+ VOICE_SERVER_UPDATE.d.token +`"
//                 }
//               }`))
//               console.log(READY);
//             this.ws.send(`{
//                 "op": 0,
//                 "d": {
//                   "server_id":  "`+ VOICE_SERVER_UPDATE.d.guild_id +`",
//                   "user_id": "`+ READY.d.user.id +`",
//                   "session_id":  "`+ READY.d.session_id +`",
//                   "token":  "`+ VOICE_SERVER_UPDATE.d.token +`"
//                 }
//               }`);
//           }
//         });
//         command.channel.sendMessage({
//           embed: {
//             author: {
//               name: command.author.username,
//             },
//             color: 15158332,
//             thumbnail: {
//                 url: video.snippet.thumbnails.medium.url
//             },
//             fields: [
//               {
//                 name: "Adicionado...",
//                 value:  video.snippet.title
//               },
//             ],
//             footer: {
//               text: "Deno Music",
//             },
//           },
//         });
//       });
//   }
// }
