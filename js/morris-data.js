$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2013 Q1',
            diapers: 2666,
            baby_food: null,
            milk: 2647
        }, {
            period: '2013 Q2',
            diapers: 2778,
            baby_food: 2294,
            milk: 2441
        }, {
            period: '2013 Q3',
            diapers: 4912,
            baby_food: 1969,
            milk: 2501
        }, {
            period: '2013 Q4',
            diapers: 3767,
            baby_food: 3597,
            milk: 5689
        }, {
            period: '2014 Q1',
            diapers: 6810,
            baby_food: 1914,
            milk: 2293
        }, {
            period: '2014 Q2',
            diapers: 5670,
            baby_food: 4293,
            milk: 1881
        }, {
            period: '2014 Q3',
            diapers: 4820,
            baby_food: 3795,
            milk: 1588
        }, {
            period: '2014 Q4',
            diapers: 15073,
            baby_food: 5967,
            milk: 5175
        }, {
            period: '2015 Q1',
            diapers: 10687,
            baby_food: 4460,
            milk: 2028
        }, {
            period: '2015 Q2',
            diapers: 8432,
            baby_food: 5713,
            milk: 1791
        }],
        xkey: 'period',
        ykeys: ['diapers', 'baby_food', 'milk'],
        labels: ['diapers', 'baby_food', 'milk'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    // Morris.Donut({
    //     element: 'morris-donut-chart',
    //     data: [{
    //         label: "Download Sales",
    //         value: 12
    //     }, {
    //         label: "In-Store Sales",
    //         value: 30
    //     }, {
    //         label: "Mail-Order Sales",
    //         value: 20
    //     }],
    //     resize: true
    // });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2009',
            a: 100,
            b: 90
        }, {
            y: '2010',
            a: 75,
            b: 65
        }, {
            y: '2011',
            a: 50,
            b: 40
        }, {
            y: '2012',
            a: 75,
            b: 65
        }, {
            y: '2013',
            a: 50,
            b: 40
        }, {
            y: '2014',
            a: 75,
            b: 65
        }, {
            y: '2015',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Polio vaccine', 'DPT vaccine'],
        hideHover: 'auto',
        resize: true
    });

});
