import { RevealOnScroll } from "../RevealOnScroll";
import profileImage from '../../assets/IMG_7482.JPG';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/Instagram.png';
import github from '../../assets/github.png';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-10"
    >
      <RevealOnScroll>
        <div className="max-w-7xl w-full px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Left Section: Profile Picture and Social Links */}
          <div className="flex flex-col items-center gap-8 md:items-start">
            {/* Profile Picture */}
            <img
              src={profileImage} 
              alt="Priya Roy"
              className="w-52 h-auto rounded-full border-4 mx-auto md:mx-0"
            />
            
            {/* Social Links */}
            <div className="flex mb-8 max-w-lg mx-auto md:mx-8 gap-6">
              <a href="https://www.linkedin.com/in/priyaroynew09/" target="_blank" rel="noopener noreferrer">
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
              <a href="https://github.com/miss-roy" target="_blank" rel="noopener noreferrer">
                <img
                  src={github}
                  alt="GitHub"
                  className="w-8 h-8"
                />
              </a>
              <a href="https://www.instagram.com/miss.r_o_y/?hl=en" target="_blank" rel="noopener noreferrer">
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>

          {/* Right Section: Introduction Text */}
          <div className="text-center md:text-left md:ml-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Priya Roy
            </h1>

            <p className="text-gray-400 text-lg mb-17 max-w-lg mx-auto md:mx-0">
              I am a full-stack developer who loves implementing frontend designs and is curious about bettering backend techniques.
              Upcoming ML enthusiast looking forward to flourishing in AI and ML areas to have a solid, complete full-stack profile.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
