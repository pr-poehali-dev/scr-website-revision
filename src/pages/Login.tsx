import ScrHeader from "@/components/ScrHeader";
import ScrFooter from "@/components/ScrFooter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ShieldAlert, User, Lock, Key, UserPlus, AlertTriangle, Terminal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import AccessTerminal from "@/components/AccessTerminal";

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [terminalMode, setTerminalMode] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");
    
    // Имитация входа
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/objects');
      }, 1500);
    }, 1000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");
    
    // Имитация регистрации
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setActiveTab("login");
        setIsSuccess(false);
      }, 1500);
    }, 1000);
  };

  if (terminalMode) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <ScrHeader />
        <main className="flex-1 py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Button 
              variant="ghost" 
              onClick={() => setTerminalMode(false)}
              className="mb-6"
            >
              ← Вернуться к стандартному входу
            </Button>
            
            <div className="text-center mb-8">
              <ShieldAlert className="h-12 w-12 mx-auto text-scr-accent mb-4" />
              <h1 className="text-3xl font-bold mb-2">SCR</h1>
              <p className="text-lg text-muted-foreground">Secure. Control. Explore.</p>
              <p className="text-sm mt-2">Терминальный режим доступа</p>
            </div>
            
            <AccessTerminal />
            
            <div className="text-center mt-8 text-sm text-muted-foreground">
              <p>Для входа используйте команду: login &lt;имя_пользователя&gt; &lt;пароль&gt;</p>
              <p>Для регистрации используйте команду: register</p>
              <p>Для получения справки используйте команду: help</p>
            </div>
          </div>
        </main>
        <ScrFooter />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ScrHeader />
      
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-md">
          <div className="text-center mb-8">
            <ShieldAlert className="h-12 w-12 mx-auto text-scr-accent mb-4" />
            <h1 className="text-3xl font-bold mb-2">SCR</h1>
            <p className="text-lg text-muted-foreground">Secure. Control. Explore.</p>
          </div>
          
          <Card className="border-scr-secondary">
            <CardHeader className="bg-scr-primary text-white">
              <CardTitle className="text-xl text-center">Система доступа SCR</CardTitle>
              <CardDescription className="text-gray-300 text-center">
                Войдите или зарегистрируйтесь для получения доступа
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-6">
              <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login" className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Вход
                  </TabsTrigger>
                  <TabsTrigger value="register" className="flex items-center gap-1">
                    <UserPlus className="h-4 w-4" />
                    Регистрация
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="login">
                  {isSuccess ? (
                    <div className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold mb-2">Вход выполнен успешно</h3>
                      <p className="text-muted-foreground">Перенаправление...</p>
                    </div>
                  ) : (
                    <form onSubmit={handleLogin}>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Электронная почта</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              id="email" 
                              type="email" 
                              placeholder="сотрудник@scr.org" 
                              className="pl-9" 
                              autoComplete="email"
                              required 
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="password">Пароль</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              id="password" 
                              type="password" 
                              placeholder="••••••••" 
                              className="pl-9" 
                              autoComplete="current-password"
                              required 
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="accessCode">Код доступа</Label>
                          <div className="relative">
                            <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              id="accessCode" 
                              placeholder="SCR-ACCESS-####" 
                              className="pl-9" 
                              autoComplete="off"
                              required 
                            />
                          </div>
                          <p className="text-xs text-muted-foreground">Введите ваш персональный код доступа SCR</p>
                        </div>

                        <div className="flex items-center space-x-2 pt-2">
                          <Checkbox id="remember" />
                          <label
                            htmlFor="remember"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Запомнить устройство
                          </label>
                        </div>
                        
                        {formError && (
                          <div className="bg-destructive/10 text-destructive p-3 rounded-md flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <p className="text-sm">{formError}</p>
                          </div>
                        )}
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-scr-secondary hover:bg-scr-primary"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Проверка..." : "Войти в систему"}
                        </Button>
                      </div>
                    </form>
                  )}
                </TabsContent>
                
                <TabsContent value="register">
                  {isSuccess ? (
                    <div className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold mb-2">Регистрация успешна</h3>
                      <p className="text-muted-foreground mb-2">
                        Ваш запрос на регистрацию принят. Проверьте электронную почту для подтверждения.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleRegister}>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">ФИО</Label>
                          <Input 
                            id="fullName" 
                            placeholder="Иванов Иван Иванович" 
                            autoComplete="name"
                            required 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="regEmail">Электронная почта</Label>
                          <Input 
                            id="regEmail" 
                            type="email" 
                            placeholder="ivan.ivanov@example.com" 
                            autoComplete="email"
                            required 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="regPassword">Пароль</Label>
                          <Input 
                            id="regPassword" 
                            type="password" 
                            placeholder="Минимум 8 символов" 
                            autoComplete="new-password"
                            minLength={8}
                            required 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Подтверждение пароля</Label>
                          <Input 
                            id="confirmPassword" 
                            type="password" 
                            placeholder="Повторите пароль" 
                            autoComplete="new-password"
                            minLength={8}
                            required 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="inviteCode">Код приглашения</Label>
                          <Input 
                            id="inviteCode" 
                            placeholder="SCR-INVITE-####" 
                            autoComplete="off"
                            required 
                          />
                          <p className="text-xs text-muted-foreground">
                            Введите код приглашения от сотрудника SCR
                          </p>
                        </div>

                        <div className="flex items-center space-x-2 pt-2">
                          <Checkbox id="terms" required />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Я согласен с правилами и условиями SCR Foundation
                          </label>
                        </div>
                        
                        {formError && (
                          <div className="bg-destructive/10 text-destructive p-3 rounded-md flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <p className="text-sm">{formError}</p>
                          </div>
                        )}
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-scr-secondary hover:bg-scr-primary"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Обработка..." : "Зарегистрироваться"}
                        </Button>
                      </div>
                    </form>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
            
            <CardFooter className="flex flex-col gap-4 border-t p-6">
              <div className="flex items-center gap-2 w-full">
                <div className="border-t flex-1"></div>
                <span className="text-xs text-muted-foreground">ИЛИ</span>
                <div className="border-t flex-1"></div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setTerminalMode(true)}
              >
                <Terminal className="mr-2 h-4 w-4" />
                Доступ через терминал
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                Попытка несанкционированного доступа является нарушением Протокола B-12 и преследуется согласно внутренним регламентам SCR Foundation.
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <ScrFooter />
    </div>
  );
};

export default Login;