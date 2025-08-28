import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share, Star, TrendingUp } from "lucide-react";
import { useInteraction } from "@/lib/interactionContext";
import { CommentModal } from "@/components/ui/comment-modal";

// Demo community feed data
const communityPosts = [
  {
    id: 'home-1',
    content: 'Apple stock showing strong momentum after Q1 earnings beat. Revenue up 8% YoY with services segment driving growth. Looking for potential entry around $185-190 range.',
    author: {
      name: 'Sarah Chen',
      username: '@sarahc_trades',
      isExpert: true,
      expertise: 'Tech Analyst'
    },
    createdAt: '2h ago',
    likes: 234,
    comments: 45,
    postType: 'analysis',
    hashtags: ['AAPL', 'TechStocks']
  },
  {
    id: 'home-2',
    content: 'Tesla Model Y refresh announcement could be a catalyst for the stock. Watching for entry around $185-190 range. What are your thoughts on EV market this quarter?',
    author: {
      name: 'Alex Kumar',
      username: '@alex_investing',
      isExpert: true,
      expertise: 'EV Specialist'
    },
    createdAt: '4h ago',
    likes: 187,
    comments: 32,
    postType: 'discussion',
    hashtags: ['TSLA', 'EVStocks']
  },
  {
    id: 'home-3',
    content: 'Market showing mixed signals today. Tech down 2.3% while energy sector up 1.8%. Perfect time for portfolio rebalancing. Remember to stick to your strategy!',
    author: {
      name: 'Michael Rodriguez',
      username: '@mike_portfolio',
      isExpert: false,
      expertise: 'Individual Investor'
    },
    createdAt: '6h ago',
    likes: 156,
    comments: 28,
    postType: 'news',
    hashtags: ['MarketUpdate', 'Portfolio']
  }
];

