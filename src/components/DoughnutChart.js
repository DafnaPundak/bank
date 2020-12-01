import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const data = [
  { region: "Asia", val: 4119626293 },
  { region: "Africa", val: 1012956064 },
  { region: "Northern America", val: 344124520 },
//   { region: "Latin America and the Caribbean", val: 590946440 },
//   { region: "Europe", val: 727082222 },
//   { region: "Oceania", val: 35104756 },
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  componentDidMount() {
      console.log(this.props)
    this.setState(this.props.items);
  }

  render() {
    console.log(this.props)
    console.log(this.state);

    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart data={chartData}>
          <PieSeries
            valueField="val"
            argumentField="region"
            innerRadius={0.6}
          />
          <Title text="Transactions Breakdown" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}