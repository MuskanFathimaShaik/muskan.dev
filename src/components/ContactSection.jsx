import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  MessageCircle,
  Calendar,
  Sparkles,
  Github,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/269b7801eb6481633e3b0a928bb17768",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `New Contact Form Submission from ${formData.name}`,
            _template: "table",
            _autoresponse: `Thank you for contacting us, ${formData.name}. We'll get back to you soon.`,
          }),
        }
      );

      const data = await response.json();

      if (data.success === "true") {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        toast({
          title: "Message Sent Successfully!",
          description:
            "Thank you for your message. I'll get back to you within 24 hours.",
        });
      } else {
        toast({
          title: "Submission failed!",
          description: "Please try again",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-20 -left-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slower"></div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 animate-float">
        <div className="w-6 h-6 rounded-full bg-primary/20"></div>
      </div>
      <div className="absolute bottom-1/3 right-16 animate-float-reverse">
        <div className="w-4 h-4 rounded-full bg-purple-500/30"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-sm font-medium mb-6 border border-primary/20 backdrop-blur-sm">
            <MessageCircle className="h-4 w-4" /> Let's Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'm always open to
            discussing new opportunities and turning ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border border-border/30 shadow-lg backdrop-blur-md h-full transition-all duration-500 hover:shadow-xl hover:border-primary/20">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex flex-col items-center justify-center w-full max-w-[250px]">
                    <h4 className="font-medium text-foreground">Email</h4>
                    <a
                      href="mailto:skmuskanfathima136@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      skmuskanfathima136@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex flex-col items-center justify-center w-full max-w-[250px]">
                    <h4 className="font-medium text-foreground">Location</h4>
                    <p className="text-muted-foreground">
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex flex-col items-center justify-center w-full max-w-[250px]">
                    <h4 className="font-medium text-foreground">
                      Availability
                    </h4>
                    <p className="text-muted-foreground">
                      Response within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-12">
                <h4 className="font-medium mb-4 text-foreground">Follow Me</h4>
                <div className="flex gap-3 items-center justify-center">
                  <a
                    href="https://www.linkedin.com/in/muskan-fathima-shaik-9a6817331/"
                    target="_blank"
                    className="p-3 rounded-xl bg-secondary/50 hover:bg-[#0A66C2] transition-all duration-300 group transform hover:-translate-y-1"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-white" />
                  </a>
                  <a
                    href="https://github.com/MuskanFathimaShaik"
                    target="_blank"
                    className="p-3 rounded-xl bg-secondary/50 hover:bg-black transition-all duration-300 group transform hover:-translate-y-1"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border border-border/30 shadow-lg backdrop-blur-md h-full transition-all duration-500 hover:shadow-xl hover:border-primary/20">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground flex items-center justify-between"
                    >
                      <span>Your Name *</span>
                      {errors.name && (
                        <span className="text-red-500 text-xs">
                          {errors.name}
                        </span>
                      )}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Your Name"
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border bg-background/70 focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all duration-300 outline-none",
                        errors.name ? "border-red-400/50" : "border-border"
                      )}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground flex items-center justify-between"
                    >
                      <span>Your Email *</span>
                      {errors.email && (
                        <span className="text-red-500 text-xs">
                          {errors.email}
                        </span>
                      )}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@gmail.com"
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border bg-background/70 focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all duration-300 outline-none",
                        errors.email ? "border-red-400/50" : "border-border"
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground flex items-center justify-between"
                  >
                    <span>Your Message *</span>
                    {errors.message && (
                      <span className="text-red-500 text-xs">
                        {errors.message}
                      </span>
                    )}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Hello, I'd like to discuss..."
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border bg-background/70 focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all duration-300 outline-none resize-none",
                      errors.message ? "border-red-400/50" : "border-border"
                    )}
                  />
                  <div className="text-xs text-muted-foreground text-right">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                <button
                  type="submit"
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2 group mt-4 transform transition-transform duration-300 hover:-translate-y-1",
                    isSubmitting &&
                      "opacity-80 cursor-not-allowed hover:transform-none"
                  )}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={16}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
