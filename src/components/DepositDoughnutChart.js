import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  PieSeries,
  Legend,
  Title,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import {
  Animation,
  EventTracker,
  HoverState,
} from "@devexpress/dx-react-chart";

export default class DepositChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const data = this.props.items;
    const newData = [];
    for (const category in data) {
      newData.push({ region: category, val: Math.abs(data[category]) });
    }
    this.setState({ data: newData });
  }

  render() {
    const { data: chartData, target } = this.state;

    return (
      <Paper>
        <Chart data={chartData}>
          <PieSeries
            valueField="val"
            argumentField="region"
            innerRadius={0.6}
          />
          <Legend />
          <Title text="Deposit Transactions Breakdown" />
          <Animation />
          <EventTracker />
          <HoverState hover={target} />
          <Tooltip targetItem={target} />
        </Chart>
      </Paper>
    );
  }
}
