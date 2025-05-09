
import { useParams, Link } from 'react-router-dom';
import { getCollectibleById } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShoppingCart } from 'lucide-react';

const ItemDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const item = getCollectibleById(id || '');
  
  if (!item) {
    return (
      <div>
        <Navbar />
        <div className="marketplace-container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Item Not Found</h1>
          <p className="mb-8">We couldn't find the collectible you're looking for.</p>
          <Link to="/browse">
            <Button>Return to Browse</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      
      <div className="marketplace-container py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6">
          <ol className="flex space-x-2">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-navy">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/browse" className="text-muted-foreground hover:text-navy">
                Browse
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to={`/${item.category.toLowerCase()}`} className="text-muted-foreground hover:text-navy">
                {item.category}
              </Link>
            </li>
            <li>/</li>
            <li className="text-navy font-medium">{item.name}</li>
          </ol>
        </nav>
        
        {/* Item Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="bg-white p-6 rounded-lg border">
            <div className="aspect-square bg-neutral-light rounded-lg flex items-center justify-center mb-4">
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {/* Thumbnail images could go here */}
              <div className="aspect-square bg-neutral-light rounded-lg p-2">
                <img 
                  src={item.imageUrl} 
                  alt={`${item.name} thumbnail 1`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="aspect-square bg-neutral-light rounded-lg p-2">
                <img 
                  src={item.imageUrl} 
                  alt={`${item.name} thumbnail 2`}
                  className="w-full h-full object-contain opacity-70 hover:opacity-100"
                />
              </div>
            </div>
          </div>
          
          {/* Item Info */}
          <div>
            <div className="bg-white p-6 rounded-lg border mb-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge>{item.category}</Badge>
                <Badge variant="outline">{item.condition}</Badge>
                <Badge variant="outline">{item.year}</Badge>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{item.name}</h1>
              
              <div className="flex items-center mb-4">
                <span className="text-sm text-muted-foreground">Sold by </span>
                <Link to={`/seller/${item.seller.id}`} className="ml-1 text-navy hover:underline">
                  {item.seller.name}
                </Link>
                <div className="text-gold ml-2 flex items-center">
                  {/* Stars based on rating */}
                  {Array.from({ length: Math.round(item.seller.rating) }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              
              <div className="text-3xl font-bold mb-6 text-navy">${item.price.toFixed(2)}</div>
              
              <div className="space-y-4 mb-6">
                {item.auctionEnds ? (
                  <>
                    <div className="p-3 bg-neutral rounded-md">
                      <p className="text-sm font-medium">Auction Ends:</p>
                      <p className="text-lg font-semibold">{new Date(item.auctionEnds).toLocaleString()}</p>
                    </div>
                    <Button className="w-full bg-navy hover:bg-navy-light">
                      Place Bid
                    </Button>
                  </>
                ) : (
                  <Button className="w-full bg-navy hover:bg-navy-light flex items-center justify-center gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                )}
                <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white">
                  Make Offer
                </Button>
                <Button variant="ghost" className="w-full text-muted-foreground">
                  Add to Watchlist
                </Button>
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Origin</span>
                  <span className="font-medium">{item.origin}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Year</span>
                  <span className="font-medium">{item.year}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Condition</span>
                  <span className="font-medium">{item.condition}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Item ID</span>
                  <span className="font-medium">{item.id}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-xl font-bold mb-4">Shipping & Returns</h2>
              <p className="text-sm text-muted-foreground mb-2">
                • Free standard shipping on orders over $100
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                • Express shipping available at checkout
              </p>
              <p className="text-sm text-muted-foreground">
                • 14-day return policy for non-auction items
              </p>
            </div>
          </div>
        </div>
        
        {/* Item Details Tabs */}
        <div className="mt-8 bg-white p-6 rounded-lg border">
          <Tabs defaultValue="description">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details & History</TabsTrigger>
              <TabsTrigger value="shipping">Shipping Info</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <div className="prose max-w-none">
                <p className="text-lg mb-4">{item.description}</p>
                <p className="mb-4">
                  This exceptional piece is part of our curated collection of rare and valuable collectibles. Each item is carefully authenticated and comes with a certificate of authenticity.
                </p>
                <p>
                  Perfect for both seasoned collectors and those just starting their collection, this piece represents an important part of philatelic/numismatic history.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="details">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Historical Context</h3>
                <p className="mb-4">
                  This {item.category.toLowerCase().slice(0, -1)} originates from {item.origin} during a fascinating period in the country's history. Created in {item.year}, it represents the artistic and technical achievements of its time.
                </p>
                <h3 className="text-xl font-semibold mb-4">Authentication</h3>
                <p>
                  This item has been authenticated by our team of experts and comes with a certificate of authenticity. All items are guaranteed to be genuine.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="shipping">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
                <p className="mb-4">
                  We take special care when shipping collectibles to ensure they arrive safely. All items are securely packaged with protective materials and shipped with tracking.
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Standard Shipping (5-7 business days): $5.99</li>
                  <li>Express Shipping (2-3 business days): $12.99</li>
                  <li>Free standard shipping on orders over $100</li>
                </ul>
                <h3 className="text-xl font-semibold mb-4">Return Policy</h3>
                <p>
                  We offer a 14-day return policy for non-auction items. Items must be returned in their original condition and packaging. Please note that auction items are final sale.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ItemDetailPage;
