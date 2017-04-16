import * as React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import * as _ from "lodash";

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export const Chart = ({data, color, units}) => {
  return <div>
    <Sparklines height={120} width={180} data={data}>
      <SparklinesLine color={color}></SparklinesLine>
      <SparklinesReferenceLine type="mean" />
    </Sparklines>
    <div>{average(data)} {units}</div>
  </div>;
}
