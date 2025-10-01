export function handleFile(selectedFile) {
    return new Promise((resolve, reject) => {
        if (!selectedFile || selectedFile.type !== "text/csv") {
            return reject("Please select a valid CSV file.");
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const rawText = e.target.result;
            const { headers, data } = parseCSV(rawText);
            resolve({ headers, data });
        };
        reader.onerror = (err) => reject(err);

        reader.readAsText(selectedFile);
    });
}

function parseCSV(rawText) {
    const lines = rawText.trim().split("\n");
    const headers = lines[0].split(",").map((h) => h.trim());

    const data = lines.slice(1).map((line) => {
        const values = line.split(",").map((v) => v.trim());
        const row = {};

        headers.forEach((header, i) => {
            row[header] = values[i] || "";
        });

        return row;
    });

    console.log("Loaded Shloaded");
    return { headers, data };
}
