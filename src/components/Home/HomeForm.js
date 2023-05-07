import React from 'react';
import {Link} from 'react-router-dom'

export default function HomeForm() {
    return (
        <div>
            <div className="container-fluid homeimg " style={{ height: "70vh" }}>

                <div className="container  w-50 ms-5 position-absolute " style={{marginTop:"4rem"}}>
                    <div className="d-flex flex-column ps-3 pe-3 shadow-lg " style={{backgroundColor:"white"}}>
                        <div className="row ">
                            <span className="col-6 row fw-bold text-light d-flex  align-items-center " style={{ backgroundColor: "darkslateblue" }} >
                                <span class="row material-symbols-outlined me-5 m-1 col-2">draft</span>
                                <span className='ms-5 col'>PNR STATUS</span>
                            </span>

                            <span className="col-6 row fw-bold text-light d-flex ms-4 align-items-center" style={{ backgroundColor: "darkslateblue" }} >

                                <span class="material-symbols-outlined me-5 m-1 col-2">diagnosis</span>
                                <span className='ms-5 col'>CHARTS / VACANCY</span>
                            </span>

                        </div>

                        <div className="row">
                            <div className="d-flex align-items-center  justify-content-between p-2">
                                <img src="https://www.irctc.co.in/nget/assets/images/logo_top_eng.jpg" alt="" />
                                <h2 className='fw-bold ' style={{ color: "darkslateblue" }}>BOOK TICKET</h2>
                                <img src="https://www.irctc.co.in/nget/assets/images/G20_Logo.png" alt="" />

                            </div>
                        </div>
                        <div className="row">
                            <form action="" className="form">
                                <div className="row">
                                    <input type="text" name="from" className="col form-control border-1 rounded-0 m-3" placeholder='From' />
                                    <input type="date" name="date" className="col  border-1 rounded-0 form-control m-3" placeholder='DD/MM/YYYY' />
                                </div>

                                <div className="row">
                                    <input type="text" name="to" className="col form-control border-1 rounded-0 m-3" placeholder='To' />
                                    <input type="text" name="class" className="col  border-1 rounded-0 form-control m-3" placeholder='All Classes' />
                                </div>
                                <div className="row">

                                    <input type="text" className='form-control border-1 rounded-0  col m-3' placeholder='Genral' />

                                    <div className="col"></div>

                                </div>
                                <div className="row mt-3 mb-3 " style={{ fontFamily: "serif" }}>
                                    <div className="mt-3 col-auto d-flex justify-items-center ">
                                        <input type="checkbox" className='rounded-0  bg-secondary    form-check' id="c1" style={{ width: "3rem" }} />
                                        <label className='fw-bold' style={{ color: "darkslateblue" }} htmlFor="c1">Person With Disablity </label>
                                    </div>

                                    <div className="mt-3 col-auto d-flex justify-items-center ">
                                        <input type="checkbox" className='rounded-0  bg-secondary    form-check' id="c1" style={{ width: "3rem" }} />
                                        <label className='fw-bold' style={{ color: "darkslateblue" }} htmlFor="c1">Flexible With Time </label>
                                    </div>

                                    <div className="mt-3 col-auto d-flex justify-items-center ">
                                        <input type="checkbox" className='rounded-0  bg-secondary    form-check' id="c1" style={{ width: "3rem" }} />
                                        <label className='fw-bold' style={{ color: "darkslateblue" }} htmlFor="c1">Train With Avaible Berth </label>
                                    </div>

                                    <div className="mt-3 col-auto d-flex justify-items-center ">
                                        <input type="checkbox" className='rounded-0  bg-secondary    form-check' id="c1" style={{ width: "3rem" }} />
                                        <label className='fw-bold' style={{ color: "darkslateblue" }} htmlFor="c1">Railway Pass Concession </label>
                                    </div>
                                </div>

                                <div className='row mt-4 mb-3'>
                                    <div className="d-flex justify-content-between">
                                        <Link to="/train-dashboard" className="btn text-light w-25 rounded-1 fw-bold" style={{ backgroundColor: "darkorange" }}>Search</Link>

                                        <button className="btn text-light w-25 rounded-1 fw-bold btn-success" >Try Booking Ask Disha 2.0</button>
                                    </div>

                                </div>
                            </form>
                        </div>



                    </div>
                <div className=" mt-2 bg-light  pb-4 ">
                    <span className='text-danger text-sm fw-semibold small'>
                        Tickets booked through unauthorized agents or scripting can be released without refund.
                        Please check the alert section regarding restoration of AC 3-tier economy fare.
                    </span>
                </div>
                </div>

                <div className="d-flex align-items-end justify-content-center text-light flex-column  " style={{padding:"5rem" ,fontFamily:"sans-serif" }}>
                <div className='d-flex flex-column justify-content-center align-items-center mt-5 pt-5' >

                    <h1 className='fw-bold mt-5 me-5' style={{fontSize:"4rem" }}>INDIAN RAILWAYS</h1>
                    
                    <h3 className='me-5'>Safety | Security | Punctuality</h3>
                </div>
                </div>

            </div>
        </div>
    )
}
