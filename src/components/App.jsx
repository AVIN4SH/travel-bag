import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import ItemList from "./ItemList";
import Sidebar from "./SideBar";
import Header from "./Header";

export default function App() {
  return (
    <>
      <BackgroundHeading />
      <main className="sm:h-[70vh] sm:w-[75vw]">
        <Header />
        <ItemList />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}
