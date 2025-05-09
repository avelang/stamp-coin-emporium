
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collectible } from '@/types';

interface CollectibleCardProps {
  item: Collectible;
}

const CollectibleCard = ({ item }: CollectibleCardProps) => {
  return (
    <Link to={`/item/${item.id}`}>
      <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-lg">
        <div className="aspect-square relative overflow-hidden bg-neutral-light">
          <img 
            src={item.imageUrl} 
            alt={item.name} 
            className="object-contain w-full h-full p-4"
          />
          {item.featured && (
            <Badge className="absolute top-3 right-3 bg-gold text-navy font-medium">
              Featured
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between">
            <Badge variant="outline" className="mb-2">
              {item.category}
            </Badge>
            <Badge variant="outline" className="mb-2">
              {item.year}
            </Badge>
          </div>
          <h3 className="font-medium text-lg mb-1 line-clamp-2">{item.name}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{item.description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <span className="text-lg font-bold text-navy">${item.price.toFixed(2)}</span>
          {item.auctionEnds && (
            <span className="text-xs text-muted-foreground">
              Ends in {getRemainingTime(item.auctionEnds)}
            </span>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};

// Helper function to calculate remaining time
const getRemainingTime = (endTime: string): string => {
  const end = new Date(endTime).getTime();
  const now = new Date().getTime();
  const distance = end - now;
  
  if (distance < 0) return "Ended";
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  if (days > 0) {
    return `${days}d ${hours}h`;
  }
  
  return `${hours}h`;
};

export default CollectibleCard;
