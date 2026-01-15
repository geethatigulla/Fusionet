import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Code2, Download, Play, Settings, Eye, Star, GitBranch, Cpu, Zap } from 'lucide-react';

interface Model {
  id: string;
  name: string;
  version: string;
  architecture: string;
  accuracy: number;
  size: number;
  parameters: string;
  status: 'deployed' | 'training' | 'ready' | 'archived';
  createdAt: string;
  description: string;
  tags: string[];
}

export function ModelsPage() {
  const [models] = useState<Model[]>([
    {
      id: '1',
      name: 'FusionNet-Pneumonia-Detector',
      version: 'v2.1.0',
      architecture: 'ResNet50 + LSTM + Transformer',
      accuracy: 96.3,
      size: 245.8,
      parameters: '23.5M',
      status: 'deployed',
      createdAt: '2024-01-15',
      description: 'Multi-modal model for pneumonia detection using X-ray, audio, and clinical text data',
      tags: ['pneumonia', 'multimodal', 'production']
    },
    {
      id: '2',
      name: 'COVID-Classifier-V3',
      version: 'v3.0.2',
      architecture: 'EfficientNet-B4 + BERT',
      accuracy: 94.7,
      size: 189.2,
      parameters: '19.1M',
      status: 'ready',
      createdAt: '2024-01-12',
      description: 'COVID-19 detection model trained on chest X-rays and clinical symptoms',
      tags: ['covid', 'xray', 'clinical']
    },
    {
      id: '3',
      name: 'Lung-Sound-Analyzer',
      version: 'v1.5.1',
      architecture: 'CNN-LSTM + Attention',
      accuracy: 89.4,
      size: 78.5,
      parameters: '8.2M',
      status: 'training',
      createdAt: '2024-01-10',
      description: 'Respiratory sound analysis for detecting wheeze, crackles, and normal breathing',
      tags: ['audio', 'respiratory', 'diagnosis']
    },
    {
      id: '4',
      name: 'TB-Detection-Legacy',
      version: 'v1.2.3',
      architecture: 'VGG16 + Dense',
      accuracy: 87.1,
      size: 528.4,
      parameters: '138.3M',
      status: 'archived',
      createdAt: '2024-01-05',
      description: 'Tuberculosis detection model (legacy version)',
      tags: ['tuberculosis', 'legacy', 'xray']
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'deployed': return 'bg-green-100 text-green-800';
      case 'training': return 'bg-blue-100 text-blue-800';
      case 'ready': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'deployed': return <Zap className="w-4 h-4" />;
      case 'training': return <Cpu className="w-4 h-4" />;
      case 'ready': return <Star className="w-4 h-4" />;
      case 'archived': return <GitBranch className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Model Registry</h1>
            <p className="text-muted-foreground">Manage and deploy your trained models</p>
          </div>
          <Button className="flex items-center space-x-2">
            <Code2 className="w-4 h-4" />
            <span>Register Model</span>
          </Button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="flex items-center space-x-2">
              <Code2 className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Models</p>
                <p className="text-2xl font-bold">{models.length}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Deployed</p>
                <p className="text-2xl font-bold">{models.filter(m => m.status === 'deployed').length}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="text-sm text-muted-foreground">Ready</p>
                <p className="text-2xl font-bold">{models.filter(m => m.status === 'ready').length}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Best Accuracy</p>
                <p className="text-2xl font-bold">{Math.max(...models.map(m => m.accuracy)).toFixed(1)}%</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Model Management */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Model Overview</TabsTrigger>
            <TabsTrigger value="deployed">Deployed Models</TabsTrigger>
            <TabsTrigger value="benchmark">Benchmarks</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-6">
              {models.map((model) => (
                <Card key={model.id} className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(model.status)}
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{model.name}</h3>
                            <Badge variant="outline">{model.version}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{model.architecture}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(model.status)}>
                          {model.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{model.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {model.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Accuracy</p>
                        <p className="font-medium">{model.accuracy}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Model Size</p>
                        <p className="font-medium">{model.size} MB</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Parameters</p>
                        <p className="font-medium">{model.parameters}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Created</p>
                        <p className="font-medium">{model.createdAt}</p>
                      </div>
                    </div>

                    {model.status === 'ready' && (
                      <div className="flex space-x-2">
                        <Button size="sm">
                          <Play className="w-4 h-4 mr-2" />
                          Deploy
                        </Button>
                        <Button variant="outline" size="sm">
                          Test
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="deployed" className="space-y-4">
            <div className="grid gap-6">
              {models.filter(m => m.status === 'deployed').map((model) => (
                <Card key={model.id} className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Zap className="w-5 h-5 text-green-600" />
                        <div>
                          <h3 className="font-semibold">{model.name}</h3>
                          <p className="text-sm text-muted-foreground">Endpoint: /api/v1/predict/{model.id}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-100 text-green-800">Live</Badge>
                        <Button variant="outline" size="sm">Monitor</Button>
                        <Button variant="outline" size="sm">Scale</Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Requests/Hour</p>
                        <p className="font-medium">1,247</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Avg Response Time</p>
                        <p className="font-medium">245ms</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Uptime</p>
                        <p className="font-medium">99.9%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Resources</p>
                        <p className="font-medium">2 vCPU, 4GB RAM</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="benchmark" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Model Performance Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2">Model</th>
                      <th className="text-left py-2">Accuracy</th>
                      <th className="text-left py-2">Precision</th>
                      <th className="text-left py-2">Recall</th>
                      <th className="text-left py-2">F1-Score</th>
                      <th className="text-left py-2">Inference Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3">FusionNet-Pneumonia-Detector</td>
                      <td className="py-3">96.3%</td>
                      <td className="py-3">95.8%</td>
                      <td className="py-3">96.7%</td>
                      <td className="py-3">96.2%</td>
                      <td className="py-3">245ms</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3">COVID-Classifier-V3</td>
                      <td className="py-3">94.7%</td>
                      <td className="py-3">93.9%</td>
                      <td className="py-3">95.1%</td>
                      <td className="py-3">94.5%</td>
                      <td className="py-3">189ms</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3">Lung-Sound-Analyzer</td>
                      <td className="py-3">89.4%</td>
                      <td className="py-3">88.7%</td>
                      <td className="py-3">90.2%</td>
                      <td className="py-3">89.4%</td>
                      <td className="py-3">78ms</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3">TB-Detection-Legacy</td>
                      <td className="py-3">87.1%</td>
                      <td className="py-3">86.3%</td>
                      <td className="py-3">87.9%</td>
                      <td className="py-3">87.1%</td>
                      <td className="py-3">528ms</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}