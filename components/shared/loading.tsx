import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-gray-600" />
    </div>
  );
}
