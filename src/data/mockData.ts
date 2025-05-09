
import { Collectible } from '../types';

export const featuredCollectibles: Collectible[] = [
  {
    id: '1',
    name: 'British Penny Black 1840',
    description: 'The world\'s first adhesive postage stamp used in a public postal system. This rare example is in excellent condition with full margins.',
    price: 1250.00,
    imageUrl: 'https://images.unsplash.com/photo-1586195831400-00e3cade3fca?auto=format&fit=crop&w=800&q=80',
    category: 'Stamps',
    condition: 'Very Good',
    year: '1840',
    origin: 'United Kingdom',
    featured: true,
    seller: {
      id: 'seller1',
      name: 'Philately Experts',
      rating: 4.9
    }
  },
  {
    id: '2',
    name: 'Ancient Roman Sestertius Coin',
    description: 'Bronze sestertius from the reign of Emperor Nero, featuring his portrait on the obverse and Roma seated on the reverse.',
    price: 950.00,
    imageUrl: 'https://images.unsplash.com/photo-1617160895032-11179689e7b5?auto=format&fit=crop&w=800&q=80',
    category: 'Coins',
    condition: 'Good',
    year: '54-68 CE',
    origin: 'Roman Empire',
    featured: true,
    seller: {
      id: 'seller2',
      name: 'Ancient Numismatics',
      rating: 4.7
    }
  },
  {
    id: '3',
    name: 'Inverted Jenny Stamp',
    description: 'A rare 24-cent U.S. postage stamp with an airplane printed upside-down. One of the most famous stamp errors in history.',
    price: 87500.00,
    imageUrl: 'https://images.unsplash.com/photo-1563914493680-2482be59041c?auto=format&fit=crop&w=800&q=80',
    category: 'Stamps',
    condition: 'Excellent',
    year: '1918',
    origin: 'United States',
    featured: true,
    auctionEnds: '2025-06-15T23:59:59Z',
    seller: {
      id: 'seller3',
      name: 'Rare Finds Auctions',
      rating: 4.95
    }
  },
  {
    id: '4',
    name: '1804 Silver Dollar',
    description: 'Known as the "King of American Coins," the 1804 Silver Dollar is one of the rarest and most valuable coins in American numismatics.',
    price: 35000.00,
    imageUrl: 'https://images.unsplash.com/photo-1592903204858-e288132912a2?auto=format&fit=crop&w=800&q=80',
    category: 'Coins',
    condition: 'Very Good',
    year: '1804',
    origin: 'United States',
    featured: true,
    auctionEnds: '2025-06-10T23:59:59Z',
    seller: {
      id: 'seller4',
      name: 'Heritage Collectors',
      rating: 5.0
    }
  }
];

