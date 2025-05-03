"use client"
import { useRef, useState } from "react"
import "./style.css"
import NavBar from "@/components/Navbar";
import Chatbot from "@/components/chatbot";

export default function Terminal() {
    const commandsRef = useRef();
    const commandInputRef = useRef();
    const terminalRef = useRef();

    const [commands, setCommands] = useState([{
        msg: "Welcome to the Advanced Terminal. Type help for a list of commands....",
        type: "command"
    },
    {
        msg: "Welcome to the Advanced Terminal. Type help for a list of commands....",
        type: "response"
    }
    ]);
    const showCommand = (msg) => {
        setCommands(prev => [...prev, { msg: msg, type: "command" }])
        commandInputRef.current.value = "";


    }

    const showResponse = (response) => {
        setTimeout(() => setCommands(prev => [...prev, { msg: response, type: "responses" }])
            , 100)
    }

    const commandshandler = [
        {
            command: "create",
            arguments: "skillName(str) ",
            description: "create a new skill",
            handler: (name) => {
                return `a new skill created with the name: ${name}`
            }
        },
        {
            command: "list_skills",
            arguments: "",
            description: "show skills",
            handler: (name) => {
                return `Your skills: 
1- skill 1 
2- skill 2`
            }
        },
        {
            command: "clear",
            arguments: "",
            description: "clear the terminal",
            handler: (name) => {
                setCommands([])
                return
            }
        },
        //   {
        //     command: "help",
        //     description: "Shows all available commands.",
        //     handler: (name) => {
        //         return
        //     }
        // },
    ]

    const commitCommand = (event) => {
        if (event.key === "Enter" && event.target.value) {
            const command = commandInputRef.current.value;
            const commandArgs = command.split(" ")
            showCommand(command)
            for (let cm of commandshandler) {
                if (commandArgs[0] === cm.command) {
                    showResponse(cm.handler(commandArgs[1]))
                    return
                } else if (commandArgs[0] === "clear" && cm.command === "clear") {
                    cm.handler("")
                    return
                } else if (commandArgs[0] === "help") {
                    showResponse("Available commands:")
                    commandshandler.forEach(el => showResponse(` - ${el.command} ${el.arguments} : ${el.description}`))
                    return
                }
            }
            showResponse(`Command '${commandArgs[0]}' is not defiend`)
            setTimeout(() => {
                terminalRef.current.scrollTo({
                    top: terminalRef.current.scrollHeight,
                    behavior: "auto"
                });
            }, 120);

        }
    }

    return <>
        <NavBar />
        <section className="container">
            <div className="terminal" ref={terminalRef}>
                <div className="head">
                    <div className="icons">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p className="title">dev@community:~</p>
                </div>

                <div className="body">
                    <div className="commands" ref={commandsRef}>
                        {
                            commands.map((item, index) => <div className="command" key={index}>
                                <small style={{ display: item.type !== "command" && "none" }}>$</small>
                                <p>{item.msg}</p>
                            </div>)
                        }
                    </div>
                </div>
                <div className="footer">
                    <small>$</small>
                    <input id="commandInput" ref={commandInputRef} onKeyDown={commitCommand} required placeholder="Enter command..." spellCheck="false" autoComplete="off" />

                </div>
            </div>
        </section>
        <Chatbot />
    </>
}






























