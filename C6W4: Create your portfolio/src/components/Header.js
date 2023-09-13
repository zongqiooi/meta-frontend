import React, { useEffect, useRef } from "react";
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
    id: 1,
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    id: 2,
    icon: faGithub,
    url: "https://github.com",
  },
  {
    id: 3,
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    id: 4,
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    id: 5,
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
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

  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      const currHeaderElement = headerRef.current;

      if (!currHeaderElement) {
        return;
      }

      if (prevScrollPos > currScrollPos) {
        currHeaderElement.style.transform = "translateY(0)";
      } else {
        currHeaderElement.style.transform = "translateY(-200px)";
      }

      prevScrollPos = currScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            <HStack spacing={6}>
              {socials.map((social) => (
                <a href={social.url} size="2x" key={social.id}>
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="#contact" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
