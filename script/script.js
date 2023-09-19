   
    let data = {
        datasets: [{
            data: [7, 3], 
            backgroundColor: ['#00FFFF', '#C2128D']
        }]
    };

    let ctx = document.getElementById('myDonutChart').getContext('2d');

    let myDonutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Percentuale di Risposte Giuste su 10 Domande',
            },
        },
    });
