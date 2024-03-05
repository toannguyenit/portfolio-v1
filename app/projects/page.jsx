"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
const projectsData = [
  {
    image: "/work/1.png",
    category: "Next Js",
    name: "Portfolio Page",
    description: "Tech: NextJs, ReactJs, Shadcn, Swiper, Tailwind...",
    link: "https://tnit.info/",
    github: "https://github.com/toannguyenit/portfolio-v1",
  },
  {
    image: "/work/2.png",
    category: "PHP",
    name: "Medical Web App",
    description: "Tech: PHP MVC, BootStrap, Jquery, Ajax, MySQL,...",
    link: "https://kqksk.com/",
    github: "https://github.com/toannguyenit/medical",
  },
  {
    image: "/work/4.png",
    category: "Laravel",
    name: "Happy House - Coming soon",
    description:
      "Tech: Laravel, ViteJs, VueJs, MariaDB, MongoDB, Flutter, WebSocket,...",
    link: "#",
    github: "#",
  },
  {
    image: "/work/4.png",
    category: "Wordpress",
    name: "Web Ecommerce - Coming soon",
    description: "Tech: Wordpress, FlatSome, Ecommerce,...",
    link: "https://orderhangmy.tnit.info/",
    github: "#",
  },
  {
    image: "/work/4.png",
    category: "Wordpress",
    name: "Web Landing Page - Coming soon",
    description: "Tech: Wordpress, FlatSome, Ecommerce,..",
    link: "https://orderhangmy.tnit.info/",
    github: "#",
  },
  {
    image: "/work/5.png",
    category: "Express Js",
    name: "Web Course - Coming soon",
    description: "Tech: ExpressJs,  ReactJs, Handlebars, SASS, MongoDB,...",
    link: "#",
    github: "https://github.com/toannguyenit/blog_nodeJs",
  },
  {
    image: "/work/6.png",
    category: "React JS",
    name: "Tiktok Clone FE - Coming soon",
    description: "Tech: ReactJS, React Hooks, SCSS,...",
    link: "#",
    github: "https://github.com/toannguyenit/tiktok-ui",
  },
  {
    image: "/work/7.png",
    category: "React JS",
    name: "Chat App Clone - Coming soon",
    description:
      "Tech: Context API, React Hooks, Ant Design, Firebase Auth/store, SCSS,...",
    link: "#",
    github: "https://github.com/toannguyenit/chat-app",
  },
  {
    image: "/work/8.png",
    category: "Java",
    name: "Raise Money - Coming soon",
    description: "Tech: Java, Spring MVC, Hibernate, MySQL",
    link: "#",
    github: "#",
  },
  {
    image: "/work/9.png",
    category: "Java",
    name: "Job Recruitment - Coming soon",
    description: "Tech: Java, Spring MVC, Spring Security, MySQL",
    link: "#",
    github: "#",
  },
  {
    image: "/work/10.png",
    category: "Java",
    name: "Raise Money - Coming soon",
    description: "Tech: Java, Spring Boot, JPA, RESTful API, MySQL",
    link: "#",
    github: "#",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectsData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  const fillteredProjects = projectsData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12 ">
      <div className="container mx-auto ">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto ">
          My project
        </h2>
        {/* tabs  */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content  */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {fillteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
