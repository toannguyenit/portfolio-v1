import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo.png' width={54} height={54} priority alt=""/>
    </Link>
  );
};

export default Logo;
