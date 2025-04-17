import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrClassificationBadge from "./ScrClassificationBadge";
import { Button } from "@/components/ui/button";
import { FileText, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface ScrObject {
  id: string;
  name: string;
  classification: 'SAFE' | 'NORMAL' | 'KETER' | 'ARCHIV';
  containmentClass: string;
  disruptionClass?: string;
  riskClass?: string;
  shortDescription: string;
  accessLevel: number;
  imageUrl?: string;
}

interface ScrObjectCardProps {
  object: ScrObject;
}

const ScrObjectCard = ({ object }: ScrObjectCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border-scr-secondary">
      <CardHeader className="bg-scr-primary text-white p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-mono">SCR-{object.id}</CardTitle>
          <ScrClassificationBadge classification={object.classification} />
        </div>
        <h3 className="text-sm mt-1 font-medium">{object.name}</h3>
      </CardHeader>
      
      {object.imageUrl && (
        <div className="h-40 overflow-hidden bg-scr-dark">
          <img 
            src={object.imageUrl || "/placeholder.svg"} 
            alt={`SCR-${object.id}`}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="outline" className="text-xs bg-scr-dark text-white">
            Уровень {object.containmentClass}
          </Badge>
          {object.disruptionClass && (
            <Badge variant="outline" className="text-xs bg-scr-dark text-white">
              Нарушение {object.disruptionClass}
            </Badge>
          )}
          {object.riskClass && (
            <Badge variant="outline" className="text-xs bg-scr-dark text-white">
              Риск {object.riskClass}
            </Badge>
          )}
        </div>
        <p className="text-sm">{object.shortDescription}</p>
      </CardContent>
      
      <CardFooter className="bg-muted p-4 flex justify-between">
        <div className="flex items-center">
          <Lock className="h-4 w-4 mr-1 text-scr-accent" />
          <span className="text-xs">Уровень доступа: {object.accessLevel}</span>
        </div>
        <Button 
          size="sm" 
          variant="default"
          className="bg-scr-secondary hover:bg-scr-accent"
          onClick={() => navigate(`/objects/${object.id}`)}
        >
          <FileText className="h-4 w-4 mr-1" />
          Открыть файл
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ScrObjectCard;