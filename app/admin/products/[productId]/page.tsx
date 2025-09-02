'use client';

import { useParams, useRouter } from 'next/navigation';
import { useToast } from '../../../../components/ui/use-toast';
import { ProductForm } from '../_components/product-form';

export default function EditProductPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const productId = params.productId as string;
 
  // TODO: Fetch product data by ID
  const product = {
    id: productId,
    name: 'Sample Product',
    description: 'This is a sample product description.',
    price: 99.99,
    category: 'Perfume',
    stock: 10,
    images: ['/placeholder-product.png']
  };

  const handleSubmit = async (data: any) => {
    try {
      // TODO: Replace with actual API call
      console.log('Updating product:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Success!',
        description: 'Product has been updated successfully.',
      });
      
      router.push('/admin/products');
    } catch (error) {
      console.error('Error updating product:', error);
      toast({
        title: 'Error',
        description: 'Failed to update product. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
      <div className="bg-white rounded-lg border p-6">
        <ProductForm 
          initialData={product}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
