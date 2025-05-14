import React from 'react'
import { Flex, Select } from 'antd'
import DashboardInventoryCard from '../components/dashboard_components/DashboardInventoryCard'
import DashboardRevenueCard from '../components/dashboard_components/DashboardRevenueCard'
import DashboardInventoryPieChart from '../components/dashboard_components/DashboardInventoryPieChart'
import { Divider } from 'antd';

const handleChange = value => {
  console.log(`selected ${value}`);
};

const Dashboard = () => {
  return (
    <>
      <Divider 
        style=
          {{ 
            borderColor: '#7cb305',
            marginTop: '8px',
            marginBottom: '8px' 
          }}
        children = {<h2>Dashboard</h2>}
      />
      <p
        style={{
            paddingLeft: '4px',
            borderLeft: '2px solid #0958d9',
            fontSize: '16px'
          }}
        >
          <strong>Tổng quan Hàng tồn kho</strong>
      </p>
      <Flex
        justify='center'
        align='center'
      >
        <Flex
          style={{
            width: '50%',
          }}  
        >
          <DashboardInventoryPieChart />
        </Flex>
        <Flex
          vertical
          justify='center'
          align='center'
          style={{
            marginTop: '8px'
          }}
        >
          <DashboardInventoryCard />
        </Flex>
      </Flex>
      <Flex
        vertical
        style = {{
          marginTop: '16px'
        }}
      >
        <Flex
          justify='space-between'
          align='center'
        >
          <p
            style={{
              paddingLeft: '4px',
              borderLeft: '2px solid green',
              fontSize: '16px'
            }}
          >
            <strong>Hoạt động kinh doanh</strong>
          </p>
          <div>
            <strong style={{ color: 'green' }}>Kỳ: </strong>
            <Select
              defaultValue="today"
              style={{ 
                width: 120,
                marginLeft: '6px',
               }}
              onChange={handleChange}
              options={[
                { value: 'today', label: 'Hôm nay' },
                { value: 'this_week', label: 'Tuần này' },
                { value: 'this_month', label: 'Tháng này' },
                { value: 'this_quarter', label: 'Quý này' },
                { value: 'this_year', label: 'Năm này' },
              ]}
          />
          </div>
        </Flex>
        <Flex
          justify='space-around'
          align='center'
          style={{
            marginTop: '8px'
          }}
        >
          <DashboardRevenueCard />
        </Flex>
      </Flex>
    </>
  )
}

export default Dashboard