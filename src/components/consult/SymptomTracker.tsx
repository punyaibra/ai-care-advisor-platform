
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const SymptomTracker = () => {
  const [painLevel, setPainLevel] = useState(0);

  return (
    <div className="bg-white rounded-lg shadow p-4 md:p-6">
      <h2 className="text-xl font-semibold text-health-dark mb-4">Symptom Tracker</h2>
      
      <div className="space-y-6">
        {/* Duration Section */}
        <div>
          <h3 className="font-medium text-health-dark mb-2">Duration of Symptoms</h3>
          <RadioGroup defaultValue="today">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="today" id="today" />
                <Label htmlFor="today">Today</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="few-days" id="few-days" />
                <Label htmlFor="few-days">Few days</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="week" id="week" />
                <Label htmlFor="week">A week</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="longer" id="longer" />
                <Label htmlFor="longer">Longer</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
        
        {/* Pain Level */}
        <div>
          <div className="flex justify-between mb-2">
            <h3 className="font-medium text-health-dark">Pain Level</h3>
            <span className="text-sm text-gray-500">
              {painLevel === 0 ? "No pain" : 
               painLevel < 4 ? "Mild" :
               painLevel < 7 ? "Moderate" : "Severe"} ({painLevel}/10)
            </span>
          </div>
          <Slider 
            value={[painLevel]} 
            min={0} 
            max={10} 
            step={1} 
            onValueChange={(value) => setPainLevel(value[0])}
            className="my-4"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>No pain</span>
            <span>Worst pain</span>
          </div>
        </div>
        
        {/* Common Symptoms */}
        <div>
          <h3 className="font-medium text-health-dark mb-2">Common Symptoms</h3>
          <div className="grid grid-cols-2 gap-2">
            {["Fever", "Cough", "Headache", "Nausea", "Fatigue", "Sore throat"].map((symptom) => (
              <div key={symptom} className="flex items-center">
                <input
                  type="checkbox"
                  id={symptom.toLowerCase().replace(' ', '-')}
                  className="rounded border-gray-300 text-health-primary focus:ring-health-primary h-4 w-4 mr-2"
                />
                <label 
                  htmlFor={symptom.toLowerCase().replace(' ', '-')}
                  className="text-sm text-gray-700"
                >
                  {symptom}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomTracker;
