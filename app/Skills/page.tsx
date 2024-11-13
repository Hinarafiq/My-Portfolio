export default function Skills(){
    return(
        <div className="bg-black text-white w-full h-full">
            <div className="flex justify-center items-center">
                <h1 className="font-semibold text-2xl mt-10"><u>Skills</u></h1>
            </div>
         <div className="flex flex-col md:flex-row justify-evenly pl-20 mt-10">
            <div>
                <ul> <h1 className="font-semibold">Programming Languages</h1> <br />
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>Next.js</li>
                </ul>
            </div>
            <br />
            <div>
                <ul> <h1 className="font-semibold">Soft Skills</h1> <br />
                    <li>Communication</li>
                    <li>Problem Solving</li>
                    <li>Time Management</li>
                    <li>Team Collaboration</li>
                    <li>Adaptability </li>
                </ul>
            </div>
          </div>
        </div>
    )
}
