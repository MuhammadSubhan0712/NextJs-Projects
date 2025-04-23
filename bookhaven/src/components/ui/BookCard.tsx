"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  price: number;
  rating: number;
  coverImage: string;
}

const BookCard = ({
  title,
  author,
  price,
  rating,
  coverImage,
}: BookCardProps) => {
  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        className="border rounded-lg overflow-hidden shadow-sm hovre:shadow-md transition-shadow">
        <div className="aspect-[2/3] bg-muted relative">
          <div className="absolute inset-0 flex items-center justify-center text-5xl">
            {coverImage}
          </div>
        </div>

        <div className="p-4 space-y-2">
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{author}</p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating
                    ? "fill-primary text-primary"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="font-bold">${price.toFixed(2)}</span>
            <Button variant="outline" size="sm">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BookCard;
