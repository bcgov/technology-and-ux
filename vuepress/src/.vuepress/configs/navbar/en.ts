import type { NavbarConfig } from "@vuepress/theme-default";

export const en: NavbarConfig = [
  {
    text: "Guide",
    link: "/guide/",
  },
  {
    text: "Documentation",
    children: [
      {
        text: "Pre-Reading Material",
        children: [
          {
            text: "Pre-Reading Material",
            link: "/Documentation/Pre-reading-material/",
          },
          {
            text: "GitHub OIDC",
            link: "/Github_OIDC/",
          },
        ],
      },
      
    ],
  },
  {
    text: "Material",
    children: [
      {
        text: "PDF's",
        children: [
          {
            text: "Pre-reading-material",
            link: "https://github.com/bcgov/cloud-pathfinder/raw/master/docs/assets/Pre-reading-material.pdf",
          },
        ],
      },
    ],
  },
  {
    text: "CloudPathfinder",
    link: "https://github.com/bcgov/cloud-pathfinder",
  },
];
