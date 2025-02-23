(async () => {

    // Load the dataset
    const data = await fetch(
        'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v10.3.3/samples/data/usdeur.json'
    ).then(response => response.json());

    const startDate = new Date(data[data.length - 1][0]);
    let minRate = 1,
        maxRate = 0,
        date,
        rate,
        index;

    startDate.setMonth(startDate.getMonth() - 3); // a quarter of a year before last data point

    const startPeriod = Date.UTC(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()
    );

    for (index = data.length - 1; index >= 0; index = index - 1) {
        date = data[index][0]; // data[i][0] is date
        rate = data[index][1]; // data[i][1] is exchange rate
        if (date < startPeriod) {
            break; // stop measuring highs and lows
        }
        if (rate > maxRate) {
            maxRate = rate;
        }
        if (rate < minRate) {
            minRate = rate;
        }
    }

    // Create the chart
    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'USD to EUR exchange rate'
        },

        yAxis: {
            title: {
                text: 'Exchange rate'
            },
            plotBands: [{
                from: minRate,
                to: maxRate,
                color: 'rgba(68, 170, 213, 0.2)',
                label: {
                    text: 'Last quarter year\'s value range'
                }
            }]
        },

        series: [{
            name: 'USD to EUR',
            data: data,
            tooltip: {
                valueDecimals: 4
            }
        }]
    });
})();