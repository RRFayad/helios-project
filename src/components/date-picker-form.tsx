"use client";

import { useForm } from "react-hook-form";
import { format } from "date-fns";

import { ChevronDown } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

export function DatePickerForm() {
  const form = useForm();
  // ...

  const onSubmit = (formData: any) => console.log(formData);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-row items-center justify-center space-x-4"
      >
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem className="flex flex-col pt-2">
              <FormLabel className="text-[12px] leading-4 text-[#444444]">
                Start Date
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <button className="flex h-[32px] w-[179px] items-center justify-between rounded-md border border-[#C9C9C9] bg-[#F3F3F3] px-3 py-2 text-sm leading-4 shadow-sm">
                      <span>Jan 2024</span>
                      <ChevronDown size={14} color="gray" />
                    </button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    // defaultMonth={field.value}
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                    captionLayout="dropdown-buttons"
                    fromDate={new Date(2023, 0, 1)}
                    toDate={new Date(2025, 11, 31)}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem className="flex flex-col pt-2">
              <FormLabel className="text-[12px] leading-4 text-[#444444]">
                End Date
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <button className="flex h-[32px] w-[179px] items-center justify-between rounded-md border border-[#C9C9C9] bg-[#F3F3F3] px-3 py-2 text-sm leading-4 shadow-sm">
                      <span>Dec 2024</span>
                      <ChevronDown size={14} color="gray" />
                    </button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    // defaultMonth={field.value}
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                    captionLayout="dropdown-buttons"
                    fromDate={new Date(2023, 0, 1)}
                    toDate={new Date(2025, 11, 31)}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
