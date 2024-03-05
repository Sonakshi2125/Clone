import React from 'react'
import "./PurposeSec.css"

const PurposeSec = () => {
  return (
    <div className= "Purpose-sec">
    <div className="container">
        <div className="row">
            <div className=" left col-12 col-md-6">
                <div className="purpose-mainheading pt-md-21 pt-3">PURPOSE</div>
                <h2 className="purpose-heading ">Faster, Economical, Reliable &amp; Risk Free</h2>
                <h3 className="purpose-subheading">Bringing trust to cross border procurement and sourcing</h3>
            </div>
           <div className="col-md-6 col-12 ">
                <div className="d-flex mt-md-9 purpose-container">
                    <img src="https://worldref.co/wp-content/uploads/2023/12/Group-1000006023.svg" alt="" class="purpose-image"/>
                    <div className="purpose-milestone px-md-6 px-3 pt-md-12">
                        <h3>Enhancing </h3>
                        <h3>Trust</h3>
                    </div>
                </div>
                <div className="d-flex mt-md-5 mt-6 purpose-container">
                    <img src="https://worldref.co/wp-content/uploads/2023/12/Group-1000006024.svg" alt="" class="purpose-image"/>
                    <div className="purpose-milestone px-md-6 px-3 pt-md-11">
                        <h3>Eliminating</h3>
                        <h3>Risks</h3>
                    </div>
                </div>
                <div className="d-flex  mt-6 purpose-container">
                    <img src="https://worldref.co/wp-content/uploads/2023/12/Problem-Solve.svg" alt="" class="purpose-image"/>
                    <div className="purpose-milestone pl-md-10 pl-7 pt-md-6">
                        <h3>Solving</h3>
                        <h3>Complexities</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default PurposeSec
