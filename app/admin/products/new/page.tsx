'use client';

import { useRouter } from 'next/navigation';
import { useToast } from '../../../../components/ui/use-toast';
import { ProductForm } from '../_components/product-form';

export default function NewProductPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (data: any) => {
    try {
      // TODO: Replace with actual API call
      console.log('Submitting product:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Success!',
        description: 'Product has been created successfully.',
      });
      
      router.push('/admin/products');
    } catch (error) {
      console.error('Error creating product:', error);
      toast({
        title: 'Error',
        description: 'Failed to create product. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      <div className="bg-white rounded-lg border p-6">
        <ProductForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
