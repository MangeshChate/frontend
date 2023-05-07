import React, { useRef } from 'react';
import './Ticket.css';
import Service from '../Home/Service';
import Genratepdf from './Genratepdf';
import Holidays from '../Home/holiday/Holidays';


function Ticket() {



    return (
        <div className='container-fluid'>
        
            <div className="m-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className='fw-bold'>Thanks For Booking ! </h1>
                <h3 className='fw-bold text-success'>-- Happy Journey --</h3>

            </div>
        <hr />
        <br />
            <div className=''>

            <div className=" ticket bg-light  container  " id="divToPrint" style={{ border: "1px solid grey" }}>
                <div className="ticket-header">
                    <div className="d-flex justify-content-between align-items-center ">
                        <div className="col-auto">
                            <img src="https://i.pinimg.com/originals/6a/72/4b/6a724b9501764fd83a4abcd37b58144d.png" alt="Indian Railways" className="logo" />
                        </div>
                        <div className="col-auto text-center">
                            <h4 className="heading fw-bold" style={{ fontSize: "2.5rem" }}>Indian Railways</h4>
                            <p className="subheading">e-Ticket</p>
                        </div>
                        <div className="col-auto text-right">
                            <h4 className="pnr">PNR: 1234567890</h4>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="ticket-body ">
                    <div className="row">
                        <div className="col-sm-8">
                            <h4 className="train-name">Rajdhani Express</h4>
                            <p className="train-info">Train No: 12345 | From: New Delhi | To: Mumbai</p>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="date-time">Departure: 15/05/2023, 09:30 AM</p>
                                </div>
                                <div className="col-sm-6 text-right">
                                    <p className="date-time">Arrival: 16/05/2023, 12:30 PM</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="passenger-name">Passenger Name: John Doe</p>
                                </div>
                                <div className="col-sm-6 text-right">
                                    <p className="seat-no">Seat No: 12A</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 text-right">
                            <h4 className="fare">Fare: ₹1,500</h4>
                            <p className="class">Class: 2A</p>
                        </div>
                    </div>
                </div>
                <div className="ticket-footer">
                    <p className="disclaimer">This ticket is booked online and no need of signature</p>
                </div>
                <hr />
            </div>

            <div className="container mt-4 mb-5">
                <Genratepdf />
            </div>
            </div>
            <Service/>
           
            <Holidays/>
        </div>
    );
}

export default Ticket;
