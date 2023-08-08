const buildUniqueFilename = (name: string, date: Date | null) => {
    const dateStr = date?.toString().replace(/\s/g, "-").replaceAll(":", "-");
    const nameStr = name.replace(/\s/g, "-");
    return `${nameStr}${dateStr}`;
};

export { buildUniqueFilename };
