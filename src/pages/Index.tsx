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
            <p className="text-xl mb-8">Secure. Control. Explore.</p>
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
                  <h3 className="text-xl font-bold text-center mb-2">Secure</h3>
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
                  <h3 className="text-xl font-bold text-center mb-2">Control</h3>
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
                  <h3 className="text-xl font-bold text-center mb-2">Explore</h3>
                  <p className="text-sm text-center">
                    Изучение природы и свойств SCR-объектов для понимания аномальных явлений и потенциального использования.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Деятельность */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-center mb-8">Наша деятельность</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-scr-primary p-2 rounded-full">
                  <SearchIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Поиск и обнаружение</h3>
                  <p className="text-sm text-gray-700">
                    Непрерывный мониторинг глобальных сетей данных и полевые экспедиции для выявления новых SCR-объектов и аномальных явлений.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-scr-primary p-2 rounded-full">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Разработка протоколов</h3>
                  <p className="text-sm text-gray-700">
                    Создание индивидуальных методов содержания для каждого SCR-объекта с учетом его уникальных свойств и потенциальных угроз.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-scr-primary p-2 rounded-full">
                  <Microscope className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Научные исследования</h3>
                  <p className="text-sm text-gray-700">
                    Междисциплинарное изучение SCR-объектов с привлечением специалистов из различных научных областей.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-scr-primary p-2 rounded-full">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Внешние связи</h3>
                  <p className="text-sm text-gray-700">
                    Взаимодействие с правительствами и иными организациями для обеспечения ресурсов и координации действий в случае аномальных инцидентов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Классификация (краткая) */}
        <section className="py-16 px-4 bg-scr-dark text-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-center mb-8">Система классификации SCR-объектов</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-scr-primary/30 p-4 rounded-lg border border-scr-safe">
                <div className="flex items-center mb-3">
                  <div className="bg-scr-safe p-1 w-8 h-8 flex items-center justify-center rounded-md font-bold text-white mr-2">S</div>
                  <h3 className="font-bold">SAFE</h3>
                </div>
                <p className="text-sm text-gray-300">Объекты, которые легко содержатся и не требуют особых мер безопасности.</p>
              </div>
              
              <div className="bg-scr-primary/30 p-4 rounded-lg border border-scr-normal">
                <div className="flex items-center mb-3">
                  <div className="bg-scr-normal p-1 w-8 h-8 flex items-center justify-center rounded-md font-bold text-black mr-2">N</div>
                  <h3 className="font-bold">NORMAL</h3>
                </div>
                <p className="text-sm text-gray-300">Объекты с непредсказуемым поведением, требующие повышенного внимания.</p>
              </div>
              
              <div className="bg-scr-primary/30 p-4 rounded-lg border border-scr-keter">
                <div className="flex items-center mb-3">
                  <div className="bg-scr-keter p-1 w-8 h-8 flex items-center justify-center rounded-md font-bold text-white mr-2">K</div>
                  <h3 className="font-bold">KETER</h3>
                </div>
                <p className="text-sm text-gray-300">Крайне опасные объекты, трудно поддающиеся содержанию и представляющие угрозу для реальности.</p>
              </div>
              
              <div className="bg-scr-primary/30 p-4 rounded-lg border border-scr-archiv">
                <div className="flex items-center mb-3">
                  <div className="bg-scr-archiv p-1 w-8 h-8 flex items-center justify-center rounded-md font-bold text-white mr-2">A</div>
                  <h3 className="font-bold">ARCHIV</h3>
                </div>
                <p className="text-sm text-gray-300">Специальные объекты, используемые для сдерживания других аномалий.</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-scr-secondary"
                onClick={() => navigate('/objects')}
              >
                <Database className="mr-2 h-4 w-4" />
                Просмотреть объекты
              </Button>
            </div>
          </div>
        </section>
        
        {/* Призыв к действию */}
        <section className="bg-scr-secondary text-white py-12 px-4">
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

// Дополнительные иконки для секции "Деятельность"
const SearchIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const ShieldCheck = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const Microscope = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 18h8" />
    <path d="M3 22h18" />
    <path d="M14 22a7 7 0 1 0 0-14h-1" />
    <path d="M9 14h2" />
    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
  </svg>
);

const Globe = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

export default Index;