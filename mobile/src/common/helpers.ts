export const chunkArray = <T>(arr: T[], size: number): T[][] =>
    [...Array(Math.ceil(arr.length / size))].map((_, i) => arr.slice(size * i, size + size * i));

export const delay = (t: number) => new Promise((resolve) => setTimeout(resolve, t));