export const recentCollectibles: Collectible[] = [
  {
    id: '5',
    name: 'Chinese Dragon Stamp',
    description: 'Imperial Chinese dragon stamp from the Qing Dynasty, with original gum and vibrant colors.',
    price: 750.00,
    imageUrl: 'https://images.unsplash.com/photo-1586683086816-c9a5074c8346?auto=format&fit=crop&w=800&q=80',
    category: 'Stamps',
    condition: 'Good',
    year: '1882',
    origin: 'China',
    seller: {
      id: 'seller5',
      name: 'Asian Philatelics',
      rating: 4.6
    }
  },
  {
    id: '6',
    name: 'Morgan Silver Dollar',
    description: 'Well-preserved Morgan Silver Dollar with excellent detail and natural patina.',
    price: 125.00,
    imageUrl: 'https://images.unsplash.com/photo-1602539757329-2f6de4f9d87c?auto=format&fit=crop&w=800&q=80',
    category: 'Coins',
    condition: 'Very Good',
    year: '1885',
    origin: 'United States',
    seller: {
      id: 'seller6',
      name: 'Silver City Collectibles',
      rating: 4.8
    }
  },
  {
    id: '7',
    name: 'Victorian Penny Red Stamp',
    description: 'Classic Victorian penny red stamp with plate number visible. In good condition with intact perforations.',
    price: 95.00,
    imageUrl: 'https://images.unsplash.com/photo-1583122893566-979c142a3655?auto=format&fit=crop&w=800&q=80',
    category: 'Stamps',
    condition: 'Good',
    year: '1864',
    origin: 'United Kingdom',
    seller: {
      id: 'seller7',
      name: 'Victorian Treasures',
      rating: 4.5
    }
  },
  {
    id: '8',
    name: 'Swiss 20 Franc Gold Coin',
    description: 'Beautiful gold coin featuring Helvetia, the female national personification of Switzerland.',
    price: 450.00,
    imageUrl: 'https://images.unsplash.com/photo-1613354109518-79b5104049ae?auto=format&fit=crop&w=800&q=80',
    category: 'Coins',
    condition: 'Excellent',
    year: '1935',
    origin: 'Switzerland',
    seller: {
      id: 'seller8',
      name: 'European Gold',
      rating: 4.9
    }
  },
  {
    id: '9',
    name: 'Japanese Cherry Blossom Postcard',
    description: 'Vintage hand-painted postcard featuring cherry blossoms from the Meiji era.',
    price: 85.00,
    imageUrl: 'https://images.unsplash.com/photo-1558522195-e1201b090344?auto=format&fit=crop&w=800&q=80',
    category: 'Postcards',
    condition: 'Good',
    year: '1905',
    origin: 'Japan',
    seller: {
      id: 'seller9',
      name: 'Vintage Asia',
      rating: 4.7
    }
  },
  {
    id: '10',
    name: 'German Notgeld Banknote',
    description: 'Emergency currency issued during hyperinflation in the Weimar Republic. Fascinating historical artifact.',
    price: 65.00,
    imageUrl: 'https://images.unsplash.com/photo-1574607383476-1b6099ead5f5?auto=format&fit=crop&w=800&q=80',
    category: 'Banknotes',
    condition: 'Very Good',
    year: '1922',
    origin: 'Germany',
    seller: {
      id: 'seller10',
      name: 'Historical Paper',
      rating: 4.6
    }
  },
  {
    id: '11',
    name: 'Australian Kangaroo Stamp',
    description: 'Early Australian stamp featuring the iconic kangaroo design on a map of Australia.',
    price: 120.00,
    imageUrl: 'https://images.unsplash.com/photo-1584449848678-5b38c4d78562?auto=format&fit=crop&w=800&q=80',
    category: 'Stamps',
    condition: 'Good',
    year: '1913',
    origin: 'Australia',
    seller: {
      id: 'seller11',
      name: 'Down Under Stamps',
      rating: 4.8
    }
  },
  {
    id: '12',
    name: 'Byzantine Gold Solidus',
    description: 'Gold solidus from the Byzantine Empire featuring Emperor Justinian II. Rare historical artifact.',
    price: 1850.00,
    imageUrl: 'https://images.unsplash.com/photo-1633166128724-eabc5a0b2c1a?auto=format&fit=crop&w=800&q=80',
    category: 'Coins',
    condition: 'Fair',
    year: 'circa 700 CE',
    origin: 'Byzantine Empire',
    seller: {
      id: 'seller12',
      name: 'Ancient World',
      rating: 4.9
    }
  }
];

export const allCollectibles = [...featuredCollectibles, ...recentCollectibles];

export const getCollectibleById = (id: string): Collectible | undefined => {
  return allCollectibles.find(item => item.id === id);
};

export const getFilteredCollectibles = (filters: any): Collectible[] => {
  return allCollectibles.filter(item => {
    if (filters.category && filters.category !== 'All' && item.category !== filters.category) return false;
    if (filters.minPrice && item.price < filters.minPrice) return false;
    if (filters.maxPrice && item.price > filters.maxPrice) return false;
    if (filters.condition && item.condition !== filters.condition) return false;
    if (filters.origin && item.origin !== filters.origin) return false;
    return true;
  });
};
