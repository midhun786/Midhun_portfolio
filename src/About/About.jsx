import React from 'react'
import Lottie from 'react-lottie';
import animationData from "../lottie/data1.json"

function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <main id="main">
              <section id="about" className="about">
                <div className="container">

                  <div className="section-title">
                    <h2>About</h2>
                    <h3>Full Stack Web Developer.</h3>
                  </div>

                  <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                      {/* <img src={view} style={{height:"30rem",width:"22rem",borderRadius:"10%",transition: "ease-in",}} className="img-fluid" alt="" /> */}
                      <Lottie options={defaultOptions}
                   height={350}
                   width={350}
                   />
                  </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <div class="card-body">
            <span
              class="card-title fs-2 fw-normal bold fst-italic"
              style= {{color:"#bd5d38" }}
            >
              About Me,
            </span>
            <hr />
            <p class="card-text fs-4">
              Am a MERN Stack Developer from Tamil Nadu in India 🇮🇳. I
              love to create web apps that would make life easy and enjoyable
              for people. I have just completed MERN Stack at Guvi Geeks of
              IIT-M, Chennai.
            </p>
            <p class="card-text fs-4">
              I like to interact with people, listen to new ideas . I am
              always open to have talk about anything and look forward to
              connect with you 🤝. Feel free to contact me here. ⤵️{" "}
            </p>
            <div class="d-flex flex-row-reverse" id="sw">
              <a type="button" class="btn btn-secondary but" href="#contact">
                Contact
              </a>
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

export default About