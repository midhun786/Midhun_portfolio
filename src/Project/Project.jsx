import React from 'react'

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
                                                <li data-filter=".filter" className="filter-active">ALl</li>
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
        <div class="card-header text-center">Project Title_1</div>
        <img src="https://www.a2itsoft.com/public/uploads/1649165864.png" class="card-img-top" alt="..." />
        <div class="card-body">
         
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer text-center">
          <div class="btn-group" role="group" >
            <a href="#" type="button" class="btn btn-outline-danger">F_CODE</a>
            <a href="#" type="button" class="btn btn-outline-danger">B_CODE</a>
            
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card h-60 p-3">
        <div class="card-header text-center">Project Title_2</div>
        <img src="https://www.a2itsoft.com/public/uploads/1649165864.png" class="card-img-top" alt="..." />
        <div class="card-body">
         
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="card-footer text-center">
          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <a href="#" type="button" class="btn btn-outline-danger">F_CODE</a>
            <a href="#" type="button" class="btn btn-outline-danger">B_CODE</a>
          
          </div>

        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card h-60 p-3">
        <div class="card-header text-center">Project Title_3</div>
        <img src="https://www.a2itsoft.com/public/uploads/1649165864.png" class="card-img-top" alt="..." />
        <div class="card-body">
          
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="card-footer text-center">
          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <a href="#" type="button" class="btn btn-outline-danger">F_CODE</a>
            <a href="#" type="button" class="btn btn-outline-danger">B_CODE</a>
       
          </div>

        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card h-60 p-3">
        <div class="card-header text-center">Project Title_4</div>
        <img src="https://www.a2itsoft.com/public/uploads/1649165864.png" class="card-img-top" alt="..." />
        <div class="card-body">
         
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="card-footer text-center">
          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <a href="#" type="button" class="btn btn-outline-danger">F_CODE</a>
            <a href="#" type="button" class="btn btn-outline-danger">B_CODE</a>
           
          </div>

        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card h-60 p-3">
        <div class="card-header text-center">Project Title_5</div>
        <img src="https://www.a2itsoft.com/public/uploads/1649165864.png" class="card-img-top" alt="..." />
        <div class="card-body">
         
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="card-footer text-center">
          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <a href="#" type="button" class="btn btn-outline-danger">F_CODE</a>
            <a href="#" type="button" class="btn btn-outline-danger">B_CODE</a>
        
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