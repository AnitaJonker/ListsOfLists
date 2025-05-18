import Navbar from "./Navbar";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {children}
      </main>
    </>
  );
}
