import { useState } from "react";
import ScrHeader from "@/components/ScrHeader";
import ScrFooter from "@/components/ScrFooter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, AlertTriangle, Database, FileText, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ScrClassificationBadge from "@/components/ScrClassificationBadge";
import { useNavigate } from "react-router-dom";

interface SearchResult {
  type: 'object' | 'personnel' | 'document';
  id: string;
  title: string;
  classification?: 'SAFE' | 'NORMAL' | 'KETER' | 'ARCHIV';
  snippet: string;
  accessLevel: number;
}

const mockResults: SearchResult[] = [
  {
    type: 'object',
    id: '173',
    title: 'SCR-173 - Скульптура',
    classification: 'KETER',
    snippet: 'Гуманоидная скульптура из бетона, способная двигаться, когда не находится под прямым наблюдением...',
    accessLevel: 2
  },
  {
    type: 'object',
    id: '682',
    title: 'SCR-682 - Неуничтожимая рептилия',
    classification: 'KETER',
    snippet: 'Крупная рептилия с высоким интеллектом, способная к адаптации и регенерации...',
    accessLevel: 4
  },
  {
    type: 'personnel',
    id: 'p-0573',
    title: 'Д-р Александр Смирнов - Руководитель исследований',
    snippet: 'Специалист по аномальной психологии, руководитель исследовательской группы 17-B...',
    accessLevel: 3
  },
  {
    type: 'document',
    id: 'doc-5971',
    title: 'Протокол содержания класса Keter',
    snippet: 'Стандартные процедуры обращения с объектами класса Keter, версия от 12.03.2023...',
    accessLevel: 3
  },
  {
    type: 'object',
    id: '096',
    title: 'SCR-096 - Стеснительное лицо',
    classification: 'NORMAL',
    snippet: 'Гуманоидная сущность, проявляющая агрессию при визуальном контакте с её лицом...',
    accessLevel: 3
  },
  {
    type: 'document',
    id: 'doc-1231',
    title: 'Отчет об Инциденте А-117',
    snippet: 'Детальный анализ нарушения содержания SCR-682 от 17.05.2022 и последующие действия...',
    accessLevel: 4
  }
];

const Search = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState('all');
  const [hasSearched, setHasSearched] = useState(false);
  
  const handleSearch = () => {
    if (searchQuery.trim()) {
      setHasSearched(true);
    }
  };
  
  const filteredResults = mockResults.filter(result => {
    if (activeTab !== 'all' && result.type !== activeTab) return false;
    
    if (!searchQuery.trim()) return true;
    
    return (
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.snippet.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  
  const getIconForType = (type: string) => {
    switch (type) {
      case 'object': return <Database className="h-4 w-4" />;
      case 'personnel': return <User className="h-4 w-4" />;
      case 'document': return <FileText className="h-4 w-4" />;
      default: return <SearchIcon className="h-4 w-4" />;
    }
  };
  
  const handleResultClick = (result: SearchResult) => {
    if (result.type === 'object') {
      navigate(`/objects/${result.id}`);
    }
    // Здесь можно добавить навигацию для других типов результатов
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ScrHeader />
      
      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">Поиск в базе данных SCR</h1>
          
          <div className="bg-card p-6 rounded-lg border border-border mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Поиск по объектам, персоналу, документам..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              
              <Button 
                className="bg-scr-secondary hover:bg-scr-primary"
                onClick={handleSearch}
              >
                <SearchIcon className="mr-2 h-4 w-4" />
                Найти
              </Button>
            </div>
            
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Введите номер или название SCR-объекта, имя сотрудника или ключевые слова.</p>
            </div>
          </div>
          
          {hasSearched && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Результаты поиска: {filteredResults.length > 0 ? filteredResults.length : "ничего не найдено"}
              </h2>
              
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="all">Все</TabsTrigger>
                  <TabsTrigger value="object">SCR-объекты</TabsTrigger>
                  <TabsTrigger value="personnel">Персонал</TabsTrigger>
                  <TabsTrigger value="document">Документы</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all">
                  <SearchResultsContent results={filteredResults} onClick={handleResultClick} />
                </TabsContent>
                
                <TabsContent value="object">
                  <SearchResultsContent 
                    results={filteredResults.filter(r => r.type === 'object')} 
                    onClick={handleResultClick}
                  />
                </TabsContent>
                
                <TabsContent value="personnel">
                  <SearchResultsContent 
                    results={filteredResults.filter(r => r.type === 'personnel')} 
                    onClick={handleResultClick}
                  />
                </TabsContent>
                
                <TabsContent value="document">
                  <SearchResultsContent 
                    results={filteredResults.filter(r => r.type === 'document')} 
                    onClick={handleResultClick}
                  />
                </TabsContent>
              </Tabs>
            </div>
          )}
          
          {!hasSearched && (
            <div className="text-center py-12">
              <SearchIcon className="h-12 w-12 mx-auto text-muted mb-4" />
              <h2 className="text-xl font-semibold mb-2">Начните поиск</h2>
              <p className="text-muted-foreground">
                Введите запрос в поисковую строку выше и нажмите Enter или кнопку "Найти"
              </p>
            </div>
          )}
        </div>
      </main>
      
      <ScrFooter />
    </div>
  );
};

interface SearchResultsContentProps {
  results: SearchResult[];
  onClick: (result: SearchResult) => void;
}

const SearchResultsContent = ({ results, onClick }: SearchResultsContentProps) => {
  if (results.length === 0) {
    return (
      <div className="text-center py-8">
        <AlertTriangle className="h-12 w-12 mx-auto text-scr-accent mb-4" />
        <h3 className="text-xl font-semibold mb-2">Результаты не найдены</h3>
        <p className="text-muted-foreground">
          Попробуйте изменить поисковый запрос или фильтры
        </p>
      </div>
    );
  }
  
  const getIconForType = (type: string) => {
    switch (type) {
      case 'object': return <Database className="h-5 w-5 text-scr-accent" />;
      case 'personnel': return <User className="h-5 w-5 text-scr-secondary" />;
      case 'document': return <FileText className="h-5 w-5 text-scr-primary" />;
      default: return <SearchIcon className="h-5 w-5" />;
    }
  };
  
  return (
    <div className="space-y-4">
      {results.map((result) => (
        <Card 
          key={`${result.type}-${result.id}`}
          className="hover:bg-muted/50 cursor-pointer transition-colors"
          onClick={() => onClick(result)}
        >
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                {getIconForType(result.type)}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold mb-1">{result.title}</h3>
                  {result.classification && (
                    <ScrClassificationBadge classification={result.classification} />
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground mb-2">{result.snippet}</p>
                
                <div className="flex items-center text-xs text-muted-foreground">
                  <span className="capitalize">{result.type}</span>
                  <Separator className="mx-2 h-3" orientation="vertical" />
                  <span>ID: {result.id}</span>
                  <Separator className="mx-2 h-3" orientation="vertical" />
                  <span>Уровень доступа: {result.accessLevel}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Search;