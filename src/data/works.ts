export type Category = 'Crypto' | 'Memes' | 'Projects' | 'Threads';

export interface Work {
  id: string;
  title: string;
  category: Category;
  description: string;
  image?: string; // replace with real preview URL when available
  url: string;
  date: string;
  tags: string[];
  featured?: boolean;
}

export const works: Work[] = [
  {
    id: '1',
    title: 'Game Guess Streak',
    category: 'Memes',
    description:
      "I've already guessed 2 and I think today will be 3. Life situations turned into daily streak content.",
    url: 'https://x.com/AnikSanya/status/2066580228860756080',
    date: '2026-06-15',
    tags: ['life', 'meme', 'daily'],
    featured: true,
  },
  {
    id: '2',
    title: 'Right Choice',
    category: 'Memes',
    description: 'you made the right choice. Minimalist meme signal.',
    url: 'https://x.com/AnikSanya/status/2066582843388572079',
    date: '2026-06-15',
    tags: ['meme', 'reaction'],
    featured: false,
  },
  {
    id: '3',
    title: 'Broski Appreciation',
    category: 'Threads',
    description: 'gKast Angello — thanks broski. Community gratitude post.',
    url: 'https://x.com/AnikSanya/status/2066582476823089157',
    date: '2026-06-15',
    tags: ['community', 'shoutout'],
    featured: false,
  },
  {
    id: '4',
    title: 'New Game Signal',
    category: 'Memes',
    description:
      "hmm I haven't heard of this game — is it interesting? Exploring new drops and trends.",
    url: 'https://x.com/AnikSanya/status/2066858660047864096',
    date: '2026-06-16',
    tags: ['gaming', 'curiosity', 'meme'],
    featured: true,
  },
  // EDIT: Replace the placeholders below with your own X links and media
  {
    id: '5',
    title: '[EDIT] Web3 Onboarding Thread',
    category: 'Threads',
    description:
      'Placeholder: Paste your educational crypto thread here. Explain wallets, DeFi, or NFTs in your style.',
    url: 'https://x.com/AnikSanya',
    date: '2026-06-01',
    tags: ['web3', 'edu', 'placeholder'],
    featured: false,
  },
  {
    id: '6',
    title: '[EDIT] Token Analysis Meme',
    category: 'Crypto',
    description:
      'Placeholder: Add your hottest token or market take. Charts, reactions, or rug survival stories.',
    url: 'https://x.com/AnikSanya',
    date: '2026-05-20',
    tags: ['crypto', 'analysis', 'placeholder'],
    featured: false,
  },
  {
    id: '7',
    title: '[EDIT] Community Collab',
    category: 'Projects',
    description:
      'Placeholder: Highlight a project you partnered with. Ambassador work, content collab, or launch.',
    url: 'https://x.com/AnikSanya',
    date: '2026-05-15',
    tags: ['collab', 'project', 'placeholder'],
    featured: true,
  },
  {
    id: '8',
    title: '[EDIT] Meme Dump Vol. 1',
    category: 'Memes',
    description:
      'Placeholder: Your best meme carousel or reaction gallery. The stuff that hits different.',
    url: 'https://x.com/AnikSanya',
    date: '2026-05-10',
    tags: ['meme', 'carousel', 'placeholder'],
    featured: false,
  },
];