const Home = () => {
  const { 
    toggleLike, 
    sharePost, 
    addComment, 
    isLiked, 
    getCommentCount 
  } = useInteraction();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          {/* Empty space for back button alignment */}
        </div>
        <div className="text-right text-sm text-gray-500">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="rounded-full border border-gray-200 hover:border-primary/50 hover:shadow-md hover:shadow-primary/20 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>

      {/* Landing Hero Section */}
      <div className="bg-primary rounded-xl p-4 text-white mx-4 mb-4 border-2 border-primary-foreground/20 hover:border-primary-foreground/40 transition-all duration-300 transform hover:scale-[1.01] shadow-lg hover:shadow-xl hover:shadow-primary/30">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-1">WealthDost</h1>
          <p className="text-sm text-white/80 mb-4">Scroll · Learn · Connect</p>
        </div>
        <p className="mb-4 text-sm">Join a community of investors and experts to learn, debate, and grow your financial knowledge.</p>
        <Link href="/create-account">
          <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white hover:border-primary/20 hover:shadow-lg hover:shadow-white/20">
            Get Started
          </Button>
        </Link>
      </div>

      {/* Features Preview */}
      <div className="px-4 mb-4 flex-1">
        <h3 className="text-lg font-semibold mb-3">What you'll get</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-3 rounded-xl border-2 border-purple-100 hover:border-purple-300 shadow-sm h-24 flex flex-col justify-center transform hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer">
            <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mb-1">
              <span className="material-icons text-primary text-base">connect_without_contact</span>
            </div>
            <h4 className="font-semibold text-xs leading-tight mb-0.5">Expert Connect</h4>
            <p className="text-xs text-gray-600 text-xs">Get advice from experts</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 rounded-xl border-2 border-green-100 hover:border-green-300 shadow-sm h-24 flex flex-col justify-center transform hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 cursor-pointer">
            <div className="bg-green-500/10 w-8 h-8 rounded-full flex items-center justify-center mb-1">
              <span className="material-icons text-green-600 text-base">trending_up</span>
            </div>
            <h4 className="font-semibold text-xs leading-tight mb-0.5">Market Insights</h4>
            <p className="text-xs text-gray-600">Track stocks & crypto</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-3 rounded-xl border-2 border-orange-100 hover:border-orange-300 shadow-sm h-24 flex flex-col justify-center transform hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 cursor-pointer">
            <div className="bg-orange-500/10 w-8 h-8 rounded-full flex items-center justify-center mb-1">
              <span className="material-icons text-orange-600 text-base">groups</span>
            </div>
            <h4 className="font-semibold text-xs leading-tight mb-0.5">Join Tribes</h4>
            <p className="text-xs text-gray-600">Unlock Wealth Circle</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-xl border-2 border-blue-100 hover:border-blue-300 shadow-sm h-24 flex flex-col justify-center transform hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer">
            <div className="bg-blue-500/10 w-8 h-8 rounded-full flex items-center justify-center mb-1">
              <span className="material-icons text-blue-600 text-base">quiz</span>
            </div>
            <h4 className="font-semibold text-xs leading-tight mb-0.5">Quiz & Debate</h4>
            <p className="text-xs text-gray-600">Test knowledge</p>
          </div>
        </div>
      </div>

      {/* Community Feed Preview */}
      <div className="px-4 mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Community Feed
        </h3>
        <div className="space-y-4">
          {communityPosts.map((post) => {
            const liked = isLiked(post.id);
            const commentCount = getCommentCount(post.id);
            
            return (
              <Card key={post.id} className="bg-white/70 backdrop-blur-md border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] rounded-2xl overflow-hidden">
                <CardContent className="p-4">
                  {/* Author Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-bold">
                        {post.author.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-sm">{post.author.name}</h4>
                        {post.author.isExpert && (
                          <div className="p-1 bg-yellow-100/70 backdrop-blur-sm border border-yellow-200 rounded-full">
                            <Star className="h-3 w-3 text-yellow-600 fill-current" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{post.author.expertise} • {post.createdAt}</p>
                    </div>
                    <Badge variant="outline" className="text-xs border-2 backdrop-blur-sm">
                      {post.postType}
                    </Badge>
                  </div>

                  {/* Post Content */}
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">{post.content}</p>

                  {/* Hashtags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.hashtags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-blue-50/70 text-blue-700 border border-blue-200 hover:border-blue-300">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Interactive Buttons */}
                  <div className="flex items-center justify-between pt-3 border-t-2 border-gray-100">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`flex items-center space-x-1 text-xs border-2 border-transparent rounded-xl transition-all duration-300 active:scale-95 hover:bg-red-50/70 hover:backdrop-blur-sm ${
                        liked ? 'text-red-600 bg-red-50/70 backdrop-blur-sm border-red-200' : 'text-gray-500'
                      }`}
                      onClick={() => toggleLike(post.id)}
                    >
                      <Heart size={14} className={`transition-all duration-300 ${liked ? 'fill-current' : ''}`} />
                      <span className="font-medium">{post.likes + (liked ? 1 : 0)}</span>
                    </Button>
                    
                    <CommentModal postId={post.id} onAddComment={addComment}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center space-x-1 text-xs text-gray-500 border-2 border-transparent rounded-xl transition-all duration-300 active:scale-95 hover:bg-blue-50/70 hover:backdrop-blur-sm hover:text-blue-600"
                      >
                        <MessageCircle size={14} className="transition-all duration-300" />
                        <span className="font-medium">{post.comments + commentCount}</span>
                      </Button>
                    </CommentModal>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-1 text-xs text-gray-500 border-2 border-transparent rounded-xl transition-all duration-300 active:scale-95 hover:bg-gray-50/70 hover:backdrop-blur-sm hover:text-gray-600"
                      onClick={() => sharePost(post.id)}
                    >
                      <Share size={14} className="transition-all duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-4">
          <Link href="/dashboard">
            <Button variant="outline" className="border-2 border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 active:scale-95 rounded-xl">
              View More Posts
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-auto text-center text-xs text-gray-500 px-4 py-2">
        By signing up, you agree to our Terms of Service and Privacy Policy
      </div>
    </div>
  );
};

export default Home;
