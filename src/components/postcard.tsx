import { Clock, MapPin, Phone } from "lucide-react";

export function SpaPostcard() {
  const services = [
    "Swedish massage",
    "Deep Tissue Therapy",
    "Hot Stone Massage",
    "Aromatherapy",
    "Facial Treatments",
    "Body Scrubs & Wraps",
  ];

  return (
    <div className="relative bg-white overflow-hidden max-w-7xl w-full shadow-2xl">
      <div className="px-24 py-20">
        <div className="mb-24">
          <h1 className="text-postcard-logo tracking-tight text-brand-ink leading-none mb-3">
            Serenity
          </h1>
          <div className="flex items-center gap-6 mt-6">
            <div className="w-20 h-1 bg-brand-accent"></div>
            <p className="text-brand-ink tracking-logo uppercase text-2xl">
              Spa & Wellness
            </p>
          </div>
        </div>
        <div className="mb-24">
          <div className="grid grid-cols-3 gap-x-20 gap-y-12">
            {services.map((service) => (
              <div key={service} className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-brand-accent mr-5"></div>
                <span className="text-2xl text-brand-ink">{service}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-px bg-brand-divider mb-16"></div>
        <div className="grid grid-cols-3 gap-16">
          <div className="flex items-start gap-5">
            <MapPin
              className="w-9 h-9 text-brand-accent shrink-0"
              strokeWidth={2.5}
            />
            <div className="text-xl text-brand-ink leading-relaxed">
              <p>123 Wellness Boulevard</p>
              <p>Harmony Springs, CA 90210</p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <Phone
              className="w-9 h-9 text-brand-accent shrink-0"
              strokeWidth={2.5}
            />
            <p className="text-xl text-brand-ink">(555) 123-4567</p>
          </div>
          <div className="flex items-start gap-5">
            <Clock
              className="w-9 h-9 text-brand-accent shrink-0"
              strokeWidth={2.5}
            />
            <div className="text-xl text-brand-ink leading-relaxed">
              <p>Mon-Sat: 9AM - 8PM</p>
              <p>Sun: 10AM - 6PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
