import { Routes, Route } from "react-router-dom";
import LinkTree from "./components/links/linktree";
import Footer from "./components/footer/footer";
import ContactPg from "./components/contact_me/contact_me";

function App() {
  return (
    <div className='lg:px-[100px] md:px-[80PX] xsm:px-[60px] px-[10px] py-10'>
      <Routes>
        <Route path='/' element={<LinkTree />} />
        <Route path='/contact' element={<ContactPg />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
