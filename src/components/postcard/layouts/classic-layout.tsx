import { MapPin, Phone, Clock } from "lucide-react";
import { PostcardContent } from "@/types/config";

interface ClassicLayoutProps {
  content: PostcardContent;
}

export function ClassicLayout({ content }: ClassicLayoutProps) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-between p-(--p-padding) text-(--p-ink) bg-(--p-bg) font-(family-name:--p-font-body)">
      {/* header */}
      <div className="text-center w-full">
        <h1 className="text-7xl mb-4 font-(family-name:--p-font-head) tracking-tight">
          {content.title}
        </h1>
        <div className="flex items-center justify-center gap-4 text-sm tracking-[0.3em] uppercase opacity-80">
          <div className="h-px w-12 bg-(--p-accent)" />
          <span>{content.subtitle}</span>
        </div>
      </div>

      {/* services */}
      <div className="w-full grid grid-cols-2 gap-(--p-gap) max-w-lg mx-auto py-8">
        {content.services.map((service, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-(--p-accent) opacity-60" />
            <span className="text-sm">{service}</span>
          </div>
        ))}
      </div>

      {/*contact section */}
      <div className="w-full pt-6 border-t border-(--p-accent)/20">
        <div className="grid grid-cols-3 gap-4 text-xs opacity-80">
          {/* address */}
          <div className="flex gap-3 text-left">
            <MapPin className="w-5 h-5 stroke-[1.5] text-(--p-accent) shrink-0" />
            <div className="flex flex-col gap-0.5">
              {content.contact.address.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>
          </div>

          {/* phone */}
          <div className="flex gap-3 justify-center text-center">
            <Phone className="w-5 h-5 stroke-[1.5] text-(--p-accent) shrink-0" />
            <span>{content.contact.phone}</span>
          </div>

          {/* hours */}
          <div className="flex gap-3 justify-end text-right">
            <Clock className="w-5 h-5 stroke-[1.5] text-(--p-accent) shrink-0" />
            <div className="flex flex-col gap-0.5">
              <span>{content.contact.hours.weekdays}</span>
              <span>{content.contact.hours.weekend}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
