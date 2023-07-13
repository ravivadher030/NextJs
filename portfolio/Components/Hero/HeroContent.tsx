import TypewriterComponent from "typewriter-effect";

export default function HeroContent() {
  return (
    <div className="flex gap-x-3 hero-content order-2 text-[16px] md:text-[20px] self-center ">
      <div className="flex flex-col justify-center items-center ">
        <div className="w-5 h-5 rounded-full bg-sky-400" />
        <div className="w-1 -m-1 h-52 md:h-80 bg-gradient-to-b from-sky-400 to-white dark:to-black" />
      </div>
      <div className="hero_content">
        <p className="text">Hi, I am Ravi Vadher</p>
        <h1 className="font-bold text-[24px] md:text-[34px] text-sky-400 my-2 uppercase">
          Developer
        </h1>
        <p className="my-2">
          Knowledge of programming language and technical terminology.
        </p>
        <span className="text-sky-400">
          I am a{" "}
          <TypewriterComponent
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: ["Developer", "Blogger"],
            }}
          />
        </span>
      </div>
    </div>
  );
}
