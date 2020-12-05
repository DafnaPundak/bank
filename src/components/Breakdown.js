import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import HomePageButton from "./HomePageButton";
import DoughnutChart from "./DoughnutChart";

class Breakdown extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let sumAmount = Number;
    let sumCategory = "";
    let obj = {};
    let data = this.props.items;
    let withdrawArr = [];
    let depositArr = [];

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
      let objToPush = {};
      if (obj[category] > 0) {
        objToPush[category] = obj[category];
        depositArr.push(objToPush);
      } else if (obj[category] < 0) {
        objToPush[category] = obj[category];
        withdrawArr.push(objToPush);
      }
    }

    console.log(depositArr);
    console.log(withdrawArr);
    console.log(obj);

    return (
      <div id="breakdown">
        <div>BREAKDOWN</div>
        <div>
          {Object.keys(obj).map((key) => (
            <div key={key}>
              <span>{key}: </span>
              <span>{obj[key]}</span>
            </div>
          ))}
        </div>
        <DoughnutChart items={obj} />
        <Divider />
        <HomePageButton />
      </div>
    );
  }
}

export default Breakdown;
