"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Package, ShieldCheck, Star, Users, Shield, Zap, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Products", id: "product" },
            { name: "Pricing", id: "pricing" },
            { name: "Reviews", id: "testimonial" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="TacticalArms"
          button={{
            text: "Shop Now",
            href: "product"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Professional Tactical Equipment"
          description="Premium weapons and gear for law enforcement, military, and authorized civilians. Quality you can trust, service you can rely on."
          tag="Licensed Dealer"
          tagIcon={Shield}
          buttons={[
            {
              text: "Browse Catalog",
              href: "product"
            },
            {
              text: "Get Licensed",
              href: "contact"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/9250/green-attraction-war-museum.jpg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About TacticalArms"
          description="Your trusted source for professional-grade tactical equipment with over 15 years of experience serving law enforcement, military, and authorized civilians."
          tag="Established 2008"
          tagIcon={Award}
          bulletPoints={[
            {
              title: "Licensed & Certified",
              description: "Fully licensed federal firearms dealer with all required certifications",
              icon: ShieldCheck
            },
            {
              title: "Professional Grade",
              description: "Only the highest quality equipment from trusted manufacturers",
              icon: Star
            },
            {
              title: "Expert Support",
              description: "Knowledgeable staff to help you find the right equipment for your needs",
              icon: Users
            }
          ]}
          imageSrc="https://images.pexels.com/photos/9229894/pexels-photo-9229894.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Equipment"
          description="Browse our selection of professional-grade tactical equipment and firearms"
          tag="New Arrivals"
          tagIcon={Package}
          products={[
            {
              id: "1",
              name: "AR-15 Tactical Rifle",
              price: "$1,899",
              imageSrc: "https://images.pexels.com/photos/6091159/pexels-photo-6091159.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Glock 19 Gen5",
              price: "$599",
              imageSrc: "https://images.pexels.com/photos/889709/pexels-photo-889709.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Precision Sniper System",
              price: "$3,299",
              imageSrc: "https://images.pexels.com/photos/6090789/pexels-photo-6090789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Tactical Shotgun",
              price: "$899",
              imageSrc: "https://images.pexels.com/photos/6204822/pexels-photo-6204822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "5",
              name: "Compact SMG",
              price: "$2,199",
              imageSrc: "https://images.pexels.com/photos/32274624/pexels-photo-32274624.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Equipment Packages"
          description="Complete tactical packages for different professional requirements"
          tag="Package Deals"
          tagIcon={Package}
          plans={[
            {
              id: "basic",
              badge: "Law Enforcement",
              badgeIcon: Shield,
              price: "$2,499",
              subtitle: "Essential equipment for patrol officers",
              buttons: [
                {
                  text: "Order Package",
                  href: "contact"
                },
                {
                  text: "View Details",
                  href: "product"
                }
              ],
              features: [
                "Service pistol with holster",
                "Tactical vest level IIIA",
                "Radio communication system",
                "Basic maintenance kit",
                "Training certification"
              ]
            },
            {
              id: "professional",
              badge: "Military Contractor",
              badgeIcon: Zap,
              price: "$4,999",
              subtitle: "Advanced equipment for tactical operations",
              buttons: [
                {
                  text: "Order Package",
                  href: "contact"
                },
                {
                  text: "View Details",
                  href: "product"
                }
              ],
              features: [
                "Primary and secondary weapons",
                "Level IV tactical armor",
                "Night vision equipment",
                "Advanced optics package",
                "Extended warranty"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Our Track Record"
          description="Numbers that speak to our commitment to excellence and customer satisfaction"
          tag="Statistics"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "5,000+",
              description: "Law Enforcement Agencies Served"
            },
            {
              id: "2",
              value: "99.8%",
              description: "Customer Satisfaction Rate"
            },
            {
              id: "3",
              value: "15+",
              description: "Years of Expert Service"
            },
            {
              id: "4",
              value: "24/7",
              description: "Technical Support Available"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Professionals Say"
          description="Trusted by law enforcement, military, and security professionals nationwide"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Marcus Rodriguez",
              role: "SWAT Team Leader",
              testimonial: "TacticalArms has been our go-to supplier for over 5 years. Their equipment is top-notch and their service is unmatched in the industry.",
              imageSrc: "https://images.pexels.com/photos/3831164/pexels-photo-3831164.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Sarah Mitchell",
              role: "Military Contractor",
              testimonial: "The quality and reliability of their tactical gear has kept our teams safe in the field. Wouldn't trust anyone else with our equipment needs.",
              imageSrc: "https://images.pexels.com/photos/7715285/pexels-photo-7715285.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Detective James Park",
              role: "Metropolitan Police",
              testimonial: "Professional service, competitive pricing, and equipment that performs when it matters most. Highly recommended for law enforcement.",
              imageSrc: "https://images.pexels.com/photos/8442812/pexels-photo-8442812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Rachel Thompson",
              role: "Tactical Instructor",
              testimonial: "I've trained thousands of officers with TacticalArms equipment. Their gear consistently meets the highest professional standards.",
              imageSrc: "https://images.pexels.com/photos/6981006/pexels-photo-6981006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get Professional Consultation"
          description="Connect with our experts to discuss your tactical equipment needs and licensing requirements"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "organization",
              type: "text",
              placeholder: "Organization/Agency",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Professional Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Contact Number",
              required: true
            }
          ]}
          textarea={{
            name: "requirements",
            placeholder: "Describe your equipment requirements and any specific needs...",
            rows: 5,
            required: true
          }}
          buttonText="Request Consultation"
          imageSrc="https://images.pexels.com/photos/5583619/pexels-photo-5583619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Products",
              items: [
                {
                  label: "Firearms",
                  href: "product"
                },
                {
                  label: "Tactical Gear",
                  href: "product"
                },
                {
                  label: "Accessories",
                  href: "product"
                },
                {
                  label: "Packages",
                  href: "pricing"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Professional Consultation",
                  href: "contact"
                },
                {
                  label: "Training Programs",
                  href: "contact"
                },
                {
                  label: "Maintenance Support",
                  href: "contact"
                },
                {
                  label: "Custom Orders",
                  href: "contact"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Licensing Help",
                  href: "contact"
                },
                {
                  label: "Technical Support",
                  href: "contact"
                },
                {
                  label: "Documentation",
                  href: "about"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | TacticalArms - Licensed Federal Firearms Dealer"
        />
      </div>
    </ThemeProvider>
  );
}