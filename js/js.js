let products = [
    ["lap top dell", 20000, 4],
    ["lap top asus", 50000, 4],
    ["may tinh bang", 70000, 3],
];

function index(){
    let html = '';
    for (let i = 0; i < products.length; i++) {
        html += '<tr>';
        html += '<td>';
        html += i + 1;
        html += '</td>';
        for (let j = 0; j < products[0].length; j++) {
            html += '<td>';
            html += products[i][j];
            html += '</td>';
        }
        html += '<td>';
        html += '<button >Remove</button>';
        html += '</td>';
        html += '</tr>';
    }

    document.getElementById('list-product').innerHTML = html;
}

function add(){
    let name = document.getElementById('name').value;
    let price = +document.getElementById('price').value;
    let quantity = +document.getElementById('quantity').value;
    let product = [name, price, quantity];
    products.push(product);
    index();
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('quantity').value = '';
}

index();
