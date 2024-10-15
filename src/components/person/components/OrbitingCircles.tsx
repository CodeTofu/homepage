import OrbitingCircles from "../../ui/orbiting-circles";
import Image from 'next/image';
import ThreeDCard from './ThreeDCard';
export default function OrbitingCirclesDemo() {
  return (
    <div className="absolute top-0 left-0 flex h-[900px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={10}
        delay={20}
        radius={300}
      >
        <Image src="/img/vscode.png" alt="Logo" width={100} height={100} />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent z-40"
        radius={300}
        duration={20}
        delay={20}
        reverse
      >
        <Image src="/img/github.png" alt="Logo" width={100} height={100} />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={250}
        duration={20}
        reverse
      >
        <Image src="/img/chrome.png" alt="Logo" width={100} height={100} style={{ borderRadius: '10%' }} />
      </OrbitingCircles>

      
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        duration={15}
        delay={10}
        radius={250}
      >
        <Image src="/img/react.png" alt="Logo" width={150} height={150}  style={{ borderRadius: '50%' }} />
      </OrbitingCircles>

    </div>
  );
}
