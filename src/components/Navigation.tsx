import { Activity, Database, Beaker, BarChart3, Settings, Code2, Network, Stethoscope } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="bg-white border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-foreground">FusionNet</span>
            <span className="text-xs text-muted-foreground">DL Framework</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-1">
          <Button
            variant={currentPage === 'diagnosis' ? 'default' : 'ghost'}
            onClick={() => onNavigate('diagnosis')}
            className="flex items-center space-x-2"
          >
            <Stethoscope className="w-4 h-4" />
            <span>Diagnosis</span>
          </Button>
          
          <Button
            variant={currentPage === 'framework' ? 'default' : 'ghost'}
            onClick={() => onNavigate('framework')}
            className="flex items-center space-x-2"
          >
            <Network className="w-4 h-4" />
            <span>Framework</span>
          </Button>
          
          <Button
            variant={currentPage === 'datasets' ? 'default' : 'ghost'}
            onClick={() => onNavigate('datasets')}
            className="flex items-center space-x-2"
          >
            <Database className="w-4 h-4" />
            <span>Datasets</span>
          </Button>
          
          <Button
            variant={currentPage === 'experiments' ? 'default' : 'ghost'}
            onClick={() => onNavigate('experiments')}
            className="flex items-center space-x-2"
          >
            <Beaker className="w-4 h-4" />
            <span>Experiments</span>
          </Button>
          
          <Button
            variant={currentPage === 'models' ? 'default' : 'ghost'}
            onClick={() => onNavigate('models')}
            className="flex items-center space-x-2"
          >
            <Code2 className="w-4 h-4" />
            <span>Models</span>
          </Button>
          
          <Button
            variant={currentPage === 'analytics' ? 'default' : 'ghost'}
            onClick={() => onNavigate('analytics')}
            className="flex items-center space-x-2"
          >
            <BarChart3 className="w-4 h-4" />
            <span>Analytics</span>
          </Button>
          
          <Button
            variant={currentPage === 'settings' ? 'default' : 'ghost'}
            onClick={() => onNavigate('settings')}
            className="flex items-center space-x-2"
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}