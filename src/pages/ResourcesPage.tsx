
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { FileText, Video, Search } from "lucide-react";

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample educational resources
  const articles = [
    {
      id: "a1",
      title: "Understanding Common Cold vs. Flu",
      description: "Learn the key differences between cold and flu symptoms, and when to seek medical attention.",
      type: "article",
      readTime: "5 min read",
      category: "General Health",
      url: "#",
    },
    {
      id: "a2",
      title: "Managing Chronic Pain: A Comprehensive Guide",
      description: "Explore various strategies for managing chronic pain, from medication to lifestyle changes.",
      type: "article",
      readTime: "8 min read",
      category: "Chronic Conditions",
      url: "#",
    },
    {
      id: "a3",
      title: "Mental Health and Physical Well-being",
      description: "How mental health affects physical health and vice versa. Tips for maintaining both.",
      type: "article",
      readTime: "6 min read",
      category: "Mental Health",
      url: "#",
    },
    {
      id: "a4",
      title: "The Importance of Regular Health Screenings",
      description: "Age-appropriate health screenings everyone should consider, and why they matter.",
      type: "article",
      readTime: "7 min read",
      category: "Preventive Care",
      url: "#",
    },
  ];
  
  const videos = [
    {
      id: "v1",
      title: "At-Home Exercises for Back Pain Relief",
      description: "Simple stretches and exercises to relieve back pain that you can do in your home.",
      type: "video",
      duration: "12 minutes",
      category: "Exercise",
      thumbnailColor: "bg-blue-100",
      url: "#",
    },
    {
      id: "v2",
      title: "Understanding Blood Pressure Readings",
      description: "Learn how to interpret blood pressure numbers and what they mean for your health.",
      type: "video",
      duration: "8 minutes",
      category: "Heart Health",
      thumbnailColor: "bg-red-100",
      url: "#",
    },
    {
      id: "v3",
      title: "Mindfulness Techniques for Stress Relief",
      description: "Guided mindfulness exercises to help reduce stress and improve mental well-being.",
      type: "video",
      duration: "15 minutes",
      category: "Mental Health",
      thumbnailColor: "bg-green-100",
      url: "#",
    },
  ];
  
  // Filter resources based on search query
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-health-dark">Health Resources</h1>
        
        <div className="relative max-w-lg mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="search"
            placeholder="Search for health topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="articles">
              <FileText className="h-4 w-4 mr-2" /> Articles
            </TabsTrigger>
            <TabsTrigger value="videos">
              <Video className="h-4 w-4 mr-2" /> Videos
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="articles">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{article.title}</CardTitle>
                          <CardDescription className="mt-1">{article.category}</CardDescription>
                        </div>
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {article.readTime}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{article.description}</p>
                    </CardContent>
                    <CardFooter>
                      <a 
                        href={article.url}
                        className="text-health-primary hover:underline text-sm font-medium"
                      >
                        Read article
                      </a>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <p className="text-gray-500">No articles found matching your search.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredVideos.length > 0 ? (
                filteredVideos.map((video) => (
                  <Card key={video.id} className="overflow-hidden">
                    <div className={`h-40 ${video.thumbnailColor} flex items-center justify-center`}>
                      <Video className="h-12 w-12 text-gray-600" />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{video.title}</CardTitle>
                          <CardDescription className="mt-1">{video.category}</CardDescription>
                        </div>
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {video.duration}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{video.description}</p>
                    </CardContent>
                    <CardFooter>
                      <a 
                        href={video.url}
                        className="text-health-primary hover:underline text-sm font-medium"
                      >
                        Watch video
                      </a>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <p className="text-gray-500">No videos found matching your search.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ResourcesPage;
