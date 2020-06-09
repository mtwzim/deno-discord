import { Message } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/master/structures/message.ts.ts';
import { commandHandler } from '../commands/commandHandler.ts.ts';

export const messageCreate = (message: Message) => {
    (new commandHandler(message));
};