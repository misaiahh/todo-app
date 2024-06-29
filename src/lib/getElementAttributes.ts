/**
 * Returns an object containing the names and values of all attributes of the given element.
 *
 * @param {Element} element - The element to retrieve attributes from.
 * @returns {Record<string, string>} An object where the keys are attribute names and the values are attribute values.
 */
export default function getElementAttributes(element: Element): Record<string, string> {
    const attributes: Record<string, string> = {};

    for (const attr of element.attributes) {
        attributes[attr.name] = attr.value;
    }

    return attributes;
}

