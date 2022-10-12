var vg_1 = "js/monthly_temperature_bar_chart.vg.json";
vegaEmbed("#monthly_temperature_bar_chart", vg_1).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "map.vg.json";
vegaEmbed("#map", vg_2).then(function (result) {
}).catch(console.error);