import React, { useRef } from 'react';
import './Ticket.css';



function Ticket() {
    
    // pdf 
    var button = document.getElementById("button");
    var makepdf = document.getElementById("makepdf");
  
    button.addEventListener("click", function () {
        var mywindow = window.open("", "PRINT", 
                "height=400,width=600");
  
        mywindow.document.write(makepdf.innerHTML);
  
        mywindow.document.close();
        mywindow.focus();
  
        mywindow.print();
        mywindow.close();
  
        return true;
    });

  return (
    <div className='container-fluid'>
    <div className="m-5">
    <h1 className='fw-bold'>Your Ticket</h1>

    </div>

    <div className="ticket bg-light shadow container m-5 " id="makepdf" style={{border:"1px solid grey"}}>
      <div className="ticket-header">
        <div className="d-flex justify-content-between align-items-center ">
          <div className="col-auto">
            <img src="https://i.pinimg.com/originals/6a/72/4b/6a724b9501764fd83a4abcd37b58144d.png" alt="Indian Railways" className="logo" />
          </div>
          <div className="col-auto text-center">
            <h4 className="heading fw-bold" style={{fontSize:"2.5rem"}}>Indian Railways</h4>
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
      
    <div className="container">
        <button className="btn btn-lg rounded-0 btn-warning shadow m-3" id="button">Download Ticket</button>
    </div>
    </div>
  );
}

export default Ticket;
