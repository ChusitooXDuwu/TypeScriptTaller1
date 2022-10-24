import { series } from "./dataSeries.js";
console.log("hola mundo");
document.getElementsByTagName("h1")[0].innerHTML = "TV SERIES";
var seriesTbody = document.getElementById('series');
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.numero, "</td>\n                           <td>").concat(s.name, "</td>\n                           <td>").concat(s.channel, "</td>\n                           <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
renderSeriesInTable(series);
function getAverageSeasons(series) {
    var Avg = 0;
    var total = 0;
    series.forEach(function (Serie) { return Avg = Avg + Serie.seasons; });
    series.forEach(function (Serie) { return total = total + 1; });
    return Avg / total;
}
export var average = getAverageSeasons(series);
document.getElementsByTagName("h3")[0].innerHTML = average.toString();
