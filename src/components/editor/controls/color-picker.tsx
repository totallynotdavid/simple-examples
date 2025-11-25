import { Label } from "@/components/ui/label";

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function ColorPicker({ label, value, onChange }: ColorPickerProps) {
  return (
    <div className="flex items-center justify-between group">
      <Label className="mb-0 group-hover:text-white transition-colors">
        {label}
      </Label>
      <div className="flex items-center gap-2">
        <span className="text-xs font-mono text-neutral-500">{value}</span>
        <div className="relative h-8 w-8 rounded-full overflow-hidden border border-neutral-700 hover:border-neutral-500 transition-colors">
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] p-0 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
