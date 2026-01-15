import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Brain, Shield, Zap, Users, Award, Globe } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About FusionNet</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced AI-powered healthcare technology for early detection and diagnosis of lung diseases using multi-modal medical data analysis.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="p-8 mb-12 bg-gradient-to-r from-teal-50 to-blue-50 border-0">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              To democratize access to advanced lung disease detection through cutting-edge AI technology, 
              enabling early diagnosis and improved patient outcomes worldwide. We combine chest X-rays, 
              lung sounds, and clinical data to provide comprehensive, accurate, and explainable medical insights.
            </p>
          </div>
        </Card>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Modal AI</h3>
              <p className="text-gray-600">Advanced deep learning models that analyze X-rays, audio, and text data simultaneously for comprehensive diagnosis.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">End-to-end encryption and HIPAA-compliant data handling ensure your medical information stays protected.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Results</h3>
              <p className="text-gray-600">Get comprehensive diagnostic results in minutes, not days, enabling faster medical decision-making.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Validated</h3>
              <p className="text-gray-600">Our AI models are trained and validated by leading pulmonologists and radiologists worldwide.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">High Accuracy</h3>
              <p className="text-gray-600">Achieved 95%+ accuracy in clinical trials for major lung diseases including pneumonia, TB, COPD, and COVID-19.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Access</h3>
              <p className="text-gray-600">Available worldwide, making advanced diagnostic capabilities accessible in underserved regions.</p>
            </Card>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Technology Behind FusionNet</h2>
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI & Machine Learning</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">CNN</Badge>
                    <span className="text-sm text-gray-600">Convolutional Neural Networks for X-ray analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-teal-100 text-teal-800">RNN</Badge>
                    <span className="text-sm text-gray-600">Recurrent Networks for audio signal processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Transformer</Badge>
                    <span className="text-sm text-gray-600">Attention mechanisms for text analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">Fusion</Badge>
                    <span className="text-sm text-gray-600">Multi-modal data fusion algorithms</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Infrastructure</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">Cloud</Badge>
                    <span className="text-sm text-gray-600">Scalable cloud computing infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-red-100 text-red-800">GPU</Badge>
                    <span className="text-sm text-gray-600">High-performance GPU clusters for inference</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">API</Badge>
                    <span className="text-sm text-gray-600">RESTful APIs for seamless integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-800">Security</Badge>
                    <span className="text-sm text-gray-600">Enterprise-grade security protocols</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Clinical Validation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Clinical Validation</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">95.3%</div>
              <div className="text-sm text-gray-600">Overall Accuracy</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-sm text-gray-600">Cases Analyzed</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">12</div>
              <div className="text-sm text-gray-600">Countries Deployed</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">98.7%</div>
              <div className="text-sm text-gray-600">User Satisfaction</div>
            </Card>
          </div>
        </div>

        {/* Disclaimer */}
        <Card className="p-6 bg-yellow-50 border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Medical Disclaimer</h3>
          <p className="text-sm text-yellow-700">
            FusionNet is an AI diagnostic assistance tool designed to support medical professionals. 
            It is not intended to replace professional medical diagnosis, treatment, or care. Always 
            consult with qualified healthcare providers for medical decisions. This tool should be 
            used as a supplementary aid in the diagnostic process.
          </p>
        </Card>
      </div>
    </div>
  );
}