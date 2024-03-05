import React from "react";
import Head from "../components/Head";
import WhatWeDo from "../components/WhatWeDo";
import Fashion from "../components/Fashion";
import Wedding from "../components/Wedding";
import Aritst from "../components/Aritst";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div>
      <Head />
      <WhatWeDo />
      <Fashion />
      <Wedding />
      <Aritst />
      <Footer />
    </div>
  );
}
