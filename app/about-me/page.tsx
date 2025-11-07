import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

const Page = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-12 gap-6 px-4">
      <h1 className="text-2xl md:text-4xl font-bold">About Me</h1>
      <div className="flex flex-col max-w-2xl text-lg leading-relaxed">
        <p>
          I&#39;m a Final-year B.Sc. Data Science student at {""}
          <LinkPreview url="https://rvu.edu.in/" className="font-bold">
            {" "}
            RV University
          </LinkPreview>, I’ve been actively exploring the real-world impact of AI across applications—from building Flutter-based mobile solutions to developing intelligent systems during my internships. I’ve worked as a Machine Learning Intern at EY, where I contributed to building Agentic AI frameworks for Natural Language to SQL workflows, and I’m currently an AI Application Developer Intern at ATmega Software Technologies LLP.
        </p>
        <div className="mt-4">
          Previously, I interned at Shaale as a Flutter Developer, where I built mobile features using Dart and Flutter.
My technical interests span AI Agents, RAG Pipelines, LangChain, Machine Learning, NLP, Data Engineering, and Generative AI. I enjoy creating data-driven solutions that are practical, scalable, and intelligent.
        </div>
        <p className="mt-4">
          Alongside academics and projects, I’ve also taken part in hackathons, university tech events, and collaborative problem-solving with teams. I'm currently seeking a 6-month internship in Data Science, ML, AI, or Data Engineering where I can apply my skills and continue learning in real-world environments.
        </p>
      </div>
    </section>
  );
};

export default Page;
