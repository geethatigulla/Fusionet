import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { DiagnosisPage } from './components/DiagnosisPage';
import { ResultsPage } from './components/ResultsPage';
import { FrameworkPage } from './components/FrameworkPage';
import { DatasetsPage } from './components/DatasetsPage';
import { ExperimentsPage } from './components/ExperimentsPage';
import { ModelsPage } from './components/ModelsPage';
import { AnalyticsPage } from './components/AnalyticsPage';
import { SettingsPage } from './components/SettingsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('diagnosis');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'diagnosis':
        return <DiagnosisPage onNavigate={handleNavigate} />;
      case 'results':
        return <ResultsPage />;
      case 'framework':
        return <FrameworkPage />;
      case 'datasets':
        return <DatasetsPage />;
      case 'experiments':
        return <ExperimentsPage />;
      case 'models':
        return <ModelsPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DiagnosisPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {renderCurrentPage()}
    </div>
  );
}