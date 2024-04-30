import { recoverData } from "./recoverData.js";

export const lastOrder = async () => {
    const json = await recoverData();
    const arrJson = Object.keys(json).map(key => ({ key, value: json[key] }));

    let lastElement;

    for (const orden of arrJson) {
        lastElement = orden;
    }

    return lastElement;
}