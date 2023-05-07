import React from 'react'

export default function HolidayCard(props) {
  return (
    <div>
       <div className="card shadow rounded-0 m-4" style={{width:"40vh "}}  >
            <img src={props.img} className="card-img-top d-block img-fluid " alt=""/>
            <div className="card-body">
             <h6 className="card-text fw-bold">{props.head}</h6>  
             <p className="small text-dark-emphasis mt-3" style={{fontSize:"11px", fontFamily:" 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>
                {props.detail}
             </p>
            </div>
        </div>
    </div>
  )
}
