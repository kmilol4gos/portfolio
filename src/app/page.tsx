import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Projects";

export default function Home() {
	return (
		<main>
			<div className="fixed top-0 z-[-2] h-full w-screen bg-neutral-300 dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.3),rgba(0,0,0,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] "></div>
			<Navbar />
			<div className="max-w-4xl mx-auto py-24 flex flex-col gap-5">
				<section className="my-5 mx-10">
					<Hero />
				</section>
				<section className="my-5 mx-10 ">
					<Experience />
				</section>
				{/* <section className="my-5 mx-10">
					<Project />
				</section> */}
				<section className="my-5 mx-10">
					<AboutMe />
				</section>
			</div>
		</main>
	);
}
