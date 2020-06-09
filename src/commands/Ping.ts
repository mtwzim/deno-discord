import { Message } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/master/structures/message.ts.ts';

export class Ping {
    constructor(param:string, command: Message) {
        command.channel.sendMessage('Ping...')
        .then((msg:Message) => {
            command.channel.sendMessage(`Pong! Demorou \`${msg.timestamp - command.timestamp}\`ms.`);
        })
    }
}