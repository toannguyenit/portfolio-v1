"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.youtube.com/@toannvs",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/toan-nguyen-b667422b1/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/toannguyenit",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/nguyenvosongtoan/",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com/nguyenvosongtoan/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
