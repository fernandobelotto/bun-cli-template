import { describe, expect, it } from 'bun:test';

describe('CLI', () => {
  it('should import commander without errors', async () => {
    const { program } = await import('commander');
    expect(program).toBeDefined();
  });

  it('should be able to create a new command', async () => {
    const { Command } = await import('commander');
    const cmd = new Command();
    cmd.name('test-cli').version('1.0.0');
    expect(cmd.name()).toBe('test-cli');
  });
});

describe('Example utilities', () => {
  it('should pass a basic test', () => {
    expect(1 + 1).toBe(2);
  });

  it('should handle string operations', () => {
    const greeting = 'Hello, CLI!';
    expect(greeting).toContain('CLI');
  });

  it('should handle async operations', async () => {
    const result = await Promise.resolve(42);
    expect(result).toBe(42);
  });
});
