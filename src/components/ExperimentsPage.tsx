import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Play, Pause, Square, Eye, Copy, Trash2, Plus, Beaker, TrendingUp, Clock } from 'lucide-react';

interface Experiment {
  id: string;
  name: string;
  model: string;
  dataset: string;
  status: 'running' | 'completed' | 'failed' | 'queued';
  progress: number;
  accuracy: number;
  loss: number;
  epoch: number;
  totalEpochs: number;
  duration: string;
  startedAt: string;
}

export function ExperimentsPage() {
  const [experiments] = useState<Experiment[]>([
    {
      id: '1',
      name: 'FusionNet-V1-Baseline',
      model: 'ResNet50 + LSTM',
      dataset: 'NIH Chest X-ray + ICBHI Audio',
      status: 'completed',
      progress: 100,
      accuracy: 94.2,
      loss: 0.085,
      epoch: 50,
      totalEpochs: 50,
      duration: '2h 45m',
      startedAt: '2024-01-20 14:30'
    },
    {
      id: '2',
      name: 'FusionNet-V2-Enhanced',
      model: 'EfficientNet + Transformer',
      dataset: 'Multi-modal Dataset',
      status: 'running',
      progress: 68,
      accuracy: 91.7,
      loss: 0.124,
      epoch: 34,
      totalEpochs: 50,
      duration: '1h 23m',
      startedAt: '2024-01-20 16:15'
    },
    {
      id: '3',
      name: 'Audio-Only-Baseline',
      model: 'CNN-LSTM',
      dataset: 'ICBHI Respiratory Sound',
      status: 'queued',
      progress: 0,
      accuracy: 0,
      loss: 0,
      epoch: 0,
      totalEpochs: 30,
      duration: '0m',
      startedAt: '2024-01-20 18:00'
    },
    {
      id: '4',
      name: 'Text-Classification-Test',
      model: 'BERT + Dense',
      dataset: 'COVID-19 Clinical Notes',
      status: 'failed',
      progress: 15,
      accuracy: 0,
      loss: 0,
      epoch: 3,
      totalEpochs: 20,
      duration: '15m',
      startedAt: '2024-01-20 12:00'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'queued': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'running': return <Play className="w-4 h-4" />;
      case 'completed': return <TrendingUp className="w-4 h-4" />;
      case 'failed': return <Square className="w-4 h-4" />;
      case 'queued': return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Experiments</h1>
            <p className="text-muted-foreground">Track and manage your ML experiments</p>
          </div>
          <Button className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Experiment</span>
          </Button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="flex items-center space-x-2">
              <Beaker className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Experiments</p>
                <p className="text-2xl font-bold">{experiments.length}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center space-x-2">
              <Play className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Running</p>
                <p className="text-2xl font-bold">{experiments.filter(e => e.status === 'running').length}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold">{experiments.filter(e => e.status === 'completed').length}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm text-muted-foreground">Best Accuracy</p>
                <p className="text-2xl font-bold">{Math.max(...experiments.map(e => e.accuracy)).toFixed(1)}%</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Experiments Management */}
        <Tabs defaultValue="active" className="space-y-4">
          <TabsList>
            <TabsTrigger value="active">Active Experiments</TabsTrigger>
            <TabsTrigger value="history">Experiment History</TabsTrigger>
            <TabsTrigger value="create">Create New</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            <div className="space-y-4">
              {experiments.filter(e => e.status === 'running' || e.status === 'queued').map((experiment) => (
                <Card key={experiment.id} className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(experiment.status)}
                        <div>
                          <h3 className="font-semibold">{experiment.name}</h3>
                          <p className="text-sm text-muted-foreground">{experiment.model}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(experiment.status)}>
                          {experiment.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Square className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    {experiment.status === 'running' && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Epoch {experiment.epoch}/{experiment.totalEpochs}</span>
                          <span>{experiment.progress}%</span>
                        </div>
                        <Progress value={experiment.progress} className="w-full" />
                      </div>
                    )}
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Accuracy</p>
                        <p className="font-medium">{experiment.accuracy.toFixed(1)}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Loss</p>
                        <p className="font-medium">{experiment.loss.toFixed(3)}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Duration</p>
                        <p className="font-medium">{experiment.duration}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Dataset</p>
                        <p className="font-medium">{experiment.dataset}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Experiment History</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2">Experiment</th>
                        <th className="text-left py-2">Model</th>
                        <th className="text-left py-2">Status</th>
                        <th className="text-left py-2">Accuracy</th>
                        <th className="text-left py-2">Loss</th>
                        <th className="text-left py-2">Duration</th>
                        <th className="text-left py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {experiments.map((experiment) => (
                        <tr key={experiment.id} className="border-b border-border">
                          <td className="py-3">
                            <div>
                              <p className="font-medium">{experiment.name}</p>
                              <p className="text-xs text-muted-foreground">{experiment.startedAt}</p>
                            </div>
                          </td>
                          <td className="py-3">{experiment.model}</td>
                          <td className="py-3">
                            <Badge className={getStatusColor(experiment.status)}>
                              {experiment.status}
                            </Badge>
                          </td>
                          <td className="py-3">{experiment.accuracy.toFixed(1)}%</td>
                          <td className="py-3">{experiment.loss.toFixed(3)}</td>
                          <td className="py-3">{experiment.duration}</td>
                          <td className="py-3">
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Copy className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="create" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Create New Experiment</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Experiment Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter experiment name"
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Model Architecture</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="resnet50">ResNet50 + LSTM</SelectItem>
                        <SelectItem value="efficientnet">EfficientNet + Transformer</SelectItem>
                        <SelectItem value="densenet">DenseNet + GRU</SelectItem>
                        <SelectItem value="custom">Custom Architecture</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Dataset</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select dataset" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nih">NIH Chest X-ray Dataset</SelectItem>
                        <SelectItem value="icbhi">ICBHI Audio Dataset</SelectItem>
                        <SelectItem value="multimodal">Multi-modal Dataset</SelectItem>
                        <SelectItem value="covid">COVID-19 Clinical Notes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Epochs</label>
                    <input 
                      type="number" 
                      placeholder="50"
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Learning Rate</label>
                    <input 
                      type="number" 
                      placeholder="0.001"
                      step="0.0001"
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Batch Size</label>
                    <input 
                      type="number" 
                      placeholder="32"
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  Start Experiment
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}