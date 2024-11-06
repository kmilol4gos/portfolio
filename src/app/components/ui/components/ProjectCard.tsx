import { Location, CalendarEvent, Buildings } from "@/app/assets/Icons";

interface ProjectCardProps {
	id: number;
	title: string;
	date: string;
	description: string;
	ubication: string;
	company: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	id,
	title,
	date,
	description,
	ubication,
	company,
}) => {
	return (
		<article
			key={id}
			className="flex flex-col border border-neutral-950 rounded-md p-6 text-neutral-950 hover:scale-105 transition-transform"
		>
			<section>
				<h3 className="text-xl font-bold">{title}</h3>
				<div className="flex gap-3 mb-3">
					<span className="flex items-center justify-center gap-1">
						<CalendarEvent className="w-4 h-4 text-blue-600" />
						{date}
					</span>
					<span className="flex items-center justify-center gap-1">
						<Buildings className="w-4 h-4 text-blue-600" />
						{company}
					</span>
					<span className="flex items-center justify-center gap-1">
						<Location className="w-4 h-4 text-blue-600" />
						{ubication}
					</span>
				</div>
			</section>
			<p>{description}</p>
		</article>
	);
};

export default ProjectCard;
