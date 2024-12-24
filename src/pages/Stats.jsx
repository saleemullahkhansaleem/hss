import {
  ArrowLeft,
  TrendingUp,
  Users,
  Globe,
  Lightbulb,
  Award,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Stats() {
  const stats = [
    { label: "Years Experience", value: "25+", icon: TrendingUp },
    { label: "Companies Founded", value: "15+", icon: Lightbulb },
    { label: "Team Members", value: "500+", icon: Users },
    { label: "Countries", value: "20+", icon: Globe },
  ];

  const achievements = [
    {
      title: "Forbes 30 Under 30",
      year: "2005",
      description: "Recognized for innovations in technology",
    },
    {
      title: "Time's 100 Most Influential People",
      year: "2012",
      description: "For contributions to renewable energy",
    },
    {
      title: "World Economic Forum Technology Pioneer",
      year: "2018",
      description: "For advancements in AI and machine learning",
    },
    {
      title: "Environmental Leader of the Year",
      year: "2022",
      description: "For efforts in ocean conservation and sustainability",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-muted/50 border-b">
        <div className="container mx-auto px-4 py-8">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Impact & Achievements
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-muted-foreground">
            A look at the numbers and accolades behind our global impact and
            innovation.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Statistics</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-sm">
                      {stat.label}
                    </Badge>
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Notable Achievements</h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">
                      {achievement.title}
                    </h3>
                    <Badge>{achievement.year}</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <section className="bg-muted/50 border-t">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Global Impact</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  10+ Industry Awards
                </h3>
                <p className="text-muted-foreground">
                  Recognized for innovation across multiple sectors
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  1M+ Lives Impacted
                </h3>
                <p className="text-muted-foreground">
                  Through our technologies and initiatives
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  50+ Countries Reached
                </h3>
                <p className="text-muted-foreground">
                  With our products and services
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground mb-4">
            These achievements reflect our commitment to innovation and global
            impact.
          </p>
          <Link to="/contact" className="text-primary hover:underline">
            Connect with us to learn more
          </Link>
        </div>
      </footer>
    </div>
  );
}
