"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var vue_1 = require("vue");
var vue_chartjs_1 = require("vue-chartjs");
var chart_js_1 = require("chart.js");
chart_js_1.Chart.register(chart_js_1.Title, chart_js_1.Tooltip, chart_js_1.Legend, chart_js_1.LineElement, chart_js_1.LinearScale, chart_js_1.PointElement, chart_js_1.CategoryScale);
exports.default = (0, vue_1.defineComponent)({
    name: 'LineChart',
    components: {
        Line: vue_chartjs_1.Line
    },
    props: {
        chartId: {
            type: String,
            default: 'line-chart'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: function() {}
        },
        plugins: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    setup: function(props) {
        var chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [40, 39, 10, 40, 39, 80, 40]
            }]
        };
        var chartOptions = {
            responsive: true,
            maintainAspectRatio: false
        };
        return function() {
            return (0, vue_1.h)(vue_chartjs_1.Line, {
                chartData: chartData,
                chartOptions: chartOptions,
                chartId: props.chartId,
                width: props.width,
                height: props.height,
                cssClasses: props.cssClasses,
                styles: props.styles,
                plugins: props.plugins
            });
        };
    }
});