import { Box, HStack, Link } from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

const handleClick = (anchor) => {
  const id = `${anchor}-section`;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function Header() {
  // const [scrollDirection, setScrollDirection] = useState("up");

  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   let prevPositionY = window.scrollY;

  //   const handleScroll = () => {
  //     const currPositionY = window.scrollY;
  //     const direction = currPositionY > prevPositionY ? "down" : "up";
  //     console.log(prevPositionY, currPositionY);
  //     if (
  //       direction !== scrollDirection &&
  //       (currPositionY - prevPositionY > 5 ||
  //         currPositionY - prevPositionY < -5)
  //     ) {
  //       setScrollDirection(direction);
  //     }
  //     prevPositionY = currPositionY > 0 ? currPositionY : 0;
  //     console.log("ScrollDirection", scrollDirection);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollDirection]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      ref={headerRef}
      // transform={
      //   scrollDirection === "down" ? "translateY(-100px)" : "translateY(0)"
      // }
      transitionProperty="transform"
      transitionDuration="0.5s"
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
            {socials.map((social) => (
              <Link
                key={social.url}
                href={social.url}
                style={{ marginRight: "1em" }}
              >
                <FontAwesomeIcon icon={social.icon} size="xl" />
              </Link>
            ))}
          </nav>
          <nav>
            <HStack spacing={8} fontWeight="bold">
              {sections.map((section) => (
                <a
                  key={section.name}
                  href={`#${section.url}`}
                  onClick={() => handleClick(section.anchor)}
                >
                  {section.name}
                </a>
              ))}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
}

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

const sections = [
  //   {
  //     name: "Home",
  //     anchor: "home",
  //     url: "/",
  //   },
  {
    name: "Projects",
    anchor: "projects",
    url: "projects",
  },
  {
    name: "Contact me",
    anchor: "contactme",
    url: "contact-me",
  },
];
