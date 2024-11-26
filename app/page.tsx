// app/page.tsx

"use client"; // Ensures this component runs only on the client side
import { useEffect, useState } from "react";
import { title, subtitle } from "@/components/primitives";
import { createClient } from "contentful";

export default function Home() {
  const [contentfulData, setContentfulData] = useState<any>(null);

  useEffect(() => {
    try {
      const client = createClient({
        space: 'y8tqzghh79hq',
        environment: 'master',
        accessToken: 'btPl9ttOf_lGlnQOmgW2lD2MPseJhkOgM93Io97Z-XI',
      });
  
      client
        .getEntry("3qDLTLliIId3Sro7gzwZv8")
        .then((entry) => setContentfulData(entry.fields))
        .catch(console.error);
    } catch (error) {
      console.error("Error initializing Contentful client:", error);
    }
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: "orange" })}>global digital needs agency&nbsp;</span>
        <br />
        <br />
        <span className={title()}>Accelerate Innovation Cultivate Resilience Sustain Growth</span>
        <div className={subtitle({ class: "mt-4" })}>LISTENING IGNITES CREATION</div>
      </div>

      {/* Render additional content from Contentful if available */}
      {contentfulData && (
        <div className="mt-8 text-center">
          <h2 className="text-xl font-bold">{contentfulData.title}</h2>
          <p className="mt-2">{contentfulData.description}</p>
        </div>
      )}
    </section>
  );
}