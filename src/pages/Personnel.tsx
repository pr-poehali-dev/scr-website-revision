import ScrHeader from "@/components/ScrHeader";
import ScrFooter from "@/components/ScrFooter";
import SrcTeamCard, { SrcTeam } from "@/components/SrcTeamCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Users, UserPlus, Shield, BookOpen, FileText } from "lucide-react";

// Примеры команд SRC
const mockTeams: SrcTeam[] = [
  {
    id: "Альфа-9",
    name: "Альфа-9",
    codeName: "Последняя Надежда",
    specialization: "Нейтрализация особо опасных объектов",
    members: 12,
    activeStatus: "Active",
    description: "Философия самопожертвования: Альфа-9 придерживается кодекса, согласно которому жизнь оператора не имеет значения по сравнению с безопасностью человечества. Они проводят специальные тренировки, чтобы подготовиться к летальному исходу."
  },
  {
    id: "Гамма-13",
    name: "Гамма-13",
    codeName: "Дикая Охота",
    specialization: "Поиск и захват мобильных объектов",
    members: 8,
    activeStatus: "Active",
    description: "Адаптивные стратегии: Члены группы обучены использовать нестандартные методы реагирования на экстренные ситуации, включая импровизацию и рискованные маневры. Они могут быстро менять тактику в зависимости от обстоятельств."
  },
  {
    id: "Дельта-6",
    name: "Дельта-6",
    codeName: "Дух Волка",
    specialization: "Когнитивные и мнемонические угрозы",
    members: 5,
    activeStatus: "Active",
    description: "Психологическая подготовка: Участники проходят углубленное обучение в области психологии и нейробиологии, что позволяет им лучше понимать когнитивные угрозы и разрабатывать эффективные противомеметические техники."
  },
  {
    id: "Омега-7",
    name: "Омега-7",
    codeName: "Пандора",
    specialization: "Использование аномальных объектов",
    members: 10,
    activeStatus: "Disbanded",
    description: "Специализированная группа, обученная использовать аномальные предметы и сущности в полевых операциях. Была расформирована после Инцидента Omega-7-A."
  }
];

const Personnel = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ScrHeader />
      
      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold mb-6">Персонал SCR</h1>
          
          <Tabs defaultValue="structure">
            <TabsList className="mb-6">
              <TabsTrigger value="structure" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                Структура
              </TabsTrigger>
              <TabsTrigger value="teams" className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                SRC Команды
              </TabsTrigger>
              <TabsTrigger value="careers" className="flex items-center gap-1">
                <UserPlus className="h-4 w-4" />
                Карьера
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="structure">
              <div className="space-y-8">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Организационная структура</h2>
                  <p className="text-lg mb-6">
                    SCR имеет строго иерархическую структуру для обеспечения эффективного содержания и изучения аномальных объектов.
                  </p>
                </div>
                
                <Card className="border-scr-secondary">
                  <CardHeader className="bg-scr-primary text-white">
                    <CardTitle className="text-xl">Совет Смотрителей</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p>
                      Высший руководящий орган, определяющий стратегию и политику SCR. Состоит из 15 анонимных членов,
                      личности которых известны только узкому кругу лиц. Совет принимает все ключевые решения относительно
                      функционирования организации.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-scr-secondary">
                  <CardHeader className="bg-scr-secondary text-white">
                    <CardTitle className="text-xl">Директор SCR</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p>
                      Оперативный руководитель, отвечающий за выполнение решений Совета Смотрителей и управление всеми 
                      подразделениями SCR. Координирует работу различных отделов и обеспечивает эффективное 
                      взаимодействие между ними.
                    </p>
                  </CardContent>
                </Card>
                
                <h3 className="text-xl font-bold mt-8 mb-4">Основные Отделы</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="bg-scr-dark text-white">
                      <CardTitle className="text-lg">Отдел Безопасности</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p>Обеспечение безопасности объектов и персонала, содержание SCR-объектов.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="bg-scr-dark text-white">
                      <CardTitle className="text-lg">Отдел Исследований</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p>Научные исследования SCR-объектов и их свойств.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="bg-scr-dark text-white">
                      <CardTitle className="text-lg">Отдел Сдерживания</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p>Разработка методов содержания SCR-объектов различных классов.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="bg-scr-dark text-white">
                      <CardTitle className="text-lg">Отдел Разведки</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p>Обнаружение и идентификация новых SCR-объектов в мире.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="bg-scr-dark text-white">
                      <CardTitle className="text-lg">Отдел Внешних Связей</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p>Взаимодействие с правительствами и другими организациями.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="bg-scr-dark text-white">
                      <CardTitle className="text-lg">Отдел Архивов</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p>Управление информацией обо всех SCR-объектах и их документацией.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="teams">
              <div className="space-y-6">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Специальные Реагирующие Команды (SRC)</h2>
                  <p className="mb-6">
                    SRC — это специализированные мобильные группы, обученные реагировать на различные типы аномальных угроз.
                    Каждая SRC имеет свою специализацию и кодовое наименование.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockTeams.map((team) => (
                    <SrcTeamCard key={team.id} team={team} />
                  ))}
                </div>
                
                <Card className="bg-scr-dark text-white mt-8">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="h-8 w-8 text-scr-accent flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">Доступ ограничен</h3>
                        <p>
                          Дополнительная информация о составе и операциях SRC команд доступна сотрудникам с уровнем допуска 3 и выше.
                          Для повышения уровня допуска обратитесь к вашему руководителю отдела.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="careers">
              <div className="space-y-8">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Карьера в SCR</h2>
                  <p className="text-lg mb-6">
                    SCR Foundation постоянно набирает высококвалифицированных специалистов для исследования и содержания аномальных объектов.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="bg-scr-dark text-white">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">Исследователи</CardTitle>
                        <BookOpen className="h-5 w-5 text-scr-accent" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="mb-2">Научный персонал, изучающий природу и свойства SCR-объектов.</p>
                      <p className="text-sm text-muted-foreground">
                        Требования: ученая степень в области физики, биологии, 
                        химии, психологии или смежных дисциплинах.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="bg-scr-dark text-white">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">Оперативники</CardTitle>
                        <Shield className="h-5 w-5 text-scr-accent" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="mb-2">Боевой персонал для сдерживания и нейтрализации опасных SCR-объектов.</p>
                      <p className="text-sm text-muted-foreground">
                        Требования: военная или полицейская подготовка,
                        отличная физическая форма.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="bg-scr-dark text-white">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">Технический персонал</CardTitle>
                        <Users className="h-5 w-5 text-scr-accent" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="mb-2">Инженеры, техники и ИТ-специалисты для обслуживания объектов SCR.</p>
                      <p className="text-sm text-muted-foreground">
                        Требования: техническое образование, 
                        опыт работы с сложными системами.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="bg-scr-secondary text-white mt-6">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <UserPlus className="h-8 w-8 text-white flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">Процесс найма</h3>
                        <p className="mb-4">
                          Набор персонала в SCR Foundation осуществляется через организации-прикрытия или по прямому приглашению.
                          Все кандидаты проходят строгую проверку и психологическое тестирование.
                        </p>
                        <Separator className="my-4 bg-white/20" />
                        <p className="text-sm">
                          Помните: Работа в SCR Foundation требует высокой степени секретности и готовности 
                          к необычным и потенциально опасным ситуациям. Все сотрудники подписывают соглашение 
                          о неразглашении с серьезными юридическими последствиями.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <ScrFooter />
    </div>
  );
};

export default Personnel;