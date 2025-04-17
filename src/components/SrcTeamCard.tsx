import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Shield } from "lucide-react";

export interface SrcTeam {
  id: string;
  name: string;
  codeName: string;
  specialization: string;
  members: number;
  activeStatus: 'Active' | 'Standby' | 'Disbanded';
  description: string;
}

interface SrcTeamCardProps {
  team: SrcTeam;
}

const SrcTeamCard = ({ team }: SrcTeamCardProps) => {
  const statusColorMap = {
    'Active': 'bg-green-600',
    'Standby': 'bg-yellow-500',
    'Disbanded': 'bg-red-600'
  };

  return (
    <Card className="border-scr-secondary hover:shadow-md transition-all">
      <CardHeader className="bg-scr-secondary text-white p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <Shield className="h-5 w-5 mr-2 text-scr-accent" />
            <CardTitle className="text-lg font-mono">Н-МОГ {team.id}</CardTitle>
          </div>
          <Badge className={`${statusColorMap[team.activeStatus]} text-white`}>
            {team.activeStatus === 'Active' ? 'Активна' : 
             team.activeStatus === 'Standby' ? 'Режим ожидания' : 'Расформирована'}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="mb-3">
          <h3 className="font-bold">{team.codeName}</h3>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <Users className="h-4 w-4 mr-1" />
            <span>{team.members} оперативников</span>
          </div>
        </div>
        
        <div className="mb-3">
          <Badge variant="outline" className="bg-scr-dark text-white">
            {team.specialization}
          </Badge>
        </div>
        
        <p className="text-sm">{team.description}</p>
      </CardContent>
    </Card>
  );
};

export default SrcTeamCard;