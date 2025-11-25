import { PostcardConfig, PostcardContent } from "@/types/config";

export const DEFAULT_CONTENT: PostcardContent = {
  title: "Serenity",
  subtitle: "SPA & WELLNESS",
  services: [
    "Swedish massage",
    "Deep Tissue Therapy",
    "Hot Stone Massage",
    "Aromatherapy",
    "Facial Treatments",
    "Body Scrubs & Wraps",
  ],
  contact: {
    address: ["123 Wellness Boulevard", "Harmony Springs, CA 90210"],
    phone: "(555) 123-4567",
    hours: {
      weekdays: "Mon-Sat: 9AM - 8PM",
      weekend: "Sun: 10AM - 6PM",
    },
  },
};

export const DEFAULT_CONFIG: PostcardConfig = {
  layout: "classic",
  dimensions: {
    width: 600,
    height: 400,
  },
  style: {
    fontHeading: "sans",
    fontBody: "sans",
    backgroundColor: "#ffffff",
    textColor: "#1a3a38",
    accentColor: "#7a9d9c",
    padding: 2.5, // rem
    gap: 1, // rem
    textureOpacity: 0,
  },
};
