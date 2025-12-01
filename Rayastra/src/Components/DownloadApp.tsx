"use client";
import { MaskContainer } from "../ui/mask";

const DownloadApp = () => {
  return (
    <div className="flex h-[40rem] w-full items-center justify-center bg-black overflow-hidden">
      <MaskContainer
        revealText={
          <p className="mx-auto w-full text-center text-4xl font-bold text-white leading-snug">

            {/* Desktop/Large screen text */}
            <span className="hidden md:block">
              Hover Here to <br /> Scan the QR and <br /> Download the App
            </span>

            {/* Mobile/Small screen text */}
            <span className="block md:hidden">
              Tap Here to <br /> Scan the QR and <br /> Download the App
            </span>

          </p>
        }
        className="w-full h-[40rem] rounded-md border border-gray-700 text-white"
      >
        <div className="flex flex-col gap-10 items-center justify-center h-full">
          <img
            src="https://img.freepik.com/premium-vector/quar-code-line-icon-scan-me-product-link-application-pattern-recognition-chip-information-marking-multicolored-icon-white-background_661108-11235.jpg?semt=ais_hybrid&w=740"
            alt="QR Code"
            className="w-60 h-60 rounded-xl object-contain"
          />
          <h1 className="text-white">Coming Soon</h1>
        </div>
      </MaskContainer>
    </div>
  );
};

export default DownloadApp;
