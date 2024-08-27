"use client";
import { useState, useEffect, useRef} from 'react';

// Import the Components Navigation Bar
import NavigationBar from "@/components/navigation/navbar";
import AboutSection from "@/components/aboutsection/about";
import TechSection from "@/components/techsection/tech";

// Design Utility
import MouseHoverCircle from "@/components/utilities/mousecirclehover";

export default function Home() {
	const [isDarkMode, setDarkMode] = useState(true); // Changing the default darkmode theme to true because its beautiful.

	// Here we're going to declare separate section ref on each section to behave indepedently
	const aboutSectionRef = useRef<HTMLElement | null>(null);
	const techSectionRef = useRef<HTMLElement | null>(null);

	// Now we use useEffect to observe each sections intersct with users view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
						entry.target.classList.remove('animate-fadeOut');
						entry.target.classList.add('animate-fadeIn');
					  } else {
						entry.target.classList.remove('animate-fadeIn');
						entry.target.classList.add('animate-fadeOut');
					  }
                });
            },
            { rootMargin: "-50px", threshold: 0.2 }
        );

		const aboutSection = aboutSectionRef.current;
        const techSection = techSectionRef.current;

        if (aboutSection) {
            observer.observe(aboutSection);
        }
        if (techSection) {
            observer.observe(techSection);
        }

        return () => {
            if (aboutSection) {
                observer.unobserve(aboutSection);
            }
            if (techSection) {
                observer.unobserve(techSection);
            }
        };
    }, []);
  return (
		<div className={isDarkMode ? "dark" : ""}>
			<main className="bg-white dark:bg-gradient-to-b dark:bg-gray-900">

			{/* Design Utility On Mouse Position */}
			<MouseHoverCircle />
			
			{/* Navigation Bar Components */}
			<NavigationBar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
			{/* About Section Components */}
			<AboutSection sectionRef={aboutSectionRef} />
			{/* TechSection Section Components */}
			<TechSection sectionRef={techSectionRef} />

			<div className="fixed bottom-0 left-0 right-0 bg-gray-500 dark:bg-gray-800 text-white text-center py-2">
				I&apos;m building my personal website right now. Thanks for visiting and check back soon!
			</div>
			</main>
		</div>
  );
}
