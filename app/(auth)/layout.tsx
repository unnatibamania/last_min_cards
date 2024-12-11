const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-2 h-screen w-full">
      <div className="bg-gray-800"></div>
      <div className="bg-gray-50 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
