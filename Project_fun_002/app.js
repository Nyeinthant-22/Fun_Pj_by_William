let input = document.getElementById('numberInput');
let output = document.getElementById('tableOutput');

input.addEventListener('input', () => {
    let num = parseInt(input.value);
    output.innerHTML = "";

    if(!isNaN(num)){
        for(let i = 1; i <= 12; i++){
            let line = document.createElement('p');
            line.textContent = `${num} x ${i} = ${num * i}`;
            output.appendChild(line)
        }
    }

})