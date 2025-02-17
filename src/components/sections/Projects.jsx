import { RevealOnScroll } from '../RevealOnScroll';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiMysql, SiAdobeaftereffects, SiAdobepremierepro, SiAdobeillustrator, SiAdobephotoshop, SiFigma, SiAdobexd, SiBlender } from 'react-icons/si';

const tools = {
    "HTML5":<FaHtml5 size={20}/> ,
     "CSS3": <FaCss3Alt size={20} /> ,
    "JavaScript": <FaJs size={20} /> ,
     "React": <FaReact size={20} /> ,
    "Vue": <FaVuejs size={20} /> ,
     "Tailwind CSS": <SiTailwindcss size={20} /> ,
     "Bootstrap": <FaBootstrap size={20} /> ,
     "Node.js": <FaNodeJs size={20} /> ,
     "Express.js": <SiExpress size={20} /> ,
     "MongoDB": <SiMongodb size={20} /> ,
     "Firebase": <SiFirebase size={20} /> ,
     "SQL": <SiMysql size={20} /> ,
     "Aftereffect": <SiAdobeaftereffects size={20} /> ,
     "Premiere Pro": <SiAdobepremierepro size={20} /> ,
     "Illustrator": <SiAdobeillustrator size={20} /> ,
     "Photoshop": <SiAdobephotoshop size={20} /> ,
     "Figma": <SiFigma size={20} /> ,
     "XD": <SiAdobexd size={20} /> ,
     "Blender": <SiBlender size={20} /> 
};

export const Projects = () => {

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {''}
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">
                            Web application check status API
                        </h3>
                        <p className="text-gray-400 mb-4">
                        It is a system for monitoring the operation of the services that
                        Ai For Thai has made available for public use.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Vue", "Node.js", "Express.js", "MongoDB"].map((tech, key) => (
                                <span key={key} className="flex flex-row bg-blue-500/10 text-blue-500 py-1 px-6 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                     {tools[tech]}<span className="ml-2">{tech}</span>
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                                <a href="https://github.com/ChaoChaiTuNoi/nectec-web.git" target='blank' className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project →
                                </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border boder-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            My portfolio website
                        </h3>
                        <p className="text-gray-400 mb-4">
                        This is a web portfolio to showcase my skills and work experience. It includes projects, tech stacks, and contact information about me.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Tailwind CSS",].map((tech, key) => (
                                <span key={key} className="flex flex-row bg-blue-500/10 text-blue-500 py-1 px-6 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                    {tools[tech]}<span className="ml-2">{tech}</span>
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project →
                                </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border boder-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            My Motion project
                        </h3>
                        <p className="text-gray-400 mb-4">
                        This is Ads media online made by me, I use After Effect, Illustrator, Photoshop, and Premiere Pro to create this project.
                        </p>
                        <div className="w-full h-96 rounded-xl">
                            <iframe
                                src="https://www.youtube.com/embed/PDntcVHBx-8?si=X472Lozd06N4k83-"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-xl"
                            ></iframe>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Aftereffect", "Illustrator","Photoshop"].map((tech, key) => (
                                <span key={key} className="flex flex-row bg-blue-500/10 text-blue-500 py-1 px-6 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                    {tools[tech]}<span className="ml-2">{tech}</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border boder-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            My Motion project
                        </h3>
                        <p className="text-gray-400 mb-4">
                        This is Ads media online made by me, I use After Effect, Illustrator, Photoshop, and Premiere Pro to create this project.
                        </p>
                        <div className="w-full h-96 rounded-xl">
                            <iframe
                                src="https://www.youtube.com/embed/3T5e-0nTVQ4?si=_tgWDQ4xNC44UyHf"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-xl"
                            ></iframe>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Aftereffect", "Illustrator","Photoshop"].map((tech, key) => (
                                <span key={key} className="flex flex-row bg-blue-500/10 text-blue-500 py-1 px-6 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                    {tools[tech]}<span className="ml-2">{tech}</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border boder-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            My Motion project
                        </h3>
                        <p className="text-gray-400 mb-4">
                        This is Ads media online made by me, I use After Effect, Illustrator, Photoshop, and Premiere Pro to create this project.
                        </p>
                        <div className="w-full h-96 rounded-xl">
                            <iframe
                                src="https://www.youtube.com/embed/EPUCoCKfW3w?si=YXkrHvCPOQo2XnwQ"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-xl"
                            ></iframe>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Aftereffect", "Illustrator","Photoshop"].map((tech, key) => (
                                <span key={key} className="flex flex-row bg-blue-500/10 text-blue-500 py-1 px-6 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                    {tools[tech]}<span className="ml-2">{tech}</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border boder-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            My Motion project
                        </h3>
                        <p className="text-gray-400 mb-4">
                        This is Ads media online made by me, I use After Effect, Illustrator, Photoshop, and Premiere Pro to create this project.
                        </p>
                        <div className="w-full h-96 rounded-xl">
                            <iframe
                                src="https://www.youtube.com/embed/3pwTsoFZdC0?si=A_tVGbqp1jGhyk6I"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-xl"
                            ></iframe>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Aftereffect", "Illustrator","Photoshop"].map((tech, key) => (
                                <span key={key} className="flex flex-row bg-blue-500/10 text-blue-500 py-1 px-6 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                    {tools[tech]}<span className="ml-2">{tech}</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border boder-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            My Motion project
                        </h3>
                        <p className="text-gray-400 mb-4">
                        This is Ads media online made by me, I use After Effect, Illustrator, Photoshop, and Premiere Pro to create this project.
                        </p>
                        <div className="w-full h-96 rounded-xl">
                            <iframe
                                src="https://www.youtube.com/embed/JlU9Di9jLzA?si=3ILvt5E21nEzrCkH"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-xl"
                            ></iframe>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Aftereffect", "Illustrator","Photoshop"].map((tech, key) => (
                                <span key={key} className="flex flex-row bg-blue-500/10 text-blue-500 py-1 px-6 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                    {tools[tech]}<span className="ml-2">{tech}</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border boder-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            NFT project from A+Landz
                        </h3>
                        <p className="text-gray-400 mb-4">
                        This is NFT project Illustration from A+Landz animation  made by me, I use After Effect, Illustrator, Photoshop, and Premiere Pro to create this project.
                        </p>
                        <div className="w-full h-96 rounded-xl">
                            <iframe
                                src="https://www.youtube.com/embed/gHvlGW7YGuk?si=5aptNpwf5lXgqP0B"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-xl"
                            ></iframe>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Aftereffect", "Illustrator","Photoshop"].map((tech, key) => (
                                <span key={key} className="flex flex-row bg-blue-500/10 text-blue-500 py-1 px-6 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                    {tools[tech]}<span className="ml-2">{tech}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    

                </div>

            </div>
            </RevealOnScroll>

        </section>
    )
}