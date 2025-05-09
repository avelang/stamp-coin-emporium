
export interface Collectible {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'Stamps' | 'Coins' | 'Banknotes' | 'Postcards';
  condition: 'Mint' | 'Excellent' | 'Very Good' | 'Good' | 'Fair' | 'Poor';
  year: string;
  origin: string;
  featured?: boolean;
  auctionEnds?: string;
  seller: {
    id: string;
    name: string;
    rating: number;
  };
}

export interface FilterOptions {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  condition?: string;
  origin?: string;
  sortBy?: 'price-asc' | 'price-desc' | 'newest' | 'oldest';
}
