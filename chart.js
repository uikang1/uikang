function uikangChart(type, data, options) {
    const cha = document.getElementById('chartCanvas').getContext('2d');
    new Chart(cha, {
        type: type,
        data: data,
        options: options,
    });
}

const lineData = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월'],
    datasets: [
        {
            label: '월별 지출',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1,
        },
    ],
};

const lineOptions = {
    scales: {
        x: {
            ticks: {
                font: {
                    size: 20,
                },
            },
        },
        y: {
            beginAtZero: true,
            ticks: {
                font: {
                    size: 20,
                },
            },
        },
    },
};

const radarData = {
    labels: ['은정', '중권', '상호', '의강'],
    datasets: [
        {
            label: '현피 횟수',
            data: [65, 60, 50, 100],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
        },
        {
            label: '피지컬',
            data: [80, 48, 60, 100],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)',
        },
    ],
};

const radarData1 = {
    labels: ['은정1', '중권1', '상호1', '의강1'],
    datasets: [
        {
            label: '현피 횟수',
            data: [65, 60, 50, 100],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
        },
        {
            label: '피지컬',
            data: [80, 48, 60, 100],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)',
        },
    ],
};

const radarOptions = {
    elements: {
        line: { tension: 0.1 },
    },
    scales: {
        r: {
            pointLabels: {
                font: {
                    size: 20,
                },
            },
        },
    },
};

function BarChart() {
    const bar = document.getElementById('chartCanvas').getContext('2d');
    new Chart(bar, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 20,
                        },
                    },
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: {
                            size: 20,
                        },
                    },
                },
            },
        },
    });
}

function PieChart() {
    const pie = document.getElementById('chartCanvas').getContext('2d');
    new Chart(pie, {
        type: 'pie',
        data: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: ['red', 'blue', 'yellow'],
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 20,
                        },
                    },
                },
            },
        },
    });
}

function DoughnutChart() {
    const doughnut = document.getElementById('chartCanvas').getContext('2d');
    new Chart(doughnut, {
        type: 'doughnut',
        data: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: ['red', 'blue', 'yellow'],
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 20,
                        },
                    },
                },
            },
        },
    });
}

function PolarAreaChart() {
    const polarArea = document.getElementById('chartCanvas').getContext('2d');
    new Chart(polarArea, {
        type: 'polarArea',
        data: {
            labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
            datasets: [
                {
                    data: [10, 10, 10, 10, 10],
                    backgroundColor: ['red', 'green', 'yellow', 'grey', 'blue'],
                },
            ],
        },
        options: {
            scales: {
                r: {
                    ticks: {
                        font: {
                            size: 20,
                        },
                    },
                },
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 20,
                        },
                    },
                },
            },
        },
    });
}
