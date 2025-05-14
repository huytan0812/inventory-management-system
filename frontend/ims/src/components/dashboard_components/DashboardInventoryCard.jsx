import React from 'react'
import { Card, Statistic } from 'antd'
import CountUp from 'react-countup'

const DashboardInventoryCard = () => {
  return (
    <>
        <Card 
          variant='outlined'
          style={{
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            minWidth: '250px',
            marginTop: '16px'
          }}
          styles={{
            body: {
              padding: '16px'
            }
          }}
        >
            <Statistic
                title = {
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBottom: '8px',
                        borderBottom: '1px solid gray'
                    }}
                >
                    <p 
                    style={{
                        marginRight: '8px'
                    }}>
                        Giá trị HTK
                    </p>
                    <p 
                    style={{
                        marginLeft: '8px'
                    }}>
                        (Đvt: trđ)
                    </p>
                </div>
                }
                value = {1000}
                valueStyle={{
                    textAlign: 'center'
                }}
                formatter = {
                (value) => {
                    return (
                        <CountUp
                            start = { 0 }
                            end = { value }
                            duration = { 2 }
                            separator = ','
                            decimal = '.'
                            delay = {0}
                        />
                    )
                }}
            />
        </Card>
        <Card 
          variant='outlined'
          style={{
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            minWidth: '250px',
            marginTop: '16px'
          }}
          styles={{
            body: {
              padding: '16px'
            }
          }}
        >
            <Statistic
                title = {
                    <div
                        style={{
                            paddingBottom: '8px',
                            borderBottom: '1px solid gray'
                        }}
                    >
                        <p 
                        style={{
                            textAlign: 'center'
                        }}
                        >
                            Số lượng HTK
                        </p>
                    </div>
                }
                value = {200}
                valueStyle={{
                    textAlign: 'center'
                }}
                formatter = {
                (value) => {
                    return (
                        <CountUp
                            start = { 0 }
                            end = { value }
                            duration = { 2 }
                            separator = ','
                            decimal = '.'
                            delay = {0}
                        />
                    )
                }}
            />
        </Card>
    </>
  )
}

export default DashboardInventoryCard