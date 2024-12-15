"use client";
import React from "react";
import { maths } from "@/data/classes/9";
import ChapterCard from "@/app/components/chapters";
import BackButton from "@/app/components/backbtn";

const Grade9MathsNotes = () => {
  return (
    <main className="p-6">
      <BackButton />
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 mt-6 text-white text-center">
        Grade 9 <span className="text-primary">Maths</span> Notes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
        {maths.notes.map((chapter) => (
          <div key={chapter.name}>
            <ChapterCard title={chapter.name} fileId={chapter.path} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Grade9MathsNotes;
