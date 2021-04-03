import Link from 'next/link';

const Contact = () => {
    return (
        <div>
            <head>
        <title>Contact</title>
    </head>
<body>
    <p></p>
    <button><Link href='http://localhost:3000/'>Home</Link></button>
        <button><Link href='\gallery'>Gallery</Link></button>
        <button><Link href='\contact'>Contact</Link></button>
        <button><Link href='\gpa'>Gpa Calculator</Link></button>
        <button><Link href='\post'>Post</Link></button>
        <hr/>
        <h1><ins>Contact</ins></h1>
        <hr/>
        <form>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" defaultValue=""/><br/>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" defaultValue=""/><br/>    
            <label for="Email">Email:</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="Email" name="Email" defaultValue="" /><br/>
            <label for="Phone">Phone:</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="Phone" name="Phone" defaultValue=""/><br/>
            <br/><input type="radio" id="male" name="gender" value="male"/>
            <label for="male">Male</label><br/>
            <input type="radio" id="female" name="gender" value="female"/>
            <label for="female">Female</label><br/>
            <input type="radio" id="other" name="gender" value="other"/>
            <label for="other">Other</label><br/>
            <br/><input type="submit" value="Submit"/>
          </form>
          <hr/>
    
</body>
        </div>
    )
}

export default Contact