import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Home, Building, CheckCircle, Loader2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLocation } from '@/contexts/LocationContext';
import { useToast } from '@/hooks/use-toast';

const LocationPage = () => {
  const { city, address, setCity, setAddress, setIsVerified, isVerified } = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    street: address?.street || '',
    city: city || '',
    state: address?.state || '',
    pincode: address?.pincode || '',
    landmark: address?.landmark || '',
  });
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStep, setVerificationStep] = useState(0);

  const states = [
    'Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Telangana',
    'Gujarat', 'West Bengal', 'Rajasthan', 'Uttar Pradesh', 'Kerala'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleVerify = async () => {
    if (!formData.street || !formData.city || !formData.state || !formData.pincode) {
      toast({
        title: 'Missing Fields',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    setIsVerifying(true);
    setVerificationStep(1);

    // Simulate verification process
    await new Promise(resolve => setTimeout(resolve, 1000));
    setVerificationStep(2);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setVerificationStep(3);
    await new Promise(resolve => setTimeout(resolve, 500));

    setCity(formData.city);
    setAddress({
      street: formData.street,
      city: formData.city,
      state: formData.state,
      pincode: formData.pincode,
      landmark: formData.landmark,
    });
    setIsVerified(true);
    setIsVerifying(false);

    toast({
      title: 'Address Verified!',
      description: 'Your delivery address has been saved.',
    });
  };

  const handleContinue = () => {
    navigate('/categories');
  };

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            Set Your Delivery Location
          </h1>
          <p className="text-muted-foreground">
            We need your address to show available rentals in your area
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-card rounded-2xl shadow-card border border-border p-6 md:p-8">
          <div className="space-y-6">
            {/* Street Address */}
            <div className="space-y-2">
              <Label htmlFor="street">Street Address *</Label>
              <div className="relative">
                <Home className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  id="street"
                  placeholder="Enter your street address"
                  value={formData.street}
                  onChange={(e) => handleInputChange('street', e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* City and State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="city"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) => handleInputChange('state', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Pincode and Landmark */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  placeholder="Enter pincode"
                  value={formData.pincode}
                  onChange={(e) => handleInputChange('pincode', e.target.value)}
                  maxLength={6}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="landmark">Landmark (Optional)</Label>
                <Input
                  id="landmark"
                  placeholder="Nearby landmark"
                  value={formData.landmark}
                  onChange={(e) => handleInputChange('landmark', e.target.value)}
                />
              </div>
            </div>

            {/* Verification Progress */}
            {isVerifying && (
              <div className="bg-muted rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-3">
                  {verificationStep >= 1 ? (
                    <CheckCircle className="w-5 h-5 text-success" />
                  ) : (
                    <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                  )}
                  <span className={verificationStep >= 1 ? 'text-foreground' : 'text-muted-foreground'}>
                    Validating address format
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {verificationStep >= 2 ? (
                    <CheckCircle className="w-5 h-5 text-success" />
                  ) : verificationStep >= 1 ? (
                    <Loader2 className="w-5 h-5 animate-spin text-primary" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                  )}
                  <span className={verificationStep >= 2 ? 'text-foreground' : 'text-muted-foreground'}>
                    Checking delivery availability
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {verificationStep >= 3 ? (
                    <CheckCircle className="w-5 h-5 text-success" />
                  ) : verificationStep >= 2 ? (
                    <Loader2 className="w-5 h-5 animate-spin text-primary" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                  )}
                  <span className={verificationStep >= 3 ? 'text-foreground' : 'text-muted-foreground'}>
                    Saving your location
                  </span>
                </div>
              </div>
            )}

            {/* Verified Status */}
            {isVerified && !isVerifying && (
              <div className="bg-success/10 rounded-xl p-4 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-success" />
                <div>
                  <p className="font-medium text-foreground">Address Verified</p>
                  <p className="text-sm text-muted-foreground">
                    Delivering to {formData.street}, {formData.city}
                  </p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              {!isVerified ? (
                <Button
                  className="flex-1"
                  size="lg"
                  onClick={handleVerify}
                  disabled={isVerifying}
                >
                  {isVerifying ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Verify Address
                    </>
                  )}
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setIsVerified(false)}
                  >
                    Edit Address
                  </Button>
                  <Button className="flex-1" size="lg" onClick={handleContinue}>
                    Continue Browsing <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
