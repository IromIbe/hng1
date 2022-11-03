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
      <div className='footer fixed lg:left-[100px] lg:right-[100px] md:left-[80px] md:right-[80px] xsm:left-[60px] xsm:right-[60px] left-[10px] right-[10px] bottom-10'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
