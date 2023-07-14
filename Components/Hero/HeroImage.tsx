import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="hero-img w-100  lg:order-2 self-center relative animate-[wiggle_4s_ease-in_normal]">
      <Image
        className=" animation-delay-4000 animate-[downup_1.5s_ease-in_infinite]  h-720 w-60  relative"
        src="/ironman.png"
        alt="Profile Picture"
        width={300}
        height={300}
        data-te-animation-delay="4000"
      />
    </div>
  );
}
