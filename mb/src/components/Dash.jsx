import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import moment from 'moment';

const trigoStrength = 3;
let iteration = 11;

const generateMinuteWiseTimeSeries = (baseval, count, yrange) => {
  let i = 0;
  let series = [];
  while (i < count) {
    let x = baseval;
    let y = (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2);
    series.push({ x, y });
    baseval += 300000;
    i++;
  }
  return series;
};

const getRangeRandom = (yrange) => {
  return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
};

const getRandom = () => {
  const i = iteration;
  return (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2);
};

const Dash = () => {
  const [optionsColumn, setOptionsColumn] = useState({
    chart: {
      height: 200,
      type: 'bar',
      animations: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    series: [
      {
        name: 'Load Average',
        data: generateMinuteWiseTimeSeries(new Date('12/12/2016 00:20:00').getTime(), 12, { min: 10, max: 110 }),
      },
    ],
    xaxis: {
      type: 'datetime',
      range: 2700000,
    },
  });

  const [optionsLine, setOptionsLine] = useState({
    chart: {
      height: 200,
      type: 'line',
      stacked: true,
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
      width: 5,
    },
    series: [
      {
        name: 'Running',
        data: generateMinuteWiseTimeSeries(new Date('12/12/2016 00:20:00').getTime(), 12, { min: 30, max: 110 }),
      },
      {
        name: 'Waiting',
        data: generateMinuteWiseTimeSeries(new Date('12/12/2016 00:20:00').getTime(), 12, { min: 30, max: 110 }),
      },
    ],
    xaxis: {
      type: 'datetime',
      range: 2700000,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      iteration++;
      const newDataColumn = optionsColumn.series[0].data.slice();
      newDataColumn.push({ x: newDataColumn[newDataColumn.length - 1].x + 300000, y: getRandom() });
      newDataColumn.shift();

      const newDataLine1 = optionsLine.series[0].data.slice();
      const newDataLine2 = optionsLine.series[1].data.slice();
      newDataLine1.push({ x: newDataLine1[newDataLine1.length - 1].x + 300000, y: getRandom() });
      newDataLine2.push({ x: newDataLine2[newDataLine2.length - 1].x + 300000, y: getRandom() });
      newDataLine1.shift();
      newDataLine2.shift();

      setOptionsColumn((prev) => ({
        ...prev,
        series: [{ ...prev.series[0], data: newDataColumn }],
      }));

      setOptionsLine((prev) => ({
        ...prev,
        series: [
          { ...prev.series[0], data: newDataLine1 },
          { ...prev.series[1], data: newDataLine2 },
        ],
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, [optionsColumn, optionsLine]);

  return (
    <div style={{ background: '#1B213B', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <ReactApexChart options={optionsColumn} series={optionsColumn.series} type="bar" height={200} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <ReactApexChart options={optionsLine} series={optionsLine.series} type="line" height={200} />
      </div>
    </div>
  );
};

export default Dash;