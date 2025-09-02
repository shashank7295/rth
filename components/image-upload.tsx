'use client';

import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from './ui/button';
import { Image as ImageIcon, X, Upload } from 'lucide-react';
import Image from 'next/image';

interface ImageUploadProps {
  value: string[];
  onChange: (urls: string[]) => void;
  onRemove: (url: string) => void;
  maxFiles?: number;
}

export function ImageUpload({
  value = [],
  onChange,
  onRemove,
  maxFiles = 5,
}: ImageUploadProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (value.length + acceptedFiles.length > maxFiles) {
        alert(`You can only upload up to ${maxFiles} images.`);
        return;
      }

      setIsUploading(true);
      
      try {
        // TODO: Implement actual file upload to your storage solution
        // For now, we'll just create object URLs for preview
        const newImageUrls = acceptedFiles.map(file => URL.createObjectURL(file));
        onChange([...value, ...newImageUrls]);
      } catch (error) {
        console.error('Error uploading images:', error);
      } finally {
        setIsUploading(false);
      }
    },
    [onChange, value, maxFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp']
    },
    onDrop,
    disabled: isUploading || value.length >= maxFiles,
  });

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-4">
        {value.map((url, index) => (
          <div key={index} className="relative w-24 h-24 rounded-md overflow-hidden">
            <Image
              src={url}
              alt={`Product image ${index + 1}`}
              fill
              className="object-cover"
            />
            <Button
              type="button"
              onClick={() => onRemove(url)}
              variant="destructive"
              size="icon"
              className="h-6 w-6 absolute top-1 right-1 p-1 rounded-full"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        ))}
      </div>

      {value.length < maxFiles && (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-md p-6 text-center cursor-pointer transition-colors ${
            isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center space-y-2">
            <Upload className="h-8 w-8 text-muted-foreground" />
            <div className="text-sm text-muted-foreground">
              {isDragActive ? (
                <p>Drop the images here</p>
              ) : (
                <p>
                  Drag & drop images here, or click to select files
                </p>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              {`Up to ${maxFiles - value.length} image${maxFiles - value.length !== 1 ? 's' : ''} can be uploaded`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
