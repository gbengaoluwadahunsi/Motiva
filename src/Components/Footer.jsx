import { Link } from "react-router-dom"
import motiva2 from   "../assets/Images/motiva2.png"

function Footer() {
  return (
    <div className="bg-slate-900 text-cyan-100 lg:px-20 lg:text-lg lg:py-10 grid grid-row-6  h-heightMedium mt-16">
        <div className="row-span-5 grid grid-cols-3 font-semibold gap-4">
          <div className="flex flex-col space-y-4 text-start lg:w-40"> 
            <span className="text-cyan-500  font-bold lg:text-xl">Company</span>
            <Link to="/"><img className=" w-10 h-10 lg:w-14 rounded-full lg:h-14" src={motiva2} alt="motiva-logo" /></Link>
            <Link to = "/howitworks" className=" decoration-cyan-500 decoration-2 hover:underline hover:underline-offset-8">How it works</Link>
            <Link to = "/getquotes" className=" decoration-cyan-500 decoration-2 hover:underline hover:underline-offset-8">Get quotes</Link>
            <Link to = "/makedesigns" className=" decoration-cyan-500 decoration-2 hover:underline hover:underline-offset-8">Make your designs</Link>
            </div>

          <div className="flex flex-col space-y-4 text-start lg:w-40"> 
          <span className="text-cyan-500 font-bold lg:text-xl">Quotes API links</span>
            <a href="https://github.com/lukePeavey/quotable#quotable" target="_blank" rel="noreferrer" className=" decoration-cyan-500 decoration-2 hover:underline hover:underline-offset-8" >Quotable</a>
            <a href="https://rapidapi.com/collection/quote-generator-apis" target="_blank" rel="noreferrer" className=" decoration-cyan-500 decoration-2 hover:underline hover:underline-offset-8"> Rapid API</a>
            <a href="https://rapidapi.com/shashitechno/api/paperquotes/" target="_blank" rel="noreferrer" className=" decoration-cyan-500 decoration-2 hover:underline hover:underline-offset-8">PaperQuotes</a>
            <a href="https://rapidapi.com/orthosie/api/shakespeare1/" target="_blank" rel="noreferrer" className=" decoration-cyan-500 decoration-2 hover:underline hover:underline-offset-8">Shakespeare</a>
          </div>

          

          <div className="flex flex-col space-y-4 text-start lg:w-80"> 
            <span className="text-cyan-500 font-bold lg:text-xl">Resources</span>
            <a href="https://looka.com/blog/t-shirt-design-ideas/" target="_blank" rel="noreferrer" className=" decoration-cyan-500 decoration-2 hover:underline hover:underline-offset-8">T-shirt design ideas</a>
            <a href="https://www.forbes.com/advisor/business/start-t-shirt-business/" target="_blank" rel="noreferrer" className=" decoration-cyan-500 decoration-2 hover:underline hover:underline-offset-8">How to start a T-shirt ideas business</a>
            <a href="https://medium.com/illumination/how-to-make-money-writing-short-social-media-quotes-a50cadbdcb29" target="_blank" rel="noreferrer" className=" decoration-cyan-500 decoration-2 hover:underline hover:underline-offset-8">Make money by creating quotes</a>
           
          </div>

        </div>
        <div>
            <span className="flex  text-sm justify-center ">Copyright © 2023 MOTIVA. All rights reserved</span>
        </div>
    </div>
  )
}

export default Footer