import clc from 'https://deno.land/x/color/index.ts.ts';

export const ready = () => {
	console.log(clc.green.text('[PRONTO] O bot está online e funcionando!'));
};