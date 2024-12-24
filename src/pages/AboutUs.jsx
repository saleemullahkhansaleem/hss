import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-bold text-center mb-12">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our mission is to provide the best quality products to our
                customers at the most affordable prices.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our vision is to become the leading manufacturer of sports goods
                in the world.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
