import BottomNavBar from "./components/BottomNavBar";
import TopNavBar from "./components/TopNavBar"
import NewBookUpload from "./pages/NewBookUpload";

function App() {

  return (
    <>
      <TopNavBar />
      <NewBookUpload />
      <BottomNavBar src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522930314l/39723226._SY475_.jpg" alt="The birthday girl" />
    </>
  );
}

export default App;
