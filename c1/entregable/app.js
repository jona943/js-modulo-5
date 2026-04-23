const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}


async function processOrder(order) {
    // TODO: Simular la preparación del pedido usando setTimeout y Promise
    // TODO: Actualizar el estado del pedido a "Completado"
    const tiempoAleatorio = Math.floor(Math.random() * 6000) + 2000;

    await new Promise((resolve) => { // Creamos promesa que espera await a que se resuelva
        setTimeout(() => { // simulacion de tiempo setTimeout
            resolve(); // Cuando pasa el tiempo de espera resuelve la promesa
        }, tiempoAleatorio); // 5 segundo de espera en la preparacion de cada cafe 
    });
    updateOrderStatus(order, "Completado"); 
    // Una vez que se resuleve la promesa se actualiza el estado
}
