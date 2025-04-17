import { useParams, useNavigate } from "react-router-dom";
import ScrHeader from "@/components/ScrHeader";
import ScrFooter from "@/components/ScrFooter";
import ScrClassificationBadge from "@/components/ScrClassificationBadge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft, FileText, Lock, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrObject } from "@/components/ScrObjectCard";
import { useState } from "react";
import AccessTerminal from "@/components/AccessTerminal";

// Пример объектов SCR (тот же массив, что и в Objects.tsx)
const mockObjects: Record<string, ScrObject> = {
  "173": {
    id: "173",
    name: "Скульптура",
    classification: "KETER",
    containmentClass: "Евклид",
    disruptionClass: "Класс-2",
    riskClass: "Опасный",
    shortDescription: "Гуманоидная скульптура из бетона, способная двигаться, когда не находится под прямым наблюдением.",
    accessLevel: 3,
    imageUrl: "/placeholder.svg"
  },
  "682": {
    id: "682",
    name: "Неуничтожимая рептилия",
    classification: "KETER",
    containmentClass: "Максимальный",
    disruptionClass: "Класс-4",
    riskClass: "Критический",
    shortDescription: "Крупная рептилия с высоким интеллектом, способная к адаптации и регенерации, проявляющая враждебность к людям.",
    accessLevel: 4,
    imageUrl: "/placeholder.svg"
  },
  "999": {
    id: "999",
    name: "Устройство автономной навигации",
    classification: "SAFE",
    containmentClass: "Минимальный",
    disruptionClass: "Нет",
    riskClass: "Минимальный",
    shortDescription: "Небольшое устройство, всегда указыв▨█▨█▨ ▨ ▨▨▨▨▨▨▨▨▨▨▨ ▨▨▨▨▨▨▨▨▨█ ▨█▨▨▨▨▨.",
    accessLevel: 2,
    imageUrl: "/placeholder.svg"
  },
  "096": {
    id: "096",
    name: "Стеснительное лицо",
    classification: "NORMAL",
    containmentClass: "Строгий",
    disruptionClass: "Класс-3",
    riskClass: "Опасный",
    shortDescription: "Гуманоидная сущность, проявляющая агрессию при визуальном контакте с её лицом.",
    accessLevel: 3,
    imageUrl: "/placeholder.svg"
  },
  "4217": {
    id: "4217",
    name: "Древняя книга знаний",
    classification: "ARCHIV",
    containmentClass: "Специальный",
    disruptionClass: "Класс-1",
    riskClass: "Средний",
    shortDescription: "Старинная кожаная книга без названия, содержащая информацию о других SCR-объектах. Текст в книге периодически изменяется.",
    accessLevel: 4,
    imageUrl: "/placeholder.svg"
  },
  "1987": {
    id: "1987",
    name: "Временная петля",
    classification: "NORMAL",
    containmentClass: "Темпоральный",
    disruptionClass: "Класс-2",
    riskClass: "Высокий",
    shortDescription: "Пространственно-временная аномалия диаметром около 500 метров. Внутри аномалии время непрерывно повторяется в 24-часовых циклах.",
    accessLevel: 3,
    imageUrl: "/placeholder.svg"
  }
};

// Пример содержания
const containmentProcedures = {
  "173": "SCR-173 должен храниться в запертом контейнере. В камере должны постоянно находиться минимум двое сотрудников, которые поддерживают визуальный контакт с SCR-173 до закрытия дверей контейнера. Персонал инструктирован моргать поочередно.",
  "682": "SCR-682 должен содержаться в стальной камере объемом 5м x 5м x 5м, заполненной соляной кислотой. Камера должна проверяться на наличие повреждений каждые 24 часа. Любое взаимодействие требует минимум 6 вооруженных охранников и авторизации уровня 4.",
  "999": "SCR-999 должен храниться в стандартном контейнере для безопасных объектов. Никаких специальных мер содержания не требуется.",
  "096": "SCR-096 должен содержаться в звуконепроницаемой стальной камере 5м x 5м x 5м. До входа в камеру все персонал обязан удостовериться, что лицо SCR-096 полностью закрыто специальной маской.",
  "4217": "SCR-4217 должен храниться в специальном сейфе с контролем окружающей среды. Доступ разрешён только с авторизацией уровня 4.",
  "1987": "SCR-1987 окружен зоной безопасности в радиусе 2 км. Вход и выход из зоны контролируется специальным временным барьером."
};

