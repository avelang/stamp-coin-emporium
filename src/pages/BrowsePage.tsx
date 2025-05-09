
import { useState } from 'react';
import { getFilteredCollectibles } from '@/data/mockData';
import { FilterOptions } from '@/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CollectibleCard from '@/components/CollectibleCard';
import FilterSidebar from '@/components/FilterSidebar';
import { Button } from '@/components/ui/button';

const BrowsePage = () => {
  const [filters, setFilters] = useState<FilterOptions>({});
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredItems = getFilteredCollectibles(filters);
  
  return (
    <div>
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-navy text-white py-12">
        <div className="marketplace-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Browse Collectibles</h1>
          <p className="text-lg">Discover rare stamps, coins, and other collectibles from around the world.</p>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="marketplace-container py-8">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <Button 
            onClick={() => setShowFilters(!showFilters)}
            variant="outline"
            className="w-full"
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar - Mobile */}
          {showFilters && (
            <div className="md:hidden bg-white p-4 rounded-lg border mb-4">
              <FilterSidebar filters={filters} setFilters={setFilters} />
            </div>
          )}
          
          {/* Filters Sidebar - Desktop */}
          <div className="hidden md:block w-64 bg-white p-6 rounded-lg border h-fit">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>
          
          {/* Results */}
          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-muted-foreground">
                Showing {filteredItems.length} results
              </p>
              
              {/* Sort Dropdown (for mobile) could go here */}
            </div>
            
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <CollectibleCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No items found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your filters to find what you're looking for.</p>
                <Button onClick={() => setFilters({})}>Clear All Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BrowsePage;
