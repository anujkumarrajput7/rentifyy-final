import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Address {
  street: string;
  city: string;
  state: string;
  pincode: string;
  landmark: string;
}

interface LocationContextType {
  city: string;
  address: Address | null;
  isLocationSet: boolean;
  isVerified: boolean;
  setCity: (city: string) => void;
  setAddress: (address: Address) => void;
  setIsVerified: (verified: boolean) => void;
  clearLocation: () => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [city, setCity] = useState<string>('');
  const [address, setAddress] = useState<Address | null>(null);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const savedCity = localStorage.getItem('rentify_city');
    const savedAddress = localStorage.getItem('rentify_address');
    const savedVerified = localStorage.getItem('rentify_verified');
    
    if (savedCity) setCity(savedCity);
    if (savedAddress) setAddress(JSON.parse(savedAddress));
    if (savedVerified) setIsVerified(savedVerified === 'true');
  }, []);

  useEffect(() => {
    if (city) localStorage.setItem('rentify_city', city);
    if (address) localStorage.setItem('rentify_address', JSON.stringify(address));
    localStorage.setItem('rentify_verified', String(isVerified));
  }, [city, address, isVerified]);

  const clearLocation = () => {
    setCity('');
    setAddress(null);
    setIsVerified(false);
    localStorage.removeItem('rentify_city');
    localStorage.removeItem('rentify_address');
    localStorage.removeItem('rentify_verified');
  };

  const isLocationSet = Boolean(city && address);

  return (
    <LocationContext.Provider value={{
      city,
      address,
      isLocationSet,
      isVerified,
      setCity,
      setAddress,
      setIsVerified,
      clearLocation
    }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
