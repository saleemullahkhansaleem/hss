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
import { ThemeToggle } from "@/components";

export default function Home() {
  const businesses = [
    {
      name: "Caput International",
      description:
        "Multi Services company offering renewable energy solutions for a sustainable future, specializing in solar and wind power.",
      category: "Multi Services",
      website: "https://caputinternational.com.pk/",
      logo: "./ci-logo.png",
    },
    {
      name: "Deed",
      description:
        "A nonprofit organization dedicated to community development, education, and empowerment initiatives for a better future.",
      category: "NGO",
      website: "https://deed.com.pk/",
      logo: "./deed-logo.png",
    },
    {
      name: "Global Links Technologies",
      description:
        "Innovative technology solutions empowering businesses with advanced software, IT services, and digital transformation tools.",
      category: "Technology",
      website: "https://globallinkstechnologies.com/",
      logo: "./glt-logo.png",
    },
    {
      name: "Go For Green Revolution",
      description:
        "Sustainable environmental solutions focused on renewable energy, eco-friendly technologies, and promoting a greener future.",
      category: "Environment",
      website: "https://goforgreenrevolution.com.pk/",
      logo: "./ggr-logo.png",
    },
    {
      name: "FSCF Technologies",
      description:
        "Pioneering technology solutions focused on IoT, automation, and smart systems to transform modern living and business operations.",
      category: "Technology",
      website: "https://fscftechnologies.com/",
      logo: "./fscf-logo.png",
    },
    {
      name: "MHS Tech Ventures",
      description:
        "Leading provider of enterprise software solutions and digital transformation services",
      category: "Technology",
      website: "https://mhstechventures.com",
      logo: "./mhs-logo.png",
    },
    {
      name: "Stead Fast Security",
      description:
        "Providing cutting-edge security solutions and services to ensure safety and protection for businesses and individuals.",
      category: "Security",
      website: "https://steadfastsecurity.com.pk/",
      logo: "./sf-logo.png",
    },
    {
      name: "Win Source International",
      description:
        "Pioneering mining solutions focused on sustainable resource extraction and mineral processing technologies.",
      category: "Mining",
      website: "https://winsourceinternational.com.pk/",
      logo: "./wsi-logo.svg",
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
        id="home"
        className="relative overflow-hidden p-4 bg-muted min-h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 grid-bg opacity-40 dark:opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        {/* <div className="absolute inset-0 dotted-bg" /> */}
        <div className="relative mx-auto max-w-3xl">
          <div className="flex flex-col justify-center items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="./logo.svg"
                alt="logo"
                className="w-28 mb-4 object-cover fill-primary text-primary"
              />
            </Link>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl lg:text-7xl text-primary">
              HS Secretariat
            </h1>
            <p className="mt-4 md:text-xl text-muted-foreground text-center">
              Serial entrepreneur and business leader with a portfolio of
              innovative companies spanning technology, energy, and sustainable
              solutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className=""
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get in Touch
                <Mail className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Portfolio Section */}
      <section id="business" className="py-16 md:py-24 px-4">
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
                    <div className="animated-borde rounded-xl">
                      <Card className="group relative overflow-hidden transition-all hover:shadow-lg h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-0" />
                        <CardContent className="p-6 z-10 relative space-y-4 text-center">
                          {/* <div className="mb-4 flex items-center justify-between"> */}
                          <Badge
                            variant="secondary"
                            className="absolute top-4 left-4"
                          >
                            {business.category}
                          </Badge>
                          <div className="relative max-w-max mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent blur-xl" />
                            <img
                              src={business.logo}
                              alt={business.name}
                              height={80}
                              className="relative max-h-20 max-w-48 object-cover rounded-lg"
                            />
                          </div>
                          {/* </div> */}
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
                <Link to="mailto:hss@hss.com">
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
