import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Upload, FileImage, Volume2, FileText, Play, Pause } from 'lucide-react';

interface DiagnosisPageProps {
  onNavigate: (page: string) => void;
}

export function DiagnosisPage({ onNavigate }: DiagnosisPageProps) {
  const [result, setResult] = useState<number | null>(null);
  const [xrayFile, setXrayFile] = useState<File | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleXrayUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setXrayFile(file);
    }
  };

  const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAudioFile(file);
    }
  };

  const handlePrescriptionUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPrescriptionFile(file);
    }
  };

  const handleRunDiagnosis = async () => {
  if (!xrayFile && !audioFile && !prescriptionFile) return;

  setIsAnalyzing(true);
  setProgress(30);

  const formData = new FormData();
  if (xrayFile) formData.append("image", xrayFile);
  if (audioFile) formData.append("audio", audioFile);
  if (prescriptionFile) formData.append("text", prescriptionFile);
try {
  const res = await fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    body: formData
  });

  console.log("Status:", res.status);
const data = await res.json();
console.log("Backend data:", data);

if (data.prediction !== undefined) {
  setResult(data.prediction);
}

setProgress(100);
setIsAnalyzing(false);
}

  const canRunDiagnosis = xrayFile || audioFile || prescriptionFile;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Medical Diagnosis</h1>
          <p className="text-lg text-gray-600">Upload your medical data for AI-powered analysis</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* X-ray Upload */}
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileImage className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Chest X-ray</h3>
              <p className="text-sm text-gray-600 mb-4">Upload your chest X-ray image</p>
              
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleXrayUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Button
                  variant="outline"
                  className="w-full border-2 border-dashed border-blue-300 hover:border-blue-500 hover:bg-blue-50"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {xrayFile ? 'Change Image' : 'Upload Image'}
                </Button>
              </div>
              
              {xrayFile && (
                <div className="mt-3 p-2 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700 truncate">{xrayFile.name}</p>
                </div>
              )}
            </div>
          </Card>

          {/* Audio Upload */}
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Volume2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lung Sound</h3>
              <p className="text-sm text-gray-600 mb-4">Upload lung sound recording</p>
              
              <div className="relative">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleAudioUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Button
                  variant="outline"
                  className="w-full border-2 border-dashed border-teal-300 hover:border-teal-500 hover:bg-teal-50"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {audioFile ? 'Change Audio' : 'Upload Audio'}
                </Button>
              </div>
              
              {audioFile && (
                <div className="mt-3 space-y-2">
                  <div className="p-2 bg-teal-50 rounded-lg">
                    <p className="text-sm text-teal-700 truncate">{audioFile.name}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-full"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 mr-1" /> : <Play className="w-4 h-4 mr-1" />}
                    {isPlaying ? 'Pause' : 'Play'}
                  </Button>
                </div>
              )}
            </div>
          </Card>

          {/* Prescription Upload */}
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prescription</h3>
              <p className="text-sm text-gray-600 mb-4">Upload prescription document</p>
              
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt,image/*"
                  onChange={handlePrescriptionUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Button
                  variant="outline"
                  className="w-full border-2 border-dashed border-green-300 hover:border-green-500 hover:bg-green-50"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {prescriptionFile ? 'Change File' : 'Upload File'}
                </Button>
              </div>
              
              {prescriptionFile && (
                <div className="mt-3 p-2 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700 truncate">{prescriptionFile.name}</p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Analysis Section */}
        <Card className="p-8 text-center">
          {!isAnalyzing ? (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Ready for Analysis</h3>
              <p className="text-gray-600">
                {canRunDiagnosis 
                  ? 'Click the button below to start AI analysis of your medical data.'
                  : 'Please upload at least one type of medical data to proceed.'}
              </p>
              <Button
                onClick={handleRunDiagnosis}
                disabled={!canRunDiagnosis}
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Run Diagnosis
              </Button>
              {result !== null && (
  <p className="mt-4 text-lg font-semibold text-gray-800">
    Prediction: {result}
  </p>
)}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">Analyzing Medical Data</h3>
                <p className="text-gray-600">AI is processing your information...</p>
              </div>
              <div className="space-y-2">
                <Progress value={progress} className="w-full max-w-md mx-auto" />
                <p className="text-sm text-gray-500">{progress}% Complete</p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}



