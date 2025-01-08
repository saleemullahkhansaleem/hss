import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const milestones = [
    { year: 1995, event: "Graduated with honors in Computer Science" },
    { year: 1998, event: "Founded first tech startup, TechSolutions Inc." },
    {
      year: 2005,
      event: "Launched Green Energy Co., entering the renewable energy sector",
    },
    {
      year: 2010,
      event: "Expanded into healthcare with HealthTech Innovations",
    },
    {
      year: 2015,
      event: "Pioneered AI research with the establishment of AI Research Labs",
    },
    {
      year: 2020,
      event: "Launched Space Technologies, venturing into space exploration",
    },
    {
      year: 2023,
      event: "Initiated the Clean Ocean Initiative for marine conservation",
    },
  ];

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
            About HS Secretariat
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-muted-foreground">
            Visionary entrepreneur, innovator, and philanthropist shaping the
            future of technology and sustainability.
          </p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <div className="grid gap-12 md:grid-cols-[2fr,3fr] md:gap-16">
          <div>
            <img
              src="https://placehold.co/600"
              alt="HS Secretariat"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="secondary">Entrepreneur</Badge>
              <Badge variant="secondary">Innovator</Badge>
              <Badge variant="secondary">Philanthropist</Badge>
              <Badge variant="secondary">Tech Visionary</Badge>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">My Journey</h2>
            <p className="text-muted-foreground">
              With over 25 years of experience in technology and
              entrepreneurship, I've dedicated my career to driving innovation
              and creating positive change across multiple industries. From
              pioneering advancements in artificial intelligence to championing
              sustainable energy solutions, my work has consistently pushed the
              boundaries of what's possible.
            </p>
            <p className="text-muted-foreground">
              As the founder of 15+ companies spanning technology, energy,
              healthcare, and more, I've had the privilege of working with
              brilliant minds to solve some of the world's most pressing
              challenges. My passion lies in identifying emerging trends and
              technologies that have the potential to revolutionize industries
              and improve lives on a global scale.
            </p>
            <h3 className="text-2xl font-semibold mt-8">Key Milestones</h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center p-4">
                    <div className="text-2xl font-bold text-primary mr-4">
                      {milestone.year}
                    </div>
                    <p>{milestone.event}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <section className="bg-muted/50 border-t px-4">
        <div className="container mx-auto py-12">
          <h2 className="text-3xl font-bold text-center mb-8">My Vision</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Sustainable Future
                </h3>
                <p className="text-muted-foreground">
                  Driving the transition to clean energy and promoting
                  environmental conservation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Technological Advancement
                </h3>
                <p className="text-muted-foreground">
                  Pushing the boundaries of AI, space technology, and digital
                  innovation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                <p className="text-muted-foreground">
                  Creating solutions that address global challenges and improve
                  lives worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-background border-t px-4">
        <div className="container mx-auto py-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Let's Shape the Future Together
          </h2>
          <p className="text-muted-foreground mb-6">
            I'm always open to new partnerships, collaborations, and innovative
            ideas.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
          >
            Get in Touch
          </Button>
        </div>
      </footer>
    </div>
  );
}
