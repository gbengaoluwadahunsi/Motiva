import motiva from   "/public/motiva.png"
import { useEffect } from "react";
import  wind from  '../assets/Images/wind.jpg'
// import { Link } from 'react-router-dom'
import  '../index.css'

 const Homepage = () => {

  useEffect(() => {
    const img = new Image();
    img.src = wind;
  }, []);
  return (
    <>
      <section  loading = "lazy" className="  h-80 md:h-screen lg:h-screen   bg-center bg-cover bg-no-repeat bk" >
        <div className="grid grid-cols-4  p-4 lg:px-6 lg:py-3 bg-cyan-900"> 
        <img className=" w-10 h-10 lg:w-20 rounded-full lg:h-20" src={motiva} alt="" />
        <div className="col-span-3  items-center  text-cyan-100 list-none grid grid-cols-6">
            <li>About</li>
            <li>About</li>
            <li>About</li>
            <li>About</li>
            <li>ABout</li>
            <li>About</li>
        </div>
        </div>
         <main className=" p-1 lg:p-10">
            
                <div className=" flex flex-col gap-6 text-center  mt-10 lg:mt-28">

                <h1 className="font-extrabold  text-4xl lg:text-9xl text-cyan-950">Motiva</h1>
                <h3 className=" text-xl lg:text-2xl text-white font-bold">Create custom  designs from motivational quotes that are wearable and tappable.</h3>
                </div>
         </main>

      </section>
    </>
  )
}

export default Homepage