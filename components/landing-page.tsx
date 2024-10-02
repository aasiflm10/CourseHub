'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, CheckCircle, Users, Star, Menu } from "lucide-react"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Unlock Your Potential with CourseHub
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 text-sm sm:text-base md:text-xl">
                  Discover a world of knowledge with our expert-led courses. Learn at your own pace and achieve your goals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto">Browse Courses</Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 px-4 md:px-6">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">
              Why Choose CourseHub?
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CheckCircle className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Expert Instructors</CardTitle>
                </CardHeader>
                <CardContent>
                  Learn from industry professionals with years of experience in their fields.
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <Users className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Community Support</CardTitle>
                </CardHeader>
                <CardContent>
                  Join a vibrant community of learners and get support when you need it.
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <BookOpen className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Flexible Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  Study at your own pace with lifetime access to course materials.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">
              Featured Courses
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle>Course Title {i}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="flex items-center mt-4">
                      <Star className="w-5 h-5 fill-current text-yellow-500" />
                      <Star className="w-5 h-5 fill-current text-yellow-500" />
                      <Star className="w-5 h-5 fill-current text-yellow-500" />
                      <Star className="w-5 h-5 fill-current text-yellow-500" />
                      <Star className="w-5 h-5 fill-current text-yellow-500" />
                      <span className="ml-2 text-sm text-gray-400">(123 reviews)</span>
                    </div>
                    <Button className="w-full mt-4">Enroll Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 px-4 md:px-6">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">
              What Our Students Say
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-gray-900 border-gray-800">
                  <CardContent className="pt-4">
                    <p className="text-sm text-gray-400">
                      "CourseHub has been an amazing platform for my learning journey. The courses are well-structured and the instructors are top-notch."
                    </p>
                    <div className="flex items-center mt-4">
                      <div className="w-10 h-10 rounded-full bg-gray-700 mr-3" />
                      <div>
                        <p className="font-semibold">Student Name {i}</p>
                        <p className="text-sm text-gray-400">Course Title {i}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Start Learning?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 text-sm sm:text-base md:text-xl">
                  Join thousands of students and start your learning journey today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="flex-1 bg-gray-800 border-gray-700 text-white" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full sm:w-auto">Get Started</Button>
                </form>
                <p className="text-xs text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-primary" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t border-gray-800">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-400 mb-4 sm:mb-0">© 2024 CourseHub. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-primary" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-primary" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}