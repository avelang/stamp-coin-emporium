
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { FilterOptions } from '@/types';

interface FilterSidebarProps {
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
}

const FilterSidebar = ({ filters, setFilters }: FilterSidebarProps) => {
  const categories = ['All', 'Stamps', 'Coins', 'Banknotes', 'Postcards'];
  const conditions = ['All', 'Mint', 'Excellent', 'Very Good', 'Good', 'Fair', 'Poor'];
  const origins = ['All', 'United States', 'United Kingdom', 'China', 'Germany', 'France', 'Japan', 'Australia', 'Other'];
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
  ];

  const [priceRange, setPriceRange] = React.useState([0, 2000]);

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  const applyPriceFilter = () => {
    setFilters({
      ...filters,
      minPrice: priceRange[0],
      maxPrice: priceRange[1]
    });
  };

  const handleCategoryChange = (category: string) => {
    setFilters({
      ...filters,
      category: category === 'All' ? undefined : category
    });
  };

  const handleConditionChange = (condition: string) => {
    setFilters({
      ...filters,
      condition: condition === 'All' ? undefined : condition
    });
  };

  const handleOriginChange = (origin: string) => {
    setFilters({
      ...filters,
      origin: origin === 'All' ? undefined : origin
    });
  };

  const handleSortChange = (sortBy: string) => {
    setFilters({
      ...filters,
      sortBy: sortBy as FilterOptions['sortBy']
    });
  };

  const resetFilters = () => {
    setFilters({});
    setPriceRange([0, 2000]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Filters</h3>
        <Button 
          variant="ghost" 
          className="text-sm text-muted-foreground hover:text-foreground"
          onClick={resetFilters}
        >
          Reset All
        </Button>
      </div>

      <Accordion type="single" collapsible className="w-full" defaultValue="category">
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <RadioGroup 
              defaultValue={filters.category || 'All'}
              onValueChange={handleCategoryChange}
              className="space-y-2"
            >
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <RadioGroupItem value={category} id={`category-${category}`} />
                  <Label htmlFor={`category-${category}`}>{category}</Label>
                </div>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="px-2">
              <Slider
                defaultValue={[0, 2000]}
                max={10000}
                step={100}
                value={priceRange}
                onValueChange={handlePriceChange}
              />
            </div>
            <div className="flex justify-between">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
            <Button onClick={applyPriceFilter} className="w-full">Apply</Button>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="condition">
          <AccordionTrigger>Condition</AccordionTrigger>
          <AccordionContent>
            <RadioGroup 
              defaultValue={filters.condition || 'All'}
              onValueChange={handleConditionChange}
              className="space-y-2"
            >
              {conditions.map((condition) => (
                <div key={condition} className="flex items-center space-x-2">
                  <RadioGroupItem value={condition} id={`condition-${condition}`} />
                  <Label htmlFor={`condition-${condition}`}>{condition}</Label>
                </div>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="origin">
          <AccordionTrigger>Origin</AccordionTrigger>
          <AccordionContent>
            <RadioGroup 
              defaultValue={filters.origin || 'All'}
              onValueChange={handleOriginChange}
              className="space-y-2"
            >
              {origins.map((origin) => (
                <div key={origin} className="flex items-center space-x-2">
                  <RadioGroupItem value={origin} id={`origin-${origin}`} />
                  <Label htmlFor={`origin-${origin}`}>{origin}</Label>
                </div>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sort">
          <AccordionTrigger>Sort By</AccordionTrigger>
          <AccordionContent>
            <RadioGroup 
              defaultValue={filters.sortBy || 'newest'}
              onValueChange={handleSortChange}
              className="space-y-2"
            >
              {sortOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`sort-${option.value}`} />
                  <Label htmlFor={`sort-${option.value}`}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterSidebar;
