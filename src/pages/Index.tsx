import ScrHeader from "@/components/ScrHeader";
import ScrFooter from "@/components/ScrFooter";
import { Button } from "@/components/ui/button";
import { 
  ShieldAlert, 
  FileText, 
  Lock, 
  Users, 
  Database,
  AlertTriangle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ScrHeader />
      
      <main className="flex-1">
        {/* Герой-секция */}
        <section className="bg-scr-primary text-white py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <ShieldAlert className="h-16 w-16 mx-auto mb-4 text-scr-accent" />
            <h1 className="scr-logo text-4xl md:text-5xl font-bold mb-4">SCR Foundation</h1>
            <p className="text-xl mb-8">Secure. Control. Research.</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Защита человечества от аномальных угроз и сохранение стабильности реальности.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-scr-accent hover:bg-red-700"
                onClick={() => navigate('/login')}
              >
                <Lock className="mr-2 h-5 w-5" />
                Вход для сотрудников
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-scr-secondary"
                onClick={() => navigate('/objects')}
              >
                <Database className="mr-2 h-5 w-5" />
                Архив объектов
              </Button>
            </div>
          </div>
        </section>
        
        {/* Миссия и цели */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">Миссия и цели</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-scr-secondary">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="bg-scr-secondary p-3 rounded-full inline-block">
                      <Lock className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Сокрытие</h3>
                  <p className="text-sm text-center">
                    Защита общественности от информации о SCR-объектах и поддержание тайны существования аномалий.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-scr-secondary">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="bg-scr-accent p-3 rounded-full inline-block">
                      <AlertTriangle className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Содержание</h3>
                  <p className="text-sm text-center">
                    Разработка безопасных протоколов для изоляции и контроля SCR-объектов различных классов опасности.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-scr-secondary">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="bg-scr-secondary p-3 rounded-full inline-block">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Исследование</h3>
                  <p className="text-sm text-center">
                    Изучение природы и свойств SCR-объектов для понимания аномальных явлений и потенциального использования.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Призыв к действию */}
        <section className="bg-scr-dark text-white py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold mb-4">Станьте частью защиты человечества</h2>
            <p className="mb-6">
              SCR Foundation набирает квалифицированных специалистов для исследования аномальных явлений и защиты мира.
            </p>
            <Button 
              className="bg-scr-accent hover:bg-red-700"
              onClick={() => navigate('/personnel')}
            >
              <Users className="mr-2 h-5 w-5" />
              Узнать о персонале
            </Button>
          </div>
        </section>
      </main>
      
      <ScrFooter />
    </div>
  );
};

export default Index;