import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Table } from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Upload, Database, FileImage, Volume2, FileText, Eye, Download, Trash2, Plus } from 'lucide-react';

interface Dataset {
  id: string;
  name: string;
  type: 'xray' | 'audio' | 'text' | 'multimodal';
  size: number;
  samples: number;
  status: 'ready' | 'processing' | 'error';
  createdAt: string;
  accuracy?: number;
}

export function DatasetsPage() {
  const [datasets] = useState<Dataset[]>([
    {
      id: '1',
      name: 'NIH Chest X-ray Dataset',
      type: 'xray',
      size: 45.2,
      samples: 112120,
      status: 'ready',
      createdAt: '2024-01-15',
      accuracy: 94.2
    },
    {
      id: '2',
      name: 'ICBHI Respiratory Sound Database',
      type: 'audio',
      size: 2.8,
      samples: 5500,
      status: 'ready',
      createdAt: '2024-01-10',
      accuracy: 89.7
    },
    {
      id: '3',
      name: 'COVID-19 Clinical Notes',
      type: 'text',
      size: 12.5,
      samples: 50000,
      status: 'processing',
      createdAt: '2024-01-20'
    },
    {
      id: '4',
      name: 'Pneumonia Multi-Modal Dataset',
      type: 'multimodal',
      size: 85.6,
      samples: 25000,
      status: 'ready',
      createdAt: '2024-01-08',
      accuracy: 96.1
    }
  ]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'xray': return <FileImage className="w-4 h-4" />;
      case 'audio': return <Volume2 className="w-4 h-4" />;
      case 'text': return <FileText className="w-4 h-4" />;
      case 'multimodal': return <Database className="w-4 h-4" />;
      default: return <Database className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'xray': return 'bg-blue-100 text-blue-800';
      case 'audio': return 'bg-green-100 text-green-800';
      case 'text': return 'bg-purple-100 text-purple-800';
      case 'multimodal': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dataset Management</h1>
            <p className="text-muted-foreground">Manage and explore your medical datasets</p>
          </div>
          <Button className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Upload Dataset</span>
          </Button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="flex items-center space-x-2">
              <Database className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Datasets</p>
                <p className="text-2xl font-bold">{datasets.length}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center space-x-2">
              <FileImage className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Total Samples</p>
                <p className="text-2xl font-bold">{datasets.reduce((acc, d) => acc + d.samples, 0).toLocaleString()}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center space-x-2">
              <Upload className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Storage Used</p>
                <p className="text-2xl font-bold">{datasets.reduce((acc, d) => acc + d.size, 0).toFixed(1)} GB</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center space-x-2">
              <Eye className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm text-muted-foreground">Ready Datasets</p>
                <p className="text-2xl font-bold">{datasets.filter(d => d.status === 'ready').length}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Dataset Management */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="preprocessing">Preprocessing</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Dataset Collection</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2">Dataset</th>
                        <th className="text-left py-2">Type</th>
                        <th className="text-left py-2">Size</th>
                        <th className="text-left py-2">Samples</th>
                        <th className="text-left py-2">Status</th>
                        <th className="text-left py-2">Performance</th>
                        <th className="text-left py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {datasets.map((dataset) => (
                        <tr key={dataset.id} className="border-b border-border">
                          <td className="py-3">
                            <div className="flex items-center space-x-2">
                              {getTypeIcon(dataset.type)}
                              <span className="font-medium">{dataset.name}</span>
                            </div>
                          </td>
                          <td className="py-3">
                            <Badge className={getTypeColor(dataset.type)}>
                              {dataset.type}
                            </Badge>
                          </td>
                          <td className="py-3">{dataset.size} GB</td>
                          <td className="py-3">{dataset.samples.toLocaleString()}</td>
                          <td className="py-3">
                            <Badge className={getStatusColor(dataset.status)}>
                              {dataset.status}
                            </Badge>
                          </td>
                          <td className="py-3">
                            {dataset.accuracy ? (
                              <span className="text-sm font-medium">{dataset.accuracy}%</span>
                            ) : (
                              <span className="text-sm text-muted-foreground">-</span>
                            )}
                          </td>
                          <td className="py-3">
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Download className="w-4 h-4" />
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

          <TabsContent value="upload" className="space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                    <FileImage className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">X-ray Images</h3>
                    <p className="text-sm text-muted-foreground">Upload chest X-ray image datasets</p>
                  </div>
                  <div className="relative">
                    <input type="file" multiple className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <Button variant="outline" className="w-full border-dashed">
                      <Upload className="w-4 h-4 mr-2" />
                      Select Files
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                    <Volume2 className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Audio Files</h3>
                    <p className="text-sm text-muted-foreground">Upload lung sound recordings</p>
                  </div>
                  <div className="relative">
                    <input type="file" multiple className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <Button variant="outline" className="w-full border-dashed">
                      <Upload className="w-4 h-4 mr-2" />
                      Select Files
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                    <FileText className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Text Data</h3>
                    <p className="text-sm text-muted-foreground">Upload clinical notes and reports</p>
                  </div>
                  <div className="relative">
                    <input type="file" multiple className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <Button variant="outline" className="w-full border-dashed">
                      <Upload className="w-4 h-4 mr-2" />
                      Select Files
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="preprocessing" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Data Preprocessing Pipeline</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Image Normalization</span>
                  <Badge variant="secondary">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Audio Feature Extraction</span>
                  <Badge variant="secondary">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Text Tokenization</span>
                  <Badge variant="secondary">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Data Augmentation</span>
                  <Badge>Active</Badge>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}