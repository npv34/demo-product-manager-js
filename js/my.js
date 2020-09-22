let products = [
    ["lap top dell", 20000, 4],
    ["lap top asus", 50000, 4],
    ["may tinh bang", 70000, 3],
];

function index() {
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
        html += '<button style="background-color: red" onclick="deleteProduct('+ i +')">Remove</button>';
        html += '<button style="background-color: aquamarine" onclick="updateProduct('+ i +')">Edit</button>';
        html += '</td>';
        html += '</tr>';
    }

    document.getElementById('list-product').innerHTML = html;
}

function add() {
    let name = document.getElementById('name').value;
    let price = +document.getElementById('price').value;
    let quantity = +document.getElementById('quantity').value;
    let product = [name, price, quantity];
    products.push(product);
    index();
    clearInput();
}

function clearInput() {
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('quantity').value = '';
}

function deleteProduct(id) {
    if (confirm('are you sure?')) {
        products.splice(id, 1);
        index();
    }
}

function updateProduct(id) {
    //lay san pham can edit theo vi tri id(vi tri index cua sp trong mang  products)
    let product = products[id];
    //hien thi du lieu san pham edit vao form
    document.getElementById('name').value = product[0];
    document.getElementById('price').value = product[1];
    document.getElementById('quantity').value = product[2];
    //an hien button
    document.getElementById('add').style.display = 'none';
    document.getElementById('edit').style.display = 'block';

    //tap 1 thuoc tinh data-id cua button edit. thuoc tinh nay chua gia tri la id
    document.getElementById('edit').setAttribute('data-id', id);
}

function editProduct(){
    let idProduct = document.getElementById('edit').getAttribute('data-id');
    let name = document.getElementById('name').value;
    let price = +document.getElementById('price').value;
    let quantity = +document.getElementById('quantity').value;
    products[idProduct] = [name, price, quantity];
    index();
    clearInput();
    document.getElementById('add').style.display = 'block';
    document.getElementById('edit').style.display = 'none';
}
index();
