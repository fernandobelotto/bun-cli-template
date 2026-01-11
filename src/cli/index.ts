import { program } from 'commander';

program
    .name('bun-cli-template')
    .description('A modern CLI template built with Bun')
    .version('1.0.0')
    .action(() => {
        console.log('Hello from bun-cli-template!');
    });

program.parse();
