var temp_connected_dot = "js/monthly_temperature_bar_chart.vg.json";
vegaEmbed("#monthly_temperature_bar_chart", temp_connected_dot).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var visitor_map = "js/visitor_map.vg.json";
vegaEmbed("#visitor_map", visitor_map).then(function (result) {
}).catch(console.error);

var travel_types_bubble = "js/travel_types_bubble_chart.vg.json";
vegaEmbed("#travel_types_bubble_chart", travel_types_bubble).then(function (result) {
}).catch(console.error);

var nationality_bar = "js/visitor_nationality.vg.json";
vegaEmbed("#visitor_nationality", nationality_bar).then(function (result) {
}).catch(console.error);


var visitor_coming_bar = "js/visitor_coming_bar_chart.vg.json";
vegaEmbed("#visitor_coming_bar_chart", visitor_coming_bar).then(function (result) {
}).catch(console.error);

// var vg_10 = "test.vg.json";
// vegaEmbed("#test", vg_10).then(function (result) {
// }).catch(console.error);