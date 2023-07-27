import React from "react";
import ProjectProps from "../interfaces/ProjectProps";
import { motion } from 'framer-motion';

interface props {
    project: ProjectProps;
}

const ProjectInfo: React.FC<props> = ({project}): JSX.Element => {
    return (
        <motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5 }}
			transition={{
				duration: 0.5
			}}
			variants={{
				hidden: { opacity: 0, x: 50 },
				visible: { opacity: 1, x: 0 }
			}}
            className={project.title === "Carbon Footprint Calculator" ? "pb-40" : ""}
		>
            <div className="grid grid-cols-1 md:grid-cols-2 md:p-10 items-center">
                { project.isImageFirst && 
                <div className="grid place-items-center items-center ">
                    <img className="w-0 md:w-[40rem] block" src={project.image} alt={project.alt} />
                </div> }
                <div className="pb-8 md:pt-8 md:pb-20 bg-black rounded m-2">
                    <div className="flex md:flex-row justify-center pt-4 px-4 md:px-0">
                        <h2 className="text-base md:text-3xl pt-2 md:pt-1 font-extrabold mx-3">
                            {project.title}
                        </h2>
                        <a href={project.gitHub}>
                            <div className="p-2 bg-github w-10 md:w-11 h-10 md:h-11 bg-no-repeat bg-contain" />
                        </a>
                        <a href={project.link}>
                            <div className="p-2 bg-link w-11 md:w-12 h-11 md:h-12 bg-center bg-no-repeat" />
                        </a>
                    </div>

                    <div className="grid place-items-center items-center p-2 md:p-0">
                        <img className="w-[30rem] md:w-0 block" src={project.image} alt={project.alt} />
                    </div>
                    <p className="mt-2 text-justify w-auto p-4 pt-4 text-xl" id='ProjectDescription'>
                        {project.description}
                    </p>
                    <ul className="flex flex-wrap items-center justify-center text-sm px-3">
                        {project.techStack.map((tech: {url: string, name: string}, index: number) => {
                            return <li className="mr-4" key={index}><a href={tech.url} className="text-white hover:text-red no-underline">{tech.name}</a></li>
                        })}
                    </ul>
                </div>
                { project.isImageFirst === false && 
                <div className="grid place-items-center items-center ">
                    <img className="w-0 md:w-[40rem] block" src={project.image} alt={project.alt} />
                </div> }
            </div>
        </motion.div>
    )
}

export default ProjectInfo;