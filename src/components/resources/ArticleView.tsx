
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Article {
  id: string;
  title: string;
  description: string;
  type: string;
  readTime: string;
  category: string;
  content: string;
}

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
}

const ArticleView = ({ article, onBack }: ArticleViewProps) => {
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
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">{article.category}</Badge>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              {article.readTime}
            </div>
          </div>
          <CardTitle className="text-2xl md:text-3xl">{article.title}</CardTitle>
          <p className="text-lg text-gray-600 mt-2">{article.description}</p>
        </CardHeader>
        
        <CardContent className="prose max-w-none">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {article.content}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleView;
