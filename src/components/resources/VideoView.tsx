
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowLeft, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Video {
  id: string;
  title: string;
  description: string;
  type: string;
  duration: string;
  category: string;
  thumbnailColor: string;
  content: string;
}

interface VideoViewProps {
  video: Video;
  onBack: () => void;
}

const VideoView = ({ video, onBack }: VideoViewProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-6 hover:bg-health-light"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Resources
      </Button>
      
      <Card>
        <div className={`h-64 ${video.thumbnailColor} flex items-center justify-center relative group cursor-pointer`}>
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center">
            <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform duration-200">
              <Play className="h-8 w-8 text-health-primary" />
            </div>
          </div>
        </div>
        
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">{video.category}</Badge>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              {video.duration}
            </div>
          </div>
          <CardTitle className="text-2xl md:text-3xl">{video.title}</CardTitle>
          <p className="text-lg text-gray-600 mt-2">{video.description}</p>
        </CardHeader>
        
        <CardContent className="prose max-w-none">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {video.content}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoView;
