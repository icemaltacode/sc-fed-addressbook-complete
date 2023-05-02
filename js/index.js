const addresses = [];

document.getElementById('entryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    processForm();
    updateTable();
});

function processForm() {
    let name = document.getElementById('inputName').value;
    let surname = document.getElementById('inputSurname').value;
    let email = document.getElementById('inputEmail').value;

    addresses.push({
        name: name,
        surname: surname,
        email: email
    });
}

function updateTable() {
    if (addresses.length === 0) {
        document.querySelector('#nothing-here').style.display = 'block';
        return;
    }

    let addressTable = document.querySelector('.table tbody');

    let rows = '';
    let i = 1;
    for (let address of addresses) {
        let tableRow = `
        <tr>
            <th scope="row">${i}</th>
            <td>${address.name}</td>
            <td>${address.surname}</td>
            <td>${address.email}</td>
        </tr>
        `;
        rows += tableRow;
        i++;
    }

    document.querySelector('#nothing-here').style.display = 'none';
    addressTable.innerHTML = rows;
}