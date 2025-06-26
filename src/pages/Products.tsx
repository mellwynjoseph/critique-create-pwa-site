
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Download, Users, Globe, ArrowRight, CheckCircle } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Revolutionary open-source business management solutions designed to empower small business owners with comprehensive operational control.
          </p>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            {/* C2C Consciousness Engine Mark 1 */}
            <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-10 w-10 text-amber-400" />
                </div>
                <CardTitle className="text-3xl text-emerald-900 mb-2">C2C Consciousness Engine</CardTitle>
                <div className="text-xl font-semibold text-amber-600 mb-4">Mark 1</div>
                <p className="text-lg text-slate-600">
                  The foundational business management solution for small enterprises
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-emerald-900 text-lg">Key Features:</h4>
                  <ul className="space-y-2">
                    {[
                      "Basic inventory management",
                      "Customer relationship tracking",
                      "Financial overview dashboard",
                      "Simple reporting tools",
                      "User-friendly interface",
                      "Open source & customizable"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-emerald-900 mb-2">Perfect For:</h5>
                  <p className="text-slate-600">Startups and small businesses looking for their first comprehensive business management solution.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Download Open Source
                  </Button>
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 flex-1">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* C2C Consciousness Engine Mark 2 */}
            <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-emerald-900 px-4 py-1 rounded-full text-sm font-semibold">
                Latest Version
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-10 w-10 text-amber-400" />
                </div>
                <CardTitle className="text-3xl text-emerald-900 mb-2">C2C Consciousness Engine</CardTitle>
                <div className="text-xl font-semibold text-amber-600 mb-4">Mark 2</div>
                <p className="text-lg text-slate-600">
                  Advanced business intelligence and automation platform
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-emerald-900 text-lg">Enhanced Features:</h4>
                  <ul className="space-y-2">
                    {[
                      "Advanced analytics & AI insights",
                      "Automated workflow management",
                      "Multi-location support",
                      "Integrated e-commerce tools",
                      "Real-time collaboration",
                      "Custom API integrations",
                      "Mobile app companion",
                      "Enterprise-grade security"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h5 className="font-semibold text-emerald-900 mb-2">Perfect For:</h5>
                  <p className="text-slate-600">Growing businesses ready to scale with advanced automation and business intelligence capabilities.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-emerald-900 flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Download Mark 2
                  </Button>
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 flex-1">
                    View Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Why Choose C2C Consciousness Engine?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built by entrepreneurs, for entrepreneurs. Our solutions understand the real challenges small businesses face.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center border-emerald-200 bg-white">
              <CardHeader>
                <Globe className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-emerald-900">Open Source</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Complete transparency and customization freedom for your business needs.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200 bg-white">
              <CardHeader>
                <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-emerald-900">Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Benefit from a growing community of users and contributors worldwide.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200 bg-white">
              <CardHeader>
                <Zap className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-emerald-900">Easy to Use</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Intuitive interface designed for business owners, not just tech experts.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200 bg-white">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-emerald-900">Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Trusted by small businesses across India and internationally.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-emerald-900 mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-600 mb-8">
              Join thousands of small business owners who have already revolutionized their operations with C2C Consciousness Engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Download className="mr-2 h-5 w-5" />
                Download Now - Free
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Contact for Support <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
