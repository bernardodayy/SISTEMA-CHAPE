document.getElementById('carForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const plate = document.getElementById('plate').value;
    const carType = document.getElementById('carType').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;

    const carData = {
        name,
        phone,
        plate,
        carType,
        model,
        year
    };

    // Salvar no localStorage
    localStorage.setItem(name, JSON.stringify(carData));

    // Limpar o formulário
    document.getElementById('carForm').reset();
    alert('Informações salvas com sucesso!');
});

document.getElementById('searchButton').addEventListener('click', function() { 

const searchName = document.getElementById('searchName').value;

const resultDiv = document.getElementById('result');

const carData = localStorage.getItem(searchName);

if (carData) {
    const carInfo = JSON.parse(carData);
    resultDiv.innerHTML = `
            <h2>Informações do Carro</h2>
            <p><strong>Nome:</strong> ${carInfo.name}</p>
            <p><strong>Celular:</strong> ${carInfo.phone}</p>
            <p><strong>Placa:</strong> ${carInfo.plate}</p>
            <p><strong>Tipo:</strong> ${carInfo.carType}</p>
            <p><strong>Modelo:</strong> ${carInfo.model}</p>
            <p><strong>Ano:</strong> ${carInfo.year}</p>
        `;
} else {
    resultDiv.innerHTML = '<p>Nenhum registro encontrado.</p>'
}

});
