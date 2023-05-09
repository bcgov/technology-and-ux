import type { SidebarConfig } from "@vuepress/theme-default";

export const en: SidebarConfig = {
  "/guide/": [
    {
      text: "Guide",
      children: ["", "using-vue"],
    },
  ],
  "/Documentation/Pre-reading-material/": [
    {
      text: "Pre Reading Material",
      children: [
        "000100_who_are_you.md",
        "000200_About_bcgov_cloud.md",
        "000300_sea_at_bc_Gov.md",
        "000400_procurement_value_proposition.md",
        "000500_shared_responsibility_model.md",
        "000600_Providing_an_sea_service.md",
        "000700_billing.md",
        "000800_communities_of_practise.md",
        "000900_service_levels.md",
        "001000_demo.md",
        "001100_questions.md",
        "001200_training.md",
      ],
    },
  ],
  "/Github_OIDC/": [
    {
      text: "Github-OIDC",
      children: [
      "01_Intraduction.md",
      "02_Configuring_AWS_to_use_OIDC.md",
      "03_Configuring_OIDC_in_GitHub.md",
      "04_Refining_the_policies.md",
      "05_readmore.md"
    ],
    },
  ],
};
