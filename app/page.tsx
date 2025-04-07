"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (resumeRef.current) {
      setIsDownloading(true);
      try {
        const canvas = await html2canvas(resumeRef.current, { scale: 2 }); // Reduced scale for smaller file size
        const imgData = canvas.toDataURL("image/jpeg", 0.8); // Use JPEG format with 80% quality for compression
        const pdf = new jsPDF("p", "mm", "a4");
        const pageHeight = pdf.internal.pageSize.height;
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let position = 0;
        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);

        while (position + imgHeight > pageHeight) {
          position -= pageHeight;
          pdf.addPage();
          pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
        }

        pdf.save("Azeez_Oyegoke_Resume.pdf");
      } catch (error) {
        console.error("Error generating PDF:", error);
      } finally {
        setIsDownloading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <button
        onClick={handleDownload}
        className={`mb-4 px-6 py-2 rounded-lg shadow-md text-white ${
          isDownloading ? "bg-gray-500 cursor-not-allowed" : "bg-[#3978A3] hover:bg-[#1E4369] cursor-pointer"
        }`}
        disabled={isDownloading}
      >
        {isDownloading ? "Downloading..." : "Download as PDF"}
      </button>
      <div
        ref={resumeRef}
        className="bg-[#000000] shadow-lg p-8 rounded-lg max-w-3xl w-full"
      >
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Azeez Oyegoke
        </h1>
        <div className="text-center text-gray-700">
          <Link className="links" href="mailto:oyegoke.a18@example.com">
            oyegoke.a18@gmail.com
          </Link>{" "}
          <Link
            className="links"
            href="https://wa.me/2348136023232"
            target="_blank"
          >
            | 08136023232 |
          </Link>{" "}
          <Link
            className="links"
            href="https://www.linkedin.com/in/azeez-oyegoke-434716204/"
            target="_blank"
          >
            LinkedIn
          </Link>{" "}
          |
          <Link
            className="links"
            href="https:github.com/harteyhitman/"
            target="_blank"
          >
            GitHub
          </Link>
        </div>

        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-2">
            Professional Summary
          </h2>
          <p className="mt-2">
            Highly skilled Frontend Developer with over 3+ years of experience in
            building dynamic and responsive web applications using React,
            Next.js, and TypeScript. Passionate about creating seamless user
            experiences and implementing scalable, maintainable code. Strong
            expertise in WordPress development, design system implementation,
            and performance optimization. Experienced in full-stack development
            with NestJS for backend applications. Adept at collaborating with
            cross-functional teams to deliver high-quality software solutions.
            Currently expanding knowledge in backend development, API design,
            and database management to become a full-stack developer.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-2">
            Technical Skills
          </h2>
          <ul className="list-disc pl-5 mt-2 gap-6 text-gray-700">
            <li>
              <strong>Frontend:</strong> <br /> React.js, Next.js, TypeScript,
              JavaScript (ES6+), HTML5, CSS3, SCSS, Tailwind CSS
            </li>
            <li>
              <strong>Backend:</strong> <br /> Node.js, Express.js, NestJS,
              PostgreSQL, REST API development
            </li>
            <li>
              <strong>State Management:</strong> <br /> Zustand, Redux
            </li>
            <li>
              <strong>Tools & Platforms:</strong> <br /> Git, GitHub, CI/CD,
              Webpack, Figma, Adobe XD
            </li>
            <li>
              <strong>CMS & WordPress:</strong> <br /> WordPress theme and
              plugin development, Elementor, Gutenberg
            </li>
            <li>
              <strong>Other Skills:</strong> <br /> UI/UX design principles,
              performance optimization, accessibility best practices
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-2">
            Work Experience
          </h2>
          <div className="mt-2">
            <h3 className="font-semibold">Frontend Developer | Rogue Devtech</h3>
            <p className="text-gray-600">March 2023 - Present</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                Developed and optimized user-friendly interfaces using React and
                Next.js for various clients.
              </li>
              <li>
                Implemented component-based architectures for reusability and
                maintainability..
              </li>
              <li>
                Designed and implemented a scalable dashboard for fintech and
                e-commerce applications..
              </li>
              <li>
                Developed APIs using NestJS for a simple blog application and a
                mental health tracking app.
              </li>
              <li>
                Collaborated with designers to translate UI/UX designs into
                functional web applications.
              </li>
              <li>
                Created and customized WordPress themes and plugins to align
                with client requirements.
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold">
              Frontend Developer (Mentor Partners Website Redesign)
            </h3>
            <p className="text-gray-600">November 2024 - Present</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                Spearheaded the redesign of the Mentor Partners website using
                WordPress, ensuring a seamless user experience.
              </li>
              <li>
                Integrated a Learning Management System (LMS) for future
                scalability.
              </li>
              <li>
                Employed an iterative development approach, optimizing page
                speed and accessibility.
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold">
              Frontend Developer (Pichi Finance App - MVP)
            </h3>
            <p className="text-gray-600">August 2024</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                Developed a minimum viable product (MVP) for Pichi Finance using
                Next.js and TypeScript.
              </li>
              <li>
                Designed and implemented a reusable SortAndSearch component to
                enhance data filtering.
              </li>
              <li>Improved state management and performance optimization.</li>
            </ul>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-2">
            Notable Projects
          </h2>
          <div className="mt-2">
            <h3 className="font-semibold">Simple Product Store</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                Developed a store that lists user information and products with
                age restrictions.
              </li>
              <li>
                Simulated API calls for asynchronous data fetching and
                processing.
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold">Depression App </h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                Designed and developed a full-stack mental health application
                using NestJS and Next.js.
              </li>
              <li>
                Implemented Zustand for state management and SCSS for styling.
              </li>
              <li>
                Developed an admin page, login, and signup functionalities.
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold">
              TaskMaster (Software Engineering Capstone Project){" "}
            </h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                Built a full-stack task management system using Next.js and mock
                data for backend.
              </li>
              <li>
                Implemented user authentication, task creation, and filtering
                functionalities.
              </li>
              <li>
                Deployed frontend on Vercel/Netlify and backend on Fly.io.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-6">
          <div>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">
              Education & Certifications
            </h2>
            <ul>
              <li>
                High National Diploma, Rufus Giwa Polytechnic Owo – 2017
              </li>
              <li>
                Software Engineering Capstone Project, 3mtt – 2024
              </li>
              <li>Backend Development (Ongoing Study)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">
              Soft Skills
            </h2>
            <ul>
              <li>Problem-solving & analytical thinking</li>
              <li>Effective communication & collaboration</li>
              <li>Adaptability & continuous learning</li>
              <li>Attention to detail</li>
              <li>Strong project management skills</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">
              Languages
            </h2>
            <ul>
              <li>English (Fluent)</li>
              <li>Yoruba (Fluent)</li>
              <li>Spanish (Beginner - Learning)</li>
              <li>Arabic (Beginner - Learning)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">
              Interests
            </h2>
            <ul>
              <li>Open-source contributions</li>
              <li>Blogging about web development</li>
              <li>Learning backend technologies</li>
              <li>Content creation on food security & natural herbs</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
