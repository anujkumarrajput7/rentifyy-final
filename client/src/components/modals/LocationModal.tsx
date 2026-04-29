import { useState } from 'react';
import { Search, MapPin, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLocation } from '@/contexts/LocationContext';
import { useNavigate } from 'react-router-dom';

interface LocationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const popularCities = [
  { name: 'Mumbai', state: 'Maharashtra' },
  { name: 'Delhi', state: 'Delhi' },
  { name: 'Bangalore', state: 'Karnataka' },
  { name: 'Chennai', state: 'Tamil Nadu' },
  { name: 'Hyderabad', state: 'Telangana' },
  { name: 'Pune', state: 'Maharashtra' },
  { name: 'Kolkata', state: 'West Bengal' },
  { name: 'Ahmedabad', state: 'Gujarat' },
];

const LocationModal = ({ open, onOpenChange }: LocationModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { setCity } = useLocation();
  const navigate = useNavigate();

  const filteredCities = popularCities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCitySelect = (cityName: string) => {
    setCity(cityName);
    onOpenChange(false);
    navigate('/location');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Select Your City
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search for your city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                onClick={() => setSearchQuery('')}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Popular Cities */}
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-3">Popular Cities</p>
            <div className="grid grid-cols-2 gap-2">
              {filteredCities.map((city) => (
                <Button
                  key={city.name}
                  variant="outline"
                  className="justify-start h-auto py-3 hover:bg-primary/5 hover:border-primary"
                  onClick={() => handleCitySelect(city.name)}
                >
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{city.name}</span>
                    <span className="text-xs text-muted-foreground">{city.state}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {filteredCities.length === 0 && (
            <p className="text-center text-muted-foreground py-4">
              No cities found. Try a different search.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocationModal;
