import { describe, expect, it } from 'bun:test';
import { formatMessage } from './example';

describe('formatMessage', () => {
  it('should format a message with chalk', () => {
    const result = formatMessage('Hello');
    expect(result).toContain('Hello');
  });

  it('should handle empty strings', () => {
    const result = formatMessage('');
    expect(result).toBeDefined();
  });
});
