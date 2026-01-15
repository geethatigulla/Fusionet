import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AlertCircle, CheckCircle, Heart, Brain, Shield, FileText } from 'lucide-react';

export function ResultsPage() {
  // Mock data for demonstration
  const diagnosisResult = {
    disease: 'Healthy',
    confidence: 92,
    severity: 'None',
    severityScore: 15 // Out of 100, lower is better
  };

  const recommendations = [
    "Continue regular exercise and maintain a healthy lifestyle",
    "Schedule routine check-ups every 6 months",
    "Maintain good air quality in living spaces",
    "Consider flu vaccination during flu season"
  ];

  const getStatusColor = (disease: string) => {
    switch (disease.toLowerCase()) {
      case 'healthy': return 'text-green-600 bg-green-50 border-green-200';
      case 'pneumonia': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'tb': return 'text-red-600 bg-red-50 border-red-200';
      case 'copd': return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'covid': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getSeverityColor = (score: number) => {
    if (score < 30) return 'bg-green-500';
    if (score < 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Diagnosis Results</h1>
          <p className="text-lg text-gray-600">AI analysis completed successfully</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Disease Prediction */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Disease Prediction</h2>
              </div>
              
              <div className="space-y-4">
                <div className={`p-4 rounded-lg border ${getStatusColor(diagnosisResult.disease)}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {diagnosisResult.disease === 'Healthy' ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <AlertCircle className="w-6 h-6 text-orange-600" />
                      )}
                      <span className="text-lg font-semibold">{diagnosisResult.disease}</span>
                    </div>
                    <Badge variant="secondary" className="bg-white/80">
                      {diagnosisResult.confidence}% confidence
                    </Badge>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600">
                  <p>The AI model has analyzed your medical data and determined the most likely diagnosis based on the provided information.</p>
                </div>
              </div>
            </Card>

            {/* Severity Score */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Severity Assessment</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Severity Level</span>
                  <span className="text-sm font-semibold text-gray-900">{diagnosisResult.severity}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Risk Score</span>
                    <span>{diagnosisResult.severityScore}/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${getSeverityColor(diagnosisResult.severityScore)}`}
                      style={{ width: `${diagnosisResult.severityScore}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Low</span>
                    <span>Moderate</span>
                    <span>High</span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600">
                  <p>Based on the analysis, your condition shows minimal risk factors. Continue monitoring your health regularly.</p>
                </div>
              </div>
            </Card>

            {/* Precautionary Advice */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Recommendations</h2>
              </div>
              
              <div className="space-y-3">
                {recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-100">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-sm text-green-800">{recommendation}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-800">
                  <span className="font-medium">Important:</span> These recommendations are generated by AI and should not replace professional medical advice. Please consult with your healthcare provider for personalized treatment.
                </p>
              </div>
            </Card>
          </div>

          {/* Right Column - Explainability */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">AI Explainability</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  The heatmap below shows which areas of your X-ray the AI model focused on during analysis:
                </p>
                
                <div className="relative rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1584555684040-bad07f46a21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjaGVzdCUyMHhyYXklMjBtZWRpY2FsJTIwc2NhbnxlbnwxfHx8fDE3NTc1OTUyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Chest X-ray with Grad-CAM overlay"
                    className="w-full h-80 object-cover"
                  />
                  
                  {/* Simulated heatmap overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-500/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 rounded-lg p-2">
                    <div className="flex items-center space-x-2 text-xs">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Normal tissue</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-medium">Analysis Focus:</span> The AI model concentrated on lung field regions, particularly examining tissue density and patterns.</p>
                  <p><span className="font-medium">Key Findings:</span> No significant abnormalities detected in the analyzed regions. Lung fields appear clear with normal vascular markings.</p>
                </div>
              </div>
            </Card>
            
            {/* Analysis Summary */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Analysis Summary</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-sm font-medium text-blue-800">X-ray Analysis</p>
                    <p className="text-xs text-blue-600">Normal findings</p>
                  </div>
                  <div className="p-3 bg-teal-50 rounded-lg border border-teal-100">
                    <p className="text-sm font-medium text-teal-800">Lung Sounds</p>
                    <p className="text-xs text-teal-600">Clear breathing</p>
                  </div>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-sm font-medium text-gray-800">Overall Assessment</p>
                  <p className="text-xs text-gray-600">No signs of respiratory illness detected. Continue regular health monitoring.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}