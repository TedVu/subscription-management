const buildUniqueFilename = (name: string, date: Date | null) => {
    const dateStr = date?.toISOString().split("T")[0];
    const nameStr = name.replace(/\s/g, "-");
    return `${nameStr}-${dateStr}`;
};

export { buildUniqueFilename };
