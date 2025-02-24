import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center text-foreground">
      <Helmet>
        <title>HS Secretariat - 404 Pge Not Found</title>
        <meta
          name="description"
          content="A diverse collection of innovative companies driving change across multiple industries"
        />
        <meta
          name="keywords"
          content="business, initiative, group, companies, technology, energy, sustainable, solutions, entrepreneur, leader, technology, energy, HS Secretariat, hanif shah"
        />
      </Helmet>
      <div className="text-center mb-6">
        <h1 className="text-9xl font-extrabold text-primary animate-pulse">
          <span className="text-primary">404</span>
        </h1>
        <h2 className="text-4xl font-semibold mt-4">Oops! Page Not Found</h2>
        <p className="text-lg mt-2 text-muted-foreground">
          The page you are looking for doesn’t exist or has been moved.
        </p>
      </div>
      <Button
        size="lg"
        className="bg-primary hover:bg-primary-dark text-white"
        asChild
      >
        <Link to="/">Go Back to Home</Link>
      </Button>
    </div>
  );
}
