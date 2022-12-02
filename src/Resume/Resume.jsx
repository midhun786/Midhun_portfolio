import React from 'react'
import Project6 from "../Resume/Images/Resume.png"
import resume from "../Resume/Images/resume.pdf"

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
                                        <h2>Resume</h2>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card" id='card' style={{width: "18rem"}}>
                                                <img src={Project6} class="card-img-top" alt="..."/>
                                                    <div className="card-body d-flex justify-content-center">
                                                        <a href={resume} className='btn btn-success' download>Download</a>
                                                    </div>
                                            </div>
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