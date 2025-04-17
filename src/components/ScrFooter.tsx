import { ShieldAlert } from "lucide-react";

const ScrFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-scr-dark text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-6 w-6 text-scr-accent" />
            <div>
              <h2 className="scr-logo text-lg font-bold">SCR</h2>
              <p className="text-xs opacity-80">Secure. Control. Research.</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm opacity-70">Доступ к этому терминалу ограничен.</p>
            <p className="text-xs opacity-50 mt-1">SCR Foundation &copy; {currentYear}</p>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-scr-secondary text-xs opacity-40 text-center">
          <p>Настоящий документ классифицирован как "Для служебного пользования".</p>
          <p>Несанкционированный доступ или распространение карается согласно Протоколу A-7.</p>
        </div>
      </div>
    </footer>
  );
};

export default ScrFooter;