import { Message } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/master/structures/message.ts.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts.ts';
import { Commands } from './commands.ts.ts';

export class commandHandler {
    env: any;
    constructor(command: Message) {
        this.env = config();
        if(command.content.toString().startsWith(this.env.PREFIX) && command.content.toString().length > 1 && !Number(command.content.toString()[1])) {
            const commandName = (command.content.split(' ')[0].split(this.env.PREFIX)[1]);
            const theCommand = Commands.find(x => x.name === commandName)
            if(theCommand) {
                let params: any = command.content.split(' ');
                delete params[0];
                if(typeof theCommand.paramsCount === "undefined") {
                    theCommand.paramsCount = 1;
                }
                if(theCommand.requireParams && ( params.length - 1 ) < theCommand.paramsCount) {
                    command.channel.sendMessage({
                        embed: {
                            author: {
                                name: command.author.username,
                            },
                            color: 15158332,
                            description: "O comando " + commandName + " requer ao menos " + theCommand.paramsCount + " parametro(s)",
                            footer: {
                                text: "Deno Music"
                            }
                        }
                    });
                    return;
                }
                params = params.join(' ');
                (new theCommand.class(params, command))
            } else {
                command.channel.sendMessage({
                    embed: {
                        author: {
                            name: command.author.username,
                        },
                        color: 15158332,
                        description: "Este comando não existe",
                        footer: {
                            text: "Deno Music"
                        }
                    }
                });
                return;
            }
        }
    }

    capitalize(str1:string ){
        return str1.toString().charAt(0).toUpperCase() + str1.slice(1);
    }
}