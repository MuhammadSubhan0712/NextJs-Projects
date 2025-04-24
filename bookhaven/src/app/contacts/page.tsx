"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import AnimatedText from "@/components/ui/AnimatedText";


const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <main>
        <section className="py-12 md:py-24">
          <div className="container max-w-4xl space-y-12">
            <AnimatedText
              text="Get In Touch"
              className="text-3xl md:text-4xl font-bold"
            />

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-medium">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 mt-1 text-primary" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-muted-foreground">
                        123 Book Street, Literary District <br /> New York, NY
                        10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 mt-1 text-primary" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">
                        hello@bookhaven.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 mt-1 text-primary" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.form
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className="w-full px-4 py-2 rounded-md border bg-background text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-2 rounded-md border bg-background text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    className="w-full px-4 py-2 rounded-md border bg-background text-sm"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
