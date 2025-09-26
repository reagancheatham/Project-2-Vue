import { parseCSV } from "./parseCSV.js";

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
