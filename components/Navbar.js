"use client"
import Link from "next/link"
import photo from "@/public/images/userPhoto.png"
import notificationsIcon from "@/public/emojis/notifications.png"
import notificationsFilledIcon from "@/public/emojis/notifications-filled.png"
import Image from "next/image"
import { useState } from "react"

export default function NavBar() {
    const [showNotifications, setShowNotifications] = useState(false);
    return <>
        <nav className="navBar">
            <div className="logo">
                <Link href="/" ><span>&lt;</span>/&gt;</Link>
            </div>

            <div className="nav-items">

                <Link href="/projects" >Projects</Link>
                <Link href="/skills" >Skills</Link>
                <Link href="/sugessions" >Suggestions</Link>
                <Link href="/rooms" >Rooms</Link>
                <Link href="/terminal" >Terminal</Link>
            </div>

            <div className="icons">
                <button className="notifications" onClick={() => setShowNotifications(!showNotifications)}>
                    <Image src={notificationsIcon} alt="notifications icon" />
                </button>
                <div className="avatar">
                    <Link href="/profile" ><Image src={photo} alt="" /></Link>
                </div>
            </div>

            <div id="notifications-list" style={{ display: showNotifications ? "block" : "none" }}>
                <h2>Notifications</h2>
                <span className="items">

                    <span className="item">
                        <span className="photo"><Image src={photo} alt="" fill /></span>
                        <p className="content">Moamen liked your post mm mm mm mm</p>
                    </span>
                    <hr />
                    <span className="item">
                        <span className="photo"><Image src={photo} alt="" fill /></span>
                        <p className="content">Moamen liked your post mm mm mm mm</p>
                    </span>
                    <hr />
                    <span className="item">
                        <span className="photo"><Image src={photo} alt="" fill /></span>
                        <p className="content">Moamen liked your post mm mm mm mm</p>
                    </span>
                    <hr />
                    <span className="item">
                        <span className="photo"><Image src={photo} alt="" fill /></span>
                        <p className="content">Moamen liked your post mm mm mm mm</p>
                    </span>
                    <hr />
                    <span className="item">
                        <span className="photo"><Image src={photo} alt="" fill /></span>
                        <p className="content">Moamen liked your post mm mm mm mm</p>
                    </span>
                    <hr />
                    <span className="item">
                        <span className="photo"><Image src={photo} alt="" fill /></span>
                        <p className="content">Moamen liked your post mm mm mm mm</p>
                    </span>
                    <hr />
                    <span className="item">
                        <span className="photo"><Image src={photo} alt="" fill /></span>
                        <p className="content">Moamen liked your post mm mm mm mm</p>
                    </span>
                    <hr />
                </span>
            </div>
        </nav>
    </>
}