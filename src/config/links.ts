export const PROJECT_CONFIG = {
  name: "Tormentator",
  version: "0.1.0",
  description: "HUB de ferramentas para Tormenta 20",
  
  creator: {
    name: "Arthur Santos",
    github: "https://github.com/santos-arthur",
    githubUsername: "santos-arthur"
  },
  
  project: {
    repository: "https://github.com/Projeto-Tormentator/frontend",
    homepage: "https://tormentator.vercel.app",
    issues: "https://github.com/Projeto-Tormentator/frontend/issues",
    discussions: "https://github.com/Projeto-Tormentator/frontend/discussions"
  },
  
  community: {
    discord: "https://discord.gg/BvkGZzHCRF",
    discordInvite: "https://discord.gg/BvkGZzHCRF"
  },
  
  support: {
    pix: "https://livepix.gg/santosarthur",
  },
  
  tormenta20: {
    systemName: "Tormenta20",
    jamboEditoraName: "Jambô Editora",
    jamboEditora: "https://jamboeditora.com.br/",
    oficialSite: "https://jamboeditora.com.br/"
  },
  
  internal: {
    home: "/",
    privacy: "/privacy",
    terms: "/terms",
    cards: "/cards",
  }
} as const;

export const getLink = (category: keyof typeof PROJECT_CONFIG, key: string) => {
  const section = PROJECT_CONFIG[category] as Record<string, string>;
  return section[key] || "#";
};

export const getCreatorInfo = () => PROJECT_CONFIG.creator;

export const getProjectInfo = () => ({
  name: PROJECT_CONFIG.name,
  version: PROJECT_CONFIG.version,
  description: PROJECT_CONFIG.description
});

export const getCommunityLinks = () => PROJECT_CONFIG.community;

export const getSupportLinks = () => PROJECT_CONFIG.support;

export const getTormenta20Links = () => PROJECT_CONFIG.tormenta20;

export const getInternalLinks = () => PROJECT_CONFIG.internal;
