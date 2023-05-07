import React from 'react'

export default function Pcard() {
  return (
    <div>
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
                    <div className='d-flex'>
                        <div className="card mt-3 me-3 shadow   col-auto bg-light">
                            <div className="card-body  d-flex flex-column justify-content-center align-items-center">
                                <h6 className='fw-bold'>Sleeper (SL)</h6>
                                <div className='text-success fw-bold'>Availble</div>
                            </div>
                        </div>

                        <div className="card mt-3 me-3 shadow rounded-0 col-auto bg-light">
                            <div className="card-body  d-flex flex-column justify-content-center align-items-center">
                                <h6 className='fw-bold'>Economy (EC)</h6>
                                <div className='text-success fw-bold'>Availble</div>
                            </div>
                        </div>

                        <div className="card mt-3  shadow rounded-0 col-auto bg-light">
                            <div className="card-body  d-flex flex-column justify-content-center align-items-center">
                                <h6 className='fw-bold'>Economy (EC)</h6>
                                <div className='text-success fw-bold'>Availble</div>
                            </div>
                        </div>

                    </div>
                    <div>

                        <div className="d-flex container-fluid  ">
                            <button className='btn text-success  rounded-0 mt-3 fw-bold   ' style={{ width: "15rem",fontSize:"1.5rem" }}>Availble</button>
                        </div>
                    </div>

                </div>
            </div>
    </div>
  )
}
