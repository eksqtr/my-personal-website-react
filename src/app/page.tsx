"use client";
import { useState, useEffect, useRef} from 'react';

// Import the Components Navigation Bar
import NavigationBar from "@/app/components/navigation/navbar";
import AboutSection from "@/app/components/aboutsection/about";
import TechSection from "@/app/components/techsection/tech";

export default function Home() {
	const [isDarkMode, setDarkMode] = useState(false);

	// Here we're going to declare separate section ref on each section to behave indepedently
	const aboutSectionRef = useRef<HTMLElement>(null);
	const techSectionRef = useRef<HTMLElement>(null);

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

    	if (aboutSectionRef.current) {
			observer.observe(aboutSectionRef.current);
		}
		if (techSectionRef.current) {
			observer.observe(techSectionRef.current);
		}
  
	  return () => {
		if (aboutSectionRef.current) {
		  observer.unobserve(aboutSectionRef.current);
		}
		if (techSectionRef.current) {
		  observer.unobserve(techSectionRef.current);
		}
	  };
    }, []);
  return (
		<div className={isDarkMode ? "dark" : ""}>
			<main className="bg-white dark:bg-gradient-to-b dark:bg-gray-900">
					{/* Navigation Bar Components */}
					<NavigationBar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
					<AboutSection sectionRef={aboutSectionRef} />
					<TechSection sectionRef={techSectionRef} />
			</main>
		</div>
  );
}
