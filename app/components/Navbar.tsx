import Link from "next/link"
export default function Navbar(){
    return (
      <header>
      <div className="bg-black h-28 w-full px-10 py-1 pt-5">
         <div className="flex justify-center mb-7">
          <h1 className="text-white text-xl font-bold h-2">My Portfolio</h1>
         </div>
          <hr />
         <div id="nav-list" className="text-white flex justify-between items-center font-semibold tracking-wider ml-20  mt-4 w-4/5 pb-5">
            <Link href="/">
               <div className="hover:underline">Home
                </div></Link>
            <Link href="/About">
                <div className="hover:underline">About
                </div></Link>
            <Link href="/Skills">
                <div className="hover:underline">Skills
                </div>
            </Link>
            <Link href="/Contact">
                <div className="hover:underline">Contact
                </div>
            </Link>
         </div>                
      </div>
      </header>
    )
}
