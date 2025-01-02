"use client"

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
    onSubmit?: (formData: { email: string; message: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            if (onSubmit) {
                onSubmit(formData);
            } else {
                // Default behavior (simulated submission)
                console.log("Form Submitted:", formData);
                alert("Your message has been sent!");
            }

            // Reset form
            setFormData({ email: "", message: "" });
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full p-6 bg-background rounded-lg shadow-md"
        >
            {/* Email Input */}
            <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                >
                    Email Address
                </label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full"
                    required
                />
            </div>

            {/* Message Input */}
            <div className="mb-4">
                <label
                    htmlFor="message"
                    className="block text-sm font-medium  text-foreground"
                >
                    Message
                </label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 w-full"
                    required
                />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-background border-solid border-2 border-muted-foreground hover:bg-muted-foreground text-white"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;
