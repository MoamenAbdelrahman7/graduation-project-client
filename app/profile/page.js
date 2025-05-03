"use client"
import "./style.css"
import Image from "next/image"
import photo from "@/public/images/userPhoto.png";
import penIcon from "@/public/images/pen.png";
import plusIcon from "@/public/images/plus.png";

import emailIcon from "@/public/emojis/email.png";
import phoneIcon from "@/public/emojis/phone.png";
import websiteIcon from "@/public/emojis/website.png";
import linkedinIcon from "@/public/emojis/linkedin.png";

import saveIcon from "@/public/emojis/save.png";
import { useState } from "react";
import NavBar from "@/components/Navbar";
import Chatbot from "@/components/chatbot";

export default function Profile() {
    const defaultData = {
        name: "moamen",
        email: "maoemnfdsfd",
        about: "asdjhajdhskjadhksj"

    }

    const [updatedData, setUpdatedData] = useState(defaultData);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    return <>
        <NavBar />
        <section className="container">
            <div className="profileCover">
                <Image src={photo} alt="user photo" />
            </div>

            <div className="subContainer">
                <div className="left">
                    <div className="infoCard">
                        <h1 className="name">Moamen Abdelrahman</h1>
                        <h2 className="jobTitle">Front-end Developer</h2>
                        <div className="follow-row">
                            <span className="followers">
                                <h3>1.2K</h3>
                                <small>FOLLOWERS</small>
                            </span>
                            <span className="following">
                                <h3>347</h3>
                                <small>FOLLOWING</small>
                            </span>
                            <span className="projects">
                                <h3>89</h3>
                                <small>PROJECTS</small>
                            </span>
                        </div>

                        <button id="editProfileBt" onClick={() => setShowUpdateForm(!showUpdateForm)}>
                            <i><Image src={penIcon} alt="pen icon" /></i>
                            <small>Edit Profile</small>
                        </button>

                    </div>

                    <div className="skillsCard">
                        <div className="head">
                            <h1>Skills & Expertise</h1>
                            <button id="addSkillBt">
                                <i><Image src={plusIcon} alt="plus icon" /></i>
                                Add
                            </button>
                        </div>
                        <div className="items">
                            <p className="item">Web developer</p>
                            <p className="item">UI/UX Design</p>
                            <p className="item">Bug Bounty Hunter</p>
                            <p className="item">UI/UX Design</p>
                            <p className="item">UI/UX Design</p>
                        </div>
                    </div>

                    <div className="contactInfoCard">
                        <h1>Contact Information</h1>
                        <div className="items">
                            <div className="item">
                                <Image src={emailIcon} alt="email icon" />
                                <span>
                                    <small>Email</small>
                                    <p><a href={`mailto: moamen7a@gmail.com`}>moamen7a@gmail.com</a></p>
                                </span>
                            </div>

                            <div className="item">
                                <Image src={phoneIcon} alt="phone icon" />
                                <span>
                                    <small>Phone</small>
                                    <p>+2 01060095217</p>
                                </span>
                            </div>

                            <div className="item">
                                <Image src={websiteIcon} alt="website icon" />
                                <span>
                                    <small>Website</small>
                                    <p><a href={`example.com`}>example.com</a></p>
                                </span>
                            </div>

                            <div className="item">
                                <Image src={linkedinIcon} alt="linkedin icon" />
                                <span>
                                    <small>LinkedIn</small>
                                    <p><a href={`linkedin.com/in/moamen`}>linkedin.com/in/moamen</a></p>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="aboutCard" style={{ display: showUpdateForm ? "none" : "block" }}>
                        <span className="head">
                            <h1>About Me</h1>
                            {/* <button id="editAbout">
                                <i><Image src={penIcon} alt="pen icon" /></i>
                                Edit
                            </button> */}
                        </span>

                        <p className="about" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, voluptatibus magni tempora provident nisi labore praesentium soluta pariatur ea illum iusto corrupti! Minus expedita earum, consectetur non soluta facilis quam!
                            Reprehenderit, doloremque explicabo. Doloribus, voluptatum! Atque, assumenda possimus voluptas ipsum natus omnis, modi quasi magnam soluta, cum fuga rem repudiandae quae ea maxime laudantium at illo non sed ab quaerat!
                            Dolor fuga sequi expedita, facilis sapiente quaerat quis nulla quas nobis beatae iusto! Reiciendis vitae, qui sit placeat eos delectus? Atque dolore ea autem cupiditate molestias quas. Facilis, vitae dolore.
                            Quos, corrupti! Accusamus commodi animi quam temporibus alias saepe voluptatem! Eveniet dignissimos nam magni dolorem dolore laborum, sit in illo possimus vero fugiat veritatis adipisci debitis ad odio ea ut.
                            Quo nulla nostrum quod, commodi perferendis, odio quam soluta voluptas nisi illum laudantium non ipsa atque eos numquam tempore assumenda totam. Non ea quasi nesciunt fuga exercitationem mollitia facilis quia.
                            Mollitia libero iste quidem. Distinctio voluptate sequi totam consectetur soluta impedit adipisci debitis ea, recusandae beatae esse. Et tenetur accusantium, at beatae maiores esse tempore itaque quidem odio atque temporibus.
                            Ullam distinctio esse quae suscipit ipsum consequatur totam, laborum ratione consectetur molestiae alias nisi magnam ipsa. Laboriosam quaerat quo, id amet facilis ipsum odit, possimus eveniet dolores alias, fugit perferendis.
                        </p>
                    </div>


                    <div id="updateForm" style={{ display: showUpdateForm ? "block" : "none" }}>
                        <h1>Update Profile</h1>
                        <form action="#" method="POST" >
                            <fieldset className="fullName">
                                <label>Full Name</label>
                                <input type="text" name="name" defaultValue={defaultData.name} onChange={(val) => setUpdatedData({ ...updatedData, name: val })} />
                            </fieldset>

                            <fieldset className="jobTitle">
                                <label>Job Title</label>
                                <input type="text" name="jobTitle" defaultValue={defaultData.email}
                                    onChange={(val) => setUpdatedData({ ...updatedData, jobTitle: val })} />
                            </fieldset>

                            <fieldset className="about">
                                <label>About</label>
                                <textarea rows={5} cols={10} name="about" defaultValue={defaultData.about}
                                    onChange={(val) => setUpdatedData({ ...updatedData, about: val })}>

                                </textarea>
                            </fieldset>

                            <span className="formButtons">
                                <button type="button">Cancel</button>
                                <button type="submit">
                                    <Image src={saveIcon} alt="floppy desk icon" />
                                    Save Changes
                                </button>
                            </span>
                        </form>
                    </div>
                </div>
            </div>

            <Chatbot />
        </section>

    </>
}