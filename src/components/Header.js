import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [scrollY, setScrollY]= useState(0) 
  const prevScrollY = useRef(0)
  const [hide, setHide] = useState(false);
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  /*
  useEffect(()=>{
    console.log("hey")
    prevScrollY.current = scrollY
  },[scrollY])

  const handleScroll = (event) =>{
    scrollY = setScrollY(window.scrollY);
    console.log(hide)
    if ((scrollY - prevScrollY.current) > 0){
      setHide(true)
    }else{
      setHide(false)
    }
    
  }
  
  document.addEventListener('scroll', handleScroll)
  

*/
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing='24px'>
            {socials.map((item,index) => (<a href={item.url} key={index}  ><FontAwesomeIcon icon={item.icon} size="2x" /></a>))}
            
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={handleClick("projects")} href="#project" >Project</a>
              <a onClick={handleClick("contactme")} href="#contactme" >Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
