import React, { Component } from 'react'
import {Bar,Line,Pie} from 'react-chartjs-2';
import { Redirect } from  "react-router-dom";

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            token:localStorage.getItem("token"),
            chartData:{
                labels:['January','February','March','April'
                ],
                datasets:[
                    {
                        label:'Sale',
                        data:[
                            617594,
                            181045,
                            453060,
                            346519
                        ]
                        ,
                        backgroundColor:[
                            'rgba(235,99,132,0.6)',
                            'rgba(235,199,235,0.6)',
                            'rgba(235,99,22,0.6)',
                            'rgba(235,99,12,0.6)'

                        ]
                    }
                ]
            }
        }
    }
    render() {
        if(!this.state.token){
            return(
                <Redirect to='/login' />
            )
           
        }
        return (
            <div className="container">
                            <Bar
                data={this.state.chartData}
                width={100}
                height={550}
                options={{ 
                    display:true,
                    text:'Sales',
                    maintainAspectRatio: false }}
                />
            </div>
        )
    }
}

