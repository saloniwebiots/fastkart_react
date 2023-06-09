import React from "react";
import { Link } from "react-router-dom";
import  Logo1  from '../../../assets/images/logo/full-white.png'


const Logo = () => {

  return (
    <Link href="/dashboard">
      <img  src={Logo1} alt="logo"  />
    </Link>
  );
};

export default Logo;
