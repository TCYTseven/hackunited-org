import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BlogPage() {
  return (
    <main className="flex flex-col items-center">
      <section className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hack United Blog</h1>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest in tech, hackathon tips, and community news.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-2/3">
            <Tabs defaultValue="all">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="all">All Posts</TabsTrigger>
                  <TabsTrigger value="tech">Tech News</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-6">
                {/* Featured Post */}
                <Card className="mb-8">
                  <div className="md:flex">
                    <div className="md:w-2/5 relative">
                      <div className="aspect-[4/3] md:h-full relative">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Featured blog post"
                          fill
                          className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                      </div>
                    </div>
                    <div className="md:w-3/5 p-6">
                      <Badge className="mb-2 bg-purple-100 text-purple-800 hover:bg-purple-200">Featured</Badge>
                      <h2 className="text-2xl font-bold mb-2">The Future of Hackathons in a Post-Pandemic World</h2>
                      <p className="text-muted-foreground mb-4">
                        How virtual and hybrid events are shaping the future of collaborative coding and innovation.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <span>May 10, 2025</span>
                        <span>•</span>
                        <span>8 min read</span>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700">Read More</Button>
                    </div>
                  </div>
                </Card>

                {/* Blog Posts Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Post 1 */}
                  <Card>
                    <div className="aspect-[16/9] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Blog post"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex gap-2 mb-2">
                        <Badge variant="outline">Tech News</Badge>
                      </div>
                      <CardTitle className="text-xl">
                        10 Essential Skills Every Hackathon Participant Should Have
                      </CardTitle>
                      <CardDescription>May 5, 2025 • 5 min read</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-2">
                        From technical skills to soft skills, we cover everything you need to succeed at your next
                        hackathon.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Read Article
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Post 2 */}
                  <Card>
                    <div className="aspect-[16/9] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Blog post"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex gap-2 mb-2">
                        <Badge variant="outline">Events</Badge>
                      </div>
                      <CardTitle className="text-xl">United Hacks V4 Recap: Innovation at Its Finest</CardTitle>
                      <CardDescription>April 28, 2025 • 6 min read</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-2">
                        A look back at our most successful hackathon yet, featuring incredible projects and inspiring
                        stories.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Read Article
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Post 3 */}
                  <Card>
                    <div className="aspect-[16/9] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Blog post"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex gap-2 mb-2">
                        <Badge variant="outline">Tutorials</Badge>
                      </div>
                      <CardTitle className="text-xl">Getting Started with AI: A Beginner's Guide</CardTitle>
                      <CardDescription>April 15, 2025 • 10 min read</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-2">
                        Everything you need to know to start building your first AI project, even with no prior
                        experience.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Read Article
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Post 4 */}
                  <Card>
                    <div className="aspect-[16/9] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Blog post"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex gap-2 mb-2">
                        <Badge variant="outline">Tech News</Badge>
                      </div>
                      <CardTitle className="text-xl">The Rise of No-Code Tools: Democratizing Tech</CardTitle>
                      <CardDescription>April 8, 2025 • 7 min read</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-2">
                        How no-code platforms are making technology more accessible and changing the landscape of
                        innovation.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Read Article
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="flex justify-center mt-8">
                  <Button variant="outline" size="lg">
                    Load More Articles
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="tech">
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">Tech News</h3>
                  <p className="text-muted-foreground">Stay up to date with the latest technology trends and news.</p>
                </div>
              </TabsContent>

              <TabsContent value="events">
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">Events</h3>
                  <p className="text-muted-foreground">Read about our past and upcoming hackathons and workshops.</p>
                </div>
              </TabsContent>

              <TabsContent value="tutorials">
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">Tutorials</h3>
                  <p className="text-muted-foreground">Learn new skills with our step-by-step tutorials.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="md:w-1/3 space-y-6">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle>Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Input placeholder="Search articles..." />
                  <Button className="absolute right-0 top-0 h-full rounded-l-none bg-purple-600 hover:bg-purple-700">
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer">
                    Tech News
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer">
                    Events
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer">
                    Tutorials
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer">
                    Community
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer">
                    Hackathon Tips
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer">
                    Success Stories
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Posts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-16 h-16 relative flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Popular post"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium line-clamp-2">How to Win Your First Hackathon</h4>
                    <p className="text-xs text-muted-foreground">April 2, 2025</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 h-16 relative flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Popular post"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium line-clamp-2">5 Soft Skills Every Developer Needs</h4>
                    <p className="text-xs text-muted-foreground">March 25, 2025</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 h-16 relative flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Popular post"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium line-clamp-2">The Future of Web Development</h4>
                    <p className="text-xs text-muted-foreground">March 18, 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle>Newsletter</CardTitle>
                <CardDescription>Get the latest articles delivered to your inbox</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Your email address" />
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Subscribe</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
