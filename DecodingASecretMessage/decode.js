async function decodeGrid(url) {
  // Fetch the document HTML
  const response = await fetch(url);
  const htmlText = await response.text();
  const documentParser = new DOMParser();
  const parsedDoc = documentParser.parseFromString(htmlText, 'text/html');

  // Collect grid points from the table rows
  const gridPoints = [];
  const tableRows = parsedDoc.querySelectorAll('table tr');
  for (const row of tableRows) {
    const cells = row.querySelectorAll('td');
    const [ xCell, charCell, yCell ] = cells;
    if (!xCell || xCell.innerText.includes('x-coordinate')) continue;

    const xCoord = parseInt(xCell.innerText, 10);
    const yCoord = parseInt(yCell.innerText, 10);
    const symbol = charCell.innerText.trim();
    gridPoints.push({ x: xCoord, y: yCoord, symbol });
  }

  // Determine grid dimensions
  const highestX = Math.max(...gridPoints.map(point => point.x));
  const highestY = Math.max(...gridPoints.map(point => point.y));

  // Initialize empty grid
  const grid = Array.from({ length: highestY + 1 },
    () => Array(highestX + 1).fill(' ')
  );

  // Place each symbol in the grid
  gridPoints.forEach(({ x, y, symbol }) => {
    grid[y][x] = symbol;
  });

  // Output the decoded message
  const output = grid.map(row => row.join('')).join('\n');
  console.log(output);
}
