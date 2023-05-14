import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("home/Home"));

export default HomePage;