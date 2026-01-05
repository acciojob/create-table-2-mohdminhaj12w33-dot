
	function createTable() {
    const table = document.getElementById("myTable");

    // Clear existing table content
    table.innerHTML = "";

    // Prompt for rows and columns
    const rn = prompt("Input number of rows");
    const cn = prompt("Input number of columns");

    // Convert input to numbers
    const rows = Number(rn);
    const cols = Number(cn);

    // Validate numeric input
    if (isNaN(rows) || isNaN(cols)) {
        return; // Ignore non-numeric input
    }

    // Validate positive values
    if (rows <= 0 || cols <= 0) {
        alert("Rows and columns must be positive numbers");
        return;
    }

    // Create table rows and columns
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");

        for (let j = 0; j < cols; j++) {
            const td = document.createElement("td");
            td.textContent = `Row-${i} Column-${j}`;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    //Write your code here
  
}
