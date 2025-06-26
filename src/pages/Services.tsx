
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Building2, Code, Calendar, Home, Heart, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Comprehensive solutions across two specialized divisions, serving small businesses and established enterprises with excellence and innovation.
          </p>
        </div>
      </section>

      {/* Two Main Divisions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            
            {/* Product Development Division */}
            <div>
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-10 w-10 text-amber-400" />
                </div>
                <h2 className="text-3xl font-bold text-emerald-900 mb-4">Product Development Division</h2>
                <p className="text-lg text-slate-600 max-w-md mx-auto">
                  Innovative software and consumer goods development for small business empowerment
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-emerald-900 flex items-center">
                      <Code className="h-6 w-6 mr-3 text-emerald-600" />
                      Open Source Software Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Development of the flagship C2C Consciousness Engine applications, designed to help small business owners manage operations effectively.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Business management systems</li>
                      <li>• Inventory tracking solutions</li>
                      <li>• Customer relationship management</li>
                      <li>• Financial oversight tools</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-emerald-900 flex items-center">
                      <Lightbulb className="h-6 w-6 mr-3 text-emerald-600" />
                      Consumer Goods Innovation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Design and development of physical products that complement our digital solutions for comprehensive business management.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Product conceptualization</li>
                      <li>• Prototype development</li>
                      <li>• Market testing & validation</li>
                      <li>• Manufacturing guidance</li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <p className="text-emerald-600 font-semibold mb-4">Target Audience: Small Business Owners</p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Projects Division */}
            <div>
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-10 w-10 text-amber-400" />
                </div>
                <h2 className="text-3xl font-bold text-emerald-900 mb-4">Projects Division</h2>
                <p className="text-lg text-slate-600 max-w-md mx-auto">
                  Comprehensive project management across diverse industries and sectors
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-emerald-900 flex items-center">
                      <Home className="h-6 w-6 mr-3 text-emerald-600" />
                      Real Estate & Construction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Complete project management for real estate development and construction projects within 500km radius of Coimbatore.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Project planning & execution</li>
                      <li>• Contractor coordination</li>
                      <li>• Timeline & budget management</li>
                      <li>• Quality assurance oversight</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-emerald-900 flex items-center">
                      <Calendar className="h-6 w-6 mr-3 text-emerald-600" />
                      Corporate Events Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Professional corporate event planning and execution for businesses of all sizes, from conferences to product launches.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Conference & seminar planning</li>
                      <li>• Product launch events</li>
                      <li>• Team building activities</li>
                      <li>• Award ceremonies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-emerald-900 flex items-center">
                      <Heart className="h-6 w-6 mr-3 text-emerald-600" />
                      Wedding Planning Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Dedicated wedding planning team in Coimbatore specializing in creating memorable wedding experiences.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Complete wedding coordination</li>
                      <li>• Vendor management</li>
                      <li>• Venue selection & decoration</li>
                      <li>• Photography & videography</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-emerald-900 flex items-center">
                      <Code className="h-6 w-6 mr-3 text-emerald-600" />
                      Software Development Projects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Custom software development projects for local and global businesses on a contractual basis.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Web application development</li>
                      <li>• Mobile app development</li>
                      <li>• System integration projects</li>
                      <li>• API development & integration</li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <p className="text-emerald-600 font-semibold mb-4">Target Audience: Established Businesses</p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    View Our Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Our Service Areas</h2>
            <p className="text-xl text-slate-600">
              Global reach with local expertise across key business hubs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-emerald-200 bg-white">
              <CardHeader>
                <CardTitle className="text-emerald-900">India Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Primary service areas:</p>
                <ul className="space-y-1 text-slate-600">
                  <li>• Coimbatore (Headquarters)</li>
                  <li>• Chennai</li>
                  <li>• Bengaluru</li>
                  <li>• 500km radius coverage</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200 bg-white">
              <CardHeader>
                <CardTitle className="text-emerald-900">International Presence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Global service locations:</p>
                <ul className="space-y-1 text-slate-600">
                  <li>• Dubai, UAE</li>
                  <li>• Singapore</li>
                  <li>• Remote collaboration worldwide</li>
                  <li>• Digital project delivery</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200 bg-white">
              <CardHeader>
                <CardTitle className="text-emerald-900">Project Types</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">We handle:</p>
                <ul className="space-y-1 text-slate-600">
                  <li>• Short-term contracts</li>
                  <li>• Long-term partnerships</li>
                  <li>• One-time projects</li>
                  <li>• Ongoing maintenance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-emerald-900 mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-slate-600 mb-8">
              Whether you need innovative product development or comprehensive project management, our expert teams are ready to deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
