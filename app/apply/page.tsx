import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ApplyPage() {
  return (
    <main className="flex flex-col items-center">
      <section className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Apply to Hack United</h1>
          <p className="text-lg text-muted-foreground">
            Join our team or apply to be a volunteer, mentor, or workshop leader.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Apply for a Paid Position</CardTitle>
              <CardDescription>Join our team to help us run Hack United</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="First Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Last Name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="school">School/University</Label>
                <Input id="school" placeholder="Your School or University" />
              </div>

              <div className="space-y-2">
                <Label>Education Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="undergraduate">Undergraduate</SelectItem>
                    <SelectItem value="graduate">Graduate</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience-level">Experience Level</Label>
                <Textarea
                  id="experience-level"
                  placeholder="How experienced are you with programming? What languages do you use?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="question-1">Question Here</Label>
                <Textarea id="question-1" placeholder="Details about this question" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="question-2">Question Here</Label>
                <Textarea id="question-2" placeholder="Details about this question" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="why-join">Why do you want to join?</Label>
                <Textarea id="why-join" placeholder="Tell us why you're interested in joining our team" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Submit Application</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Apply as a Volunteer</CardTitle>
              <CardDescription>Help us organize and run our events</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="v-first-name">First Name</Label>
                  <Input id="v-first-name" placeholder="First Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="v-last-name">Last Name</Label>
                  <Input id="v-last-name" placeholder="Last Name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="v-email">Email</Label>
                <Input id="v-email" type="email" placeholder="your@email.com" />
              </div>

              <div className="space-y-2">
                <Label>Role Interest</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mentor">Mentor</SelectItem>
                    <SelectItem value="judge">Judge</SelectItem>
                    <SelectItem value="workshop-leader">Workshop Leader</SelectItem>
                    <SelectItem value="event-staff">Event Staff</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Skills & Expertise</Label>
                <Input id="skills" placeholder="e.g., Web Development, AI, Design" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekends">Weekends Only</SelectItem>
                    <SelectItem value="evenings">Weekday Evenings</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Relevant Experience</Label>
                <Textarea id="experience" placeholder="Tell us about your relevant experience" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Submit Application</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  )
}
