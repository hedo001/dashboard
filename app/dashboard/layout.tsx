
import Sidebar from "../../components/Sidebar/index";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    
  return (
    <main className="flex">
      <Sidebar  />
      {children}
    </main>
  );
}
