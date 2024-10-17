"use client";

//  引入 OrbitingCircles
import OrbitingCirclesDemo from './components/orbiting-circles-item';
//   引入 ThreeDCard
import ThreeDCard from './components/3d-card-item';


export default function Person() {
  return (
     <div  className="relative">
      <OrbitingCirclesDemo />
      <ThreeDCard />
     </div>
  );
}