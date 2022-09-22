import React from 'react'

function Skill() {
    let skill = [
        {
            icon: <img src="./Asset/html.png" alt="" className="HTML" />
        },
        {
            icon: <img src="./Asset/css.png" alt="" className="HTML" />
        },
        {
            icon: <img src="./Asset/javascript.png" alt="" className="HTML" />
        },
        {
            icon: <img src="./Asset/bootstrap.png" alt="" className="HTML" />
        },
        {
            icon: <img src="./Asset/react.png" alt="" className="HTML" />
        },
        {
            icon: <img src="./Asset/redux.png" alt="" className="HTML" />
        },
        {
            icon: <img src="./Asset/mysql.png" alt="" className="HTML" />
        },
        {
            icon: <img src="./Asset/mongodb.png" alt="" className="HTML" />
        },
        {
            icon: <img src="./Asset/nodejs.png" alt="" className="HTML" />
        },
        {
            icon: <img src="./Asset/postman.png" alt="" className="HTML" />
        },
        {
            icon: <img src="./Asset/github.png" alt="" className="HTML" />
        },
        {
            icon: <img src="./Asset/ex.png" alt="" className='HTML' />
        },
    ]
    return (
        <>
            <section className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <main id="main">
                            <section id="skills" className="skills section-bg">
                                <div className="container">

                                    <div className="section-title">
                                        <h2>Skills</h2>
                                    </div>

                                    <div className="row skills-content">

                                        {
                                            skill.map((img, index) => {
                                                return (
                                                    <>
                                                        <div className="col-4 col-lg-2 col-md-2 col-sm-2 p-3" data-aos="fade-up" key={index} >

                                                            <div className="p-3">
                                                                {img.icon}
                                                            </div>

                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
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

export default Skill