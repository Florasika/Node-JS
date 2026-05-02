const salesData = [120, 190, 300, 250, 220, 310];
const usersData = [50, 80, 150, 120, 170, 200];

const labels = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"];

const salesChart = new Chart(document.getElementById("salesChart"), {
    type: "bar",
    data: {
        labels: labels,
        datasets: [{
            label: "Ventes",
            data: salesData
        }]
    }
});

const usersChart = new Chart(document.getElementById("usersChart"), {
    type: "line",
    data: {
        labels: labels,
        datasets: [{
            label: "Utilisateurs",
            data: usersData
        }]
    }
});

function generateRandomData(array) {
    return array.map(() => Math.floor(Math.random() * 400));
}

document.getElementById("updateData").addEventListener("click", () => {

    const newSales = generateRandomData(salesData);
    const newUsers = generateRandomData(usersData);

    salesChart.data.datasets[0].data = newSales;
    usersChart.data.datasets[0].data = newUsers;

    salesChart.update();
    usersChart.update();
});