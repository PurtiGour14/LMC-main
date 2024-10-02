import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

export default function NavBar() {
    
  return (
    <div id ="MainNav">
        <img src="https://w7.pngwing.com/pngs/826/933/png-transparent-learning-management-system-education-lms-thumbnail.png" alt="" />
      
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/Courses"}>Courses</Link>
            </li>
            <li>
                <Link to={"/Practice"}>Practice</Link>
            </li>
        </ul>
    </div>
  )
}
