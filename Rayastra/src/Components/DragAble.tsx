import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../ui/dragable-card";
import politics from "../assets/politics.png";
import business from "../assets/busines.png";
import science from "../assets/Science.png"
import sports from "../assets/Sports.png"
import world from "../assets/world.png"
import local from "../assets/local.png"
import tech from "../assets/Tech.png";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Politics",
      image: politics,
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Technology",
      image:tech,
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Sports",
      image:sports,
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Business",
      image:business,
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "World News",
      image:world,
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Science",
      image:science,
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Local Updates",
      image:local,
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl">
        And many more categories!! Don't worry, We are expanding like bacteria
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
