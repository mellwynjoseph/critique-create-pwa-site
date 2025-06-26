
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Building2, Smartphone, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent">
              C2C Core
            </h1>
            <p className="text-xl lg:text-2xl mb-4 text-emerald-100">
              Create to Critique Projects and Products
            </p>
            <p className="text-lg lg:text-xl mb-8 text-emerald-200 max-w-3xl mx-auto">
              Empowering businesses through innovative product development and comprehensive project management solutions across India and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-emerald-900 font-semibold">
                <Link to="/products">
                  Explore Our Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-emerald-300 text-emerald-100 hover:bg-emerald-800">
                <Link to="/projects">
                  View Our Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Our Two Core Divisions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              C2C Core operates through two specialized divisions, each designed to serve distinct market needs with excellence and innovation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Product Development Division */}
            <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-amber-400" />
                </div>
                <CardTitle className="text-2xl text-emerald-900">Product Development</CardTitle>
                <CardDescription className="text-lg">Software & Consumer Goods Innovation</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-6">
                  Specializing in open-source business management solutions, including our flagship C2C Consciousness Engine applications designed for small business owners.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <Smartphone className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm text-slate-700">C2C Consciousness Engine Mark 1 & 2</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Globe className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm text-slate-700">Open Source Business Solutions</span>
                  </div>
                </div>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link to="/products">
                    Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Projects Division */}
            <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-amber-400" />
                </div>
                <CardTitle className="text-2xl text-emerald-900">Projects Division</CardTitle>
                <CardDescription className="text-lg">Comprehensive Project Management</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-6">
                  Executing diverse projects including real estate, construction, corporate events, weddings, and software development for local and global clients.
                </p>
                <div className="grid grid-cols-2 gap-2 mb-6 text-sm text-slate-700">
                  <div>• Real Estate</div>
                  <div>• Construction</div>
                  <div>• Corporate Events</div>
                  <div>• Wedding Planning</div>
                  <div>• Software Development</div>
                  <div>• Contract Projects</div>
                </div>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link to="/projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-emerald-900 mb-8">Global Presence, Local Expertise</h3>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
            Headquartered in Coimbatore, India, with offices across major cities to serve our clients better.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-emerald-800 font-semibold">
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">Coimbatore</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">Chennai</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">Bengaluru</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">Dubai</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">Singapore</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
