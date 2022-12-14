import React from 'react'
// import Project6 from "../Resume/Images/Resume.png"
// import resume from "../Resume/Images/resume.pdf"

function Resume() {
    return (
        <>
            <section className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <main id="main">
                            <section id="resume" className="portfolio section-bg">
                                <div className="container">

                                    <div className="section-title">
                                        <h2>Experience </h2>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12">
                                           <h3>Gestamp Automotive Chennai Pvt Ltd <span className='fs-italic' style={{display:"inline",color:"brown"}}>(2019 - 2020)</span></h3> 
                                            <article><h6>I have worked at robotic weldshop.
                                                And I have experience with machines that comes 
                                                under FNA category.Quality checking also falls 
                                                under my previous JD so i have some experience on it too
                                                </h6> </article>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* <div className="card" id='card' style={{width: "18rem"}}> */}
                                                {/* <img src={Project6} class="card-img-top" alt="..."/> */}
                                                    {/* <div className="card-body d-flex justify-content-center">
                                                        <a href={resume} className='btn btn-success' download>Download</a>
                                                    </div> */}
                                            {/* </div> */}
                                        <h3>Delphi-TVS Technologies  <span className='fs-italic' style={{display:"inline",color:"brown"}}>(2021 - 2022)</span></h3> 
                                            <article><h6>I have worked at Fuel Injector Testing,
                                                And I have experience with testing injector by using 
                                                (Common rail injector testing machine).Quality checking also 
                                                falls under my previous job.</h6> </article>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        </main>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume