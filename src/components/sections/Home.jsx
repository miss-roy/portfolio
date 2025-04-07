import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Priya Roy
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">

            I am a full stack Developer loves implementing frontend design and curious about bettering backend techniques. 
            Upcoming ML enthusiats looking forward to flourish in AI and ML areas to have a complete solid full stack profile.
            
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};