import ScrHeader from "@/components/ScrHeader";
import ScrFooter from "@/components/ScrFooter";
import AccessTerminal from "@/components/AccessTerminal";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, ShieldAlert, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  
  const handleAuthentication = (success: boolean) => {
    setAuthenticated(success);
    if (success) {
      setTimeout(() => {
        navigate('/objects');
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ScrHeader />
      
      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <ShieldAlert className="h-12 w-12 mx-auto text-scr-accent mb-4" />
            <h1 className="text-3xl font-bold mb-2">Система авторизации SCR</h1>
            <p className="text-muted-foreground">Введите ваши учетные данные для доступа к закрытой информации</p>
            <Separator className="my-6 max-w-md mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Lock className="h-5 w-5 text-scr-accent" />
                Терминал доступа
              </h2>
              
              <AccessTerminal onAuthenticate={handleAuthentication} />
              
              {authenticated && (
                <Card className="mt-6 bg-green-50 border-green-200">
                  <CardContent className="p-4">
                    <p className="text-green-800">
                      Авторизация успешна. Перенаправление в систему...
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Уровни доступа</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg">Уровень 1</h3>
                    <p className="text-sm">Базовый доступ к несекретной информации об организации и низкоуровневым SCR-объектам класса Safe.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg">Уровень 2</h3>
                    <p className="text-sm">Доступ к большинству объектов класса Safe и некоторым объектам класса Normal.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg">Уровень 3</h3>
                    <p className="text-sm">Доступ ко всем объектам класса Normal и некоторым объектам класса Keter.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg">Уровень 4</h3>
                    <p className="text-sm">Полный доступ к большинству документов и объектов, включая класс Keter.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg">Уровень 5</h3>
                    <p className="text-sm">Высший уровень доступа. Предоставляется только членам Совета Смотрителей и ключевому персоналу.</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="mt-8 bg-scr-dark text-white">
                <CardContent className="p-4">
                  <div className="flex gap-2 items-start">
                    <AlertTriangle className="h-5 w-5 text-scr-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Предупреждение</h3>
                      <p className="text-sm">
                        Несанкционированный доступ к системам SCR является нарушением протокола безопасности и преследуется
                        согласно Директиве 4512-7A.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <ScrFooter />
    </div>
  );
};

export default Login;