import { describe, expect, test } from "vitest";
import getElementAttributes from '../../lib/getElementAttributes';

describe('getElementAttributes', () => {
  test('should return an empty object when element has no attributes', () => {
    const element = document.createElement('div');
    expect(getElementAttributes(element)).toEqual({});
  });

  test('should return an object with attribute names and values when element has attributes', () => {
    const element = document.createElement('div');
    element.setAttribute('foo', 'bar');
    element.setAttribute('hello', 'world');
    expect(getElementAttributes(element)).toEqual({
      foo: 'bar',
      hello: 'world',
    });
  });
});