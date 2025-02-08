import { Link } from "react-router-dom";

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  isPrimary?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  to,
  icon,
  text,
  isPrimary = false,
}) => (
  <Link
    to={to}
    className={`flex ${
      isPrimary
        ? "text-rose-500 hover:bg-rose-500/10"
        : "text-zinc-500 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-50/5"
    } justify-start items-center gap-2 p-2 rounded-lg transition-all duration-300`}
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default SidebarLink;
