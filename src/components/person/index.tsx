"use client";

//  引入 OrbitingCircles
import OrbitingCirclesDemo from './components/OrbitingCircles';
//   引入 ThreeDCard
import ThreeDCard from './components/ThreeDCard';


export default function Person() {
  return (
     <div  className="relative">
      <OrbitingCirclesDemo />
      <ThreeDCard />
     </div>
  );
}