import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      charData: {}
    };
  }

  componentWillMount = () => {
    this.getChartData();
  };

  getChartData() {
    //api calls here
    this.setState({
      charData: {
        labels: [
          "Boston",
          "Worcester",
          "Springfield",
          "Lowell",
          "Cambridge",
          "New Bedford"
        ],
        datasets: [
          {
            label: "Population",
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            //backgroundColor:'green',
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ],
            borderWidth: 1,
            borderColor: "#777",
            hoverBorderWidth: 3,
            hoverBorderColor: "#000"
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Chart
          chartData={this.state.charData}
          title="Largest cities in Massachusetts"
          legendPosition="bottom"
        />
      </div>
    );
  }
}

export default App;
