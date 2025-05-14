import React from 'react'
import { Pie } from '@ant-design/plots';

const DashboardInventoryPieChart = () => {
    const config = {
        width: 400,
        height: 400,
        data: [
          { type: 'Mango', value: 27 },
          { type: 'Coconut', value: 25 },
          { type: 'Apple', value: 18 },
          { type: 'Pearl', value: 15 },
          { type: 'Watermelon', value: 10 },
          { type: 'Carrot', value: 5 },
        ],
        angleField: 'value',
        colorField: 'type',
        label: {
          text: 'value',
          style: {
            fontWeight: 'bold',
          },
        },
        legend: {
          color: {
            title: false,
            position: 'right',
            rowPadding: 5,
          },
        },
      };
      return (
        <>
          <Pie {...config} 
            style={{
              width: '300px',
              height: '300px',
            }}
          />
        </>
      )
}

export default DashboardInventoryPieChart