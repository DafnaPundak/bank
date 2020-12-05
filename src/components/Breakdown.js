import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import HomePageButton from "./HomePageButton";
import WithdrawDoughnutChart from "./WithdrawDoughnutChart";
import DepositDoughnutChart from "./DepositDoughnutChart";

class Breakdown extends Component {
  // constructor() {
  //   super();
  //   this.state = {};
  // }

  render() {
    let sumAmount = Number;
    let sumCategory = "";
    let obj = {};
    let data = this.props.items;
    let withdrawObj = {};
    let depositObj = {};

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

    for (const category in obj) {
      if (obj[category] > 0) {
        depositObj[category] = obj[category];
      } else if (obj[category] < 0) {
        withdrawObj[category] = obj[category];
      }
    }

    return (
      <div id="breakdown">
        <WithdrawDoughnutChart items={withdrawObj} />
        <div>
          {Object.keys(withdrawObj).map((key) => (
            <div key={key}>
              <span>{key}: </span>
              <span>{obj[key]}</span>
            </div>
          ))}
        </div>
        <DepositDoughnutChart items={depositObj} />
        <div>
          {Object.keys(depositObj).map((key) => (
            <div key={key}>
              <span>{key}: </span>
              <span>{obj[key]}</span>
            </div>
          ))}
        </div>
        <Divider />
        <HomePageButton />
      </div>
    );
  }
}

export default Breakdown;
