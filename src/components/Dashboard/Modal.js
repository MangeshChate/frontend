import React from 'react'
import {Link} from 'react-router-dom'
export default function Modal() {
  return (
    <div>
          {/* model */}
          <div className="modal modal-lg fade p-3 rounded-0" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-0 p-2">
                       
                        
                        <div className="modal-body rounded-0 fw-bold  ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam repellendus ex.
                        </div>
                        <div className="d-flex">
                            <a href="/passenger-detail" className="btn  rounded-0 shadow m-2 text-light" style={{backgroundColor:"darkslateblue"}}>confirm</a>
                            <button className='btn btn-danger shadow rounded-0 m-2' type="button"  data-bs-dismiss="modal">close</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
