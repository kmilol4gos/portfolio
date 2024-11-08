"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ui/components/ProjectCard";
import { Briefcase } from "../assets/Icons";

interface Experience {
	id: number;
	title: string;
	date: string;
	description: string;
	ubication: string;
	company: string;
}

const ExperiencePage = () => {
	const [experience, setExperience] = useState<Experience[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchExperience = async () => {
			try {
				const res = await fetch("http://localhost:3000/api/Experience");
				const data = await res.json();
				setExperience(data || []);
			} catch (error) {
				console.error("Error al cargar la experiencia laboral:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchExperience();
	}, []);

	return (
		<section className="text-neutral-600 dark:text-neutral-200">
			<header className="flex flex-col gap-1 mb-5">
				<h2
					className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2"
					id="Experiencia"
				>
					<Briefcase className="w-8 h-8" />
					Experiencia Laboral
				</h2>
				<h3>
					Aquí se encuentran los lugares donde he trabajado y/o participado
				</h3>
			</header>
			<section className="flex flex-col gap-4">
				{loading ? (
					<p>Cargando...</p>
				) : experience.length > 0 ? (
					experience.map((exp) => (
						<ProjectCard
							key={exp.id}
							id={exp.id}
							title={exp.title}
							date={exp.date}
							description={exp.description}
							ubication={exp.ubication}
							company={exp.company}
						/>
					))
				) : (
					<p>No hay experiencia laboral registrada</p>
				)}
			</section>
		</section>
	);
};

export default ExperiencePage;
