"use strict";

// Create the chart
Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Amazonia'
    },
    subtitle: {
        text: 'Focos de Fogo'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Percentaul de Focos de Fogo'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
    series: [{
        name: "Amazonia",
        colorByPoint: true,
        data: [{
            name: "2021",
            y: 3.14,
            drilldown: "2021"
        }, {
            name: "2020",
            y: 5.1,
            drilldown: "2020"
        }, {
            name: "2019",
            y: 5.84,
            drilldown: "2019"
        }]
    }],
    drilldown: {
        series: [{
            name: "2021",
            id: "2021",
            data: [
                ["Janeiro, 794", 0.35],
                ["Fevereiro, 864", 0.99],
                ["Março, 808", 0.32],
                ["Abril, 820", 0.32],
                ["Maio, 2.649", 0.60],
                ["Junho, 4.181", 0.56],
                ["Julho", 0],
                ["Agosto", 0],
                ["Setembro", 0],
                ["Outubro", 0],
                ["Novembro", 0],
                ["Dezembro", 0]
            ]
        }, {
            name: "2020",
            id: "2020",
            data: [
                ["Janeiro, 1.200", 0.53],
                ["Fevereiro, 1.196", 0.51],
                ["Março, 1.641", 0.52],
                ["Abril, 789", 0.27],
                ["Maio, 829", 0.25],
                ["Junho, 2.248", 0.32],
                ["Julho, 2.248", 0.32],
                ["Agosto, 29.307", 0.58],
                ["Setembro, 32.017", 0.46],
                ["Outubro, 17.326", 0.42],
                ["Novembro, 6.321", 0.47],
                ["Dezembro, 6.321", 0.47]
            ]
        }, {
            name: "2019",
            id: "2019",
            data: [
                ["Janeiro, 1.419", 0.44],
                ["Fevereiro, 1.368", 0.54],
                ["Março, 3.383", 0.68],
                ["Abril, 1.702", 0.62],
                ["Maio, 854", 0.30],
                ["Junho, 1.880", 0.28],
                ["Julho, 5.319", 0.43],
                ["Agosto, 30.900", 0.64],
                ["Setembro, 19.925", 0.42],
                ["Outubro, 7.855", 0.37],
                ["Novembro, 11.297", 0.64],
                ["Dezembro, 3.275", 0.48]
            ]
        }]
    }
});