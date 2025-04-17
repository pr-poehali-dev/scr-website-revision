import { useState } from "react";
import ScrHeader from "@/components/ScrHeader";
import ScrFooter from "@/components/ScrFooter";
import ScrObjectCard, { ScrObject } from "@/components/ScrObjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

// Пример объектов SCR
const mockObjects: ScrObject[] = [
  {
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
  {
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
  {
    id: "999",
    name: "Устройство автономной навигации",
    classification: "SAFE",
    containmentClass: "Минимальный",
    disruptionClass: "Нет",
    riskClass: "Минимальный",
    shortDescription: "Небольшое устройство, всегда указывающее в направлении ближайшего аномального объекта.",
    accessLevel: 2,
    imageUrl: "/placeholder.svg"
  },
  {
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
  {
    id: "4217",
    name: "Древняя книга знаний",
    classification: "ARCHIV",
    containmentClass: "Специальный",
    disruptionClass: "Класс-1",
    riskClass: "Средний",
    shortDescription: "Старинный том, содержащий информацию о других SCR-объектах и способный изменять собственное содержимое.",
    accessLevel: 4,
    imageUrl: "/placeholder.svg"
  },
  {
    id: "1987",
    name: "Временная петля",
    classification: "NORMAL",
    containmentClass: "Темпоральный",
    disruptionClass: "Класс-2",
    riskClass: "Высокий",
    shortDescription: "Локализованная область, где события повторяются в цикле длительностью 24 часа.",
    accessLevel: 3,
    imageUrl: "/placeholder.svg"
  }
];

const Objects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [classFilter, setClassFilter] = useState<string>("all");
  
  const filteredObjects = mockObjects.filter(obj => {
    const matchesSearch = obj.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          obj.id.includes(searchTerm);
    const matchesClass = classFilter === "all" || obj.classification === classFilter;
    
    return matchesSearch && matchesClass;
  });

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ScrHeader />
      
      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold mb-6">База данных SCR-объектов</h1>
          
          <div className="bg-card p-4 rounded-lg border border-border mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Поиск по имени или номеру..."
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="w-full md:w-64 flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={classFilter} onValueChange={setClassFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Фильтр по классу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все классы</SelectItem>
                    <SelectItem value="SAFE">SAFE</SelectItem>
                    <SelectItem value="NORMAL">NORMAL</SelectItem>
                    <SelectItem value="KETER">KETER</SelectItem>
                    <SelectItem value="ARCHIV">ARCHIV</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="bg-scr-secondary hover:bg-scr-primary">
                Применить фильтры
              </Button>
            </div>
          </div>
          
          {filteredObjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredObjects.map((object) => (
                <ScrObjectCard key={object.id} object={object} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">Объекты не найдены. Попробуйте изменить параметры поиска.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setClassFilter("all");
                }}
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <ScrFooter />
    </div>
  );
};

export default Objects;