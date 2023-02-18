import AppBar from "@/components/app-bar/app-bar";
import Footer from "./footer";
import Header from "./header/header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <main>
        <AppBar>
          <Header />
        </AppBar>

        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
