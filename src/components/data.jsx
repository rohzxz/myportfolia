import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

export const socialLinks = [
  {
    id: 1,
    href: "https://www.linkedin.com/in/rohit-ashva-92b662268/",
    icon: (
      <LinkedInIcon
        style={{
          backgroundColor: "white",
          color: "#0A66C2",
          borderRadius: "10px",
        }}
      />
    ),
  },
  {
    id: 2,
    href: "https://github.com/rohzxz",
    icon: (
      <GitHubIcon style={{ backgroundColor: "black", borderRadius: "10px" }} />
    ),
  },
  {
    id: 3,
    href: "https://twitter.com/rohit__ashva",
    icon: (
      <TwitterIcon
        style={{ backgroundColor: "#1DA1F2", borderRadius: "10px" }}
      />
    ),
  },
  {
    id: 4,
    href: "mailto:rohzxz@gmail.com",
    icon: (
      <EmailIcon
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "10px",
        }}
      />
    ),
  },
];
