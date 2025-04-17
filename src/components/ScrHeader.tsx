import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShieldAlert, Database, Lock, Search, Menu } from "lucide-react";
import { useState } from 'react';

const ScrHeader = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-scr-primary text-white py-4 border-b border-scr-secondary">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2" onClick={() => navigate('/')} role="button">
            <ShieldAlert className="h-8 w-8 text-scr-accent" />
            <div>
              <h1 className="scr-logo text-xl md:text-2xl font-bold">SCR</h1>
              <p className="text-xs opacity-80">Secure. Control. Explore.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-scr-secondary"
              onClick={() => navigate('/objects')}
            >
              <Database className="mr-2 h-4 w-4" />
              Объекты
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-scr-secondary"
              onClick={() => navigate('/personnel')}
            >
              <Lock className="mr-2 h-4 w-4" />
              Персонал
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-scr-secondary"
              onClick={() => navigate('/search')}
            >
              <Search className="mr-2 h-4 w-4" />
              Поиск
            </Button>
            <Button 
              variant="outline" 
              className="border-scr-accent text-white hover:bg-scr-accent"
              onClick={() => navigate('/login')}
            >
              Доступ
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            className="md:hidden text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-2">
            <Button 
              variant="ghost" 
              className="text-white justify-start hover:bg-scr-secondary"
              onClick={() => navigate('/objects')}
            >
              <Database className="mr-2 h-4 w-4" />
              Объекты
            </Button>
            <Button 
              variant="ghost" 
              className="text-white justify-start hover:bg-scr-secondary"
              onClick={() => navigate('/personnel')}
            >
              <Lock className="mr-2 h-4 w-4" />
              Персонал
            </Button>
            <Button 
              variant="ghost" 
              className="text-white justify-start hover:bg-scr-secondary"
              onClick={() => navigate('/search')}
            >
              <Search className="mr-2 h-4 w-4" />
              Поиск
            </Button>
            <Button 
              variant="outline" 
              className="border-scr-accent text-white hover:bg-scr-accent"
              onClick={() => navigate('/login')}
            >
              Доступ
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default ScrHeader;