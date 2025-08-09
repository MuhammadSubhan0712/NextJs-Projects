"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface BookCardProps {
  title: string;
  author: string;
  price: number;
  rating: number;
  coverImage: string | StaticImageData;
}

const BookCard = ({
  title,
  author,
  price,
  rating,
  coverImage,
}: BookCardProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
        <div className="relative aspect-[2/3] bg-muted flex items-center justify-center">
          <Image
            src={coverImage}
            alt={`${title} cover`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={false}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.parentElement!.className = "relative aspect-[2/3] bg-amber-100 flex items-center justify-center";
              target.remove();
            }}
          />
        </div>

        <div className="p-4 space-y-2 flex-grow flex flex-col">
          <div className="flex-grow">
            <h3 className="font-medium line-clamp-2 min-h-[2.5rem]">{title}</h3>
            <p className="text-sm text-muted-foreground truncate">{author}</p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating
                      ? "fill-amber-500 text-amber-500" : "text-amber-200"
                  }`}
                />
              ))}
              <span className="text-xs text-amber-800/60 ml-1">({rating})</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-amber-100">
            <span className="font-bold text-amber-900 whitespace-nowrap">${price.toFixed(2)}</span>
            <Button 
              variant="outline" 
              size="sm"
              className="text-amber-900 border-amber-300 hover:bg-amber-50 shrink-0">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
    >
      <div className="relative aspect-[2/3] bg-muted flex items-center justify-center">
        <Image
          src={coverImage}
          alt={`${title} cover`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={false}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.parentElement!.className = "relative aspect-[2/3] bg-amber-100 flex items-center justify-center";
            target.remove();
          }}
        />
      </div>

      <div className="p-4 space-y-2 flex-grow flex flex-col">
        <div className="flex-grow">
          <h3 className="font-medium line-clamp-2 min-h-[2.5rem]">{title}</h3>
          <p className="text-sm text-muted-foreground truncate">{author}</p>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating
                    ? "fill-amber-500 text-amber-500" : "text-amber-200"
                }`}
              />
            ))}
            <span className="text-xs text-amber-800/60 ml-1">({rating})</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-amber-100">
          <span className="font-bold text-amber-900 whitespace-nowrap">${price.toFixed(2)}</span>
          <Button 
            variant="outline" 
            size="sm"
            className="text-amber-900 border-amber-300 hover:bg-amber-50 shrink-0">
            <ShoppingCart className="h-4 w-4 m" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;