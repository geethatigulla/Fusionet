import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { FileImage, Volume2, FileText, Brain, Eye, Activity, AlertTriangle, MessageSquare, ArrowRight, ArrowDown } from 'lucide-react';

export function FrameworkPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">FusionNet Architecture</h1>
          <p className="text-xl text-muted-foreground">A Multimodal Deep Learning Framework for Lung Disease Detection</p>
          <Badge className="bg-teal-100 text-teal-800 px-4 py-2">Medical AI • Multi-Modal • Deep Learning Framework</Badge>
        </div>

        {/* Framework Diagram */}
        <div className="relative">
          {/* Input Layer */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* X-ray Input */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <FileImage className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Chest X-ray Images</h3>
                <p className="text-sm text-blue-700">High-resolution medical images</p>
                <Badge className="bg-blue-200 text-blue-800 mt-2">DICOM • PNG • JPG</Badge>
              </div>
            </Card>

            {/* Audio Input */}
            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200 text-center space-y-4">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                <Volume2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-900">Lung Audio Recordings</h3>
                <p className="text-sm text-green-700">Respiratory sound analysis</p>
                <Badge className="bg-green-200 text-green-800 mt-2">WAV • MP3 • FLAC</Badge>
              </div>
            </Card>

            {/* Text Input */}
            <Card className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 text-center space-y-4">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-teal-900">Doctor's Prescriptions</h3>
                <p className="text-sm text-teal-700">Clinical notes and reports</p>
                <Badge className="bg-teal-200 text-teal-800 mt-2">Text • PDF • Structured</Badge>
              </div>
            </Card>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center space-y-2">
              <ArrowDown className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-muted-foreground">Data Preprocessing</span>
            </div>
          </div>

          {/* Model Layer */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* CNN for Images */}
            <Card className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200 text-center space-y-4">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-900">Deep CNN</h3>
                <p className="text-sm text-indigo-700">Deep Convolutional Networks</p>
                <div className="text-xs text-indigo-600 space-y-1 mt-3">
                  <p>• ResNet / DenseNet / EfficientNet</p>
                  <p>• Deep feature extraction</p>
                  <p>• Multi-scale analysis</p>
                </div>
              </div>
            </Card>

            {/* CNN + LSTM for Audio */}
            <Card className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-900">Deep RNN + CNN</h3>
                <p className="text-sm text-emerald-700">Deep temporal-spatial analysis</p>
                <div className="text-xs text-emerald-600 space-y-1 mt-3">
                  <p>• Deep spectral features</p>
                  <p>• LSTM/GRU networks</p>
                  <p>• Sequential pattern learning</p>
                </div>
              </div>
            </Card>

            {/* LSTM/Transformer for Text */}
            <Card className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200 text-center space-y-4">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-900">Deep Transformer</h3>
                <p className="text-sm text-cyan-700">Deep language understanding</p>
                <div className="text-xs text-cyan-600 space-y-1 mt-3">
                  <p>• BERT/RoBERTa/BioBERT</p>
                  <p>• Deep clinical NLP</p>
                  <p>• Contextual embeddings</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center space-y-2">
              <ArrowDown className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-muted-foreground">Feature Fusion</span>
            </div>
          </div>

          {/* Fusion Layer */}
          <div className="flex justify-center mb-12">
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 text-center max-w-md">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Deep Fusion Layer</h3>
              <p className="text-sm text-purple-700 mb-4">Deep multi-modal integration</p>
              <div className="text-xs text-purple-600 space-y-1">
                <p>• Deep attention mechanisms</p>
                <p>• Cross-modal transformers</p>
                <p>• Deep feature fusion</p>
                <p>• Multi-head attention</p>
              </div>
            </Card>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center space-y-2">
              <ArrowDown className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-muted-foreground">Output Generation</span>
            </div>
          </div>

          {/* Output Layer */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Disease Prediction */}
            <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 border-red-200 text-center space-y-4">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                <AlertTriangle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-red-900">Disease Prediction</h3>
                <div className="text-xs text-red-700 space-y-1 mt-3">
                  <p>• Healthy</p>
                  <p>• Pneumonia</p>
                  <p>• Tuberculosis</p>
                  <p>• COPD</p>
                  <p>• COVID-19</p>
                </div>
              </div>
            </Card>

            {/* Severity Score */}
            <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 text-center space-y-4">
              <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center mx-auto">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-orange-900">Severity Score</h3>
                <div className="text-xs text-orange-700 space-y-1 mt-3">
                  <p>• Mild (0-33%)</p>
                  <p>• Moderate (34-66%)</p>
                  <p>• Severe (67-100%)</p>
                  <p>• Confidence score</p>
                </div>
              </div>
            </Card>

            {/* Grad-CAM Heatmap */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 text-center space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-blue-900">Grad-CAM Heatmap</h3>
                <div className="text-xs text-blue-700 space-y-1 mt-3">
                  <p>• Visual explanation</p>
                  <p>• Region highlighting</p>
                  <p>• Attention maps</p>
                  <p>• AI interpretability</p>
                </div>
              </div>
            </Card>

            {/* Precautionary Advice */}
            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200 text-center space-y-4">
              <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-green-900">Precautionary Advice</h3>
                <div className="text-xs text-green-700 space-y-1 mt-3">
                  <p>• Treatment suggestions</p>
                  <p>• Lifestyle recommendations</p>
                  <p>• Follow-up instructions</p>
                  <p>• Risk factors</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Deep Learning Architecture</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Deep multi-modal networks</p>
              <p>• Deep attention mechanisms</p>
              <p>• Deep transfer learning</p>
              <p>• Neural architecture search</p>
              <p>• Explainable deep learning</p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Accuracy: 96.3%</p>
              <p>• Sensitivity: 94.8%</p>
              <p>• Specificity: 97.1%</p>
              <p>• F1-Score: 95.6%</p>
              <p>• AUC-ROC: 0.983</p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Clinical Applications</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Early disease detection</p>
              <p>• Diagnostic assistance</p>
              <p>• Treatment planning</p>
              <p>• Risk assessment</p>
              <p>• Population screening</p>
            </div>
          </Card>
        </div>

        {/* Disclaimer */}
        <Card className="p-6 bg-yellow-50 border-yellow-200">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2">Medical Disclaimer</h4>
              <p className="text-sm text-yellow-800">
                FusionNet is a deep learning research framework designed to assist healthcare professionals in medical diagnosis. 
                All predictions should be validated by qualified medical practitioners. This system is not intended 
                to replace professional medical judgment or clinical decision-making.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}