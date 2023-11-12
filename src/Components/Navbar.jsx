import motiva2 from   "../assets/Images/motiva2.png"
import { Link } from 'react-router-dom'

const Navbar = ()  => {
  return (
    <div className="grid grid-cols-12 font-bold  p-4 lg:px-20 lg:py-3 bg-cyan-900"> 
          <Link to="/"><img className=" w-10 h-10 lg:w-14 rounded-full lg:h-14" src={motiva2} alt="motiva-logo" /></Link>
          
          <div className="col-span-11 grid grid-cols-5  items-center">

            <div className="  col-span-4 grid grid-cols-6 gap-2 py-3 font-bold lg:text-lg text-cyan-50 ">
                <Link to = "/" className="justify-self-center  decoration-cyan-500 decoration-2 hover:underline hover:underline-offset-8 ">Home</Link>
                <Link to = "/howitworks" className="justify-self-center  decoration-cyan-500 decoration-2 hover:underline hover:underline-offset-8">How it works</Link>
                <Link to = "/getquotes" className="col-span-2   justify-self-center  decoration-cyan-500 decoration-2 hover:underline hover:underline-offset-8">Get motivational quotes</Link>
                <Link  to = "/makedesigns" className="col-span-2  decoration-cyan-500 decoration-2 hover:underline hover:underline-offset-8">Make your design</Link>
                
            </div>          
            <Link to = "/login" className="justify-self-end"><button className="text-center text-cyan-100 list-none  bg-cyan-700 lg:w-30 px-6  py-3 md:py-2 lg:py-3 rounded-lg hover:scale-95 ">Sign in</button></Link>
            
          </div>

        </div>
  )
}

export default Navbar