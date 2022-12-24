import React from 'react'
import { Link } from 'react-router-dom'
import zenclass from '../Achievement/images/zenclass.png'
import sololearn from '../Achievement/images/sololearn.png'
// import Project6 from "../Resume/Images/Resume.png"
// import resume from "../Resume/Images/resume.pdf"

function Achievement() {
    return (
        <>
            <section className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <main id="main">
                            <section id="Achievement" className="portfolio section-bg">
                                <div className="container">

                                    <div className="section-title">
                                        <h2>Achievement</h2>
                                    </div>
                                    <div className='container'>
                                        <div className='row'>
                                        <h1 className=''>Certificate of Completion</h1><br/><br/><br/><br/>
                                            <div className='col-lg-6 col-md-12'>
                                                <h3 className="fst-italic">Full Stack Development &nbsp; <img src={zenclass} style={{height:"40px",width:"60px"}}/></h3>
                                                <div className='fs-5'>Credential ID &nbsp;&nbsp;&nbsp;: 8331n9H2viA677R613</div> 
                                                <div className='fs-5'>Credential URL : <a href='https://www.guvi.in/verify-certificate?id=8331n9H2viA677R613' target={"_blank"} style={{color:'brown'}} >Click here to view My certificate</a></div>
                                            </div>
                                            <div className='col-lg-6 col-md-12'>
                                                <h3 className="fst-italic">Javascript &nbsp; <img src={zenclass} style={{height:"40px",width:"60px"}}/></h3>
                                                <div className='fs-5'>Credential ID &nbsp;&nbsp;&nbsp;: 761XU9gw923E631H67</div> 
                                                <div className='fs-5'>Credential URL : <a href='https://www.guvi.in/verify-certificate?id=761XU9gw923E631H67' target={"_blank"} style={{color:'brown'}}>Click here to view My certificate</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className='container'>
                                        <div className='row'>
                                        {/* <h1 className=''>Certificate of Completion</h1><br/><br/><br/><br/> */}
                                            <div className='col-lg-6 col-md-12'>
                                                <h3 className="fst-italic">React Js &nbsp; <img src={zenclass} style={{height:"40px",width:"60px"}}/></h3>
                                                <div className='fs-5'>Credential ID &nbsp;&nbsp;&nbsp;: u646G31v7j21Me793b</div> 
                                                <div className='fs-5'>Credential URL : <a href='https://www.guvi.in/verify-certificate?id=u646G31v7j21Me793b' target={"_blank"} style={{color:'brown'}}>Click here to view My certificate</a></div>
                                            </div>
                                            <div className='col-lg-6 col-md-12'>
                                                <h3 className="fst-italic">React + Redux &nbsp; <img src={sololearn} style={{height:"40px",width:"180px"}}/></h3>
                                                <div className='fs-5'>Credential ID &nbsp;&nbsp;&nbsp;: CT-LDFTG6IO</div> 
                                                <div className='fs-5'>Credential URL : <a href='https://www.sololearn.com/certificates/CT-LDFTG6IO' target={"_blank"} style={{color:'brown'}}>Click here to view My certificate</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className='container'>
                                        <div className='row'>
                                        {/* <h1 className=''>Certificate of Completion</h1><br/><br/><br/><br/> */}
                                            <div className='col-lg-6 col-md-12'>
                                                <h3 className="fst-italic">Node JS &nbsp; <img src={zenclass} style={{height:"40px",width:"60px"}}/></h3>
                                                <div className='fs-5'>Credential ID &nbsp;&nbsp;&nbsp;: p6612938A3Z1Ns977B</div> 
                                                <div className='fs-5'>Credential URL : <a href='https://www.guvi.in/verify-certificate?id=p6612938A3Z1Ns977B' target={"_blank"} style={{color:'brown'}}>Click here to view My certificate</a></div>
                                            </div>
                                            <div className='col-lg-6 col-md-12'>
                                                <h3 className="fst-italic">MongoDB &nbsp; <img src={zenclass} style={{height:"40px",width:"60px"}}/></h3>
                                                <div className='fs-5'>Credential ID &nbsp;&nbsp;&nbsp;: g2Q1767v3Y6R1p39sk</div> 
                                                <div className='fs-5'>Credential URL : <a href='https://www.guvi.in/verify-certificate?id=g2Q1767v3Y6R1p39sk' target={"_blank"} style={{color:'brown'}}>Click here to view My certificate</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    {/* <div className='container'>
                                        <div className='row'>
                                            <div className='col-lg-12 col-md-12'>
                                                <h3 className="fst-italic">Web Development Fundamentals &nbsp; <img src={sololearn} style={{height:"40px",width:"180px"}}/></h3>
                                                <div className='fs-5'>Credential ID &nbsp;&nbsp;&nbsp;: 8331n9H2viA677R613</div> 
                                                <div className='fs-5'>Credential URL : <a href='https://www.guvi.in/verify-certificate?id=8331n9H2viA677R613' target={"_blank"} style={{color:'brown'}}>Click here to view My certificate</a></div>
                                            </div>
                                        </div>
                                    </div> */}

                                   

                                </div>
                            </section>
                        </main>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Achievement