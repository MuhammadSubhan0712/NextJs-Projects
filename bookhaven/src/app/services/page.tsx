import AnimatedText from "@/components/ui/AnimatedText";
import React from "react";

const Services = () => {
  const services = [
    {
      title: "Personalized Recommendations",
      description:
      "Get book recommendations tailored to your reading preferences.",
      icon: "📚",
    },
    {
      title: "Gift Wrapping",
      description: "Beautiful gift wrapping options for any occasion.",
      icon: "🎁",
    },
    {
      title: "Book Clubs",
      description: "Join our virtual or in-person book clubs.",
      icon: "👥",
    },
    {
      title: "Author Events",
      description: "Meet your favorite authors at our exclusive events.",
      icon: "✍️",
    },
    {
      title: "Subscription Boxes",
      description: "Monthly curated book boxes delivered to your door.",
      icon: "📦",
    },
    {
      title: "Corporate Gifting",
      description: "Bulk orders and custom solutions for businesses.",
      icon: "💼",
    },
  ];

  return (
    <>
      <main>
        <section className="py-12 md:py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <AnimatedText
                text="Our Services"
                className="flex items-center justify-center text-3xl md:text-4xl font-bold"
              />

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer more than just books - explore our additional services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-medium mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
