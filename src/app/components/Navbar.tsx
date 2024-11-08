import { Download } from "../assets/Icons";

export default function Navbar() {
	return (
		<header className="fixed top-0 z-10 flex justify-end items-center py-6 mx-auto w-full text-neutral-900 dark:text-neutral-100 font-medium">
			<nav className="flex gap-x-7 flex-row px-10">
				<a href="#Experiencia">Experiencia</a>
				{/* <a href="#Proyectos">Proyectos</a> */}
				<a href="#Sobre-mi">Sobre mi</a>
			</nav>
		</header>
	);
}
