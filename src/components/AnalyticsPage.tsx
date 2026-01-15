import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, BarChart3, PieChart as PieIcon, Activity, AlertCircle } from 'lucide-react';

export function AnalyticsPage() {
  // Mock data for charts
  const accuracyData = [
    { name: 'Week 1', accuracy: 89.2, loss: 0.245 },
    { name: 'Week 2', accuracy: 91.5, loss: 0.198 },
    { name: 'Week 3', accuracy: 93.1, loss: 0.156 },
    { name: 'Week 4', accuracy: 94.7, loss: 0.134 },
    { name: 'Week 5', accuracy: 95.8, loss: 0.112 },
    { name: 'Week 6', accuracy: 96.3, loss: 0.089 }
  ];

  const diseaseDistribution = [
    { name: 'Healthy', value: 45, color: '#10b981' },
    { name: 'Pneumonia', value: 25, color: '#f59e0b' },
    { name: 'COVID-19', value: 15, color: '#ef4444' },
    { name: 'COPD', value: 10, color: '#8b5cf6' },
    { name: 'Tuberculosis', value: 5, color: '#f97316' }
  ];

  const modelPerformance = [
    { name: 'FusionNet-V2', pneumonia: 96.3, covid: 94.7, copd: 91.2, tb: 89.8 },
    { name: 'ResNet-50', pneumonia: 89.1, covid: 87.3, copd: 85.6, tb: 83.2 },
    { name: 'EfficientNet', pneumonia: 92.4, covid: 90.1, copd: 88.7, tb: 86.5 },
    { name: 'DenseNet', pneumonia: 88.7, covid: 86.9, copd: 84.3, tb: 82.1 }
  ];

  const datasetMetrics = [
    { name: 'X-ray Images', training: 45000, validation: 9000, testing: 6000 },
    { name: 'Audio Files', training: 4200, validation: 800, testing: 500 },
    { name: 'Clinical Text', training: 38000, validation: 7500, testing: 4500 }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Performance insights and data analysis</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overall Accuracy</p>
                <p className="text-2xl font-bold">96.3%</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-xs text-green-600">+2.1% vs last week</span>
                </div>
              </div>
              <BarChart3 className="w-8 h-8 text-primary" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Models</p>
                <p className="text-2xl font-bold">12</p>
                <div className="flex items-center space-x-1 mt-1">
                  <Activity className="w-4 h-4 text-blue-600" />
                  <span className="text-xs text-blue-600">3 deployed</span>
                </div>
              </div>
              <Activity className="w-8 h-8 text-blue-600" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Inference Time</p>
                <p className="text-2xl font-bold">245ms</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingDown className="w-4 h-4 text-green-600" />
                  <span className="text-xs text-green-600">-15ms improvement</span>
                </div>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Error Rate</p>
                <p className="text-2xl font-bold">1.2%</p>
                <div className="flex items-center space-x-1 mt-1">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  <span className="text-xs text-red-600">Target: &lt;1%</span>
                </div>
              </div>
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
          </Card>
        </div>

        {/* Analytics Tabs */}
        <Tabs defaultValue="performance" className="space-y-4">
          <TabsList>
            <TabsTrigger value="performance">Model Performance</TabsTrigger>
            <TabsTrigger value="datasets">Dataset Analysis</TabsTrigger>
            <TabsTrigger value="predictions">Prediction Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-6">
            {/* Accuracy Trend */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Model Accuracy Over Time</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={accuracyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="accuracy" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--primary))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Model Comparison */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Model Performance Comparison</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={modelPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="pneumonia" fill="#3b82f6" name="Pneumonia" />
                  <Bar dataKey="covid" fill="#ef4444" name="COVID-19" />
                  <Bar dataKey="copd" fill="#8b5cf6" name="COPD" />
                  <Bar dataKey="tb" fill="#f59e0b" name="Tuberculosis" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="datasets" className="space-y-6">
            {/* Dataset Distribution */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Dataset Split Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={datasetMetrics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Bar dataKey="training" fill="hsl(var(--primary))" name="Training" />
                    <Bar dataKey="validation" fill="hsl(var(--chart-2))" name="Validation" />
                    <Bar dataKey="testing" fill="hsl(var(--chart-3))" name="Testing" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Data Quality Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Image Quality Score</span>
                    <Badge className="bg-green-100 text-green-800">Excellent (9.2/10)</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Audio Signal Quality</span>
                    <Badge className="bg-yellow-100 text-yellow-800">Good (7.8/10)</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Text Annotation Accuracy</span>
                    <Badge className="bg-green-100 text-green-800">High (95.6%)</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Missing Data Rate</span>
                    <Badge className="bg-green-100 text-green-800">Low (1.2%)</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Label Consistency</span>
                    <Badge className="bg-green-100 text-green-800">High (97.8%)</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="predictions" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Disease Distribution */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Disease Distribution in Predictions</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={diseaseDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {diseaseDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {diseaseDistribution.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <span className="text-sm font-medium">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Prediction Confidence */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Prediction Confidence Analysis</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>High Confidence (&gt;90%)</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-muted rounded-full">
                        <div className="w-3/4 h-full bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-sm">75%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Medium Confidence (70-90%)</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-muted rounded-full">
                        <div className="w-1/5 h-full bg-yellow-600 rounded-full"></div>
                      </div>
                      <span className="text-sm">20%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Low Confidence (&lt;70%)</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-muted rounded-full">
                        <div className="h-full bg-red-600 rounded-full" style={{ width: '5%' }}></div>
                      </div>
                      <span className="text-sm">5%</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Key Insights</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 75% of predictions have high confidence scores</li>
                    <li>• Pneumonia detection shows highest confidence</li>
                    <li>• Audio-based predictions need improvement</li>
                    <li>• Multi-modal approach increases confidence by 12%</li>
                  </ul>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}