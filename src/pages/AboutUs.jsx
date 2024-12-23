import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const services = [
  {
    title: "Event Management",
    image: "/services/service1.webp",
    path: "/services/event-management",
    description:
      "Provides out-of-the-box solutions, focusing on uniqueness for every client and event.",
  },
  {
    title: "Vendor Services",
    image: "/services/service2.webp",
    path: "/services/vendor-services",
    description:
      "Offers quality and affordable delivery through direct sourcing and special relationships.",
  },
  {
    title: "Presence in Oil & Gas Sector",
    image: "/services/service3.webp",
    path: "/services/oil-gas-sector",
    description:
      "Strategic operations and consulting in the oil and gas industry.",
  },
  {
    title: "Branding & Advertising",
    image: "/services/service4.webp",
    path: "/services/branding-advertising",
    description:
      "Aims for client growth through strategy, consulting, development, and management.",
  },
  {
    title: "Facility Management Services",
    image: "/services/service5.webp",
    path: "/services/facility-management",
    description:
      "Delivers quality service with trained staff for organizational image building.",
  },
  {
    title: "Construction",
    image: "/services/service6.webp",
    path: "/services/construction",
    description: "Professional construction services for diverse projects.",
  },
  {
    title: "Property Advisors",
    image: "/services/service7.webp",
    path: "/services/property-advisors",
    description:
      "Provides real estate services, including transactions, advisory, and investment options.",
  },
  {
    title: "Mines & Minerals",
    image: "/services/service8.webp",
    path: "/services/mines-minerals",
    description: "Expert consulting and management in the mining sector.",
  },
];

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("vision");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          About Syed Hanif Shah
        </motion.h1>

        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="vision">Vision & Mission</TabsTrigger>
              <TabsTrigger value="history">Our History</TabsTrigger>
              <TabsTrigger value="services">Our Services</TabsTrigger>
            </TabsList>
            <TabsContent value="vision">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Committed to provide unmatched assistance to our valued
                    clients by providing customized solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Focusing on competitiveness and timely task execution
                    without even an iota of compromise on "QUALITY".
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Our Business Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Honesty – Service – Growing Together "Continue to strive
                    hard in this challenging world for mutually Beneficial
                    Goals"
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Our Journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">
                    Established in 2008, Syed Hanif Shah has been on a
                    remarkable journey of growth and excellence:
                  </p>
                  <ul className="space-y-2 text-lg">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-6 w-6 text-primary flex-shrink-0" />
                      <span>
                        Focused on building strategic long-term client
                        relationships
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-6 w-6 text-primary flex-shrink-0" />
                      <span>
                        Adherence to best practices in methodology, management,
                        and project execution
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-6 w-6 text-primary flex-shrink-0" />
                      <span>
                        Dedicated team that makes us stand tall in the current
                        competitive environment
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="services">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Our Comprehensive Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        className={`flex items-center space-x-3`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <ChevronRight className="h-6 w-6 text-primary flex-shrink-0" />
                        <Link
                          to={service?.path}
                          className="text-lg hover:text-primary"
                        >
                          {service.title}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
