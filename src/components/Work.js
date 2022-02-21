import React, { Component } from 'react'
import img3 from '../NetArt-test/asserts/3.png'

export default class Work extends Component {
    render() {
        return (
            <div className = "work-aream">
            <div className = "work-text"> <p> <b>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </b></p>
            </div>
            <div className="work-img">
                <img src= {img3} height = "100%" width = " 65%" alt="" />
            </div>
            <div className="captions">
                <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            </div>
            <div className="divider-box"><div className="divider-line"></div></div>
            <div className="captions">
                <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS </p>
                {/* <div className="bar"></div> */}
                <div className="end-text">
                <p>CHEMICALS & PROCESS <b className = "bar"> | </b> POWER <b className = "bar"> | </b> WATER & WASTE WATER <b className = "bar"> | </b>  OILS & GAS <b className = "bar"> | </b> PHARMA <b className = "bar"> | </b>  SUGARS & DISTILLERIES <b className = "bar"> | </b> PAPER & PULP <b className = "bar"> | </b>  MARINE & DEFENCE <b className = "bar"> | </b> METAL & MINING <b className = "bar"> | </b> FOOD & BEVERAGE <b className = "bar"> | </b> PETROCHEMICAL & REFINERIES <b className = "bar"> | </b> SOLAR <b className = "bar"> | </b> BUILDING <b className = "bar"> | </b> HVAC <b className = "bar"> | </b> FIRE FIGHTING<b className = "bar"> | </b>  AGRICULTURE & RESIDENTIAL </p> 
                </div>
            </div>
            </div>
        )
    }
}
