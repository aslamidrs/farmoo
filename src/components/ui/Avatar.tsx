interface AvatarProps {
  initials: string;
}

export const Avatar: React.FC<AvatarProps> = ({ initials }) => {
  return (
    <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
      {initials}
    </div>
  );
};
