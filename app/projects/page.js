"use client"
import "@/styles/projects.css"
import NavBar from "@/components/Navbar"
import Image from "next/image"
import image from "@/public/images/project.png"
import githubIcon from "@/public/emojis/github.png"
import Chatbot from "@/components/chatbot"
export default function Projects() {

    return <>
        <NavBar />
        <section className="container">

            <aside className="overview">
                <div className="header">
                    <h1>Projects</h1>
                    <button>NEW</button>
                </div>

                <input type="text" id="search-project" placeholder="Find a project..." />

                <div className="projects">

                    <div className="project">
                        <Image src={image} alt="project image cover" />
                        <div className="info">
                            <p>Project title</p>
                            <small>this is a small description about the project</small>
                        </div>
                        <span className="updatedAt" title="updated at">30 June,2025</span>
                    </div>

                    <div className="project">
                        <Image src={image} alt="project image cover" />
                        <div className="info">
                            <p>Project title</p>
                            <small>this is a small description about the project</small>
                        </div>
                        <span className="updatedAt">30 June,2025</span>
                    </div>
                    <div className="project">
                        <Image src={image} alt="project image cover" />
                        <div className="info">
                            <p>Project title</p>
                            <small>this is a small description about the project</small>
                        </div>
                        <span className="updatedAt">30 June,2025</span>
                    </div>
                    <div className="project">
                        <Image src={image} alt="project image cover" />
                        <div className="info">
                            <p>Project title</p>
                            <small>this is a small description about the project</small>
                        </div>
                        <span className="updatedAt">30 June,2025</span>
                    </div>
                    <div className="project">
                        <Image src={image} alt="project image cover" />
                        <div className="info">
                            <p>Project title</p>
                            <small>this is a small description about the project</small>
                        </div>
                        <span className="updatedAt" aria-label="updatedAt">30 June,2025</span>
                    </div>
                    <div className="project">
                        <Image src={image} alt="project image cover" />
                        <div className="info">
                            <p>Project title</p>
                            <small>this is a small description about the project</small>
                        </div>
                        <span className="updatedAt">30 June,2025</span>
                    </div>
                    <div className="project">
                        <Image src={image} alt="project image cover" />
                        <div className="info">
                            <p>Project title</p>
                            <small>this is a small description about the project</small>
                        </div>
                        <span className="updatedAt">30 June,2025</span>
                    </div>
                    <div className="project">
                        <Image src={image} alt="project image cover" />
                        <div className="info">
                            <p>Project title</p>
                            <small>this is a small description about the project</small>
                        </div>
                        <span className="updatedAt">30 June,2025</span>
                    </div>
                    <div className="project">
                        <Image src={image} alt="project image cover" />
                        <div className="info">
                            <p>Project title</p>
                            <small>this is a small description about the project</small>
                        </div>
                        <span className="updatedAt">30 June,2025</span>
                    </div>
                    <div className="project">
                        <Image src={image} alt="project image cover" />
                        <div className="info">
                            <p>Project title</p>
                            <small>this is a small description about the project</small>
                        </div>
                        <span className="updatedAt">30 June,2025</span>
                    </div>

                </div>

            </aside>

            <div className="projectsContainer">
                <section className="items">

                    <div className="item">
                        <div className="images">
                            <Image src={image} alt="project image" fill />
                            <Image src={image} alt="project image" fill />
                            <Image src={image} alt="project image" fill />
                            <Image src={image} alt="project image" fill />

                        </div>

                        <div className="info">
                            <div className="row">
                                <div className="title">
                                    <h1>project name</h1>
                                    <small>public</small>
                                </div>
                                <div className="technologies">
                                    <small>React</small>
                                    <small>React</small>
                                    <small>React</small>
                                    <small>React</small>
                                </div>
                            </div>
                            <p className="description">
                                lorem lorem lorem lorem lorem lorem
                                lorem lorem lorem lorem lorem lorem lorem
                            </p>
                            <div className="footer">
                                <a href="www.github.com/moamen7abdelrahman"> <i><Image src={githubIcon} alt="github icon" /></i> Source Code</a>
                                <div className="date">
                                    <span className="startDate"><small>Start</small><small>30 June,2025</small></span>
                                    <span className="endDate"><small>End</small><small>30 June,2025</small></span>
                                </div>
                            </div>
                        </div>
                        <span className="progress-level" >In progress</span>
                        {/* style={{backgroundColor: "blue"}} */}
                    </div>
                    <div className="item">
                        <div className="images">
                            <Image src={image} alt="project image" fill />
                            <Image src={image} alt="project image" fill />
                            <Image src={image} alt="project image" fill />
                            <Image src={image} alt="project image" fill />

                        </div>

                        <div className="info">
                            <div className="row">
                                <div className="title">
                                    <h1>project name</h1>
                                    <small>public</small>
                                </div>
                                <div className="technologies">
                                    <small>React</small>
                                    <small>React</small>
                                    <small>React</small>
                                    <small>React</small>
                                </div>
                            </div>
                            <p className="description">
                                lorem lorem lorem lorem lorem lorem
                                lorem lorem lorem lorem lorem lorem lorem
                            </p>
                            <div className="footer">
                                <a href="www.github.com/moamen7abdelrahman"> <i><Image src={githubIcon} alt="github icon" /></i> Source Code</a>
                                <div className="date">
                                    <span className="startDate"><small>Start</small><small>30 June,2025</small></span>
                                    <span className="endDate"><small>End</small><small>30 June,2025</small></span>
                                </div>
                            </div>
                        </div>
                        <span className="progress-level" >In progress</span>
                        {/* style={{backgroundColor: "blue"}} */}
                    </div>
                    <div className="item">
                        <div className="images">
                            <Image src={image} alt="project image" fill />
                            <Image src={image} alt="project image" fill />
                            <Image src={image} alt="project image" fill />
                            <Image src={image} alt="project image" fill />

                        </div>

                        <div className="info">
                            <div className="row">
                                <div className="title">
                                    <h1>project name</h1>
                                    <small>public</small>
                                </div>
                                <div className="technologies">
                                    <small>React</small>
                                    <small>React</small>
                                    <small>React</small>
                                    <small>React</small>
                                </div>
                            </div>
                            <p className="description">
                                lorem lorem lorem lorem lorem lorem
                                lorem lorem lorem lorem lorem lorem lorem
                            </p>
                            <div className="footer">
                                <a href="www.github.com/moamen7abdelrahman"> <i><Image src={githubIcon} alt="github icon" /></i> Source Code</a>
                                <div className="date">
                                    <span className="startDate"><small>Start</small><small>30 June,2025</small></span>
                                    <span className="endDate"><small>End</small><small>30 June,2025</small></span>
                                </div>
                            </div>
                        </div>
                        <span className="progress-level" >In progress</span>
                        {/* style={{backgroundColor: "blue"}} */}
                    </div>
                    <div className="item">
                        <div className="images">
                            <Image src={image} alt="project image" fill />
                            <Image src={image} alt="project image" fill />
                            <Image src={image} alt="project image" fill />
                            <Image src={image} alt="project image" fill />

                        </div>

                        <div className="info">
                            <div className="row">
                                <div className="title">
                                    <h1>project name</h1>
                                    <small>public</small>
                                </div>
                                <div className="technologies">
                                    <small>React</small>
                                    <small>React</small>
                                    <small>React</small>
                                    <small>React</small>
                                </div>
                            </div>
                            <p className="description">
                                lorem lorem lorem lorem lorem lorem
                                lorem lorem lorem lorem lorem lorem lorem
                            </p>
                            <div className="footer">
                                <a href="www.github.com/moamen7abdelrahman"> <i><Image src={githubIcon} alt="github icon" /></i> Source Code</a>
                                <div className="date">
                                    <span className="startDate"><small>Start</small><small>30 June,2025</small></span>
                                    <span className="endDate"><small>End</small><small>30 June,2025</small></span>
                                </div>
                            </div>
                        </div>
                        <span className="progress-level" >In progress</span>
                        {/* style={{backgroundColor: "blue"}} */}
                    </div>
                    <div className="item">
                        <div className="images">
                            <Image src={image} alt="project image" fill />
                            <Image src={image} alt="project image" fill />
                            <Image src={image} alt="project image" fill />
                            <Image src={image} alt="project image" fill />

                        </div>

                        <div className="info">
                            <div className="row">
                                <div className="title">
                                    <h1>project name</h1>
                                    <small>public</small>
                                </div>
                                <div className="technologies">
                                    <small>React</small>
                                    <small>React</small>
                                    <small>React</small>
                                    <small>React</small>
                                </div>
                            </div>
                            <p className="description">
                                lorem lorem lorem lorem lorem lorem
                                lorem lorem lorem lorem lorem lorem lorem
                            </p>
                            <div className="footer">
                                <a href="www.github.com/moamen7abdelrahman"> <i><Image src={githubIcon} alt="github icon" /></i> Source Code</a>
                                <div className="date">
                                    <span className="startDate"><small>Start</small><small>30 June,2025</small></span>
                                    <span className="endDate"><small>End</small><small>30 June,2025</small></span>
                                </div>
                            </div>
                        </div>
                        <span className="progress-level" >In progress</span>
                        {/* style={{backgroundColor: "blue"}} */}
                    </div>
                    <div className="item">
                        <div className="images">
                            <Image src={image} alt="project image" fill />
                            <Image src={image} alt="project image" fill />
                            <Image src={image} alt="project image" fill />
                            <Image src={image} alt="project image" fill />

                        </div>

                        <div className="info">
                            <div className="row">
                                <div className="title">
                                    <h1>project name</h1>
                                    <small>public</small>
                                </div>
                                <div className="technologies">
                                    <small>React</small>
                                    <small>React</small>
                                    <small>React</small>
                                    <small>React</small>
                                </div>
                            </div>
                            <p className="description">
                                lorem lorem lorem lorem lorem lorem
                                lorem lorem lorem lorem lorem lorem lorem
                            </p>
                            <div className="footer">
                                <a href="www.github.com/moamen7abdelrahman"> <i><Image src={githubIcon} alt="github icon" /></i> Source Code</a>
                                <div className="date">
                                    <span className="startDate"><small>Start</small><small>30 June,2025</small></span>
                                    <span className="endDate"><small>End</small><small>30 June,2025</small></span>
                                </div>
                            </div>
                        </div>
                        <span className="progress-level" >In progress</span>
                        {/* style={{backgroundColor: "blue"}} */}
                    </div>

                </section>
            </div>
            <Chatbot />

        </section>
    </>
}