import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  ExternalLink,
  Globe,
  Mail,
  MessageSquare,
  Phone,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const businesses = [
    {
      name: "MHS Tech Ventures Pvt. Ltd.",
      description:
        "Leading provider of enterprise software solutions and digital transformation services",
      category: "Technology",
      website: "https://mhstechventures.com",
      logo: "./mhs-logo.png",
    },
    {
      name: "Green Energy Co.",
      description:
        "Renewable energy solutions for a sustainable future, specializing in solar and wind power",
      category: "Energy",
      website: "https://greenenergy.com",
      logo: "https://placehold.co/80",
    },
    {
      name: "Future Mobility",
      description:
        "Electric vehicle technology and infrastructure development for smart cities",
      category: "Automotive",
      website: "https://futuremobility.com",
      logo: "https://placehold.co/80",
    },
    {
      name: "HealthTech Innovations",
      description:
        "Revolutionary healthcare technology solutions and telemedicine platforms",
      category: "Healthcare",
      website: "https://healthtechinno.com",
      logo: "https://placehold.co/80",
    },
    {
      name: "Smart Homes Ltd",
      description:
        "Intelligent home automation and IoT solutions for modern living",
      category: "Real Estate",
      website: "https://smarthomesltd.com",
      logo: "https://placehold.co/80",
    },
    {
      name: "EduTech Global",
      description:
        "Online learning platforms and educational technology solutions",
      category: "Education",
      website: "https://edutechglobal.com",
      logo: "https://placehold.co/80",
    },
    {
      name: "Fintech Solutions",
      description:
        "Digital banking and innovative financial technology services",
      category: "Finance",
      website: "https://fintechsolutions.com",
      logo: "https://placehold.co/80",
    },
    {
      name: "AgriTech Ventures",
      description:
        "Smart farming solutions and agricultural technology innovations",
      category: "Agriculture",
      website: "https://agritechventures.com",
      logo: "https://placehold.co/80",
    },
    {
      name: "Cyber Security Pro",
      description:
        "Advanced cybersecurity solutions and threat protection services",
      category: "Security",
      website: "https://cybersecpro.com",
      logo: "https://placehold.co/80",
    },
    {
      name: "Digital Media Group",
      description: "Content creation and digital marketing solutions",
      category: "Media",
      website: "https://digitalmediagroup.com",
      logo: "https://placehold.co/80",
    },
    {
      name: "AI Research Labs",
      description:
        "Artificial intelligence and machine learning research & development",
      category: "AI & ML",
      website: "https://airesearchlabs.com",
      logo: "https://placehold.co/80",
    },
    {
      name: "Blockchain Solutions",
      description:
        "Enterprise blockchain solutions and cryptocurrency infrastructure",
      category: "Blockchain",
      website: "https://blockchainsolutions.com",
      logo: "https://placehold.co/80",
    },
    {
      name: "Space Technologies",
      description: "Space exploration and satellite communication technologies",
      category: "Space",
      website: "https://spacetechnologies.com",
      logo: "https://placehold.co/80",
    },
    {
      name: "Bio Research Co",
      description: "Biotechnology research and pharmaceutical development",
      category: "Biotech",
      website: "https://bioresearchco.com",
      logo: "https://placehold.co/80",
    },
    {
      name: "Clean Ocean Initiative",
      description: "Ocean cleanup technology and marine conservation solutions",
      category: "Environment",
      website: "https://cleanocean.com",
      logo: "https://placehold.co/80",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "25+" },
    { label: "Companies Founded", value: "15+" },
    { label: "Team Members", value: "500+" },
    { label: "Countries", value: "20+" },
  ];

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Stats", href: "#stats" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        id="about"
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-24 md:py-32 bg-primary/5"
      >
        <div className="absolute inset-0 bg-grid-slate-100/[0.03] bg-[size:75px_75px]" />
        <div className="relative mx-auto max-w-3xl">
          <div className="flex flex-col justify-center items-center">
            {/* <Badge className="w-fit mb-4" variant="secondary">
              Visionary Entrepreneur
            </Badge> */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-primary">
              Hanif Shah Secretariat
            </h1>
            <p className="mt-4 text-xl text-muted-foreground text-center">
              Serial entrepreneur and business leader with a portfolio of
              innovative companies spanning technology, energy, and sustainable
              solutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                asChild
              >
                <Link to="#contact">
                  Get in Touch
                  <Mail className="ml-2 size-4" />
                </Link>
              </Button>
              {/* <Button size="lg" variant="outline" asChild>
                <Link to="portfolio">
                  View Portfolio <ArrowUpRight className="ml-2 size-4" />
                </Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section id="stats" className="border-y bg-muted/50 px-4">
        <div className="container mx-auto py-12 md:py-16">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="overflow-hidden border-0 bg-transparent"
              >
                <CardContent className="relative p-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0" />
                  <div className="relative">
                    <div className="text-3xl font-bold md:text-4xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground md:text-base">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Business Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            {/* <Badge variant="outline" className="mb-4">
              Our Companies
            </Badge> */}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
              Business Initiative Group
            </h2>
            <p className="mt-4 text-muted-foreground">
              A diverse collection of innovative companies driving change across
              multiple industries
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {businesses.map((business) => (
              <TooltipProvider key={business.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="animated-border rounded-xl">
                      <Card className="group relative overflow-hidden transition-all hover:shadow-lg h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-0" />
                        <CardContent className="p-6 z-10 relative">
                          <div className="mb-4 flex items-center justify-between">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent blur-xl" />
                              <img
                                src={business.logo}
                                alt={business.name}
                                width={80}
                                height={80}
                                className="relative rounded-lg"
                              />
                            </div>
                            <Badge variant="secondary">
                              {business.category}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold">
                            {business.name}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {business.description}
                          </p>
                          <Link
                            to={business.website}
                            className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit Website
                            <ExternalLink className="ml-1 size-4" />
                          </Link>
                        </CardContent>
                      </Card>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to visit {business.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t bg-muted/50 p-4">
        <div className="container mx-auto py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            {/* <Badge variant="outline" className="mb-4">
              Contact
            </Badge> */}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Get in Touch
            </h2>
            <p className="mt-4 text-muted-foreground">
              Connect with me to discuss business opportunities or
              collaborations
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                asChild
              >
                <Link to="mailto:hanif@smhs.com">
                  <Mail className="mr-2 size-4" />
                  Email
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="tel:+1234567890">
                  <Phone className="mr-2 size-4" />
                  Call Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
