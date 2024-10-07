'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { signIn, signOut } from "next-auth/react"

export function Appbar(){
    return <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
    <Link className="flex items-center justify-center" href="#">
      <BookOpen className="h-6 w-6 mr-2 text-primary" />
      <span className="font-bold">CourseHub</span>
    </Link>
    <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
      <Link className="text-sm font-medium hover:text-primary" href="/courses">
        Courses
      </Link>
      <Link className="text-sm font-medium hover:text-primary" href="/about">
        About
      </Link>
      <Link className="text-sm font-medium hover:text-primary" href="/contact">
        Contact
      </Link>
    </nav>
    <div className="ml-auto hidden md:flex gap-2">
      <Button onClick = {()=>{signIn()}}variant="ghost" asChild>
      <Link href="#">Login</Link>
      </Button>
      <Button asChild>
        <Link href="#">Sign up</Link>
      </Button>
      <Button onClick={()=>{signOut()}}asChild>
        <Link href="#">Log out</Link>
      </Button>
    </div>
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden ml-auto">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 text-gray-100">
        <nav className="flex flex-col gap-4">
          <Link className="text-lg font-medium hover:text-primary" href="#">
            Courses
          </Link>
          <Link className="text-lg font-medium hover:text-primary" href="#">
            About
          </Link>
          <Link className="text-lg font-medium hover:text-primary" href="#">
            Contact
          </Link>
          <Link className="text-lg font-medium hover:text-primary" href="#">
            Log in
          </Link>
          <Link className="text-lg font-medium hover:text-primary" href="#">
            Sign up
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  </header>
}