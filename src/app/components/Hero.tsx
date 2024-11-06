import Image from "next/image";
import { Download, LinkedIn, Mail } from "@/app/assets/Icons";

export default function Hero() {
	return (
		<section className="h-full flex flex-col items-center gap-7 text-neutral-900 dark:text-neutral-300">
			<article className="flex justify-center items-center gap-5 ">
				<div>
					<Image
						src={"/CamiloLagos.webp"}
						width={150}
						height={150}
						alt={"Camilo Lagos"}
						className="rounded-full border border-neutral-950"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<h1 className="text-3xl font-bold ">Camilo Lagos Iturriaga</h1>
					<h3 className="text-neutral-600 font-medium text-xl">
						Desarrollador Full Stack
					</h3>
				</div>
			</article>
			<article className="flex flex-col items-start max-w-2xl gap-5">
				<p className="text-neutral-600">
					<strong>Ingeniero Civil en Informática</strong> de Santiago, Chile 🇨🇱.
					Con <strong>experiencia en liderazgo tecnológico </strong> y
					<strong> desarrollo full-stack</strong>, enfocado en proyectos
					<strong> innovadores y sostenibles</strong>. Especialista en
					tecnologías como React, Node.js y AWS, además de metodologías ágiles
					para impulsar la eficiencia en proyectos digitales.
				</p>
				<section className="flex gap-5">
					<a
						href="mailto:c.lagositurriaga@gmail.com"
						target="_blank"
						rel="noreferrer noopener"
						className="py-2 px-4 border border-neutral-950 rounded-full hover:bg-neutral-900 hover:text-neutral-300 transition-colors flex items-center gap-1"
					>
						<Mail className="w-6 h-6" />
						Contáctame
					</a>
					<a
						href="https://www.linkedin.com/in/camilolagositurriaga/"
						target="_blank"
						rel="noreferrer noopener"
						className="py-2 px-4 border border-neutral-950 rounded-full hover:bg-neutral-900 hover:text-neutral-300 transition-colors flex items-center gap-1"
					>
						<LinkedIn className="w-6 h-6" />
						LinkedIn
					</a>
					<a
						href="./Camilo_Lagos_CV.pdf"
						target="_blank"
						rel="noreferrer noopener"
						className="py-2 px-4 border border-neutral-950 rounded-full hover:bg-neutral-900 hover:text-neutral-300 transition-colors flex items-center gap-1"
					>
						<Download className="w-6 h-6" />
						Curriculum
					</a>
				</section>
			</article>
		</section>
	);
}
