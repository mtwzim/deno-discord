import { Ping } from "./ping.ts";

export const Commands: Array<Command> = [
    {
        name: 'ping',
        requireParams: false,
        paramsCount: 0,
        class: Ping
    },
];   

export interface Command {
    name: string;
    requireParams: boolean;
    paramsCount: number;
    class: any;
}