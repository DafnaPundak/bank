import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import HomePageButton from "./HomePageButton";
import DoughnutChart from "./DoughnutChart";

class Breakdown extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let sumAmount = Number;
    let sumCategory = "";
    let obj = {};
    let data = this.props.items;

    for (let i = 0; i < data.length; i++) {
      for (let k = i + 1; k < data.length; k++) {
        if (data[i].category === data[k].category) {
          sumAmount = data[i].amount + data[k].amount;
          sumCategory = data[i].category;
          obj[sumCategory] = sumAmount;
        }
      }
      if (obj[data[i].category] === undefined) {
        sumAmount = data[i].amount;
        sumCategory = data[i].category;
        obj[sumCategory] = sumAmount;
      }
    }

    this.setState(obj);
  }

  render() {
    return (
      <div id="breakdown">
        <div>BREAKDOWN</div>
        <div>
          {Object.keys(this.state).map((key) => (
            <div key={key}>
              <span>{key}: </span>
              <span>{this.state[key]}</span>
            </div>
          ))}
        </div>
        {/* <div>{this.renderObj()}</div> */}
        <Divider />
        <HomePageButton />
        <DoughnutChart items={this.state}/>
      </div>
    );
  }
}

export default Breakdown;
