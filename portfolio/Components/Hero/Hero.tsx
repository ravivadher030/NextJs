import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <div className="hero_wrapper bg-[url('/stark-tower.png')] bg-fixed h-100 bg-cover bg-center">
      <div className="container mx-auto hero py-10 ">
        <div className="flex flex-wrap lg:flex-nowrap gap-y-5 columns-6 justify-between relative">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </div>
  );
}
