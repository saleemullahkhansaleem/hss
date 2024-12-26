import { ArrowLeft, ExternalLink, ChevronRight, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";

const businesses = [
  {
    name: "MHS Tech Ventures",
    description:
      "Leading provider of enterprise software solutions and digital transformation services",
    category: "Technology",
    website: "https://mhstechventures.com",
    logo: "./mhs-logo.png",
    longDescription:
      "MHS Tech Ventures is at the forefront of digital innovation, offering cutting-edge software solutions that empower businesses to thrive in the digital age. Our comprehensive suite of services includes custom software development, cloud migration, and AI-driven analytics, enabling organizations to streamline operations, enhance customer experiences, and drive growth.",
    keyAchievements: [
      "Developed an AI-powered predictive maintenance system for a Fortune 500 manufacturing company, reducing downtime by 35%",
      "Successfully migrated a global retail chain's entire IT infrastructure to the cloud, resulting in a 40% reduction in operational costs",
      "Created a blockchain-based supply chain management solution for a leading pharmaceutical company, improving traceability and reducing fraud by 60%",
    ],
  },
  {
    name: "Green Energy Co.",
    description:
      "Renewable energy solutions for a sustainable future, specializing in solar and wind power",
    category: "Energy",
    website: "https://greenenergy.com",
    logo: "https://placehold.co/100",
    longDescription:
      "Green Energy Co. is committed to accelerating the world's transition to sustainable energy. We design, manufacture, and install state-of-the-art solar panels and wind turbines, as well as develop innovative energy storage solutions. Our mission is to make clean, renewable energy accessible and affordable for businesses and communities worldwide.",
    keyAchievements: [
      "Completed the largest offshore wind farm project in Southeast Asia, providing clean energy to over 1 million households",
      "Developed a new high-efficiency solar panel that increases energy output by 25% compared to standard panels",
      "Implemented a smart grid solution for a major city, resulting in a 20% reduction in energy consumption and improved reliability",
    ],
  },
  {
    name: "Future Mobility",
    description:
      "Electric vehicle technology and infrastructure development for smart cities",
    category: "Automotive",
    website: "https://futuremobility.com",
    logo: "https://placehold.co/100",
    longDescription:
      "Future Mobility is revolutionizing urban transportation with cutting-edge electric vehicle technology and smart infrastructure solutions. We develop advanced EV powertrains, autonomous driving systems, and charging networks that are shaping the future of sustainable urban mobility. Our holistic approach encompasses vehicle design, city planning, and energy management to create seamless, eco-friendly transportation ecosystems.",
    keyAchievements: [
      "Launched an award-winning electric SUV with a range of 500 miles on a single charge, setting a new industry standard",
      "Deployed a network of ultra-fast charging stations across 50 major cities, enabling coast-to-coast EV travel",
      "Partnered with 10 metropolitan areas to implement smart traffic management systems, reducing congestion by 30% and emissions by 25%",
    ],
  },
  {
    name: "Future Mobility",
    description:
      "Electric vehicle technology and infrastructure development for smart cities",
    category: "Automotive",
    website: "https://futuremobility.com",
    logo: "https://placehold.co/100",
    longDescription:
      "Future Mobility is revolutionizing urban transportation with cutting-edge electric vehicle technology and smart infrastructure solutions. We develop advanced EV powertrains, autonomous driving systems, and charging networks that are shaping the future of sustainable urban mobility. Our holistic approach encompasses vehicle design, city planning, and energy management to create seamless, eco-friendly transportation ecosystems.",
    keyAchievements: [
      "Launched an award-winning electric SUV with a range of 500 miles on a single charge, setting a new industry standard",
      "Deployed a network of ultra-fast charging stations across 50 major cities, enabling coast-to-coast EV travel",
      "Partnered with 10 metropolitan areas to implement smart traffic management systems, reducing congestion by 30% and emissions by 25%",
    ],
  },
  // Add the remaining 12 businesses here with similar detailed information
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
        <div className="container mx-auto px-4 py-8">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-muted-foreground">
            Explore our diverse range of innovative companies driving change
            across multiple industries.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {businesses.map((business, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16">
                      <img
                        src={business.logo}
                        alt={business.name}
                        layout="fill"
                        className="rounded object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{business.name}</h2>
                      <Badge variant="secondary" className="mt-1">
                        {business.category}
                      </Badge>
                    </div>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          to={business.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="h-6 w-6" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Visit Website</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <p className="text-muted-foreground mb-4">
                  {business.description}
                </p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">About</h3>
                  <p className="text-sm text-muted-foreground">
                    {business.longDescription}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Key Achievements
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {business.keyAchievements.map((achievement, i) => (
                      <div key={i} className="space-y-2 border p-4">
                        <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 border-t">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Innovate?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join us in shaping the future of technology, sustainability, and
            innovation across multiple industries.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 group"
          >
            Get in Touch
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </div>
  );
}
