"use client";
import { useEffect, useRef, useState } from "react";
import NavBar from "@/components/Navbar"
import Image from "next/image"
import projectImage from "@/public/images/project.png"
import skillImage from "@/public/images/skill.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

// import images
import photo from "@/public/images/userPhoto.png"
import heartIcon from "@/public/emojis/heart.png"
import heartFilledIcon from "@/public/emojis/heart-filled.png"

import commentIcon from "@/public/emojis/comment.png"
import commentFilledIcon from "@/public/emojis/comment-filled.png"
import commentOutlinedIcon from "@/public/emojis/comment-outlined.png"

import repostIcon from "@/public/emojis/repost.png"
import repostIconColored from "@/public/emojis/repost-colored.png"

import bookmarkIcon from "@/public/emojis/bookmark.png"
import bookmarkFilledBlackIcon from "@/public/emojis/bookmark-filled-black.png"
import bookmarkFilledColoredIcon from "@/public/emojis/bookmark-filled-colored.png"
import Chatbot from "@/components/chatbot";

import Link from "next/link";

export default function Home() {
  const API_URL = "https://mygraduationproject-production.up.railway.app/"
  const [user, setUser] = useState(null)
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`${API_URL}users/68162c5d6e960a01da25c173`)
      const data = await response.json()
      console.log(data)
      return data.data
    }
    getUser().then(data => setUser(data))
  }, [])
  // const user = {
  //   name: "Moamen abdelrahman abdallah"
  // }
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [posts, setPosts] = useState([]);
  // const [posts, setPosts] = useState([
  //   {
  //     user: {
  //       name: "Moamen abdelrahman abdallah",
  //       photo: photo
  //     },
  //     createdAt: "30 May,2025",
  //     content: "Hello World, This is my first post in this community, i am very happy to join to your team.",
  //     likedUsers: [
  //       "user 1",
  //       "user 2",
  //       "user 3",
  //       "user 4",
  //       "user 5",
  //       "Moamen abdelrahman abdallah"
  //     ]
  //   }
  // ]);

  useEffect(() => {
    const getAllPosts = async () => {
      try {

        const response = await fetch(`${API_URL}posts/`);
        const data = await response.json();

        if (!response.ok) {
          console.error(`Failed to fetch posts: ${data.message || response.statusText}`);
          return null;
        }

        return data.data;
      } catch (error) {
        console.error('Error fetching posts:', error);
        return null;
      }
    }
    getAllPosts().then(data => setPosts(data))
  }, [])

  const recentProjects = [
    {
      title: "project 1",
      photo: projectImage,
      description: "this is test description for my recent projects section"
    },
    {
      title: "project 2",
      photo: projectImage,
      description: "this is test description for my recent projects section"
    },
    {
      title: "project 3",
      photo: projectImage,
      description: "this is test description for my recent projects section"
    },
  ];

  const skills = [
    {
      name: "css",
      progress: 30,
      logo: skillImage
    },
    {
      name: "react.js",
      progress: 100,
      logo: skillImage
    },
    {
      name: "Angular.js",
      progress: 70,
      logo: skillImage
    },

  ]

  const topRanked = [
    {
      name: "Mohamed test",
      skills: ["Node.js", "java"],
      photo: photo
    },
    {
      name: "Omar test",
      skills: ["Angular.js", "python"],
      photo: photo
    },
    {
      name: "Mahmoud test",
      skills: ["Vue.js", "java"],
      photo: photo
    },

  ]

  const sugestions = [
    {
      name: "Mohamed test",
      skills: ["Node.js", "java"],
      photo: photo
    },
    {
      name: "Mohamed test",
      skills: ["Node.js", "java"],
      photo: photo
    },
    {
      name: "Mohamed test",
      skills: ["Node.js", "java"],
      photo: photo
    },
  ]

  const postInputRef = useRef();
  const publishPost = () => {
    const date = new Date();

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }); // 'May'
    const year = date.getFullYear();

    const formattedDate = `${day} ${month},${year}`;

    const content = postInputRef.current.value
    if (content.length === 0) { return }

    // const newPost = {
    //   user: {
    //     name: "Moamen abdelrahman abdallah",
    //     photo: photo
    //   },
    //   createdAt: formattedDate,
    //   content: content,
    //   likedUsers: []
    // }
    const newPost = {
      user: {
        name: "Moamen abdelrahman abdallah",
        photo: photo
      },
      createdAt: formattedDate,
      content: content,
      likedUsers: []
    }

    const createPost = async () => {
      try {

        const response = await fetch(`${API_URL}posts/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ ...newPost, _id: user._id })
        });
        const data = await response.json();

        if (!response.ok) {
          console.error(`Failed to fetch posts: ${data.message || response.statusText}`);
          return null;
        }

        return data.data;
      } catch (error) {
        console.error('Error fetching posts:', error);
        return null;
      }
    }
    createPost().then(data => setPosts(data))

    setPosts([newPost, ...posts])
    postInputRef.current.value = ""
  }

  const likePost = (postIndex) => {
    setPosts(prev => prev.map((el, index) => {
      if (index !== postIndex) return el; // Not the post we want to update

      const isLiked = el.likedUsers?.includes(user.name);
      const updatedLikedUsers = isLiked
        ? el.likedUsers?.filter(name => name !== user.name) // remove user
        : [...el.likedUsers, user.name]; // add user

      return { ...el, likedUsers: updatedLikedUsers };
    }));
  };

  return <>
    <NavBar />
    <main>
      <aside className="left-side">

        <div className="recent-projects">
          <h1>Recent Projects</h1>
          <div className="items">

            {recentProjects.map((project, index) => <div className="item" key={index}>
              <Image src={project.photo} alt="" />
              <div className="info">
                <p>{project.title}</p>
                <small>{project.description}</small>

              </div>
            </div>)}

          </div>
        </div>
        <div className="top-skills">
          <h1>Top Skills</h1>
          <div className="items">

            {skills.map((skill, index) => <div className="item" key={index}>
              <div className="info">
                <div className="skill-container">
                  <div className="skill-label">
                    <Image src={skill.logo} alt="" />
                    <p>{skill.name}</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${skill.progress}%` }}></div>
                    </div>
                    <div className="progress-percentage">{skill.progress}%</div>
                  </div>
                </div>

              </div>
            </div>)}


          </div>
        </div>

      </aside>

      <section className="middle">
        <div className="community">
          <h1>Community</h1>
          <div className="postInput">
            <textarea rows={8} cols={10} placeholder="Share Your Status" ref={postInputRef}></textarea>
            <button type="button" className="publishBt" onClick={() => publishPost()}>Publish</button>
          </div>

          <div className="posts">
            <h1>Posts</h1>
            <div className="items">

              {posts.map((post, index) => <div className="item" key={index}>
                <span className="head">
                  <span className="userAvatar">
                    <Image src={photo} alt="" />
                    <p>{post.user.name}</p>
                  </span>
                  <span className="date">{post.createdAt}</span>
                </span>
                <div className="content">
                  {post.content}
                </div>
                <div className="interactivityBar">
                  <button id="LoveBt" aria-label="Love"
                    onClick={() => likePost(index)} >
                    <Image src={post.likedUsers?.includes(user.name) ? heartFilledIcon : heartIcon} alt="love icon" />
                    Love
                  </button>
                  <button id="commentBt" aria-label="Comment" onClick={() => setShowComments(true)}>
                    <Image src={commentIcon} alt="comment icon" />
                    Comment
                  </button>
                  <button id="repostBt" aria-label="Repost">
                    <Image src={repostIcon} alt="reposst icon" />
                    Repost
                  </button>
                  <button id="saveBt" aria-label="Save">
                    <Image src={bookmarkIcon} alt="bookmark icon" />
                    Save
                  </button>
                </div>
                <div className="comments">

                  <div className="comment">
                    <Image src={photo} alt="" />
                    <span className="commentBody">
                      <h3>Moamen asd</h3>
                      <p>
                        this is a test comment
                      </p>
                      <small>30 May, 2025</small>
                    </span>
                  </div>

                </div>



              </div>)}

            </div>
          </div>

        </div>
      </section>


      <aside className="right-side">

        <div className="top-ranked">
          <h1>Top Ranked</h1>
          <div className="items">

            {topRanked.map((user, index) => <div className="item" key={index}>
              <Link href={`/visit?userId=${index}`}>
                <Image src={user.photo} alt="" />
              </Link>

              <div className="info">
                <p>{user.name}</p>
                <span className="skill-tags"><small>{user.skills[0]}</small>, <small>{user.skills[1]}</small></span>
              </div>
              <button className="connectBt" ><FontAwesomeIcon icon={faUserPlus} /></button>

              {/* <button type="button" className="connectBt">Connect</button> */}
            </div>)}

          </div>
        </div>

        <div className="suggestions">
          <h1>Build a Connections Network</h1>

          <div className="items">

            {sugestions.map((user, index) => <div className="item" key={index}>
              <Image src={user.photo} alt="" />

              <div className="info">
                <p>{user.name}</p>
                <span className="skill-tags"><small>{user.skills[0]}</small>, <small>{user.skills[1]}</small></span>
              </div>
              <button className="connectBt" ><FontAwesomeIcon icon={faUserPlus} /></button>

            </div>)}

          </div>
        </div>

      </aside>

      {/* Comment Details */}
      <div className="subContainer" style={{ display: showComments ? "block" : "none" }}>
        <div className="commentDetails">
          <button id="closeCommentsBt" onClick={() => setShowComments(false)}>X</button>
          <div className="comments">

            <div className="comment">
              <Image src={photo} alt="" />
              <span className="commentBody">
                <h3>Moamen asd</h3>
                <p>
                  this is a test comment
                </p>
                <small>30 May, 2025</small>
              </span>
            </div>

            <div className="comment">
              <Image src={photo} alt="" />
              <span className="commentBody">
                <h3>Moamen asd</h3>
                <p>
                  this is a test comment
                </p>
                <small>30 May, 2025</small>
              </span>
            </div>
            <div className="comment">
              <Image src={photo} alt="" />
              <span className="commentBody">
                <h3>Moamen asd</h3>
                <p>
                  this is a test comment
                </p>
                <small>30 May, 2025</small>
              </span>
            </div>
            <div className="comment">
              <Image src={photo} alt="" />
              <span className="commentBody">
                <h3>Moamen asd</h3>
                <p>
                  this is a test comment
                </p>
                <small>30 May, 2025</small>
              </span>
            </div>

          </div>

          <span className="commentInput">
            <input placeholder="Write a public comment..." />
            <button className="commentBt">Comment</button>
          </span>

        </div>
      </div>


      <Chatbot />
    </main>
  </>
}
