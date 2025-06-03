
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { FileText, Video, Search } from "lucide-react";
import ArticleView from "@/components/resources/ArticleView";
import VideoView from "@/components/resources/VideoView";

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  // Sample educational resources with full content
  const articles = [
    {
      id: "a1",
      title: "Understanding Common Cold vs. Flu",
      description: "Learn the key differences between cold and flu symptoms, and when to seek medical attention.",
      type: "article",
      readTime: "5 min read",
      category: "General Health",
      content: `The common cold and flu are both respiratory infections, but they're caused by different viruses and have distinct characteristics.

**Common Cold Symptoms:**
- Gradual onset
- Runny or stuffy nose
- Mild cough
- Low-grade fever or no fever
- Mild body aches
- Sneezing

**Flu Symptoms:**
- Sudden onset
- High fever (usually 100°F or higher)
- Severe body aches
- Dry cough
- Extreme fatigue
- Headache

**When to Seek Medical Attention:**
- Fever above 103°F
- Difficulty breathing
- Chest pain
- Severe headache
- Persistent vomiting

**Prevention Tips:**
- Wash hands frequently
- Avoid touching face
- Get annual flu vaccine
- Stay home when sick
- Maintain healthy lifestyle

Remember, while colds are usually mild and resolve on their own, the flu can lead to serious complications, especially in young children, adults over 65, and people with chronic health conditions.`,
    },
    {
      id: "a2",
      title: "Managing Chronic Pain: A Comprehensive Guide",
      description: "Explore various strategies for managing chronic pain, from medication to lifestyle changes.",
      type: "article",
      readTime: "8 min read",
      category: "Chronic Conditions",
      content: `Chronic pain affects millions of people worldwide and can significantly impact quality of life. Understanding your options for management is crucial.

**Types of Chronic Pain:**
- Arthritis pain
- Back pain
- Nerve pain (neuropathy)
- Fibromyalgia
- Migraine headaches

**Medical Management:**
- Over-the-counter pain relievers
- Prescription medications
- Physical therapy
- Injections or nerve blocks
- Alternative therapies like acupuncture

**Lifestyle Strategies:**
- Regular gentle exercise
- Stress management techniques
- Adequate sleep
- Healthy diet
- Support groups

**Working with Healthcare Providers:**
- Keep a pain diary
- Be honest about pain levels
- Discuss all treatment options
- Ask about side effects
- Consider second opinions

Remember that chronic pain management is often most effective with a comprehensive approach that combines medical treatment with lifestyle modifications.`,
    },
    {
      id: "a3",
      title: "Mental Health and Physical Well-being",
      description: "How mental health affects physical health and vice versa. Tips for maintaining both.",
      type: "article",
      readTime: "6 min read",
      category: "Mental Health",
      content: `The connection between mental and physical health is profound and bidirectional. Understanding this relationship can help you take a more holistic approach to wellness.

**How Mental Health Affects Physical Health:**
- Stress can weaken immune system
- Anxiety may cause digestive issues
- Depression can lead to chronic fatigue
- Poor mental health may worsen chronic conditions

**How Physical Health Affects Mental Health:**
- Chronic illness can lead to depression
- Pain can cause anxiety
- Lack of exercise affects mood
- Poor nutrition impacts brain function

**Strategies for Integrated Wellness:**
- Regular exercise (even light walking)
- Mindfulness and meditation
- Adequate sleep (7-9 hours nightly)
- Balanced nutrition
- Social connections
- Professional support when needed

**Warning Signs to Watch For:**
- Persistent sadness or anxiety
- Changes in sleep patterns
- Loss of interest in activities
- Significant weight changes
- Difficulty concentrating

Taking care of both your mental and physical health creates a positive cycle that enhances overall well-being.`,
    },
    {
      id: "a4",
      title: "The Importance of Regular Health Screenings",
      description: "Age-appropriate health screenings everyone should consider, and why they matter.",
      type: "article",
      readTime: "7 min read",
      category: "Preventive Care",
      content: `Regular health screenings are one of the most effective ways to catch health problems early when they're most treatable.

**Screenings by Age Group:**

**Ages 20-39:**
- Blood pressure (every 2 years)
- Cholesterol (every 5 years)
- Diabetes screening (every 3 years if risk factors present)
- Skin cancer checks (annual self-exams)

**Ages 40-64:**
- All of the above, plus:
- Mammograms (annually for women)
- Colonoscopy (starting at 45-50)
- Prostate screening (for men, discuss with doctor)

**Ages 65+:**
- All previous screenings, plus:
- Bone density screening
- Eye exams (annually)
- Hearing tests

**Why Screenings Matter:**
- Early detection saves lives
- Treatment is often more effective when caught early
- Can prevent progression of disease
- Peace of mind

**Preparing for Screenings:**
- Know your family history
- List current medications
- Prepare questions for your doctor
- Follow pre-screening instructions

Remember, these are general guidelines. Your doctor may recommend different timing based on your individual risk factors and health history.`,
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
      content: `This video demonstrates safe and effective exercises you can do at home to help relieve back pain and improve flexibility.

**Exercises Covered:**
1. **Cat-Cow Stretch** (2 minutes)
   - Start on hands and knees
   - Arch and round your back slowly
   - Improves spinal flexibility

2. **Knee-to-Chest Stretch** (2 minutes)
   - Lie on your back
   - Pull one knee to chest, hold 30 seconds
   - Repeat with other leg

3. **Pelvic Tilts** (2 minutes)
   - Lie on back with knees bent
   - Tilt pelvis to flatten lower back
   - Strengthens core muscles

4. **Child's Pose** (2 minutes)
   - Kneel and sit back on heels
   - Stretch arms forward
   - Gentle stretch for entire back

5. **Standing Forward Fold** (2 minutes)
   - Stand with feet hip-width apart
   - Slowly fold forward
   - Stretches hamstrings and lower back

6. **Gentle Spinal Twist** (2 minutes)
   - Sit cross-legged
   - Twist gently to each side
   - Improves spinal mobility

**Important Safety Tips:**
- Start slowly and listen to your body
- Stop if you feel sharp pain
- Breathe deeply throughout
- Consistency is more important than intensity
- Consult your doctor before starting any exercise program

Practice these exercises daily for best results. Remember, movement is medicine for back pain!`,
    },
    {
      id: "v2",
      title: "Understanding Blood Pressure Readings",
      description: "Learn how to interpret blood pressure numbers and what they mean for your health.",
      type: "video",
      duration: "8 minutes",
      category: "Heart Health",
      thumbnailColor: "bg-red-100",
      content: `This educational video explains how to understand blood pressure readings and what they mean for your cardiovascular health.

**What is Blood Pressure?**
Blood pressure is the force of blood pushing against artery walls as your heart pumps blood.

**Understanding the Numbers:**
- **Systolic** (top number): Pressure when heart beats
- **Diastolic** (bottom number): Pressure when heart rests

**Blood Pressure Categories:**
- **Normal**: Less than 120/80 mmHg
- **Elevated**: 120-129 systolic, less than 80 diastolic
- **Stage 1 Hypertension**: 130-139/80-89 mmHg
- **Stage 2 Hypertension**: 140/90 mmHg or higher
- **Hypertensive Crisis**: Higher than 180/120 mmHg

**Factors That Affect Blood Pressure:**
- Time of day
- Physical activity
- Stress levels
- Caffeine intake
- Medications
- White coat syndrome

**Tips for Accurate Readings:**
- Sit quietly for 5 minutes before measuring
- Use proper cuff size
- Keep feet flat on floor
- Don't talk during measurement
- Take multiple readings

**When to See a Doctor:**
- Consistently high readings
- Sudden changes in blood pressure
- Symptoms like headache, chest pain, or shortness of breath

Regular monitoring helps you and your healthcare provider make informed decisions about your heart health.`,
    },
    {
      id: "v3",
      title: "Mindfulness Techniques for Stress Relief",
      description: "Guided mindfulness exercises to help reduce stress and improve mental well-being.",
      type: "video",
      duration: "15 minutes",
      category: "Mental Health",
      thumbnailColor: "bg-green-100",
      content: `This guided session teaches practical mindfulness techniques you can use anywhere to reduce stress and improve your mental well-being.

**Techniques Covered:**

**1. Basic Breathing Exercise** (3 minutes)
- Find comfortable position
- Focus on natural breath
- Count: 4 counts in, 6 counts out
- Notice sensations of breathing

**2. Body Scan Meditation** (5 minutes)
- Start at top of head
- Slowly move attention through body
- Notice areas of tension
- Breathe into tight spots

**3. 5-4-3-2-1 Grounding Technique** (2 minutes)
- 5 things you can see
- 4 things you can touch
- 3 things you can hear
- 2 things you can smell
- 1 thing you can taste

**4. Loving-Kindness Meditation** (3 minutes)
- Send good wishes to yourself
- Extend to loved ones
- Include difficult people
- Embrace all beings

**5. Mindful Walking** (2 minutes)
- Focus on each step
- Feel feet touching ground
- Notice surroundings without judgment
- Coordinate with breathing

**Benefits of Regular Practice:**
- Reduced stress and anxiety
- Improved emotional regulation
- Better sleep quality
- Enhanced focus and concentration
- Greater self-awareness

**Getting Started:**
- Start with just 5 minutes daily
- Be patient with yourself
- Use apps or guided meditations
- Create a quiet space
- Practice consistently

Remember, mindfulness is a skill that develops over time. Be gentle with yourself as you learn.`,
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

  // Find selected content
  const currentArticle = selectedArticle ? articles.find(a => a.id === selectedArticle) : null;
  const currentVideo = selectedVideo ? videos.find(v => v.id === selectedVideo) : null;

  // Handle back navigation
  const handleBack = () => {
    setSelectedArticle(null);
    setSelectedVideo(null);
  };

  // If viewing an article or video, show that view
  if (currentArticle) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <ArticleView article={currentArticle} onBack={handleBack} />
        </div>
      </Layout>
    );
  }

  if (currentVideo) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <VideoView video={currentVideo} onBack={handleBack} />
        </div>
      </Layout>
    );
  }

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
                      <button 
                        onClick={() => setSelectedArticle(article.id)}
                        className="text-health-primary hover:underline text-sm font-medium cursor-pointer"
                      >
                        Read article
                      </button>
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
                      <button 
                        onClick={() => setSelectedVideo(video.id)}
                        className="text-health-primary hover:underline text-sm font-medium cursor-pointer"
                      >
                        Watch video
                      </button>
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
