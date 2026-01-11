import { input, confirm, select } from '@inquirer/prompts';
import chalk from 'chalk';

/**
 * Example function demonstrating @inquirer/prompts usage
 */
export async function runInteractivePrompt(): Promise<void> {
  const name = await input({
    message: 'What is your name?',
  });

  const confirmed = await confirm({
    message: `Hello ${chalk.green(name)}! Is this correct?`,
  });

  if (confirmed) {
    const choice = await select({
      message: 'What would you like to do?',
      choices: [
        { name: 'Start', value: 'start' },
        { name: 'Configure', value: 'configure' },
        { name: 'Exit', value: 'exit' },
      ],
    });

    console.log(chalk.blue(`You selected: ${choice}`));
  }
}

/**
 * Example utility function
 */
export function formatMessage(message: string): string {
  return chalk.bold(message);
}
