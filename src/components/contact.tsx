"use client";

import { cn } from "@/lib/utils";
import { getFormValidator, FormValues } from "@/lib/validators/form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { AnimationContainer } from "./animation-container";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import SendButton from "./ui/SendButton";
import { useLocalization } from "@/providers/localization-provider";

export const Contact = () => {
  const { localized } = useLocalization();
  const formValidator = useMemo(
    () =>
      getFormValidator({
        "form-error-name-min": localized["form-error-name-min"],
        "form-error-name-max": localized["form-error-name-max"],
        "form-error-email": localized["form-error-email"],
        "form-error-message-min": localized["form-error-message-min"],
        "form-error-message-max": localized["form-error-message-max"],
      }),
    [localized]
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formValidator),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const [isSent, setIsSent] = useState(false);

  const { mutate: handleSubmit, isPending: isLoading } = useMutation({
    mutationFn: async ({ name, email, phone, message }: FormValues) => {
      const payload: FormValues = {
        name,
        email,
        phone,
        message,
      };

      const { data } = await axios.post("/api/send", payload);
      return data;
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        console.error(error.message);
        toast(localized["toast-error-title"], {
          description: localized["toast-error-description"],
        });
      }
    },
    onSuccess: () => {
      form.reset();
      setTimeout(() => {
        setIsSent(true);
      }, 1000);
      toast(localized["toast-success-title"], {
        description: localized["toast-success-description"],
      });
    },
  });

  return (
    <div id="contact" className="w-full relative pt-10 pb-40 z-40">
      <AnimationContainer animation="slide-up" delay={0.1}>
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            {localized["contact-title"]}
          </h2>
        </div>
      </AnimationContainer>

      <div className="flex flex-col items-center justify-center gap-5 pt-10 w-full">
        <div className="flex flex-col items-center justify-center w-full gap-5 lg:flex-row">
          <Link
            href="mailto:joaovictors.mouraa@gmail.com"
            className="w-full"
          >
            <Button
              type="button"
              variant="outline"
              className="flex-col items-start w-full h-auto p-5 hover:scale-100"
            >
              <h6 className="text-base font-medium">{localized["contact-email-label"]}</h6>
              <p className="mt-2 text-base text-foreground/70">
                joaovictors.mouraa@gmail.com
              </p>
            </Button>
          </Link>
          {/* <Link
            href="https://wa.link/v661nu"
            className="flex-[0.5] w-full lg:w-auto"
          >
            <Button
              type="button"
              variant="outline"
              className="flex-col items-start w-full h-auto p-5 hover:scale-100"
            >
              <h6 className="text-base font-medium">Phone</h6>
              <p className="mt-2 text-base text-foreground/70">
                +55 21 984954753
              </p>
            </Button>
          </Link> */}
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((e) => handleSubmit(e))}
            className="flex flex-col items-center justify-center w-full space-y-5"
          >
            <AnimationContainer
              animation="slide-up"
              delay={0.2}
              className="w-full"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        type="text"
                        placeholder={localized["form-placeholder-name"]}
                        autoComplete="off"
                        className="h-12 px-5 capitalize outline-none rounded-lg hover:border-blue-500"
                      />
                    </FormControl>
                    <FormMessage>
                      <motion.span
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {form.formState.errors.name &&
                          form.formState.errors.name.message}
                      </motion.span>
                    </FormMessage>
                  </FormItem>
                )}
              />
            </AnimationContainer>
            <AnimationContainer
              animation="slide-up"
              delay={0.3}
              className="w-full"
            >
              <div className="flex flex-col items-center justify-center w-full gap-4 md:flex-row">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem
                      className={cn(
                        "w-full mb-0",
                        form.formState.errors.phone && "mb-5"
                      )}
                    >
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isLoading}
                          required
                          type="email"
                          name="email"
                          placeholder={localized["form-placeholder-email"]}
                          autoComplete="off"
                          className="h-12 px-5 outline-none rounded-lg hover:border-blue-500"
                        />
                      </FormControl>
                      <FormMessage>
                        <motion.span
                          initial={{ opacity: 0, y: 0 }}
                          animate={{ opacity: 1, y: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {form.formState.errors.email &&
                            form.formState.errors.email.message}
                        </motion.span>
                      </FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem
                      className={cn(
                        "w-full mb-0",
                        form.formState.errors.email && "mb-5"
                      )}
                    >
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isLoading}
                          required
                          type="tel"
                          name="phone"
                          placeholder={localized["form-placeholder-phone"]}
                          autoComplete="off"
                          className="h-12 px-5 outline-none rounded-lg hover:border-blue-500"
                        />
                      </FormControl>
                      <FormMessage>
                        <motion.span
                          initial={{ opacity: 0, y: 0 }}
                          animate={{ opacity: 1, y: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {form.formState.errors.phone &&
                            form.formState.errors.phone.message}
                        </motion.span>
                      </FormMessage>
                    </FormItem>
                  )}
                />
              </div>
            </AnimationContainer>
            <AnimationContainer
              animation="slide-up"
              delay={0.4}
              className="w-full"
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Textarea
                        {...field}
                        disabled={isLoading}
                        required
                        rows={5}
                        name="message"
                        placeholder={localized["form-placeholder-message"]}
                        autoComplete="off"
                        className="w-full p-5 outline-none resize-none rounded-lg hover:border-blue-500"
                      />
                    </FormControl>
                    <FormMessage>
                      <motion.span
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {form.formState.errors.message &&
                          form.formState.errors.message.message}
                      </motion.span>
                    </FormMessage>
                  </FormItem>
                )}
              />
            </AnimationContainer>
            <AnimationContainer
              animation="slide-up"
              delay={0.5}
              className="w-full"
            >
              <div className="flex items-center justify-center w-full mx-auto">
                <SendButton
                  isSent={isSent}
                  isLoading={isLoading}
                  setIsSent={setIsSent}
                  disabled={form.formState.disabled}
                />
              </div>
            </AnimationContainer>
          </form>
        </Form>
      </div>
    </div>
  );
};
