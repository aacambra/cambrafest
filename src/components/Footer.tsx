"use client";
import { BsInstagram, BsFacebook, BsSpotify } from "react-icons/bs";

const handleExternalClick = (path: string) => {
  const link = document.createElement("a");
  link.target = "_blank";
  link.href = path;
  link.click();
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div
        className="md:flex md:justify-between md:items-center px-12 bg-primary py-5 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2
    text-center text-lg"
      >
        <span className="text-[#FDFAFA] ">
          {`© ${new Date().getFullYear()}`} | Todos os direitos reservados.
        </span>
        <div className="grid grid-cols-3 justify-items-center">
          <span
            className="p-2 mx-1 cursor-pointer w-10 inline-flex items-center
        rounded-full bg-gray-700 text-2xl hover:bg-transparent duration-100"
          >
            <BsInstagram
              onClick={() =>
                handleExternalClick("https://www.instagram.com/cambrafest/")
              }
            />
          </span>
          <span
            className="p-2 mx-1 cursor-pointer w-10 inline-flex items-center
        rounded-full bg-gray-700 text-2xl hover:bg-transparent duration-100"
          >
            <BsFacebook
              color="#1877f2"
              onClick={() =>
                handleExternalClick("https://www.facebook.com/CambraFest")
              }
            />
          </span>
          <span
            className="p-2 mx-1 cursor-pointer w-10 inline-flex items-center
        rounded-full bg-gray-700 text-2xl hover:bg-transparent duration-100"
          >
            <BsSpotify
              color="#1DB954"
              onClick={() =>
                handleExternalClick(
                  "https://open.spotify.com/playlist/1fsCrDnMdEy4MXok6ffFEM?si=8845a98eaa0f4407&nd=1"
                )
              }
            />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
