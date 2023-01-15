import React from 'react'
import "../styles/Home.css"
import html from '../assets/html5icon.png'
import css from '../assets/cssicon.png'
import javascript from '../assets/javascript.webp'
import react from '../assets/react.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongo from '../assets/mongo.png'
import sql from '../assets/mysqlicon4.jpg'
import java from '../assets/javaicon.png'
import python from "../assets/python.jpg"
import jira from "../assets/jira.png"
import qm from "../assets/qm.png"
import sumo from "../assets/sumologic.png"
import ms from "../assets/msoffice.jpg"
import TypingEffect from './TypingEffect'


const Home = () => {
  
  return (
    <div className="home">
      <div className="about">
        <div className="prompt">
          <TypingEffect />
        </div>
      </div>

      <div className="skills">
        <h1>SKILLS</h1>
        
        <ol className="list">
          <li className="item">
            <h2>FRONT END</h2>
            <ul>
              <li><img src={html} alt="HTML" /> HTML</li>
              <li><img src={css} alt="CSS" /> CSS</li>
              <li><img src={react} alt="React" /> React JS</li>
            </ul>
          </li>

          <li className="item">
            <h2>BACK END</h2>
            <ul>
              <li><img src={node} alt="Node Js" /> Node Js</li>
              <li><img src={express} alt="Express Js" /> Express Js</li>
              <li><img src={mongo} alt="Mongodb</" /> Mongodb</li>
              <li><img src={sql} alt="My SQL" /> My SQL</li>
            </ul>
          </li>

          <li className="item">
            <h2>LANGUAGES</h2>
            <ul>
              <li><img src={javascript} alt="Javascript" /> Javascript</li>
              <li><img src={java} alt="Core Java" /> Core Java</li>
              <li><img src={python} alt="Core Java" /> Python</li>
            </ul>
          </li>

          <li className="item">
            <h2>OTHER SKILLS</h2>
            <ul>
              <li><img src={jira} alt="Javascript" /> JIRA</li>
              <li><img src={sumo} alt="Core Java" /> Sumo Logic</li>
              <li><img src={qm} alt="Core Java" /> <small>Quantum Metric</small></li>
              <li><img src={ms} alt="Core Java" /> MS Office</li>
            </ul>
          </li>

        </ol>
      </div>
    </div>
  )
}

export default Home