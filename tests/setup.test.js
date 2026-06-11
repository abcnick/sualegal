import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';

describe('Test environment setup', () => {
  it('vitest is working', () => {
    expect(true).toBe(true);
  });

  it('fast-check is working', () => {
    fc.assert(
      fc.property(fc.integer(), (n) => {
        return typeof n === 'number';
      })
    );
  });
});
