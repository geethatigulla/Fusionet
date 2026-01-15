import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Stethoscope, Brain, Shield, Clock } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                FusionNet: AI for 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  {" "}Lung Disease Detection
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Upload X-ray, Lung Sound, and Prescription to get a complete health report with AI-powered analysis and personalized recommendations.
              </p>
            </div>

            <Button
              onClick={() => onNavigate('diagnosis')}
              className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Diagnosis
            </Button>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
                <Brain className="w-4 h-4 text-teal-600" />
                <span className="text-sm text-gray-700">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">Secure</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
                <Clock className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-700">Fast Results</span>
              </div>
            </div>
          </div>

          {/* Right Content - Medical Illustration */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1715527498875-8b9b25e51dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbHVuZ3MlMjBzdGV0aG9zY29wZSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NTc1OTUyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Medical AI Technology"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-lg">
              <Stethoscope className="w-6 h-6 text-teal-600" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How FusionNet Works</h2>
          <p className="text-lg text-gray-600">Advanced AI analysis combining multiple data sources for accurate diagnosis</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Upload Medical Data</h3>
            <p className="text-gray-600">Upload chest X-rays, lung sounds, and prescription information for comprehensive analysis.</p>
          </Card>

          <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Analysis</h3>
            <p className="text-gray-600">Our advanced AI models analyze your data using state-of-the-art deep learning algorithms.</p>
          </Card>

          <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Results</h3>
            <p className="text-gray-600">Receive detailed diagnosis, severity assessment, and personalized medical recommendations.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}