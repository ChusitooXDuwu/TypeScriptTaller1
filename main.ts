import { Serie } from "./Serie.js";
import { series } from "./dataSeries.js";

console.log("hola mundo")
document.getElementsByTagName("h1")[0].innerHTML = "TV SERIES";


const seriesTbody: HTMLElement = document.getElementById('series')!; 

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.numero}</td>
                           <td>${s.name}</td>
                           <td>${s.channel}</td>
                           <td>${s.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}
 
renderSeriesInTable(series)

function getAverageSeasons(series: Serie[]): number {
    let Avg: number = 0;
    let total: number = 0;
    series.forEach((Serie) => Avg = Avg + Serie.seasons);
    series.forEach((Serie) => total = total + 1);
    return Avg/total;
  }

  export const average = getAverageSeasons(series);

  document.getElementsByTagName("p")[0].innerHTML = "Average Seaons = " + average.toString();

