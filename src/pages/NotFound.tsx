import { useNavigate } from "react-router-dom";
import ScrHeader from "@/components/ScrHeader";
import ScrFooter from "@/components/ScrFooter";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ScrHeader />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <AlertTriangle className="h-16 w-16 text-scr-accent mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-2">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Страница не найдена</h2>
          
          <div className="bg-card p-6 rounded-lg border border-border mb-6">
            <h3 className="font-mono text-lg mb-2">ОШИБКА ДОСТУПА</h3>
            <p className="text-muted-foreground mb-4">
              Запрашиваемый файл не существует или у вас нет разрешения на его просмотр.
            </p>
            <p className="text-xs text-muted-foreground">
              Этот инцидент был зарегистрирован системой безопасности SCR.
            </p>
          </div>
          
          <Button 
            className="bg-scr-secondary hover:bg-scr-primary"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Вернуться на главную
          </Button>
        </div>
      </main>
      
      <ScrFooter />
    </div>
  );
};

export default NotFound;