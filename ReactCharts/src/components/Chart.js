import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  //Valores default - Podem ser alterados na chamada do componente
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    fontSize: 25,
    title: "Default title",
    fontColor: "#777"
  };

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: this.props.title,
              fontSize: this.props.fontSize
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                fontColor: this.props.fontColor
              }
            }
          }}
        />
        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: this.props.title,
              fontSize: this.props.fontSize
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                fontColor: this.props.fontColor
              }
            }
          }}
        />
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: this.props.title,
              fontSize: this.props.fontSize
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                fontColor: this.props.fontColor
              }
            }
          }}
        />
      </div>
    );
  }
}
