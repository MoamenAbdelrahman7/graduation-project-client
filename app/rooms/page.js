"use client"
import NavBar from "@/components/Navbar"
import "./style.css"
import Chatbot from "@/components/chatbot"
import Image from "next/image"
import image from "@/public/images/userPhoto.png"
import humanIcon from "@/public/emojis/user.png"
import { useEffect, useRef, useState } from "react"

export default function Rooms() {
    const API_URL = "https://mygraduationproject-production.up.railway.app/"
    const [currentUser, setCurrentUser] = useState(null);
    // const currentUser = {
    //     id: "68162c5d6e960a01da25c173",
    //     name: "Moamen Testing",
    //     photo: image,
    //     joinedRooms: []
    // }

    // const [recommendedRooms, setRecommendedRooms] = useState([
    //     {
    //         name: "room 1",
    //         image: image,
    //         members: [{ name: "1", photo: image }],
    //         description: "test room 1",
    //         tags: ["js", "css", "html"],
    //         messages: []
    //     },
    //     {
    //         name: "room 2",
    //         image: image,
    //         members: [{ name: "1", photo: image }, { name: "14", photo: image }, { name: "187", photo: image },],
    //         description: "test room 1",
    //         tags: ["js", "css", "html"],
    //         messages: []
    //     },
    //     {
    //         name: "room 3",
    //         image: image,
    //         members: [{ name: "1", photo: image }],
    //         description: "test room 1",
    //         tags: ["js", "css", "html"],
    //         messages: []
    //     },
    // ])
    // joined rooms
    const [recommendedRooms, setRecommendedRooms] = useState([])
    const [joinedRooms, setJoinedRooms] = useState([])
    const [showRoom, setShowRoom] = useState(false);
    const [openedRoom, setOpenedRoom] = useState({});
    const [chatMessages, setChatMessages] = useState([]);
    const [roomMembers, setRoomMembers] = useState([]);

    // Fetch user first
    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const userId = "68162c5d6e960a01da25c173"; // Hardcoded for now

                const response = await fetch(`${API_URL}users/${userId}`);
                const data = await response.json();

                if (!response.ok) {
                    console.error(`Failed to fetch user: ${data.message || response.statusText}`);
                    return null;
                }

                return data.data;
            } catch (error) {
                console.error('Error fetching user:', error);
                return null;
            }
        }

        getCurrentUser().then(user => {
            if (!user) {
                console.error("Could not fetch user data");
                return;
            }

            setCurrentUser(user);

            // Ensure joinedRooms is an array
            const userRooms = Array.isArray(user.joinedRooms) ? user.joinedRooms : [];
            setJoinedRooms(userRooms);
        });
    }, []);

    // Filter rooms when joinedRooms changes
    useEffect(() => {
        if (!currentUser) return; // Only proceed if currentUser is loaded

        const getAllRooms = async () => {
            try {
                const response = await fetch(`${API_URL}rooms/`);
                const data = await response.json();

                if (!response.ok) {
                    console.error(data.message || 'Failed to fetch rooms');
                    return [];
                }

                return data.data || [];
            } catch (error) {
                console.error('Error fetching rooms:', error);
                return [];
            }
        };

        // Only filter if joinedRooms has data
        getAllRooms().then(allRooms => {
            if (joinedRooms.length > 0) {
                const joinedRoomIds = joinedRooms.map(room => room._id?.toString());

                const recommended = allRooms.filter(room => {
                    return !joinedRoomIds.includes(room._id?.toString());
                });

                setRecommendedRooms(recommended);
            } else {
                // If no joined rooms, all rooms are recommended
                setRecommendedRooms(allRooms);
            }
        });
    }, [joinedRooms, currentUser]);

    const msgInputRef = useRef();
    const messagesRef = useRef();

    // Simplified send message function
    const sendMessage = (e) => {
        if (e.key === "Enter" || e.type === "click") {
            if (!currentUser) {
                console.error("No user logged in");
                return;
            }

            if (!openedRoom || !openedRoom._id) {
                console.error("No room is currently open");
                return;
            }

            const message = msgInputRef.current.value;
            if (!message.trim()) return; // Don't send empty messages

            msgInputRef.current.value = "";

            // Create message data
            const newMessage = {
                message,
                user: currentUser,
                timestamp: new Date().toISOString()
            };

            // Update chat messages state instead of modifying openedRoom
            setChatMessages(prevMessages => [...prevMessages, newMessage]);

            // Scroll to bottom of messages
            setTimeout(() => {
                if (messagesRef.current?.parentElement) {
                    messagesRef.current.parentElement.scrollTo({
                        top: messagesRef.current.parentElement.scrollHeight,
                        behavior: "auto"
                    });
                }
            }, 0);
        }
    }

    const openRoom = (roomIndex) => {
        if (!joinedRooms[roomIndex]) {
            console.error("Room not found in joined rooms");
            return;
        }

        const room = joinedRooms[roomIndex];

        // Make sure we have a complete room object with all necessary properties
        const completeRoom = {
            ...room,
            _id: room._id,
            title: room.title || room.name || "Chat Room",
            members: room.members || []
        };

        // Update states separately
        setOpenedRoom(completeRoom);
        setChatMessages(room.messages || []);
        setRoomMembers(completeRoom.members);
        setShowRoom(true);
    }

    const joinRoom = async (roomIndex) => {
        if (!currentUser) {
            console.error("No current user found");
            return;
        }

        const newRoom = recommendedRooms[roomIndex];
        if (!newRoom || !newRoom._id) {
            console.error("Invalid room selected");
            return;
        }

        try {
            // First show optimistic UI update
            const updatedJoinedRooms = [...joinedRooms, newRoom];
            setJoinedRooms(updatedJoinedRooms);
            setRecommendedRooms(prev => prev.filter(room => room._id !== newRoom._id));

            // Then make the actual API call
            const response = await fetch(`${API_URL}rooms/members/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    memberId: currentUser._id,
                    roomId: newRoom._id
                })
            });

            const data = await response.json();

            if (!response.ok) {
                console.error(`Failed to join room: ${data.message || response.statusText}`);
                // Revert optimistic update on failure
                setJoinedRooms(joinedRooms);
                setRecommendedRooms(prev => [...prev, newRoom]);
                return;
            }

            // If the server returned updated joinedRooms, use that
            if (data.member && data.member.joinedRooms) {
                setJoinedRooms(data.member.joinedRooms);
            }

        } catch (error) {
            console.error('Error joining room:', error);
            // Revert optimistic update on error
            setJoinedRooms(joinedRooms);
            setRecommendedRooms(prev => [...prev, newRoom]);
        }
    }

    return <>
        <NavBar />
        <div className="container">

            <div className="recommended" style={{ display: showRoom ? "none" : "flex" }}>
                {recommendedRooms.length === 0 && (
                    <div className="noRooms">
                        <p>No recommended rooms available. You've joined all available rooms.</p>
                    </div>
                )}

                <div className="items">
                    {
                        recommendedRooms.map((room, index) => (
                            <div className="item" key={room._id || index}>
                                <span className="head">
                                    <span className="title">
                                        <Image src={room.image || image} alt="" />
                                        <h1>{room.title || room.name || "Unnamed Room"}</h1>
                                    </span>
                                    <small className="membersCount">
                                        {room.members?.length || 0}
                                        <Image src={humanIcon} alt="human icon" />
                                    </small>
                                </span>
                                <p className="description">{room.description || "No description available"}</p>
                                <p className="roomId">ID: {room._id}</p>
                                <span className="footer">
                                    <span className="tags">
                                        {room.tags && room.tags.length > 0 ? (
                                            <>
                                                <small>{room.tags[0]}</small>
                                                {room.tags[1] && <small>{room.tags[1]}</small>}
                                            </>
                                        ) : (
                                            <small>No tags</small>
                                        )}
                                    </span>
                                    <button
                                        id="joinRoomBt"
                                        onClick={() => joinRoom(index)}
                                    >
                                        Join Room
                                    </button>
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className="room" style={{ display: showRoom ? "grid" : "none" }}>
                <div className="membersList">
                    <h1>Members ({roomMembers.length || 0})</h1>
                    <div className="members">
                        {
                            roomMembers.map((member, index) => (
                                <span className="member" key={member._id || index}>
                                    <Image src={member.photo || image} alt="user photo" />
                                    <h3>{member.name || "Unknown User"}</h3>
                                </span>
                            ))
                        }
                    </div>
                </div>

                <div className="chat">
                    <button onClick={() => setShowRoom(false)} id="closeRoomBt">X</button>
                    <div className="head">
                        <Image src={openedRoom.image || image} alt="chat image cover" />
                        <span>
                            <h2>{openedRoom.title || openedRoom.name || "Chat Room"}</h2>
                            <span className="membersOverview">
                                {roomMembers.slice(0, 3).map((member, index) => (
                                    <small key={member._id || index}>
                                        {member.name || "Unknown"}{index < Math.min(roomMembers.length, 3) - 1 ? ", " : ""}
                                    </small>
                                ))}
                                {roomMembers.length > 3 && <small> +{roomMembers.length - 3} more</small>}
                            </span>
                        </span>
                    </div>

                    <div className="messages" ref={messagesRef}>
                        {chatMessages.map((item, index) => (
                            <div className={item.user?.name === currentUser?.name ? "messageItem myMsg" : "messageItem"} key={index}>
                                <Image src={image} alt="member photo" />
                                <span>
                                    <small className="memberName">{item.user?.name || "Unknown"}</small>
                                    <p className="messageContent">
                                        {item.message}
                                    </p>
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="footer">
                        <input placeholder="Write a message" id="messageInput" ref={msgInputRef} onKeyDown={sendMessage} />
                        <button id="sendMessageBt" onClick={sendMessage}>
                            Send
                        </button>
                    </div>
                </div>
            </div>

            <aside className="joinedRooms">
                <h1>Joined Rooms</h1>
                <div className="items">
                    {
                        joinedRooms.map((room, index) => <button className="item" key={room._id} onClick={() => openRoom(index)}>
                            <Image src={image} alt="room cover" />
                            <span>
                                <p className="roomName">{room.title}</p>
                            </span>
                            <small className="membersCount">
                                {room.members.length}
                                <Image src={humanIcon} alt="human icon" />
                            </small>
                        </button>
                            // <hr />

                        )}
                </div>
            </aside>



        </div>
        <Chatbot />
    </>
}


















