import Image from "next/image"
export default function Hero (){
    return (
        <div className="bg-black w-full h-full">
            <div className="text-white font-serif font-bold flex justify-center items-center"> 
            <Image src="/Hina M.Rafiq.jpeg" alt="Profile Picture" height="280" width="220" className="mr-9 border border-solid border-black rounded-lg"></Image>
                <h1 className="pt-28 text-3xl"><u>I m Hina <br /> Muhammad Rafiq</u></h1>
            </div> 
        </div> 
    )
}
