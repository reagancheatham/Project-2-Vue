export function parseCSV(rawText) {
  const lines = rawText.trim().split('\n')        
  const headers = lines[0].split(',').map(h => h.trim()) 

  const data = lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim()) 
    const row = {}

    headers.forEach((header, i) => {
      row[header] = values[i] || '' 
    })

    return row
  })
  console.log("Loaded Shloaded")
  return { headers, data } 
}