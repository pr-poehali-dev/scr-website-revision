import { useState } from "react";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AccessTerminalProps {
  onAuthenticate?: (success: boolean) => void;
}

const AccessTerminal = ({ onAuthenticate }: AccessTerminalProps) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([
    "SCR ТЕРМИНАЛ ДОСТУПА v3.72",
    "СОЕДИНЕНИЕ УСТАНОВЛЕНО...",
    "ШИФРОВАНИЕ АКТИВНО.",
    "ВВЕДИТЕ ВАШИ УЧЕТНЫЕ ДАННЫЕ:"
  ]);
  const [authenticated, setAuthenticated] = useState(false);

  const addOutput = (text: string) => {
    setOutput(prev => [...prev, text]);
  };

  const handleCommand = () => {
    addOutput(`> ${input}`);
    
    if (input.toLowerCase().includes("login") || input.toLowerCase().includes("войти")) {
      addOutput("АВТОРИЗАЦИЯ...");
      setTimeout(() => {
        addOutput("ДОСТУП ПРЕДОСТАВЛЕН: УРОВЕНЬ 1");
        addOutput("ДОБРО ПОЖАЛОВАТЬ, СОТРУДНИК.");
        setAuthenticated(true);
        if (onAuthenticate) onAuthenticate(true);
      }, 1500);
    } else if (input.toLowerCase().includes("help") || input.toLowerCase().includes("помощь")) {
      addOutput("ДОСТУПНЫЕ КОМАНДЫ:");
      addOutput("login <username> <password> - авторизация в системе");
      addOutput("help - вывод справки");
      addOutput("clear - очистка консоли");
    } else if (input.toLowerCase().includes("clear") || input.toLowerCase().includes("очистить")) {
      setOutput([
        "SCR ТЕРМИНАЛ ДОСТУПА v3.72",
        "СОЕДИНЕНИЕ УСТАНОВЛЕНО...",
      ]);
    } else {
      addOutput("ОШИБКА: НЕИЗВЕСТНАЯ КОМАНДА");
    }
    
    setInput("");
  };

  return (
    <div className="bg-scr-dark rounded-lg border border-scr-secondary p-4 overflow-hidden w-full max-w-2xl mx-auto">
      <div className="flex items-center mb-4 gap-2 text-white">
        <Terminal className="h-5 w-5 text-green-500" />
        <h3 className="font-mono font-bold">SCR Terminal</h3>
      </div>
      
      <div className="terminal-text h-64 overflow-y-auto mb-4 font-mono text-sm">
        {output.map((line, index) => (
          <div key={index} className="mb-1">
            {line}
          </div>
        ))}
      </div>
      
      {!authenticated && (
        <div className="flex gap-2">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCommand()}
            className="font-mono bg-black text-green-500 border-green-900 focus:border-green-500"
            placeholder="Введите команду..."
          />
          <Button 
            onClick={handleCommand}
            className="bg-scr-secondary hover:bg-scr-accent"
          >
            Отправить
          </Button>
        </div>
      )}
    </div>
  );
};

export default AccessTerminal;