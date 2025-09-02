'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../../../../components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../../components/ui/form';
import { Input } from '../../../../components/ui/input';
import { Textarea } from '../../../../components/ui/textarea';
import { ImageUpload } from '../../../../components/image-upload';

const productFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  description: z.string().optional(),
  price: z.coerce.number().min(0.01, {
    message: 'Price must be greater than 0.',
  }),
  category: z.string().min(1, {
    message: 'Please select a category.',
  }),
  stock: z.coerce.number().min(0, {
    message: 'Stock cannot be negative.',
  }),
  images: z.array(z.string()).min(1, {
    message: 'Please upload at least one image.',
  }),
});

type ProductFormValues = z.infer<typeof productFormSchema>;

const CATEGORIES = [
  'Perfume',
  'Attar',
  'Oud',
  'Beauty',
  'Compound',
  'Essential Oil',
] as const;

interface ProductFormProps {
  initialData?: Partial<ProductFormValues>;
  onSubmit: (data: ProductFormValues) => void;
  isLoading?: boolean;
}

export function ProductForm({ initialData, onSubmit, isLoading }: ProductFormProps) {
  const [images, setImages] = useState<string[]>(initialData?.images || []);

  // Specify TransformedValues generic to align with Zod v4 resolver types
  const form = useForm<ProductFormValues, any, ProductFormValues>({
    // Cast resolver to satisfy TypeScript when using Zod v4 + RHF generics
    resolver: zodResolver(productFormSchema) as any,
    defaultValues: {
      name: initialData?.name || '',
      description: initialData?.description || '',
      price: initialData?.price || 0,
      category: initialData?.category || '',
      stock: initialData?.stock || 0,
      images: initialData?.images || [],
    },
  });

  // Keep form's images field in sync with local state so Zod validation works correctly.
  useEffect(() => {
    form.setValue('images', images, { shouldValidate: true, shouldDirty: true });
  }, [images, form]);

  const handleSubmit = (data: ProductFormValues) => {
    onSubmit({ ...data, images });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter product description"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <select
                      className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    >
                      <option value="" disabled>
                        Select a category
                      </option>
                      {CATEGORIES.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price ($)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" placeholder="0.00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock Quantity</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="0" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel>Product Images</FormLabel>
              <ImageUpload
                value={images}
                onChange={(urls) => setImages(urls)}
                onRemove={(url) => setImages(images.filter((image) => image !== url))}
              />
              <FormDescription>
                Upload at least one image of your product.
              </FormDescription>
              <FormMessage>
                {form.formState.errors.images?.message}
              </FormMessage>
            </FormItem>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save Product'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
