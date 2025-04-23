import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  {
    title: "Shop",
    links: [
      { name: "All Books", href: "#" },
      { name: "New Releases", href: "#" },
      { name: "Bestsellers", href: "#" },
      { name: "Special Offers", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "Our Story", href: "/about" },
      { name: "Careers", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQs", href: "#" },
      { name: "Shipping", href: "#" },
      { name: "Returns", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-background border-t">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">BookHaven</h3>
              <p className="text-muted-foreground">
                Your one-stop shop for all your reading needs. Discover, explore
                and enjoy.
              </p>

              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Facebook className="h-4 w-4"/>
                </Button>
                <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
