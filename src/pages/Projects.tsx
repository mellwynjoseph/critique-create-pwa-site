
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Home, Calendar, Heart, Code, Globe, MapPin, ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Delivering excellence across diverse industries - from real estate and construction to corporate events and custom software development.
          </p>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Project Categories</h2>
            <p className="text-xl text-slate-600">
              Comprehensive project management across multiple specialized domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Real Estate & Construction */}
            <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Home className="h-8 w-8 text-amber-400" />
                </div>
                <CardTitle className="text-2xl text-emerald-900">Real Estate & Construction</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-6">
                  Complete project management for residential and commercial real estate development within 500km radius of Coimbatore.
                </p>
                <div className="space-y-2 mb-6 text-sm text-slate-700">
                  <div>• Residential complexes</div>
                  <div>• Commercial buildings</div>
                  <div>• Infrastructure projects</div>
                  <div>• Renovation & modernization</div>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700 w-full">
                  View Real Estate Projects
                </Button>
              </CardContent>
            </Card>

            {/* Corporate Events */}
            <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="h-8 w-8 text-amber-400" />
                </div>
                <CardTitle className="text-2xl text-emerald-900">Corporate Events</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-6">
                  Professional event management for businesses, from intimate meetings to large-scale conferences and product launches.
                </p>
                <div className="space-y-2 mb-6 text-sm text-slate-700">
                  <div>• Corporate conferences</div>
                  <div>• Product launches</div>
                  <div>• Team building events</div>
                  <div>• Awards ceremonies</div>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700 w-full">
                  View Corporate Events
                </Button>
              </CardContent>
            </Card>

            {/* Wedding Planning */}
            <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-amber-400" />
                </div>
                <CardTitle className="text-2xl text-emerald-900">Wedding Planning</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-6">
                  Dedicated wedding planning services in Coimbatore, creating unforgettable experiences for your special day.
                </p>
                <div className="space-y-2 mb-6 text-sm text-slate-700">
                  <div>• Traditional ceremonies</div>
                  <div>• Modern celebrations</div>
                  <div>• Destination weddings</div>
                  <div>• Reception planning</div>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700 w-full">
                  View Wedding Projects
                </Button>
              </CardContent>
            </Card>

            {/* Software Development */}
            <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Code className="h-8 w-8 text-amber-400" />
                </div>
                <CardTitle className="text-2xl text-emerald-900">Software Development</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-6">
                  Custom software development projects for local and international clients, delivering innovative digital solutions.
                </p>
                <div className="space-y-2 mb-6 text-sm text-slate-700">
                  <div>• Web applications</div>
                  <div>• Mobile apps</div>
                  <div>• System integrations</div>
                  <div>• API development</div>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700 w-full">
                  View Tech Projects
                </Button>
              </CardContent>
            </Card>

            {/* Global Projects */}
            <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-amber-400" />
                </div>
                <CardTitle className="text-2xl text-emerald-900">International Projects</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-6">
                  Cross-border project management and consulting services for clients in Dubai, Singapore, and beyond.
                </p>
                <div className="space-y-2 mb-6 text-sm text-slate-700">
                  <div>• Remote project management</div>
                  <div>• International consulting</div>
                  <div>• Digital transformation</div>
                  <div>• Global partnerships</div>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700 w-full">
                  View Global Projects
                </Button>
              </CardContent>
            </Card>

            {/* Contract Projects */}
            <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="h-8 w-8 text-amber-400" />
                </div>
                <CardTitle className="text-2xl text-emerald-900">Contract Projects</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-6">
                  Flexible contract-based project execution for both short-term assignments and long-term partnerships.
                </p>
                <div className="space-y-2 mb-6 text-sm text-slate-700">
                  <div>• Short-term contracts</div>
                  <div>• Long-term partnerships</div>
                  <div>• Specialized consulting</div>
                  <div>• Maintenance & support</div>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700 w-full">
                  View Contract Work
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Service Coverage</h2>
            <p className="text-xl text-slate-600">
              Strategic presence across key locations for optimal project delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Regional Coverage */}
            <Card className="border-emerald-200 bg-white">
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-emerald-900">Regional Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-2">Primary Service Area</h4>
                    <p className="text-slate-600">500km radius around Coimbatore headquarters covers major cities and rural areas across Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                    <div>• Coimbatore (HQ)</div>
                    <div>• Chennai</div>
                    <div>• Bengaluru</div>
                    <div>• Cochin</div>
                    <div>• Mysore</div>
                    <div>• Salem</div>
                    <div>• Madurai</div>
                    <div>• Trichy</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* International Reach */}
            <Card className="border-emerald-200 bg-white">
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-emerald-900">International Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-emerald-900 mb-2">Global Offices</h4>
                    <p className="text-slate-600">Strategic office locations enable us to serve international clients with local expertise and cultural understanding.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-white border border-emerald-100 rounded">
                      <span className="font-medium text-emerald-900">Dubai, UAE</span>
                      <span className="text-sm text-slate-600">Middle East Hub</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white border border-emerald-100 rounded">
                      <span className="font-medium text-emerald-900">Singapore</span>
                      <span className="text-sm text-slate-600">Asia Pacific Center</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Our Project Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology ensuring successful project delivery from conception to completion
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Discovery", description: "Understanding your requirements and objectives" },
              { step: "2", title: "Planning", description: "Detailed project planning and resource allocation" },
              { step: "3", title: "Execution", description: "Professional implementation with regular updates" },
              { step: "4", title: "Delivery", description: "Quality assurance and successful handover" }
            ].map((phase, index) => (
              <Card key={index} className="text-center border-emerald-200 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                  {phase.step}
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-emerald-900">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-emerald-900 mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-slate-600 mb-8">
              From concept to completion, our experienced project teams are ready to deliver exceptional results that exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                View Project Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
