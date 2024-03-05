import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  { icon: <User2 size={20} />, text: "Nguyen Vo Song Toan" },
  { icon: <PhoneCall size={20} />, text: "+84 326 554 272" },
  { icon: <MailIcon size={20} />, text: "toannvs.it@gmail.com" },
  { icon: <Calendar size={20} />, text: "1996" },
  { icon: <GraduationCap size={20} />, text: "Web Developer" },
  { icon: <HomeIcon size={20} />, text: "Ho Chi Minh, Viet Nam" },
];

const qualifiCationData = [
  {
    title: "education",
    data: [
      {
        university: "Funix Online Education Joint Stock Company",
        qualification: "Java Developer",
        years: "2022-2023",
      },
      {
        university: "HCMC University of Technology and Education",
        qualification: "Pedagogy",
        years: "03/2018 – 11/2018",
      },
      {
        university: "HCMC University of Technology and Education",
        qualification: "Mechatronic",
        years: "08/2014-08/2018",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Saigon Medical & Pharmaceutical Hospital Joint Stock Company",
        role: "Freelancer Web Developer",
        years: "2023-present",
        description: "",
      },
      {
        company: "Funix Online Education Joint Stock Company",
        role: "Mentor Computer Science",
        years: "2023-present",
        description: "",
      },
      {
        company: "Toshiba Industrial Products Aisa Co. Ldt",
        role: "ME",
        years: "2019-2022",
        description: "",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      { name: "- HTML, CSS, SCSS, Javascript, JQuery, Ajax" },
      { name: "- NodeJs, NextJs/ExpressJs-ReactJs, , ViteJs-VueJS" },
      { name: "- Java, Spring MVC, Spring Boot, JPA" },
      { name: "- PHP, PHP MVC, Lavarel" },
      { name: "- MySQL, MongoDB, MariaDB" },
      { name: "- Familiarity with RESTful APIs" },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: "/about/vscode.svg" },
      { imgPath: "/about/eclipse.svg" },
      { imgPath: "/about/postman.svg" },
      { imgPath: "/about/sublime.svg" },
      { imgPath: "/about/github.svg" },
      { imgPath: "/about/mysql.svg" },
      { imgPath: "/about/figma.svg" },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* img  */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/dev.png"
            />
          </div>
          {/* tabs  */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none ">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Tabs content  */}
              <div>
                {/* personal  */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4 ">
                      Unmatched Service Quality for Over 1 years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experience.
                    </p>
                    {/* icon  */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* language  */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language skills</div>
                      <div className="border-b border-border"></div>
                      <div>English Toiec 570</div>
                      <div>Japanese N5+ (Lession 20 N4)</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications  */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience  */}
                      <div className="flex flex-col gap-y-6">
                        <div
                          className="flex gap-x-4 items-center text-[22px]
                        text-primary"
                        >
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualifiCationData, "experience").title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualifiCationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education  */}
                      <div className="flex flex-col gap-y-6">
                        <div
                          className="flex gap-x-4 items-center text-[22px]
                        text-primary"
                        >
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualifiCationData, "education").title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualifiCationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills  */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I Use Everydat</h3>
                    {/* skills  */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Skills
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list  */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0 mb-2"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools  */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tool list  */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
