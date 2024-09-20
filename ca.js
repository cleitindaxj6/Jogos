const ctx = document.getElementById('jogosChart').getContext('2d');

const jogosData = {
    labels: [
        'Free Fire',
        'League of Legends',
        'Counter-Strike: Global Offensive',
        'FIFA 22',
        'Valorant'
    ],
    datasets: [{
        label: 'Quantidade de Jogadores',
        data: [25000000, 15000000, 10000000, 8000000, 6000000],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

const jogosChart = new Chart(ctx, {
    type: 'bar',
    data: jogosData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Quantidade de Jogadores'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Jogos'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            title: {
                display: true,
                text: 'Gráfico dos Jogos Mais Jogados no Brasil'
            }
        }
    }
});
