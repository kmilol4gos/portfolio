"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ui/components/ProjectCard";
import { Briefcase } from "../assets/Icons";

interface Project {
	id: number;
	title: string;
	date: string;
	description: string;
	ubication: string;
	company: string;
}

interface ProjectsPageProps {
	projects: Project[];
}

const ProjectsPage: React.FC<ProjectsPageProps> = () => {
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await fetch("http://localhost:3000/api/projects");
				const data: Project[] = await response.json();
				setProjects(data);
			} catch (error) {
				console.error("Error: ", error);
			}
		};
		fetchProjects();
	}, []);

	return (
		<section className="text-neutral-600 ">
			<header className="flex flex-col gap-1 mb-5">
				<h2
					className="text-2xl font-bold text-neutral-900 flex items-center gap-2"
					id="Experiencia"
				>
					<Briefcase className="w-8 h-8" />
					Experiencia Laboral
				</h2>
				<h3 className="">
					Aquí se encuentran los lugares donde he trabajado y/o proyectos que he
					participado.
				</h3>
			</header>
			<section className="flex flex-col gap-4">
				{projects.map((project) => (
					<ProjectCard
						key={project.id}
						id={project.id}
						title={project.title}
						date={project.date}
						description={project.description}
						ubication={project.ubication}
						company={project.company}
					/>
				))}
			</section>
		</section>
	);
};

export default ProjectsPage;
