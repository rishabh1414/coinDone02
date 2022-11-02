import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./Charts.css";
ChartJS.register(ArcElement, Tooltip, Legend, Title);

function Charts() {
  return (
    <React.Fragment>
      <section id="chart">
        <h1 className="mt-3">Coindone's Asset Allocation</h1>
        <div className="row">
          <div className="piechart ">
            <Doughnut
              className="Doughnut"
              data={{
                labels: ["Helllo sir", "b", "c", "d", "e", "f", "g"],
                datasets: [
                  {
                    label: "# of Votes",
                    data: [10, 11, 5, 4, 12, 15, 12],
                    backgroundColor: [
                      "rgb(255, 13, 0.6)",
                      "rgba(54, 162, 235, 0.7)",
                      "rgba(255, 206, 86, 0.7)",
                      "rgba(75, 192, 192, 0.7)",
                      "rgba(153, 102, 255, 0.7)",
                      "rgba(255, 159, 64, 0.7)",
                      "rgba(255, 109, 64, 0.7)",
                    ],
                    hoverBackgroundColor: [
                      "rgb(255, 13, 0.9)",
                      "rgba(54, 162, 235, 0.9)",
                      "rgba(255, 206, 86, 0.9)",
                      "rgba(75, 192, 192, 0.9)",
                      "rgba(153, 102, 255, 0.9)",
                      "rgba(255, 159, 64, 0.9)",
                      "rgba(255, 109, 64, 0.9)",
                    ],
                    borderJoinStyle: "round",
                    borderWidth: 0,
                    offset: 1,
                    hoverOffset: -20,
                    hoverBorderColor: "#000",
                    hoverBorderWidth: 2,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  title: {
                    fontSize: 30,
                    text: "CoinDone",
                    display: "flex",
                    font: { size: 30 },
                  },
                  legend: {
                    labels: {
                      font: { size: 20 },
                      color: "#ff9",
                    },
                    position: "right",
                  },
                },
              }}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Charts;
