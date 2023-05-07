import React from 'react'

export default function DashSearch() {
    return (
        <div>
            <div className="">
                <div>
                    <div className="container-fluid d-flex   justify-content-center pt-4 ps-5 pe-5 " style={{ backgroundColor: "#213d77" }}>
                        <input type="text " className='form-control rounded-0  ms-4  col  ' placeholder='New Delhi' />
                        <span class="material-symbols-outlined text-light mt-2 ms-3">swap_horiz</span>
                        <input type="text " className='form-control rounded-0  ms-4  col  ' placeholder='NChennai' />
                        <input type="date" className='form-control rounded-0  ms-4  col  ' placeholder='' />
                        <input type="text " className='form-control rounded-0  ms-4  col  ' placeholder='All Classes' />
                        <input type="text " className='form-control rounded-0  ms-4  col   ' placeholder='GENRAL' />

                        <button className="btn bg-warning fw-bold text-light rounded-0 shadow  ms-4">Modify Search </button>


                    </div>
                    <div className="container-fluid  ps-5 pt-4 pe-5 pb-3" style={{ backgroundColor: "#213d77" }}>
                        <div className="row  " style={{ fontFamily: "serif" }}>
                            <div className="mt-3 ms-4 col-auto d-flex justify-items-center ">
                                <input type="checkbox" className='rounded-0  bg-secondary    form-check' id="c1" style={{ width: "2rem" }} />
                                <label className='fw-bold' style={{ color: "whitesmoke" }} htmlFor="c1">Person With Disablity </label>
                            </div>

                            <div className="mt-3 ms-4 col-auto d-flex justify-items-center ">
                                <input type="checkbox" className='rounded-0  bg-secondary    form-check' id="c1" style={{ width: "2rem" }} />
                                <label className='fw-bold' style={{ color: "whitesmoke" }} htmlFor="c1">Flexible With Time </label>
                            </div>

                            <div className="mt-3 ms-4 col-auto d-flex justify-items-center ">
                                <input type="checkbox" className='rounded-0  bg-secondary    form-check' id="c1" style={{ width: "2rem" }} />
                                <label className='fw-bold' style={{ color: "whitesmoke" }} htmlFor="c1">Train With Avaible Berth </label>
                            </div>

                            <div className="mt-3 ms-4 col-auto d-flex justify-items-center ">
                                <input type="checkbox" className='rounded-0  bg-secondary    form-check' id="c1" style={{ width: "2rem" }} />
                                <label className='fw-bold' style={{ color: "whitesmoke" }} htmlFor="c1">Railway Pass Concession </label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
