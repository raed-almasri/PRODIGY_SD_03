import fs from "fs/promises";
import path from "path";

export const readFileJson = async (myPath) => {
    try {
        const filePath = path.join(path.resolve(), myPath);
        const data = await fs.readFile(filePath, "utf8");
        if (data.length === 0) {
            return null;
        }
        const jsonData = JSON.parse(data);
        return jsonData;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const writeFileJson = async (myPath, data) => {
    const jsonData = JSON.stringify(data, null, 2);
    try {
        const filePath = path.join(path.resolve(), myPath);
        await fs.writeFile(filePath, jsonData);
        return "Data written to file successfully";
    } catch (err) {
        console.error(err);
        return null;
    }
};
