import { DraggableCardDemo } from "./DragAble";
import { TextGenerateEffect } from "../ui/textgenerate";

const Cities = () =>{

  const words = `Categories We Cover`;
    return(
        <>
        <section
              id="coverage"
              className="w-full py-20 bg-black  transition-colors"
            >
              <div className="max-w-6xl mx-auto px-4 text-center flex flex-col items-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-12">
                  <TextGenerateEffect words={words}/>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
     Drag the cards to reveal categories we cover

        </p>

                <DraggableCardDemo />
              </div>
            </section>
        </>
    )
}

export default Cities;