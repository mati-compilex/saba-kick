import React from "react";
import { ArrowRightIcon } from "../assets/icons/arrowRight";

function ErrorReportModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-neutral_variant-5 rounded-2xl w-[80%] max-w-md border border-neutral_variant-20 pb-4"
        style={{
          boxShadow: "0px 0px 32px 0px rgba(21, 25, 86, 1)",
          backgroundColor: "#181E31",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-primary-45deg px-4 py-[10px] flex items-center justify-between rounded-t-2xl">
          <h2 className="label-l !text-neutral-5">Confirm</h2>
          <button
            onClick={onClose}
            className="!text-neutral-5 text-2xl font-bold hover:opacity-80 h-fit"
          >
            ×
          </button>
        </div>
        <div className="px-4 mt-4">
          <p className="body-m !text-neutral-70">
            We have received your report, and we will fix it shortly. Thank you.
          </p>
        </div>
        <div className="px-4 mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="border border-neutral_variant-20 rounded-lg pt-2 pr-3 pb-2 pl-4 flex items-center gap-2 h-fit"
          >
            <span className="label-m !text-neutral-95 leading-none">Close</span>
            <div className="flex items-center mt-[2px]">
              <ArrowRightIcon />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorReportModal;
