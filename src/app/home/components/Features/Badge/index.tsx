import { cn } from "@/lib/utils";
import { 
  type AccentColor, 
  getBadgeClasses 
} from "@/config/colors";

export type BadgeProps = {
  text: string;
  icon?: React.ReactNode;
  accent?: AccentColor;
  className?: string;
};

export default function Badge(props: BadgeProps) {
  const {
    text,
    icon,
    accent = 'purple',
    className = ''
  } = props;

  const colorClasses = getBadgeClasses(accent);

  return (
    <div 
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border-1",
        colorClasses.bg,
        colorClasses.border,
        colorClasses.text,
        colorClasses.darkBg,
        colorClasses.darkBorder,
        colorClasses.darkText,
        className
      )}
    >
      {icon}
      <span className="text-nowrap">
        {text}
      </span>
    </div>
  );
}