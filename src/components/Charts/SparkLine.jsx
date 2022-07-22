import React from "react";

import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

class SparkLine extends React.PureComponent {
  render() {
    const { id, height, width, color, currentColor, data, type } = this.props;

    // Sparkline component works best with Class based React Component
    //   }
    // }
    // const SparkLine = ({ id, height, width, color, currentColor, data, type }) => {
    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        dataSource={data}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        xName="x"
        yName="yval"
        type={type}
        tooltipSettings={{
          visible: true,
          format: "${x} : data ${yval}",
          trackLineSettings: {
            visible: true,
          },
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export default SparkLine;
