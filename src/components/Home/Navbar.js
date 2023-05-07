import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light ">
        <div className="row container-fluid">
            <div className="  col-auto  ">
                <img src="https://www.irctc.co.in/nget/assets/images/secondry-logo.png" className='navbar-brand' alt="" />
            </div>
            <div className="col-auto ">
              <div className="d-flex flex-column">
                  <div className="d-flex align-align-items-center">
                    <div className="nav-item ms-4 mt-2 m-1 btn  border-0 rounded-0 text-light fw-bold btn-sm" style={{backgroundColor:"darkslateblue"}}>LOGIN</div>
                    <div className="nav-item ms-4 mt-2 m-1">REGISTER</div>
                    <div className="nav-item ms-4 mt-2 m-1">AGENT LOGIN</div>
                    <div className="nav-item ms-4 mt-2 m-1">CONTACT US</div>
                    <div className="nav-item ms-4 mt-2 m-1">ASK DISHA</div>
                    <div className="nav-item ms-4 mt-2 m-1 btn border-0 rounded-0 bg-dark-subtle btn-sm fw-bold" >ALERTS</div>
                    <div className="nav-item ms-4 mt-2 m-1 fw-bold font-monospace">5-May-2023</div>
                    <div className="nav-item ms-4 mt-2 m-1 fw-bold text-secondary">हिंदी</div>

                  </div>
                  <div className="d-flex align-items-center">
                  <div className="nav-item ms-4 mt-2 m-1 ms-5"><span class="material-symbols-outlined text-secondary">home</span></div>
                  <div className="nav-item ms-4 mt-2 m-1 btn border-0 rounded-0 text-light fw-bold btn-sm" style={{backgroundColor:"darkslateblue"}}>IRCTC EXCLUSIVE</div>
                  
                  <div className="nav-item ms-4 mt-2 m-1 font-monospace  fw-bold" style={{color:"darkorange" ,borderBottom:" 2px solid darkorange"}}>TRAINS</div>
                  <div className="nav-item ms-4 mt-2 m-1">BUSES</div>
                  <div className="nav-item ms-4 mt-2 m-1">FLIGHTS</div>
                  <div className="nav-item ms-4 mt-2 m-1">HOTELS</div>
                  <div className="nav-item ms-4 mt-2 m-1">HOLYDAYS</div>
                  <div className="nav-item ms-4 mt-2 m-1">LOYALTY</div>
                  <div className="nav-item ms-4 mt-2 m-1">MEALS</div>
                  <div className="nav-item ms-4 mt-2 m-1">PROMOTIONS</div>
                  <div className="nav-item ms-4 mt-2 m-1">MORE</div>


                  

                  </div>

              </div>
            </div>
            <div className="col-auto ">
            <img src="https://www.irctc.co.in/nget/assets/images/logo.png" className='navbar-brand' alt="" />
            </div>

        </div>

      </nav>
    </div>
  )
}
