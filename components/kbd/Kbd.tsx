export const Kbd = ({ children }: { children: React.ReactNode }) => {
  return (
    <kbd className="flex items-center aspect-square py-0.5 px-1 rounded-md text-sm">
      {children}
    </kbd>
  );
};

export default Kbd;
