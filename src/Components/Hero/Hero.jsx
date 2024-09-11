import heroImg from "../../assets/officiel-hero.png"

const Hero = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-base md:text-6xl font-bold flex leading-normal tracking-tighter pb-2">
          Hello, I&apos;m <br />
          Mohamed EL GAZI
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          Full Stack Engineer
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div>
        <img className="md:h-80" src={heroImg} alt="" />
      </div>
    </div>
  )
}

export default Hero
