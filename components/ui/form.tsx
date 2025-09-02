"use client";

import * as React from "react";
import { Controller, ControllerProps, FieldPath, FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

export function Form<TFieldValues extends FieldValues>({ children, ...form }: { children: React.ReactNode } & UseFormReturn<TFieldValues>) {
  // Provide the react-hook-form context to children
  return <FormProvider {...(form as unknown as UseFormReturn<any>)}>{children}</FormProvider>;
}

// Just wrappers for styling/structure
export function FormItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={"space-y-2 " + (className ?? "")} {...props} />;
}

export function FormLabel({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={"text-sm font-medium " + (className ?? "")} {...props} />;
}

export function FormDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={"text-xs text-gray-500 " + (className ?? "")} {...props} />;
}

export function FormMessage({ children }: { children?: React.ReactNode }) {
  if (!children) return null;
  return <p className="text-sm text-red-600">{children}</p>;
}

export function FormControl({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={className} {...props} />;
}

export function FormField<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(
  props: ControllerProps<TFieldValues, TName> & {
    render: ControllerProps<TFieldValues, TName>["render"];
  }
) {
  return <Controller {...props} />;
}
