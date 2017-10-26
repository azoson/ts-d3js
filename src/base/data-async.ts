import { csvParse } from 'd3';

export async function d3textAsync(path: string): Promise<string>{
    const res = await fetch(path);
    if (res.status !== 200) {
        console.error("Error caused in file read");
    }
    const text = await res.text();
    return text;
}

export async function d3csvAsync(path: string): Promise<d3.DSVParsedArray<d3.DSVRowString>> {
    const text = await d3textAsync(path);
    return csvParse(text);
}
