"use client";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Health problems",
      description: "People with Kaal Sarp Yoga may suffer from various health issues like headaches, stomach problems, and heart diseases.",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Financial issues",
      description: "Financial instability and struggles are common effects of Kaal Sarp Yoga",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Relationship troubles",
      description: "Kaal Sarp Yoga can cause relationship problems like misunderstandings, breakups, and divorce",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Delayed marriage",
      description: "People with Kaal Sarp Yoga may experience delays in marriage or problems in finding a suitable partner",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Career obstacles",
      description: "This yoga can cause obstacles in career growth, job stability, and professional success",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Mental stress",
      description: "People with Kaal Sarp Yoga may experience anxiety, depression, and other mental health issues",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Spiritual hindrances",
      description: "This yoga can cause hindrances in spiritual growth and progress",
      slug: "",
      isFeatured: true,
    },
    {
      title: "Sudden and unexpected events",
      description: "People with Kaal Sarp Yoga may experience sudden and unexpected events like accidents, thefts, and losses",
      slug: "",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center"></div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
