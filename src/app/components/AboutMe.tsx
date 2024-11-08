import { User } from "../assets/Icons";

function AboutMe() {
	return (
		<section className="text-neutral-600 dark:text-neutral-200">
			<header className="mb-5">
				<h2
					className="text-2xl font-bold flex items-center gap-2 text-neutral-900 dark:text-neutral-100"
					id="Sobre-mi"
				>
					<User className="w-8 h-8" />
					Sobre Mi
				</h2>
			</header>
			<section className="flex flex-col gap-4">
				<p className="text-pretty">
					Como profesional apasionado por la{" "}
					<strong>innovación tecnológica y el desarrollo sostenible </strong>,
					he liderado proyectos que optimizan la{" "}
					<strong>experiencia del usuario</strong> y aportan valor real a los
					negocios. Mi experiencia incluye el desarrollo de soluciones digitales
					avanzadas, usando herramientas modernas como Flutter para aplicaciones
					móviles y la creación de plataformas orientadas a la sostenibilidad,
					como <strong>NexGreen</strong>.
				</p>
				<p className="text-pretty">
					He tenido el honor de ser finalista en el concurso{" "}
					<strong>Innova UTEM </strong>
					patrocinado por <strong>Banco Santander</strong>, un reconocimiento
					que refuerza mi compromiso con la creación de tecnología que impacta
					positivamente. Me motiva trabajar con equipos multidisciplinarios para
					generar soluciones que no solo cumplan con los requisitos del cliente,
					sino que también tengan un impacto duradero y significativo.
				</p>
			</section>
		</section>
	);
}

export default AboutMe;
