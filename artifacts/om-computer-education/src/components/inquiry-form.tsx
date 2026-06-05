import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubmitInquiry } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

const COURSES = [
  "MSCIT",
  "Advanced Excel",
  "Tally",
  "Python Programming",
  "Web Development",
  "HTML",
  "CSS",
  "JavaScript",
  "C Programming",
  "C++",
  "MS Office",
  "Computer Basics",
  "Internet Skills",
  "Resume Building",
  "Interview Preparation",
  "Digital Skills Training",
];

const inquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Phone must be at least 10 characters"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  course: z.string().min(1, "Please select a course"),
  message: z.string().optional(),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

export function InquiryForm() {
  const { toast } = useToast();
  const submitInquiry = useSubmitInquiry();

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      course: "",
      message: "",
    },
  });

  const onSubmit = (data: InquiryFormValues) => {
    submitInquiry.mutate(
      {
        data: {
          name: data.name,
          phone: data.phone,
          email: data.email || null,
          course: data.course,
          message: data.message || null,
        },
      },
      {
        onSuccess: () => {
          toast({
            title: "Inquiry Submitted Successfully!",
            description: "We will get back to you shortly.",
          });
          form.reset();
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "Submission Failed",
            description: "Please try again later.",
          });
        },
      }
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name *</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} data-testid="input-name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+91 98765 43210"
                    {...field}
                    data-testid="input-phone"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email (Optional)</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                    data-testid="input-email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Interested Course *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger data-testid="select-course">
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {COURSES.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any specific questions?"
                  className="min-h-[100px]"
                  {...field}
                  data-testid="input-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={submitInquiry.isPending}
          data-testid="button-submit-inquiry"
        >
          {submitInquiry.isPending && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          Submit Inquiry
        </Button>
      </form>
    </Form>
  );
}
