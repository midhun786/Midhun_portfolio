import React from 'react'

function Contact() {
    return (
        <>
            <section className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <main id="main">
                            <section id="contact" className="contact">
                                <div className="container">

                                    <div className="section-title">
                                        <h2>Contact</h2>
                                    </div>
                                    <div className="container" id="contact">
        <div className="row">
        <div className="card-title fs-2 fw-normal bold fst-italic " style= {{color:"rgb(155, 28, 49)"}} >Connect with me</div>
        <div className="card-title fs-5 col-lg-7 col-sm-12">If you want to know more about me or my work,or if you would just like to say hello,send me a message.I'd love to hear from you</div>
     
          <div className=" card col-lg-6 mt-2 pt-2 pb-3">
            <div className="row">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label fs-4 fw-normal fst-italic" >Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label fs-4 fw-normal fst-italic " >Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email"/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label fs-4 fw-normal fst-italic" >Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              <div className="">
              <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3 ">
                <button className="btn btn-outline-danger me-md-2" type="submit">Send message</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <label className="d-flex justify-content-end fw-bold fs-1"style= {{color:"rgb(155, 28, 49)"}}>Email</label>
            <div className="fs-4 fw-normal fst-italic d-flex justify-content-lg-end justify-content-sm-end" href="midhunkumarengineer98@gmail.com">midhunkumarengineer98@gmail.com</div>

            <label className="d-flex justify-content-end fw-bold fs-1" style= {{color:"rgb(155, 28, 49)"}}>Address</label>
            <div className="fs-4 fw-normal fst-italic d-flex justify-content-lg-end justify-content-sm-end">No:50,Ayyer madem street,cuddalore district</div>
            
            <label className="d-flex justify-content-end fw-bold fs-1" style= {{color:"rgb(155, 28, 49)"}}>Social</label>
            <div className="fs-4 fw-normal fst-italic d-flex justify-content-lg-end">
              <div className="social-icons">
              <a class="btn text-white mx-2" style={{backgroundColor: "#0082ca"}} href="https://www.linkedin.com/in/midhun-499558236/" target="_blank" role="button"><i class="fab fa-linkedin-in"></i></a>
              <a class="btn text-white mx-2" style={{backgroundColor: "#333333"}} href="https://mail.google.com/mail/u/0/?hl=en-GB&tf=cm&fs=1&to=midhunkumarengineer98@gmail.com" target="_blank" role="button"><i class="fab fa-github"></i></a>
              <a class="btn text-white mx-2" style={{backgroundColor: "#c61118"}} href="https://github.com/midhun786" target="_blank" role="button"><i class="fas fa-envelope"></i></a>
              
            </div>
            
            </div>



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

export default Contact