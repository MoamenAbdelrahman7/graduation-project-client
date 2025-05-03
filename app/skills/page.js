"use client"
import NavBar from "@/components/Navbar"
import "./style.css"
import Image from "next/image";

import plusIcon from "@/public/images/plus.png";
import { useRef, useState } from "react";
import Chatbot from "@/components/chatbot";

export default function () {
    const [showSkillDetails, setShowSkillDetails] = useState(false);
    const [skills, setSkills] = useState([]); //{ name: "", progress: 0 }
    const skillInputRef = useRef();

    // Add skill
    const addSkill = () => {
        setSkills([...skills, { name: skillInputRef.current.value, progress: 0 }])
        skillInputRef.current.value = "";
    }

    return <>
        <NavBar />
        <section className="container">

            <aside className="left-side">
                <div className="filters">
                    <h1>Filters</h1>
                    <div className="items">
                        <button id="allBt">All</button>
                        <button id="notStartedBt">Not Started</button>
                        <button id="inProgressBt">In Progress</button>
                        <button id="completedBt">Completed</button>
                    </div>
                </div>

            </aside>

            <div className="main">

                <div className="addSkill">

                    <div className="head">
                        <Image src={plusIcon} alt="plus icon" />
                        <h1>Add New Skill</h1>
                    </div>

                    <div className="body">
                        <input type="text" id="skillNameInput" placeholder="e.g: Python" ref={skillInputRef} />
                        <button id="addSkillBt" onClick={() => addSkill()}>
                            <Image src={plusIcon} alt="plus icon" />
                            Add
                        </button>
                    </div>

                </div>

                <div className="interests">
                    <h1>Your Interests</h1>
                    <div className="items">
                        <span className="item">front-end</span>
                        <span className="item">front-end</span>
                        <span className="item">front-end</span>
                        <span className="item">front-end</span>
                        <span className="item">front-end</span>
                        <span className="item">front-end</span>
                    </div>
                </div>

                <div className="skills">
                    <div className="head">
                        <span>
                            <Image src={plusIcon} alt="" />
                            <h1>Your Skills</h1>
                        </span>
                        <input type="text" id="skillSearch" placeholder="Find a skill..." />
                    </div>

                    <div className="items">
                        {
                            skills.map((skill, index) => <button className="item" key={index} onClick={() => setShowSkillDetails(true)} >

                                <div className="head">
                                    <Image src={plusIcon} alt="" />
                                    <h1>{skill.name}</h1>
                                </div>

                                <div className="progress">
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: "70%" }}></div>
                                    </div>
                                    {/* <div className="progress-percentage">70%</div> */}
                                </div>

                                <div className="footer">
                                    <Image src={plusIcon} alt="" />
                                    {/* <button id="deleteSkillBt">X</button> */}
                                </div>

                            </button>)
                        }

                    </div>

                </div>
            </div>

            {/* Skill Details */}
            <div className="subContainer" style={{ display: showSkillDetails ? "block" : "none" }}>
                <div className="skillDetails" >
                    <div className="head">
                        <span className="title">
                            <Image src={plusIcon} alt="" />
                            <h1>Python Details</h1>
                        </span>
                        <button id="closeSkillDetailsBt" onClick={() => setShowSkillDetails(false)}>X</button>
                    </div>

                    <div className="resources">
                        <span className="title">
                            <Image src={plusIcon} alt="" />
                            <h2>Resources</h2>
                        </span>

                        <div className="items">

                            <div className="item">
                                <Image src={plusIcon} alt="" />
                                <a href="#" className="url" target="_blank" >www.google.com</a>
                                <button id="deleteResourceBt">X</button>
                            </div>
                            <div className="item">
                                <Image src={plusIcon} alt="" />
                                <a href="#" className="url" target="_blank" >www.google.com</a>
                                <button id="deleteResourceBt">X</button>
                            </div>
                            <div className="item">
                                <Image src={plusIcon} alt="" />
                                <a href="#" className="url" target="_blank" >www.goodddddddddddgle.com</a>
                                <button id="deleteResourceBt">X</button>
                            </div>
                            <div className="item">
                                <Image src={plusIcon} alt="" />
                                <a href="#" className="url" target="_blank" >www.goodfsddddddddddddddgle.com</a>
                                <button id="deleteResourceBt">X</button>
                            </div>
                            <div className="item">
                                <Image src={plusIcon} alt="" />
                                <a href="#" className="url" target="_blank" >www.google.com</a>
                                <button id="deleteResourceBt">X</button>
                            </div>

                        </div>

                        <button id="addLinkBt">
                            <Image src={plusIcon} alt="" />
                            Add Link
                        </button>
                    </div>

                    <div className="topics">

                        <span className="title">
                            <Image src={plusIcon} alt="" />
                            <h2>Topics</h2>
                        </span>

                        <div className="items">

                            <div className="item">
                                <span className="head">
                                    <span>
                                        <Image src={plusIcon} alt="" />
                                        <p className="topicName">Variables</p>
                                    </span>
                                    <button id="deleteTopicBt">X</button>
                                </span>
                                <div className="topicDetails" style={{ display: "none" }}>
                                    <p>summerize</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="head">
                                    <span>
                                        <Image src={plusIcon} alt="" />
                                        <p className="topicName">Variables sadsa asdsa asd</p>
                                    </span>
                                    <button id="deleteTopicBt">X</button>
                                </span>
                                <div className="topicDetails" style={{ display: "none" }}>
                                    <p>summerize</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="head">
                                    <span>
                                        <Image src={plusIcon} alt="" />
                                        <p className="topicName">Variables</p>
                                    </span>
                                    <button id="deleteTopicBt">X</button>
                                </span>
                                <div className="topicDetails" style={{ display: "none" }}>
                                    <p>summerize</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="head">
                                    <span>
                                        <Image src={plusIcon} alt="" />
                                        <p className="topicName">Variables</p>
                                    </span>
                                    <button id="deleteTopicBt">X</button>
                                </span>
                                <div className="topicDetails" style={{ display: "none" }}>
                                    <p>summerize</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="head">
                                    <span>
                                        <Image src={plusIcon} alt="" />
                                        <p className="topicName"></p>
                                    </span>
                                    <button id="deleteTopicBt">X</button>
                                </span>
                                <div className="topicDetails" style={{ display: "none" }}>
                                    <p>summerize</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="head">
                                    <span>
                                        <Image src={plusIcon} alt="" />
                                        <p className="topicName">Variables</p>
                                    </span>
                                    <button id="deleteTopicBt">X</button>
                                </span>
                                <div className="topicDetails" style={{ display: "none" }}>
                                    <p>summerize</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="head">
                                    <span>
                                        <Image src={plusIcon} alt="" />
                                        <p className="topicName">Variables</p>
                                    </span>
                                    <button id="deleteTopicBt">X</button>
                                </span>
                                <div className="topicDetails" style={{ display: "none" }}>
                                    <p>summerize</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="head">
                                    <span>
                                        <Image src={plusIcon} alt="" />
                                        <p className="topicName">Variables</p>
                                    </span>
                                    <button id="deleteTopicBt">X</button>
                                </span>
                                <div className="topicDetails" style={{ display: "none" }}>
                                    <p>summerize</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="head">
                                    <span>
                                        <Image src={plusIcon} alt="" />
                                        <p className="topicName">Variables</p>
                                    </span>
                                    <button id="deleteTopicBt">X</button>
                                </span>
                                <div className="topicDetails" style={{ display: "none" }}>
                                    <p>summerize</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="head">
                                    <span>
                                        <Image src={plusIcon} alt="" />
                                        <p className="topicName">Variables</p>
                                    </span>
                                    <button id="deleteTopicBt">X</button>
                                </span>
                                <div className="topicDetails" style={{ display: "none" }}>
                                    <p>summerize</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="head">
                                    <span>
                                        <Image src={plusIcon} alt="" />
                                        <p className="topicName">Variables</p>
                                    </span>
                                    <button id="deleteTopicBt">X</button>
                                </span>
                                <div className="topicDetails" style={{ display: "none" }}>
                                    <p>summerize</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="head">
                                    <span>
                                        <Image src={plusIcon} alt="" />
                                        <p className="topicName">Variables</p>
                                    </span>
                                    <button id="deleteTopicBt">X</button>
                                </span>
                                <div className="topicDetails" style={{ display: "none" }}>
                                    <p>summerize</p>
                                </div>
                            </div>

                        </div>

                        <button id="addTopicBt">
                            <Image src={plusIcon} alt="" />
                            Add Topic
                        </button>
                    </div>
                </div>
            </div>

        </section>
        <Chatbot />
    </>
}





















































