// Пример описаний
const descriptions = {
  "173": "SCR-173 представляет собой статую из бетона и арматуры высотой 2,1 метра. Объект оживает, когда не находится под прямым визуальным наблюдением, включая камеры наблюдения. При этом SCR-173 перемещается с высокой скоростью, атакуя живые существа и ломая им шею. Объект не двигается в присутствии прямого взгляда нескольких людей, но способен перемещаться если наблюдатель моргнет или отведет взгляд.",
  "682": "SCR-682 - крупная рептилия неизвестного происхождения, демонстрирующая высокий интеллект и инстинктивную ненависть к человечеству. Обладает способностью к быстрой регенерации и адаптации к любым угрозам. Многочисленные попытки уничтожения оказались безуспешными. SCR-682 продемонстрировал способность переживать экстремальные условия, включая экспозицию кислотами, радиацией и давлением.",
  "999": "SCR-999 - это компактное устройство цилиндрической формы размером примерно с наручные часы. Устройство имеет одну стрелку, которая всегда указывает в направлении ближайшего аномального объекта в радиусе 1 км. Когда SCR-999 сам является ближайшим аномальным объектом, стрелка начинает беспорядочно вращаться.",
  "096": "SCR-096 - гуманоид бледного цвета высотой примерно 2,5 метра с непропорционально длинными конечностями. При визуальном контакте с лицом SCR-096 (прямом или через фотографии/видео) объект впадает в состояние сильного эмоционального стресса, после чего преследует наблюдателя с аномальной скоростью до его нейтрализации.",
  "4217": "SCR-4217 - старинная кожаная книга без названия, содержащая информацию о других SCR-объектах. Текст в книге периодически изменяется, отражая обновленные данные. Некоторые страницы содержат информацию о SCR-объектах, еще не обнаруженных Фондом, что делает SCR-4217 ценным исследовательским инструментом.",
  "1987": "SCR-1987 - пространственно-временная аномалия диаметром около 500 метров. Внутри аномалии время непрерывно повторяется в 24-часовых циклах. Субъекты, входящие в зону действия аномалии, подвергаются ее влиянию и начинают повторять свои действия, не осознавая временной петли, если только они не обладают специальной защитой."
};

// Пример протоколов тестирования
const testLogs = {
  "173": "Тест 173-A1: Два сотрудника класса D поочередно моргали в присутствии SCR-173. Объект переместился на расстояние 1,5 метра за 0,02 секунды.\n\nТест 173-A2: Установлена камера наблюдения в камере SCR-173. Объект не двигался в присутствии активной камеры, но переместился, когда сигнал был прерван.",
  "682": "Тест 682-B5: Образец SCR-682 был подвергнут воздействию концентрированной соляной кислоты. Наблюдалось частичное разрушение тканей, однако полная регенерация произошла в течение 6 часов.\n\nТест 682-B7: Попытка уничтожения SCR-682 с использованием SCR-[ДАННЫЕ УДАЛЕНЫ]. Результаты: неудачно. 3 жертвы среди персонала.",
  "999": "Тест 999-C1: SCR-999 был размещен в стандартной комнате без других SCR-объектов. Стрелка начала вращаться.\n\nТест 999-C2: SCR-999 был помещен в комнату с SCR-173 на расстоянии 50 метров. Стрелка точно указывала на местоположение SCR-173.",
  "096": "Тест 096-D1: Субъект класса D был показан фотографию лица SCR-096. SCR-096 вошел в состояние возбуждения через 4,3 секунды и преследовал субъекта до нейтрализации, несмотря на расстояние в 5 км.\n\nТест 096-D4: [ДАННЫЕ УДАЛЕНЫ]",
  "4217": "Тест 4217-E1: SCR-4217 открыли на случайной странице. Обнаружено подробное описание SCR-3000, объекта, до этого неизвестного Фонду. Через 3 дня SCR-3000 был обнаружен в указанном в книге месте.\n\nТест 4217-E3: Исследователь попытался вписать ложную информацию в SCR-4217. Текст исчез через 30 минут и был заменен правильными данными.",
  "1987": "Тест 1987-F2: Группа из 3 исследователей с хронометрами вошла в зону SCR-1987. Через 24 часа исследователи вернулись без воспоминаний о событиях внутри зоны, их хронометры показывали, что прошли только 3 часа.\n\nТест 1987-F5: Исследователь с экспериментальным анти-темпоральным устройством смог сохранить память о событиях внутри SCR-1987 в течение 3 циклов петли."
};

const ObjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  
  const object = id ? mockObjects[id] : null;
  
  if (!object) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <ScrHeader />
        <main className="flex-1 py-8 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <AlertTriangle className="h-16 w-16 mx-auto text-scr-accent mb-4" />
            <h1 className="text-3xl font-bold mb-4">Объект не найден</h1>
            <p className="mb-8">SCR-объект с идентификатором {id} не существует или у вас нет доступа.</p>
            <Button 
              onClick={() => navigate('/objects')}
              className="bg-scr-secondary hover:bg-scr-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Вернуться к списку объектов
            </Button>
          </div>
        </main>
        <ScrFooter />
      </div>
    );
  }
  
  if (!authenticated && object.accessLevel > 2) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <ScrHeader />
        <main className="flex-1 py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-8">
              <Button 
                variant="ghost" 
                className="mb-4"
                onClick={() => navigate('/objects')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Назад к списку
              </Button>
              
              <div className="bg-scr-accent/10 border border-scr-accent rounded-lg p-6 mb-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 text-scr-accent flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold mb-2">Ограниченный доступ</h2>
                    <p className="mb-4">Для просмотра файла SCR-{object.id} требуется авторизация уровня {object.accessLevel}.</p>
                    <p className="text-sm opacity-80">Пожалуйста, введите ваши учётные данные для продолжения.</p>
                  </div>
                </div>
              </div>
              
              <AccessTerminal onAuthenticate={setAuthenticated} />
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
      
      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => navigate('/objects')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад к списку
          </Button>
          
          <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
            <div className="bg-scr-primary text-white p-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-2xl font-mono font-bold">SCR-{object.id}</h1>
                    <ScrClassificationBadge classification={object.classification} />
                  </div>
                  <h2 className="text-xl">{object.name}</h2>
                </div>
                
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-scr-accent" />
                  <span className="text-sm">Уровень доступа: {object.accessLevel}</span>
                </div>
              </div>
            </div>
            
            {object.imageUrl && (
              <div className="h-64 bg-scr-dark">
                <img 
                  src={object.imageUrl || "/placeholder.svg"} 
                  alt={`SCR-${object.id}`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Класс содержания</p>
                  <p className="font-semibold">{object.containmentClass}</p>
                </div>
                
                {object.disruptionClass && (
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Класс нарушения</p>
                    <p className="font-semibold">{object.disruptionClass}</p>
                  </div>
                )}
                
                {object.riskClass && (
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Класс риска</p>
                    <p className="font-semibold">{object.riskClass}</p>
                  </div>
                )}
              </div>
              
              <Tabs defaultValue="description">
                <TabsList className="mb-4">
                  <TabsTrigger value="description" className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    Описание
                  </TabsTrigger>
                  <TabsTrigger value="containment" className="flex items-center gap-1">
                    <Shield className="h-4 w-4" />
                    Содержание
                  </TabsTrigger>
                  <TabsTrigger value="testing" className="flex items-center gap-1">
                    <AlertTriangle className="h-4 w-4" />
                    Тестирование
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="description">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold mb-2">Описание</h3>
                      <Separator className="mb-4" />
                      <p>{descriptions[object.id]}</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="containment">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold mb-2">Протокол содержания</h3>
                      <Separator className="mb-4" />
                      <p>{containmentProcedures[object.id]}</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="testing">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold mb-2">Протоколы тестирования</h3>
                      <Separator className="mb-4" />
                      <div className="terminal-text whitespace-pre-line">
                        {testLogs[object.id]}
                      </div>
                      <p className="text-xs text-muted-foreground mt-4">
                        Примечание: Некоторые записи тестирования были удалены по распоряжению 
                        <span className="redacted">███████</span>.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <ScrFooter />
    </div>
  );
};

export default ObjectDetail;