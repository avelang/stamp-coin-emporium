
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CollectibleCard from '@/components/CollectibleCard';
import { featuredCollectibles, recentCollectibles } from '@/data/mockData';

const Index = () => {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="marketplace-container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Discover Rare Treasures from Around the World
              </h1>
              <p className="text-lg md:text-xl">
                CollectorsHub is the premier marketplace for stamps, coins, and other collectibles. 
                Connect with fellow enthusiasts and find the perfect addition to your collection.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/browse">
                  <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy">
                    Start Exploring
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-navy-light">
                    Join Community
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1586787770310-76e30c35b422?auto=format&fit=crop&w=500&q=60" 
                alt="Rare stamps" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1586783908385-e7213dc69524?auto=format&fit=crop&w=500&q=60" 
                alt="Collectible coins" 
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collectibles */}
      <section className="py-16">
        <div className="marketplace-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Collectibles</h2>
            <Link to="/browse" className="text-navy hover:text-navy-light font-medium">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCollectibles.map((item) => (
              <CollectibleCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Collector Categories */}
      <section className="py-16 bg-neutral">
        <div className="marketplace-container">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/stamps" className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1586195831800-24f14c992cea?auto=format&fit=crop&w=800&q=80" 
                  alt="Stamps" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">Stamps</h3>
                  <p className="text-muted-foreground">Rare and vintage stamps from around the globe</p>
                </div>
              </div>
            </Link>
            <Link to="/coins" className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1566903035403-d65ec154e645?auto=format&fit=crop&w=800&q=80" 
                  alt="Coins" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">Coins</h3>
                  <p className="text-muted-foreground">Ancient and modern coins for every collector</p>
                </div>
              </div>
            </Link>
            <Link to="/banknotes" className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&w=800&q=80" 
                  alt="Banknotes" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">Banknotes</h3>
                  <p className="text-muted-foreground">Paper currency with historical significance</p>
                </div>
              </div>
            </Link>
            <Link to="/postcards" className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=800&q=80" 
                  alt="Postcards" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">Postcards</h3>
                  <p className="text-muted-foreground">Vintage postcards from different eras</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Arrivals */}
      <section className="py-16">
        <div className="marketplace-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Recent Arrivals</h2>
            <Link to="/browse" className="text-navy hover:text-navy-light font-medium">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentCollectibles.slice(0, 4).map((item) => (
              <CollectibleCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-navy text-white">
        <div className="marketplace-container">
          <h2 className="text-3xl font-bold mb-12 text-center">What Collectors Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-navy-light p-6 rounded-lg shadow-lg">
              <p className="italic mb-4">
                "I've been collecting stamps for 30 years and CollectorsHub has helped me find pieces I thought were impossible to acquire. Trustworthy sellers and excellent service."
              </p>
              <Separator className="my-4 bg-navy" />
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">Thomas H.</p>
                  <p className="text-sm text-gray-300">Philatelist, Chicago</p>
                </div>
              </div>
            </div>
            <div className="bg-navy-light p-6 rounded-lg shadow-lg">
              <p className="italic mb-4">
                "I sold my grandfather's coin collection and was amazed by how smooth the process was. Fair pricing and the community is incredibly knowledgeable and supportive."
              </p>
              <Separator className="my-4 bg-navy" />
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">Sarah L.</p>
                  <p className="text-sm text-gray-300">Numismatist, London</p>
                </div>
              </div>
            </div>
            <div className="bg-navy-light p-6 rounded-lg shadow-lg">
              <p className="italic mb-4">
                "As someone new to collecting, the resources and community here have been invaluable. I've learned so much and found amazing pieces to start my collection."
              </p>
              <Separator className="my-4 bg-navy" />
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">Michael R.</p>
                  <p className="text-sm text-gray-300">Collector, Sydney</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral">
        <div className="marketplace-container text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community of Collectors</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Whether you're buying, selling, or just browsing, CollectorsHub connects you with fellow enthusiasts who share your passion for history and collecting.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-navy hover:bg-navy-light text-white">
                Create an Account
              </Button>
            </Link>
            <Link to="/browse">
              <Button size="lg" variant="outline" className="border-navy text-navy hover:bg-neutral-dark">
                Browse Marketplace
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
