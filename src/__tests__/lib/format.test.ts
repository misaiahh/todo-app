import { expect, test } from 'vitest';
import { formatFirstName } from '../../lib/format';

test('formatFirstName', () => {
    expect(formatFirstName('John Smith')).toBe('JS');
});