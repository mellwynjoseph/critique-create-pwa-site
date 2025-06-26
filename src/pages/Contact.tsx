
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Get in touch with C2C Core for innovative product development, comprehensive project management, or to learn more about our services.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-emerald-900 mb-8">Get In Touch</h2>
              <p className="text-lg text-slate-600 mb-8">
                Whether you're interested in our C2C Consciousness Engine products or need project management services, we're here to help bring your vision to reality.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <Card className="border-emerald-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-emerald-900">Email</h3>
                        <a href="mailto:contact@createtocritiquecore.com" className="text-slate-600 hover:text-emerald-600 transition-colors">
                          contact@createtocritiquecore.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card className="border-emerald-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-emerald-900">Phone & WhatsApp</h3>
                        <a href="tel:+918072862654" className="text-slate-600 hover:text-emerald-600 transition-colors">
                          +91-807-286-2654
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Headquarters */}
                <Card className="border-emerald-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-emerald-900">Headquarters</h3>
                        <p className="text-slate-600">Coimbatore, Tamil Nadu, India</p>
                        <p className="text-sm text-slate-500 mt-1">Primary operations and project management center</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="border-emerald-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-emerald-900">Business Hours</h3>
                        <div className="text-slate-600 space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                          <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-emerald-900 flex items-center">
                    <MessageSquare className="h-6 w-6 mr-3" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" className="mt-2" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91-XXX-XXX-XXXX" className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Your company name" className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Interest</Label>
                    <select id="service" className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background">
                      <option value="">Select a service</option>
                      <option value="products">C2C Consciousness Engine Products</option>
                      <option value="real-estate">Real Estate & Construction</option>
                      <option value="software">Software Development</option>
                      <option value="events">Corporate Events</option>
                      <option value="weddings">Wedding Planning</option>
                      <option value="consulting">General Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      placeholder="Tell us about your project or requirements..."
                      className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background resize-none"
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                  
                  <p className="text-sm text-slate-500 text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Our Global Offices</h2>
            <p className="text-xl text-slate-600">
              Strategically located to serve our clients worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {[
              { 
                city: "Coimbatore", 
                country: "India", 
                type: "Headquarters",
                description: "Main operations, product development, and projects execution hub",
                highlight: true 
              },
              { 
                city: "Chennai", 
                country: "India", 
                type: "Regional Office",
                description: "South India operations and business development center" 
              },
              { 
                city: "Bengaluru", 
                country: "India", 
                type: "Tech Hub",
                description: "Software development and technical innovation center" 
              },
              { 
                city: "Dubai", 
                country: "UAE", 
                type: "Middle East Office",
                description: "Regional expansion and international client services" 
              },
              { 
                city: "Singapore", 
                country: "Singapore", 
                type: "Asia Pacific Office",
                description: "International operations and strategic partnerships" 
              },
            ].map((office, index) => (
              <Card key={index} className={`border-emerald-200 text-center ${office.highlight ? 'border-amber-400 bg-amber-50' : 'bg-white'}`}>
                <CardHeader>
                  <div className="flex flex-col items-center">
                    <MapPin className={`h-8 w-8 mb-3 ${office.highlight ? 'text-amber-600' : 'text-emerald-600'}`} />
                    <CardTitle className="text-lg text-emerald-900">{office.city}</CardTitle>
                    <p className="text-sm text-slate-500">{office.country}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                      office.highlight 
                        ? 'bg-amber-200 text-amber-800' 
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {office.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{office.description}</p>
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

export default Contact;
