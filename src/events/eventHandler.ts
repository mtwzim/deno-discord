import { EventHandlers as eventHandlers } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/master/types/options.ts.ts';
import { ready } from './ready.ts.ts';
import { messageCreate } from './messageCreate.ts.ts';

export const eventHandler: eventHandlers = {
	ready,
    messageCreate,
};