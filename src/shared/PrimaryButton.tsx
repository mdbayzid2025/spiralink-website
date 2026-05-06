import { ButtonHTMLAttributes } from "react";
import { MoveUpRight } from "lucide-react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function PrimaryButton({
  label,
  className = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className={`
        group inline-flex items-center justify-center gap-2
        bg-white text-[#050507]
        px-6 py-3.5 rounded-full font-bold
        hover:bg-gray-100 transition-colors
        cursor-pointer text-center text-sm md:text-[16px]
        ${className}
      `}
    >
      {label}
      <MoveUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  );
}
