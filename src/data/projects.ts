export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Meme Engine',
    role: 'Creator & Strategist',
    description:
      'Built a recurring meme format that drove consistent engagement across crypto and gaming communities.',
    tags: ['Content', 'Memes', 'Growth'],
    link: 'https://x.com/AnikSanya',
  },
  {
    id: 'p2',
    title: 'Community Signal',
    role: 'Community Lead',
    description:
      'Grew an organic follower base around life situations, humor, and Web3 curiosity. 925+ signals strong.',
    tags: ['Community', 'X', 'Organic'],
    link: 'https://x.com/AnikSanya',
  },
  {
    id: 'p3',
    title: 'Web3 Onboarding',
    role: 'Educator',
    description:
      'Translating complex crypto concepts into bite-sized, meme-friendly content for newcomers.',
    tags: ['Education', 'Web3', 'Threads'],
    link: 'https://x.com/AnikSanya',
  },
  {
    id: 'p4',
    title: 'Brand Partnerships',
    role: 'Ambassador',
    description:
      'Collaborated with emerging crypto projects to create authentic, meme-aware promotional content.',
    tags: ['Partnerships', 'Crypto', 'Content'],
    link: 'https://x.com/AnikSanya',
  },
];
