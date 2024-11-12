import Link from "next/link"
export default function Contact (){
    return (
        <div className="bg-black text-white w-full h-96 ">
                <div className="flex justify-center items-center">
                   <h1 className="font-semibold text-2xl mt-10"><u>Contact me</u></h1> 
                   <br />
                </div>

                <div className="flex justify-center items-center">   
                  <h1 className="font-semibold text-2xl mt-3"><u>On the following social media</u></h1>
                </div>
            
            <div className="mt-8">

                <div className="flex justify-center items-center ">
                    <ul>
                        <li>LinkedIn :<Link href="https://www.linkedin.com/in/hina-muhammad-rafiq-053b0a2b4" target="_blank"><b> Hina Muhammad Rafiq</b></Link></li>
                    </ul> 
                </div>

                <div className="flex justify-center items-center"> 
                    <ul>
                        <li>Github :<Link href="https://github.com/Hinarafiq" target="_blank"><b> Hinarafiq</b></Link></li>
                    </ul> 
                </div>

                <div className="flex justify-center items-center">
                    <ul>
                        <li>Instagram :<Link href="https://www.instagram.com/hina_m.rafiq2523/profilecard/?igsh=MW8xemk2bmp4M3ZtZA==" target="_blank"><b> hina_m.rafiq2523</b></Link></li>
                    </ul> 
                </div>

                <div className="flex justify-center items-center">
                    <ul>
                        <li>Facebook: <Link href="https://www.facebook.com/people/Hina-Muhammad-Rafiq/61555395695423/" target="_blank"><b> Hina Muhammad Rafiq</b></Link></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
