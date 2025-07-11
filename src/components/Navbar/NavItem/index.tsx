import Link from "next/link";
import { LucideIcon } from "lucide-react";

export type NavItemProps = {
  name: string;
  href: string;
  icon?: LucideIcon;
  isActive?: boolean;
};

export function NavItem({ name, href, icon: IconComponent, isActive }: NavItemProps) {
  return (
    <li className="w-full md:w-auto">
      <Link
        href={href}
        className={`
          flex items-center gap-3 px-4 py-3 md:px-3 md:py-2 rounded-lg transition-all duration-300 w-full md:w-auto group relative overflow-hidden font-medium
          ${isActive 
            ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/25 dark:shadow-purple-500/20' 
            : 'text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-slate-800'
          }
        `}
      >
        {/* Ícone - aparece no mobile e desktop */}
        {IconComponent && (
          <IconComponent className="h-4 w-4 relative z-10 flex-shrink-0" />
        )}
        
        <span className="relative z-10 text-sm">{name}</span>
        
        {/* Indicador de ativo para desktop */}
        {isActive && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white md:block hidden rounded-full"></div>
        )}
      </Link>
    </li>
  );
}