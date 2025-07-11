"use client";

import { useState } from "react";
import Image from "next/image";
import { Users } from "lucide-react";

interface ProfileImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ProfileImage({ src, alt, width, height, className }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden">
      {!imageError ? (
        <Image 
          src={src} 
          alt={alt}
          className={className}
          width={width}
          height={height}
          onError={handleImageError}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-purple-600 dark:text-purple-400">
          <Users className="h-16 w-16" />
        </div>
      )}
    </div>
  );
}
