"use client"
import "./style.css"
import Image from "next/image"
import noteIcon from "@/public/emojis/notes.png"
import NavBar from "@/components/Navbar"
import Chatbot from "@/components/chatbot"
import { use, useRef, useState } from "react"

export default function Notes() {
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: "new note 1",
            items: [{ title: "test 1", url: "https://www.github.com" },
            { title: "facebook", url: "https://www.facebook.com" },
            { title: "test2", url: "https://www.google.com" },
            ]
        }
    ])

    const [noteItems, setNoteItems] = useState([]);
    const [openedNote, setOpenedNote] = useState(null);

    const itemsRef = useRef()
    const titleInputRef = useRef()
    const urlInputRef = useRef()

    const addItem = (e) => {
        const title = titleInputRef.current.value.trim();
        const url = urlInputRef.current.value.trim();
        if (!url) return
        if (e.key === "Enter" || e.type === "click") {
            const newItem = { title: title, url: !url.startsWith("https://") ? `https://${url}` : url }
            const updatedItems = [...noteItems, newItem]
            setNoteItems(updatedItems)
            setNotes(prev => prev.map(item => {
                if (item.id === openedNote.id) {
                    return { ...item, items: updatedItems }
                }
                return item
            }))
            titleInputRef.current.value = ""
            urlInputRef.current.value = ""

            setTimeout(() => itemsRef.current.scrollTo({
                top: itemsRef.current.scrollHeight,
                behavior: "auto"
            }), 30)
        }

    }

    const noteInputRef = useRef()
    const notesListRef = useRef()

    const addNote = (e) => {
        const title = noteInputRef.current.value.trim()
        const newNote = { id: Math.random(), title: title, items: [] }
        if (!title) return
        if (e.key === "Enter" || e.type === "click") {
            setNotes(prev => [...prev, newNote])
            noteInputRef.current.value = ""
            setOpenedNote(newNote)
            setNoteItems([])
            setTimeout(() => notesListRef.current.scrollTo({
                top: notesListRef.current.scrollHeight,
                behavior: "auto"
            }), 0)
        }
    }

    // const deleteNote = (id) => {
    //     setNotes(prev => prev.filter(note => note.id !== id))
    // }

    return <>
        <NavBar />
        <section className="container">

            <aside className="notesList" ref={notesListRef}>
                <h1>Notes</h1>
                <div className="notes">
                    {
                        notes.map((note, index) => <div className="note" key={index}>
                            <button onClick={() => { setNoteItems(note.items); setOpenedNote(note) }}>
                                <Image src={noteIcon} alt="note icon" />
                                <h2 className="title">{note.title}</h2>
                            </button>
                            <button id="deleteNoteBt">X</button>
                        </div>)
                    }

                </div>

                <div className="createNote">
                    <input id="noteTileInput" placeholder="Enter note's title..." ref={noteInputRef} onKeyDown={addNote} />
                    <button id="addNoteBt" onClick={addNote}>Create</button>
                </div>
            </aside>

            <div className="noteContent" style={{ visibility: !openedNote ? "hidden" : "visible" }}>

                <div className="items" ref={itemsRef}>
                    {
                        noteItems.map((item, index) => <div className="item" key={index}>
                            <img
                                src={`https://api.iconify.design/mdi:${item.url.replace(/^https?:\/\/(?:www\.)?([^\/]+)/, '$1').split('.')[0]}.svg`}
                                alt="icon"
                                width={40}
                                height={40}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/emojis/email.png";
                                }}
                            />
                            <a href={`${item.url}`} target="_blank">{!item.title ? item.url : item.title}</a>
                        </div>

                        )}


                </div>

                <div className="addNoteItem">
                    <input id="titleInput" placeholder="Enter a title..." ref={titleInputRef} />
                    <input id="urlInput" placeholder="Enter a url..." ref={urlInputRef} onKeyDown={addItem} />
                    <button id="addItemBt" onClick={addItem}>Add</button>
                </div>
            </div>
        </section>
        {/* <Chatbot /> */}
    </>
}
