import { CarouselDemo } from "./carouselDemo";
import { TextGenerateEffect } from "../ui/textgenerate";

export default function Testimonials() {

  const words = `Give us your valuable suggestion and feedback`;
  return (
    <section
      id="suggestions"
      className="w-full py-20 bg-black transition-colors"
    >
       
      <div className="max-w-6xl mx-auto px-6 text-center">
        
      
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-sm">
          <TextGenerateEffect words={words}/>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
         Fill out the google form below and give us feedback and suggestions about what challenges
         you face during consuming news, and what should we must have or improve. Some suggestions given
         to us are listed below
        </p>
        <a 
        className=" rounded-full font-medium px-5 py-3 bg-indigo-600" 
        
        href="https://docs.google.com/forms/d/e/1FAIpQLSeYoeFLsKRnMvUOFrjU5JlECDX-5F0ibJ65Fg2VyMdjugfdlg/viewform" 
        target="_blank"
        >Google Form</a>

    <CarouselDemo/>
       
      </div>
    </section>
  );
}
