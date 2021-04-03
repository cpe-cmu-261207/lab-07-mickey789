import Link from 'next/link';

const Gpa = () => {
    return (
    <div>
        <head>
        <title>Calculate GPA</title>
    </head>
    <body>
        <p></p>
        <button><Link href='http://localhost:3000/'>Home</Link></button>
        <button><Link href='\gallery'>Gallery</Link></button>
        <button><Link href='\contact'>Contact</Link></button>
        <button><Link href='\gpa'>Gpa Calculator</Link></button>
        <button><Link href='\post'>Post</Link></button>
        <hr/>
        <h1 id = "header">GPA Calculator</h1>
        <hr/>
            
        <form id = "subject">
            <label for="Subject"><b>Subject:</b></label><input type="text" placeholder="Input your subject here." id = "subject-name"/>
            <label for="Term"><b>Term:</b></label><select id="subject-term" name="term">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            <label for="Grade"><b>Grade:</b></label>
            <select id="grade" name="grade">
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="F">F</option>
              </select>
            <button type="submit" id="submit">Submit</button>
            <button type="submit" id="reset">Reset</button>
            <button type="submit" id="cal-grade">Calculate</button>
        </form>
        <br/>
        <hr/>
        <form id = "term1">
            <fieldset>
                <h1 id = "header"><ins>ปีการศึกษาที่ 1</ins></h1>
                <table>
                    <td>
                        <ol id = "subject-term1">
                            
                        </ol>
                    </td>
                </table>
            </fieldset>
            <hr/>
            <label for="Grade-term1" id="label-align"><b>เกรดที่ได้รับ : <label id="label-1"></label></b></label>
        </form>
        <hr/>
        <br/>
        <form id = "term2">
            <fieldset>
                <h1 id = "header"><ins>ปีการศึกษาที่ 2</ins></h1>
                <table>
                    <td>
                        <ol id = "subject-term2">
                            
                        </ol>
                    </td>
                </table>
            </fieldset>
            <hr/>
            <label for="Grade-term2" id="label-align"><b>เกรดที่ได้รับ : <label id="label-2"></label></b></label>
            <br/>
            <br/>
            <label for="Grade-term3" id="label-align"><b>เกรดเฉลี่ยที่ได้รับ : <label id="label-3"></label></b></label>
        </form>
        <hr/>
        </body>
    </div>
    )
}

export default Gpa