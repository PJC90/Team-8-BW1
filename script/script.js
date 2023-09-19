   
    var data = {
        labels: ['Risposte Giuste', 'Risposte Sbagliate'],
        datasets: [{
            data: [7, 3], 
            backgroundColor: ['green', 'red']
        }]
    };

    var ctx = document.getElementById('myDonutChart').getContext('2d');

    var myDonutChart = new Chart(ctx, {
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

