import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Settings, Database, Cpu, Shield, Bell, User, Key, Monitor } from 'lucide-react';

export function SettingsPage() {
  const [notifications, setNotifications] = useState({
    experimentComplete: true,
    modelDeployment: true,
    systemAlerts: false,
    weeklyReports: true
  });

  const [computeSettings, setComputeSettings] = useState({
    autoScaling: true,
    gpuAcceleration: true,
    parallelTraining: false
  });

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Configure your FusionNet framework preferences</p>
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="compute">Compute</TabsTrigger>
            <TabsTrigger value="storage">Storage</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <User className="w-5 h-5" />
                <h3 className="text-lg font-semibold">User Preferences</h3>
              </div>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Default Model Framework</label>
                    <Select defaultValue="pytorch">
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pytorch">PyTorch</SelectItem>
                        <SelectItem value="tensorflow">TensorFlow</SelectItem>
                        <SelectItem value="keras">Keras</SelectItem>
                        <SelectItem value="scikit">Scikit-learn</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Default Optimizer</label>
                    <Select defaultValue="adam">
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="adam">Adam</SelectItem>
                        <SelectItem value="sgd">SGD</SelectItem>
                        <SelectItem value="rmsprop">RMSprop</SelectItem>
                        <SelectItem value="adamw">AdamW</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Default Batch Size</label>
                    <Select defaultValue="32">
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="16">16</SelectItem>
                        <SelectItem value="32">32</SelectItem>
                        <SelectItem value="64">64</SelectItem>
                        <SelectItem value="128">128</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Auto-save Frequency</label>
                    <Select defaultValue="5">
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Every epoch</SelectItem>
                        <SelectItem value="5">Every 5 epochs</SelectItem>
                        <SelectItem value="10">Every 10 epochs</SelectItem>
                        <SelectItem value="0">Disabled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Monitor className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Interface Settings</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-muted-foreground">Enable dark theme</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Compact View</p>
                    <p className="text-sm text-muted-foreground">Show more information in less space</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto-refresh Dashboard</p>
                    <p className="text-sm text-muted-foreground">Automatically update metrics every 30 seconds</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="compute" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Cpu className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Compute Resources</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto-scaling</p>
                    <p className="text-sm text-muted-foreground">Automatically adjust compute resources based on workload</p>
                  </div>
                  <Switch 
                    checked={computeSettings.autoScaling}
                    onCheckedChange={(checked) => 
                      setComputeSettings(prev => ({ ...prev, autoScaling: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">GPU Acceleration</p>
                    <p className="text-sm text-muted-foreground">Use GPU for model training and inference</p>
                  </div>
                  <Switch 
                    checked={computeSettings.gpuAcceleration}
                    onCheckedChange={(checked) => 
                      setComputeSettings(prev => ({ ...prev, gpuAcceleration: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Parallel Training</p>
                    <p className="text-sm text-muted-foreground">Enable distributed training across multiple GPUs</p>
                  </div>
                  <Switch 
                    checked={computeSettings.parallelTraining}
                    onCheckedChange={(checked) => 
                      setComputeSettings(prev => ({ ...prev, parallelTraining: checked }))
                    }
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Resource Allocation</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Maximum CPU Cores</label>
                  <Select defaultValue="8">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4">4 cores</SelectItem>
                      <SelectItem value="8">8 cores</SelectItem>
                      <SelectItem value="16">16 cores</SelectItem>
                      <SelectItem value="32">32 cores</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Memory Limit</label>
                  <Select defaultValue="16">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="8">8 GB</SelectItem>
                      <SelectItem value="16">16 GB</SelectItem>
                      <SelectItem value="32">32 GB</SelectItem>
                      <SelectItem value="64">64 GB</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="storage" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Database className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Data Storage</h3>
              </div>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <p className="text-2xl font-bold">142.8 GB</p>
                    <p className="text-sm text-muted-foreground">Datasets</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <p className="text-2xl font-bold">38.5 GB</p>
                    <p className="text-sm text-muted-foreground">Models</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <p className="text-2xl font-bold">12.3 GB</p>
                    <p className="text-sm text-muted-foreground">Logs</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Auto-cleanup old experiments</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Compress stored models</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Backup to cloud storage</span>
                    <Switch />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Cleanup Policies</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Keep experiments for</label>
                  <Select defaultValue="30">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="365">1 year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Keep model checkpoints for</label>
                  <Select defaultValue="90">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="365">1 year</SelectItem>
                      <SelectItem value="0">Forever</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Security Settings</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Session Timeout</p>
                    <p className="text-sm text-muted-foreground">Automatically log out after inactivity</p>
                  </div>
                  <Select defaultValue="60">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="240">4 hours</SelectItem>
                      <SelectItem value="0">Never</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Key className="w-5 h-5" />
                <h3 className="text-lg font-semibold">API Keys</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">Production API Key</p>
                    <p className="text-sm text-muted-foreground">sk-***************xyz123</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Rotate</Button>
                    <Button variant="outline" size="sm">Revoke</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">Development API Key</p>
                    <p className="text-sm text-muted-foreground">sk-***************abc789</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Rotate</Button>
                    <Button variant="outline" size="sm">Revoke</Button>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Generate New API Key
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Bell className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Notification Preferences</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Experiment Completion</p>
                    <p className="text-sm text-muted-foreground">Get notified when experiments finish</p>
                  </div>
                  <Switch 
                    checked={notifications.experimentComplete}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, experimentComplete: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Model Deployment</p>
                    <p className="text-sm text-muted-foreground">Alerts for successful/failed deployments</p>
                  </div>
                  <Switch 
                    checked={notifications.modelDeployment}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, modelDeployment: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">System Alerts</p>
                    <p className="text-sm text-muted-foreground">Important system notifications and maintenance</p>
                  </div>
                  <Switch 
                    checked={notifications.systemAlerts}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, systemAlerts: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Weekly Reports</p>
                    <p className="text-sm text-muted-foreground">Summary of your activity and performance</p>
                  </div>
                  <Switch 
                    checked={notifications.weeklyReports}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, weeklyReports: checked }))
                    }
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Delivery Methods</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Email notifications</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span>In-app notifications</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span>Slack integration</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span>Discord webhooks</span>
                  <Switch />
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end">
          <Button>Save All Settings</Button>
        </div>
      </div>
    </div>
  );
}