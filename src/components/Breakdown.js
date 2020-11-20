import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import HomePageButton from "./HomePageButton";

class Breakdown extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderObj = () => {
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

    return Object.keys(obj).map((key) => {
      return (
        <div key={key}>
          <span>{key}: </span>
          <span>{obj[key]}</span>
        </div>
      );
    });
  };

  render() {
    return (
      <div id="breakdown">
        <div>BREAKDOWN</div>
        <div>{this.renderObj()}</div>
        <Divider />
        <HomePageButton />
      </div>
    );
  }
}

export default Breakdown;
