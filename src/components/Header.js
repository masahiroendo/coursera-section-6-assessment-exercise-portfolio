import { Box, HStack, Link } from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const handleClick = (anchor) => {
  console.log(anchor);
  const id = `${anchor}-section`;
  console.log(id);
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function Header() {
  return (
    <Box
      position="sticky"
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
