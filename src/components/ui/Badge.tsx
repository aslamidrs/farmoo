interface BadgeProps {
  text: string;
  type?: "success" | "error" | "info" | "warning";
}

const typeClasses: Record<string, string> = {
  success: "bg-green-100 text-green-800",
  error: "bg-red-100 text-red-800",
  info: "bg-blue-100 text-blue-800",
  warning: "bg-yellow-100 text-yellow-800",
};

export const Badge: React.FC<BadgeProps> = ({ text, type = "info" }) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${typeClasses[type]}`}
    >
      {text}
    </span>
  );
};
