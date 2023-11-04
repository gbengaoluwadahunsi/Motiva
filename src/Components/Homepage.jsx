import motiva2 from   "../assets/Images/motiva2.png"
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
        <div className="grid grid-cols-6 font-bold  p-4 lg:px-10 lg:py-3 bg-cyan-900"> 
        <img className=" w-10 h-10 lg:w-14 rounded-full lg:h-14" src={motiva2} alt="" />
        <div className="col-span-5 grid grid-cols-2 lg:gap-20 items-center">
        <div className=" grid grid-cols-5 gap-3 py-3 text-cyan-50 list-none ">
            <li className="justify-self-center">How it works</li>
            <li className="  col-span-2 justify-self-center">Get Motivational Quotes</li>
            <li className="col-span-2 ">Make your design</li>
            
        </div>
        <button className="items-center text-cyan-100 list-none justify-self-end bg-cyan-500 w-28 px-4  py-3 rounded-full  ">Log in
        </button>
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