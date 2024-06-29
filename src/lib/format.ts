/**
 * Formats a given full name by extracting the initial letters of each word and returning them as a single string.
 *
 * @param {string} name - The full name to be formatted.
 * @return {string} The formatted first name, with each initial letter of each word concatenated together.
 */
function formatFirstName(name: string): string {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("");
}

export { formatFirstName };