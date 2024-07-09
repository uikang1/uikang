function uikangChart(type, data, options, canvasId) {
    const cha = document.getElementById(canvasId).getContext('2d');
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
    labels: ['은정', '중권', '상호', '의강'],
    datasets: [
        {
            label: '현피 횟수',
            data: [65, 60, 70, 100],
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

function LineChart(canvasId) {
    uikangChart('line', lineData, lineOptions, canvasId);
}

function RadarChart(data, canvasId) {
    uikangChart('radar', data, radarOptions, canvasId);
}

function BarChart(canvasId) {
    const barData = {
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
    };

    const barOptions = {
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

    uikangChart('bar', barData, barOptions, canvasId);
}

function PieChart(canvasId) {
    const pieData = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['red', 'blue', 'yellow'],
            },
        ],
    };

    const pieOptions = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20,
                    },
                },
            },
        },
    };

    uikangChart('pie', pieData, pieOptions, canvasId);
}

function DoughnutChart(canvasId) {
    const doughnutData = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['red', 'blue', 'yellow'],
            },
        ],
    };

    const doughnutOptions = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20,
                    },
                },
            },
        },
    };

    uikangChart('doughnut', doughnutData, doughnutOptions, canvasId);
}

function PolarAreaChart(canvasId) {
    const polarAreaData = {
        labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
        datasets: [
            {
                data: [10, 10, 10, 10, 10],
                backgroundColor: ['red', 'green', 'yellow', 'grey', 'blue'],
            },
        ],
    };

    const polarAreaOptions = {
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
    };

    uikangChart('polarArea', polarAreaData, polarAreaOptions, canvasId);
}
