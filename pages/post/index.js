import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api' 
const password = '6068326586475982fca0f5fd'
const Posts = () => {
    const [posts,setPosts] = useState([])
    useEffect(() => {
        axios.get(baseURL+"/post", { headers: { "app-id": password }}).then((respond)=>{
            console.log(respond)
            setPosts(respond.data.data)
        })
    },[] )
    return (
        <div style={{backgroundColor:"#ADB36E"}}>
         <h1 >Bonjour! </h1><hr></hr>
        <table style={{width:"100%",textAlign: "center",backgroundColor:"#669966",borderStyle:"double",borderWidth: "12px",borderColor:"#000000"}}>
            <td> <Link href={"/home"}><p style={{textAlign:"center"}}> ABOUT ME </p></Link> </td>
            <td> <Link href={"/gallery"}><p style={{textAlign:"center"}}> My Gallery </p></Link> </td>
            <td> <Link href={"/calgpa"}><p style={{textAlign:"center"}}> CALCULATOR GPA </p></Link> </td>
            <td> <Link href={"/contact"}><p style={{textAlign:"center"}}> CONTACT </p></Link> </td>
            <td> <Link href={"/post"}><p style={{textAlign:"center"}}> POST </p></Link> </td>
        </table>
            <h2>All Posts</h2>
            {posts.map((item)=>{
                return <div key={item.id} >
                    <h4>{"Post : "+item.text}</h4>
                    <p style={{textAlign:"center"}}>
                        <Link href={"/post/"+item.id}>
                        <img className="imgflame" src={item.image} style={{width:"70%"}}></img>
                        </Link>
                        <p style={{color:"#ff9f80"}}>{"Likes : "+item.likes}</p>  
                    </p>
                </div>
            })}
        </div>
    )
}

export default  Posts