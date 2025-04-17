import ScrHeader from "@/components/ScrHeader";
import ScrFooter from "@/components/ScrFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { History as HistoryIcon, AlertTriangle, FileText } from "lucide-react";

const History = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ScrHeader />
      
      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-2">История SCR Foundation</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Некоторые исторические данные о формировании и развитии организации
          </p>
          
          <div className="bg-card p-6 rounded-lg border border-border mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-scr-accent flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2">Гриф секретности</h2>
                <p className="mb-3">
                  Представленная ниже информация классифицирована. Несанкционированное распространение 
                  преследуется по Директиве 4512-7A.
                </p>
                <p className="text-sm text-muted-foreground">
                  Примечание: Некоторые даты и события могут быть отредактированы с целью защиты 
                  особо чувствительной информации.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <HistoryIcon className="h-6 w-6 text-scr-accent" />
                Истоки организации
              </h2>
              <Separator className="mb-6" />
              
              <div className="space-y-6">
                <p>
                  История SCR окутана тайной. Официально год основания организации не известен, 
                  но косвенные данные и архивные документы указывают на период между концом XIX 
                  и началом XX веков. Некоторые исследователи связывают возникновение SCR с ростом 
                  интереса к оккультным наукам и появлением первых задокументированных аномальных явлений.
                </p>
                
                <Card>
                  <CardHeader className="bg-scr-dark text-white">
                    <CardTitle className="text-lg">Ранние операции</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-sm">
                      По неподтвержденным данным, первые операции SCR были связаны с сокрытием информации 
                      о "падении Тунгусского метеорита" или "слухах о таинственных экспериментах в 
                      нацистской Германии". Эти события считаются первыми крупномасштабными 
                      вмешательствами организации.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Основные исторические вехи</h2>
              <Separator className="mb-6" />
              
              <div className="space-y-6">
                <div className="relative pl-8 pb-8 border-l-2 border-scr-secondary">
                  <div className="absolute left-0 top-0 -ml-2.5 h-5 w-5 rounded-full bg-scr-primary"></div>
                  <div className="mb-1">
                    <span className="text-xs bg-scr-dark text-white px-2 py-1 rounded-full">Предположительно 1910-е</span>
                  </div>
                  <h3 className="text-lg font-bold">Формирование протокола классификации</h3>
                  <p className="text-sm">
                    Первая задокументированная попытка классифицировать аномальные объекты. 
                    Создана система из трех категорий, позже эволюционировавшая в современную 
                    систему классификации.
                  </p>
                </div>
                
                <div className="relative pl-8 pb-8 border-l-2 border-scr-secondary">
                  <div className="absolute left-0 top-0 -ml-2.5 h-5 w-5 rounded-full bg-scr-primary"></div>
                  <div className="mb-1">
                    <span className="text-xs bg-scr-dark text-white px-2 py-1 rounded-full">1940-e</span>
                  </div>
                  <h3 className="text-lg font-bold">Период активного роста</h3>
                  <p className="text-sm">
                    После Второй мировой войны наблюдается резкий рост аномальных явлений и, 
                    как следствие, расширение SCR. Создание первых крупных исследовательских 
                    комплексов и глобальной сети инцидентной регистрации.
                  </p>
                </div>
                
                <div className="relative pl-8 pb-8 border-l-2 border-scr-secondary">
                  <div className="absolute left-0 top-0 -ml-2.5 h-5 w-5 rounded-full bg-scr-primary"></div>
                  <div className="mb-1">
                    <span className="text-xs bg-scr-dark text-white px-2 py-1 rounded-full">1970-е</span>
                  </div>
                  <h3 className="text-lg font-bold">Создание Совета Смотрителей</h3>
                  <p className="text-sm">
                    Реформирование системы управления и создание Совета Смотрителей как верховного 
                    руководящего органа. Формирование современной структуры отделов и иерархии.
                  </p>
                </div>
                
                <div className="relative pl-8 pb-0 border-l-2 border-scr-secondary">
                  <div className="absolute left-0 top-0 -ml-2.5 h-5 w-5 rounded-full bg-scr-primary"></div>
                  <div className="mb-1">
                    <span className="text-xs bg-scr-dark text-white px-2 py-1 rounded-full">1990-настоящее время</span>
                  </div>
                  <h3 className="text-lg font-bold">Современный период</h3>
                  <p className="text-sm">
                    Развитие технологий сдерживания, создание специализированных Н-МОГ и 
                    глобальной сети мониторинга. Внедрение цифровых технологий в систему 
                    архивирования и управления данными.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-scr-accent" />
                Важные документы
              </h2>
              <Separator className="mb-6" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="bg-scr-secondary text-white">
                    <CardTitle className="text-lg">Манифест основателей</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-sm mb-2">
                      Документ, предположительно составленный первыми руководителями SCR, 
                      описывающий основные цели и принципы организации.
                    </p>
                    <div className="text-xs text-gray-500">
                      Статус: <span className="text-scr-accent font-medium">Частично восстановлен</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="bg-scr-secondary text-white">
                    <CardTitle className="text-lg">Директива по сдерживанию</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-sm mb-2">
                      Основополагающий документ, регламентирующий методики содержания 
                      различных типов аномальных объектов.
                    </p>
                    <div className="text-xs text-gray-500">
                      Статус: <span className="text-green-600 font-medium">Активен, редакция 17.3</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="bg-scr-secondary text-white">
                    <CardTitle className="text-lg">Хроники Происшествия К-27</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-sm mb-2">
                      Подробное описание одного из крупнейших прорывов содержания 
                      и последующей реорганизации протоколов безопасности.
                    </p>
                    <div className="text-xs text-gray-500">
                      Статус: <span className="text-scr-accent font-medium">Засекречен, доступ уровня 4</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="bg-scr-secondary text-white">
                    <CardTitle className="text-lg">Меморандум "Омега"</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-sm mb-2">
                      Документ, описывающий сценарии "конца света" и соответствующие 
                      протоколы действий организации.
                    </p>
                    <div className="text-xs text-gray-500">
                      Статус: <span className="text-scr-accent font-medium">Строго засекречен, доступ уровня 5</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <ScrFooter />
    </div>
  );
};

export default History;