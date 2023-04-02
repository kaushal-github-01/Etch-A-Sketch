const container = document.querySelector('.container');
let divsTimeOut;
const btn = document.querySelector('.btn');
let gridSize;

btn.onclick = () => {
    while (true) {
        gridSize = Number(prompt("Enter the size of grid (1 to 100)"));
        if (gridSize >= 1 && gridSize <= 100) {
            break;
        }
        alert("Please enter a number between 1 and 100.");
    };

    container.innerHTML = '';


    for (let i = 1; i <= `${gridSize}`; i++) {

        console.log(gridSize);

        const rowDivs = document.createElement('div');
        rowDivs.classList.add('rowDivs');
        container.appendChild(rowDivs);

        for (let j = 1; j <= `${gridSize}`; j++) {

            const columnDivs = document.createElement('div');
            columnDivs.classList.add('columnDivs');

            columnDivs.addEventListener('mouseover', () => {
                columnDivs.style.backgroundColor = 'black';
            });

            columnDivs.addEventListener('mouseout', () => {
                divsTimeOut = setTimeout(() => {
                    columnDivs.style.backgroundColor = 'white';
                }, 150);

            });

            rowDivs.appendChild(columnDivs);
        };

    };

};