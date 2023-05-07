import React from 'react'
import Rpath from './Rpath'
import {Link} from 'react-router-dom'
export default function Review() {
    return (
        <div>

            <Rpath />
            <div className="row m-4 mb-5">
                <div className="container col-9  ">
                    <div className=" d-flex flex-column border-5 shadow p-4 mb-3" >

                        <div className="d-flex bg-secondary-subtle p-2 justify-content-between align-items-center " style={{ borderLeft: "1rem solid darkslateblue" }}>
                            <span className='fw-bolder'>NZM MAS RAJDHANI (12345)</span>
                            <span className='fw-bold me-4' style={{ color: "darkslateblue" }}>Train Schedule</span>
                        </div>

                        <div className="d-flex justify-content-between mt-2 " style={{ fontSize: "1.3rem", fontFamily: "sans-serif" }}>
                            <div>
                                <span className='fw-bold '>15:35 |</span>
                                <span>H NIZAMUDDIN | FRI,05 May</span>

                            </div>
                            <div>
                                <span className='fw-bold'>20:55 |</span>
                                <span>MGR CHENAI CTL | SAT, 06 May</span>

                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className='d-flex mt-5'>

                                <div className='fw-bold' style={{ fontSize: "1.4rem" }}>
                                    <span>Mangesh Chate</span>
                                    <span className='ms-4'>21</span>
                                    <span className='ms-4'>male</span>
                                </div>

                            </div>
                            <div>


                            </div>

                        </div>
                    </div>
                    <div className="container-fluid d-flex align-items-center mt-4">
                        <input type="checkbox" className='form-check ' />
                        <div className='fw-bold ms-3'>Yes, and I am accpect <span className='text-primary' >terms & conditions</span> </div>
                    </div>
                        <div className="container-fluid mt-4">
                            <Link to="/payment" className="btn btn-success shadow-lg fw-bold font-monospace btn-lg w-25 rounded-0">Pay Online</Link>
                        </div>
                </div>
                <div className="col-3">
                <div className="container-fluid  d-flex flex-column me-4 ">
                    <div className="text-light p-2 shadow fw-bold" style={{backgroundColor:"darkslateblue" ,fontSize:"1.3rem"}}>
                        FARE SUMMERY
                    </div>
                    <div className='d-flex justify-content-between p-2 mt-2 ' style={{fontSize:"1.2rem"}}>
                        <span>Ticket Fare</span>
                        <span className=''>₹ 305</span>
                        
                    </div>
                    <div className='d-flex justify-content-between p-2 mt-2 ' style={{fontSize:"1.2rem"}}>
                        <span>Convenience Fee (Incl. of GST)</span>
                        <span className=''>₹ 11</span>
                        
                    </div>
                    <div className='d-flex justify-content-between p-2 mt-2 ' style={{fontSize:"1.2rem"}}>
                        <span>Travel Insurence (Incl. of GST)</span>
                        <span className=''>₹ 2</span>
                        
                    </div>

                    <hr />
                    <div className='d-flex bg-secondary-subtle fw-bold justify-content-between p-2 ' style={{fontSize:"1.2rem"}}>
                        <span className=''>Total Fare</span>
                        <span className='text-danger'>₹ 318</span>
                        
                    </div>
                    <hr />


                </div>
                <div className="container-fluid">
                    <img src="https://gumlet.assettype.com/knocksense%2F2022-09%2F8291dda3-72a3-471e-97f7-73d04496f4f9%2FScreenshot_2022_09_28_at_4_27_15_PM.png?auto=format%2Ccompress&format=webp&w=400&dpr=2.6" alt="" className='img-fluid'/>
                  
                </div>
                </div>

            </div>
        </div>
    )
}
