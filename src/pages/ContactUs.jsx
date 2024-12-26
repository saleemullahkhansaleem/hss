import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-muted/50 border-b px-4">
        <div className="container mx-auto py-8">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-muted-foreground">
            Let's discuss how we can collaborate and create innovative solutions
            together.
          </p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="flex items-center p-4">
                  <Mail className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:syed@example.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      syed@example.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center p-4">
                  <Phone className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-primary"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center p-4">
                  <MapPin className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <p className="font-semibold">Office</p>
                    <p className="text-muted-foreground">
                      123 Innovation Drive, Tech City, TC 12345
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Connect on Social Media
            </h3>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Name
                </label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>

      <section className="bg-muted/50 border-t">
        <div className="container mx-auto py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Innovate?</h2>
          <p className="text-muted-foreground mb-6">
            Whether you have a groundbreaking idea or just want to explore
            possibilities, I'm here to listen and collaborate.
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            Let's shape the future together
          </Badge>
        </div>
      </section>
    </div>
  );
}
