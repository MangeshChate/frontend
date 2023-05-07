import React from 'react'
import TrainCard from './TrainCard'

export default function DashRight() {
 
    return (
        <div>
            <div className="container-fluid">
                <div className="d-flex flex-column mt-3">
                    <div className='d-flex  align-items-center '>
                        <span>4 Results for</span>
                        <span className='fw-bold ms-2' >NEW DELHI</span>
                        <span className="material-symbols-outlined fw-bold ms-2">arrow_forward</span>
                        <span className='fw-bold ms-2'>MGR CHENNAI CTL</span>
                        <span className='fw-bold ms-3 me-2'>Fri , 05 May 2023</span>
                        <span >For Quota | Genral</span>
                    </div>

                    <div className="d-flex justify-content-between">
                        <div className="d-flex mt-3">
                            <button className="btn text-light me-2 fw-bold rounded-0 shadow" style={{backgroundColor:"darkslateblue"}}>Sort By | Duration</button>
                            <button className="btn text-light fw-bold rounded-0 shadow" style={{backgroundColor:"darkslateblue"}}>
                            Show Avaible Trains</button>
                        </div>
                        

                    </div>
                    <hr />
                    <div className="container-fluid mb-5  overflow-y-scroll " style={{height:"63rem"}}>
                       <TrainCard/>
                       <TrainCard/>
                       <TrainCard/>
                       <TrainCard/>
                       <TrainCard/>
                       <TrainCard/>
                       <TrainCard/>
                       <TrainCard/>
                       <TrainCard/>

                    </div>
                </div>
            </div>
        </div>
    )
}
