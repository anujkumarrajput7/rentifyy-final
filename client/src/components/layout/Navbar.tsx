import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, MapPin, User, LogOut, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLocation } from '@/contexts/LocationContext';
import { useAuth } from '@/contexts/AuthContext';
import LocationModal from '@/components/modals/LocationModal';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const { city, isLocationSet } = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Rentify Logo"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Rentify
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Location Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLocationModalOpen(true)}
                className="hidden sm:flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="max-w-[100px] truncate">
                  {isLocationSet ? city : 'Set Location'}
                </span>
                <ChevronDown className="w-4 h-4" />
              </Button>

              {/* Auth Buttons / User Menu */}
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <span className="hidden md:inline font-medium">
                        {user?.name}
                      </span>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => navigate('/location')}>
                      <MapPin className="w-4 h-4 mr-2" />
                      My Address
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="text-destructive"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="hidden sm:flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={() => navigate('/auth')}>
                    Login
                  </Button>
                  <Button size="sm" onClick={() => navigate('/auth?mode=signup')}>
                    Sign Up
                  </Button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-2">
                {/* Mobile Location Button */}
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsLocationModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="justify-start"
                >
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  {isLocationSet ? city : 'Set Location'}
                </Button>

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-2 px-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}

                {!isAuthenticated && (
                  <div className="flex gap-2 mt-2 pt-2 border-t border-border">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => navigate('/auth')}
                    >
                      Login
                    </Button>
                    <Button
                      className="flex-1"
                      onClick={() => navigate('/auth?mode=signup')}
                    >
                      Sign Up
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <LocationModal
        open={isLocationModalOpen}
        onOpenChange={setIsLocationModalOpen}
      />
    </>
  );
};

export default Navbar;
