import { Aside } from "@/components/aside/Aside";
import { Navbar } from "@/components/navbar/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex overflow-hidden">
      <Aside />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
