"use client";
import { Carousel } from "../ui/carousels";

export function CarouselDemo() {
  const slideData = [
    {
      title: "User Suggestion",
      description: "“This app should include personalized news summaries so I can read faster.”",
    },
    {
      title: "User Suggestion",
      description: "“Please add short, quick summaries for each article. It will save a lot of time.”",
    },
    {
      title: "User Suggestion",
      description: "“An in-app messaging or chat feature would be great for discussing news with friends.”",
    },
    {
      title: "User Suggestion",
      description: "“It would be helpful if I could customize categories and hide topics I’m not interested in.”",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
