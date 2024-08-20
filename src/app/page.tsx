"use client";
import { useState } from 'react';

// Import the Components Navigation Bar
import NavigationBar from "@/app/components/navigation/navbar";
import AboutSection from "@/app/components/aboutsection/about";
import TechSection from "@/app/components/techsection/tech";

export default function Home() {
	const [isDarkMode, setDarkMode] = useState(false);
  return (
		<div className={isDarkMode ? "dark" : ""}>
			<main className="bg-white dark:bg-gradient-to-b dark:bg-gray-900">
					{/* Navigation Bar Components */}
					<NavigationBar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
					<AboutSection />
					<TechSection />
			</main>
		</div>
  );
}
