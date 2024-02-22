import Header from "../comp/header";

import Navbar from "../comp/navbar";

export default function Home() {
  //const [cart,setcart]=useState([]);
  return (
    <>
      <Navbar />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"></div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}
