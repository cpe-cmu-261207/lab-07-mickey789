import {useEffect} from 'react';
import axios from 'axios'
import Link from 'next/link'

const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  return (
      <div>
        <p></p>
        <button><Link href='http://localhost:3000/'>Home</Link></button>
        <button><Link href='\gallery'>Gallery</Link></button>
        <button><Link href='\contact'>Contact</Link></button>
        <button><Link href='\gpa'>Gpa Calculator</Link></button>
        <button><Link href='\post'>Post</Link></button>
        <hr/>
        <h1><ins>Personal Profile</ins></h1>
        <img src={profileImage} alt='' id='profileImage' width = {500} height = {350}/>
        <p/>
        <br/><b>Autcharayu pornwatthananon</b>
        <br/><b>Student</b>
        <hr/>
        <p/>
        <b>Name</b> : นายอัชรายุ พรวัฒนานนท์
          <br/><b>Age</b> : 20 ปี
          <br/><b>Gender</b> : ชาย
          <br/> <b>Skill</b> : -
          <br/> <b>Hobbies</b> : นอน เล่นกีฬา เล่นเกม
          <br/> <b>Education</b> : Computer Engineering, Faculty of Engineering, Chaing Mai University.
          <br/> <b>Email</b> : autcharayu_porn@cmu.ac.th
          <hr />
      </div>
  )
}

export default Home