"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "./ProjectCard";

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
    description: "Tech: Java, Spring MVC, Hibernate, MySQl",
    link: "#",
    github: "#",
  },
  {
    image: "/work/9.png",
    category: "Java",
    name: "Job Recruitment - Coming soon",
    description: "Tech: Java, Spring MVC, Spring Security, MySQl",
    link: "#",
    github: "#",
  },
  {
    image: "/work/10.png",
    category: "Java",
    name: "Raise Money - Coming soon",
    description: "Tech: Java, Spring Boot, JPA, RESTful API,  MySQl",
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
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text  */}
        <div
          className=" max-w-[400px] mx-auto xl:mx-0
         text-center xl:text-left mb-12 xl:h-[400px] flex  flex-col justify-center items-center xl:items-start"
        >
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Hello, this is my project</p>
          <Link href="/projects">
            <Button>All project</Button>
          </Link>
        </div>
        {/* slide  */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 ">
          <Swiper
            className="h-[480px] "
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 } }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectsData.slice(0, 8).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
