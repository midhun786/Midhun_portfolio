import React from 'react'
import project1 from "../Project/Images/Ecommerce.png"
import project2 from "../Project/Images/Kitchenrecipe.png"
import project3 from "../Project/Images/Pizza.png"
import project4 from "../Project/Images/dailynotes.png"
import project5 from "../Project/Images/Weather.png"

function Project() {
    return (
        <>
            <section className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <main id="main">
                            <section id="portfolio" className="portfolio section-bg">
                                <div className="container">

                                    <div className="section-title">
                                        <h2>Portfolio</h2>
                                        </div>

                                    <div className="row" data-aos="fade-up">
                                        <div className="col-lg-12 d-flex justify-content-center">
                                            <ul id="portfolio-flters">
                                                <li data-filter=".filter" className="filter-active">ALL</li>
                                                {/* <li data-filter=".filter-app">App</li>
                                                <li data-filter=".filter-card">Card</li>
                                                <li data-filter=".filter-web">Web</li> */}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='container card pt-5' id='portfolio'>


<div className="card-body">
 
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card h-60 p-3">
        <div class="card-header text-center fw-bold fs-4 fst-italic">Ecommerce App</div>
        <img src={project1} class="card-img-top" alt="" />
        <div class="card-body">
        </div>
        <div class="card-footer text-center">
          <div class="btn-group" role="group" >
            <a href="https://github.com/midhun786/b37wdcapstone-frontend-" target={"_blank"} type="button" class="btn btn-outline-danger"><i class="fa-solid fa-code"></i> CODE</a>&nbsp;&nbsp;&nbsp;&nbsp;
           
            <a href="https://super-toffee-87905c.netlify.app" target={"_blank"} type="button" class="btn btn-outline-danger"><i class="fas fa-link"></i> LIVE</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card h-60 p-3">
        <div class="card-header text-center fw-bold fs-4 fst-italic">Kitchen Recipe App</div>
        <img src={project2} class="card-img-top" alt="..." />
        <div class="card-body">
         
        </div>
        <div class="card-footer text-center">
          <div class="btn-group" role="group" aria-label="Basic outlined example">
          <a href="https://github.com/midhun786/kitchen-recipes-frontend" target={"_blank"}  type="button" class="btn btn-outline-danger"><i class="fa-solid fa-code"></i>CODE</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://loquacious-syrniki-bb9377.netlify.app" target={"_blank"} type="button" class="btn btn-outline-danger"><i class="fas fa-link"></i> LIVE</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card h-60 p-3">
        <div class="card-header text-center fw-bold fs-4 fst-italic">Pizza Hut App</div>
        <img src={project3} class="card-img-top" alt="..." />
        <div class="card-body">
          
        </div>
        <div class="card-footer text-center">
          <div class="btn-group" role="group" aria-label="Basic outlined example">
          <a href="https://github.com/midhun786/pizza-app-frontEnd" target={"_blank"} type="button" class="btn btn-outline-danger"><i class="fa-solid fa-code"></i> CODE</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://splendid-jalebi-330301.netlify.app"target={"_blank"} type="button" class="btn btn-outline-danger"><i class="fas fa-link"></i> LIVE</a>
        </div>

        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card h-60 p-3">
        <div class="card-header text-center fw-bold fs-4 fst-italic">Daily Notes App</div>
        <img src={project4} class="card-img-top" alt="..." />
        <div class="card-body">
         
        </div>
        <div class="card-footer text-center">
          <div class="btn-group" role="group" aria-label="Basic outlined example">
          <a href="https://github.com/midhun786/Daily-notes-app-frontEnd" target={"_blank"} type="button" class="btn btn-outline-danger"><i class="fa-solid fa-code"></i> CODE</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://verdant-platypus-2a93fa.netlify.app/" target={"_blank"} type="button" class="btn btn-outline-danger"><i class="fas fa-link"></i> LIVE</a>
          </div>

        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card h-60 p-3">
        <div class="card-header text-center fw-bold fs-4 fst-italic">Weather App</div>
        <img src={project5} class="card-img-top" alt="..." />
        <div class="card-body">

        </div>
        <div class="card-footer text-center">
          <div class="btn-group" role="group" aria-label="Basic outlined example">
          <a href="https://github.com/midhun786/Weather-app" target={"_blank"} type="button" class="btn btn-outline-danger"><i class="fa-solid fa-code"></i> CODE</a>&nbsp;&nbsp;&nbsp;&nbsp;
           
           <a href="https://glistening-churros-3795a1.netlify.app" target={"_blank"} type="button" class="btn btn-outline-danger"><i class="fas fa-link"></i> LIVE</a>
          </div>

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

export default Project