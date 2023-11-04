import motiva2 from   "../assets/Images/motiva2.png"
import { useEffect } from "react";
import  wind from  '../assets/Images/wind.jpg'
import  worryLess from  '../assets/Images/worryLess.jpg'
// import { Link } from 'react-router-dom'
import  '../index.css'

 const Homepage = () => {

  useEffect(() => {
    const img = new Image();
    img.src = wind;
  }, []);
  return (
    <>
      <section  loading = "lazy" className="  h-heightMedium lg:h-screen   bg-center bg-cover bg-no-repeat bk" >
        <div className="grid grid-cols-6 font-bold  p-4 lg:px-20 lg:py-3 bg-cyan-900"> 
          <img className=" w-10 h-10 lg:w-14 rounded-full lg:h-14" src={motiva2} alt="" />
          
          <div className="col-span-5 grid grid-cols-3 lg:gap-20 items-center">

            <div className="  col-span-2 grid grid-cols-5 gap-3 py-3 text-cyan-50 list-none ">
                <li className="   justify-self-center">How it works</li>
                <li className="   col-span-2  ml-2 justify-self-center">Get motivational quotes</li>
                <li className="  col-span-2 ">Make your design</li>
                
            </div>          
            <button className="items-center text-cyan-100 list-none justify-self-end bg-cyan-700 w-40 px-6  py-4 rounded-full hover:scale-95 ">Log in</button>
            
          </div>

        </div>

        <main className=" p-4 lg:p-10">
            
                <div className=" flex flex-col gap-6 text-center  mt-10 lg:mt-28">

                <h1 className="font-extrabold  text-4xl md:text-6xl lg:text-7xl text-cyan-950">Motiva</h1>
                <h3 className=" text-md lg:text-2xl text-white font-bold  shadow">Create custom  designs from motivational quotes that are wearable and tappable.</h3>
                </div>
         </main>

         
      </section>
      <section className="grid grid-cols-2 text-cyan-900 lg:gap-8  p-4 lg:p-20 place-items-center">
              <div className="flex flex-col  gap-6">
                <h2 className="  font-extrabold text-cyan-950 text-3xl">GET QUOTES</h2>
                <div className="font-semibold  text-justify lg:text-xl shadow-2xl lg:p-10 text-cyan-700">
                  <h4 className="  ">Amazing quotes are a fantastic way for high achievers to maintain self-control, to stay motivated, and to offer hope to those who are struggling.</h4>
                  <span className=" block mt-8 text-justify-center">...  Anonymous</span>
                </div>
                <button className="items-center text-cyan-100  font-bold list-none justify-self-end bg-cyan-700 w-40 px-6  py-4 rounded-full hover:scale-95">Get Quotes</button>
                </div>        

              <img src={worryLess} alt="worry Less image" className="rounded drop-shadow-2xl " />

         </section>

    </>
  )
}

export default Homepage