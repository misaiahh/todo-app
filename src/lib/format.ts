function formatFirstName(name: string) {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("");
}

export { formatFirstName };