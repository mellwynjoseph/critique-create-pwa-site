
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Users, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
            About C2C Core
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Discover our journey, values, and the dedicated team behind C2C Core's innovative solutions and comprehensive project management services.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-amber-400" />
                </div>
                <CardTitle className="text-2xl text-emerald-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  To empower businesses worldwide through innovative product development and comprehensive project management solutions, creating value through thoughtful critique and exceptional execution.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-amber-400" />
                </div>
                <CardTitle className="text-2xl text-emerald-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  To be the leading global provider of business solutions, known for our innovative consciousness engines and excellence in project delivery across diverse industries.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-amber-400" />
                </div>
                <CardTitle className="text-2xl text-emerald-900">Our Values</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-slate-600 space-y-2">
                  <li>• Innovation & Excellence</li>
                  <li>• Integrity & Transparency</li>
                  <li>• Client-Centric Approach</li>
                  <li>• Continuous Learning</li>
                  <li>• Global Collaboration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-emerald-900 mb-8">Our Story</h2>
            <div className="prose prose-lg mx-auto text-slate-600">
              <p className="mb-6">
                C2C Core was founded with a simple yet powerful philosophy: "Create to Critique Projects and Products." 
                Born from the understanding that true excellence comes from the continuous cycle of creation, evaluation, and improvement.
              </p>
              <p className="mb-6">
                Starting in Coimbatore, India, we recognized the gap between innovative ideas and practical business solutions. 
                Our journey began by developing the C2C Consciousness Engine, an open-source application designed to help small 
                business owners manage their operations more effectively.
              </p>
              <p>
                Today, C2C Core has grown into a comprehensive business solutions provider with two distinct divisions, 
                serving clients across India and internationally. Our expansion to Chennai, Bengaluru, Dubai, and Singapore 
                reflects our commitment to providing localized expertise with global standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A diverse group of innovators, creators, and project management experts dedicated to delivering exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-emerald-200">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-amber-400" />
                </div>
                <CardTitle className="text-emerald-900">Product Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Expert developers and designers crafting innovative software solutions</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-amber-400" />
                </div>
                <CardTitle className="text-emerald-900">Projects Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Skilled project managers handling diverse real-world implementations</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-amber-400" />
                </div>
                <CardTitle className="text-emerald-900">Events Specialists</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Creative professionals delivering memorable corporate events</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-amber-400" />
                </div>
                <CardTitle className="text-emerald-900">Wedding Planners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Dedicated team creating perfect wedding experiences in Coimbatore</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Offices */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Our Offices</h2>
            <p className="text-xl text-slate-600">
              Strategically located across key business hubs to serve our clients better
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { city: "Coimbatore", country: "India", type: "Headquarters", description: "Main operations and projects execution hub" },
              { city: "Chennai", country: "India", type: "Regional Office", description: "South India operations center" },
              { city: "Bengaluru", country: "India", type: "Tech Hub", description: "Software development and innovation center" },
              { city: "Dubai", country: "UAE", type: "Middle East Office", description: "Regional expansion and client services" },
              { city: "Singapore", country: "Singapore", type: "Asia Pacific Office", description: "International operations and partnerships" },
            ].map((office, index) => (
              <Card key={index} className="border-emerald-200 hover:border-emerald-400 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                    <div>
                      <CardTitle className="text-lg text-emerald-900">{office.city}</CardTitle>
                      <p className="text-sm text-slate-500">{office.country}</p>
                    </div>
                  </div>
                  <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    {office.type}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{office.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
