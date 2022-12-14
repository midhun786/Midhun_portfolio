import { useState } from "react"

function Sidebar() {
    const[toggle,settoggle]=useState(false)
    const handleChange=()=>{
        settoggle(!toggle)
    }
    
    return (
        <>
        <i className="fa fa-list mobile-nav-toggle d-xl-none" onClick={handleChange}></i> 
            {/* <!-- Header --> */}
            <header id="header" className={toggle?`show`:"hide"}>
                <div className="d-flex flex-column">
                    <div className="profile">

                        <img src={"../img/profile.jpeg"} alt="" className="img-fluid rounded-circle" />
                        <h1 className="text-light prop-0">Midhun</h1>

                        <div className="social-links mt-3 text-center">
                            
                            <a href="https://www.linkedin.com/in/midhun-499558236/" target="_blank" className="linkedin"><i className="fa-brands fa-linkedin-in"></i></a>

                            <a href="https://mail.google.com/mail/u/0/?hl=en-GB&tf=cm&fs=1&to=midhunkumarengineer98@gmail.com" target="_blank" className="google-plus"><i className="fa fa-envelope"></i></a>

                            <a href="https://github.com/midhun786" target="_blank" className="github"><i className="fa-brands fa-github"></i></a>
                        </div>
                        
                    </div>

                    <nav id="navbar" className="nav-menu navbar mt-4 ms-2">
                        <ul>
                            <li>
                                <a href="#about" className="nav-link "><i className="fa fa-user"></i><span>About</span></a>
                            </li>
                            <li>
                                <a href="#skills" className="nav-link "><i className="fa fa-gear"></i><span>Skills</span></a>
                            </li>
                            <li>
                                <a href="#portfolio" className="nav-link "><i className="fa fa-project-diagram"></i>
                                    <span>Projects</span></a>
                            </li>
                            <li>
                                <a href="#professional" className="nav-link "><i className="fa-solid fa-lock"></i>
                                    <span>Experience</span></a>
                            </li>
                            <li>
                                <a href="#Achieve" className="nav-link "><i className="fa-solid fa-tag"></i>
                                    <span>Achievements</span></a>
                            </li>
                            <li>
                                <a href="#contact" className="nav-link "><i className="fa fa-contact-book"></i>
                                    <span>Contact</span></a>
                            </li>
                        </ul>
                    </nav >
                    {/* // < !-- .nav - menu-- > */}
                </div >
            </header >
            {/* // < !--End Header-- > */}

            
        </>
    )
}

export default Sidebar