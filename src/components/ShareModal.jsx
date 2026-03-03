import React, { useMemo, useState } from "react";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdCheck } from "react-icons/md";
import { RiLinksLine } from "react-icons/ri";

function ShareModal({ isOpen, onClose, url = "" }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = useMemo(() => {
    return url || (typeof window !== "undefined" ? window.location.href : "");
  }, [url]);

  if (!isOpen) return null;

  const open = (href) => {
    if (!href) return;
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      const el = document.createElement("input");
      el.value = shareUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const encoded = encodeURIComponent(shareUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="bg-neutral_variant-5 rounded-2xl w-[92%] max-w-[520px] border border-neutral_variant-20"
        style={{ boxShadow: "0px 0px 32px 0px rgba(21, 25, 86, 1)", backgroundColor: "#181E31" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-primary-45deg px-4 py-[10px] flex items-center justify-between rounded-t-2xl">
          <h2 className="label-l !text-neutral-5">Share</h2>
          <button onClick={onClose} className="!text-neutral-5 text-2xl font-bold hover:opacity-80 h-fit">
            ×
          </button>
        </div>

        <div className="px-4 py-4 space-y-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <button className="w-12 h-12 rounded-full bg-emphasis border border-neutral_variant-20 text-neutral-70 flex items-center justify-center" onClick={copy} title="Copy link">
              <RiLinksLine size={22} />
            </button>
            <button className="w-12 h-12 rounded-full bg-emphasis border border-neutral_variant-20 text-neutral-70 flex items-center justify-center" onClick={() => open(`https://api.whatsapp.com/send?text=${encoded}`)} title="WhatsApp">
              <FaWhatsapp size={22} />
            </button>
            <button className="w-12 h-12 rounded-full bg-emphasis border border-neutral_variant-20 text-neutral-70 flex items-center justify-center" onClick={() => open(`https://www.facebook.com/sharer/sharer.php?u=${encoded}`)} title="Facebook">
              <FaFacebook size={22} />
            </button>
            <button className="w-12 h-12 rounded-full bg-emphasis border border-neutral_variant-20 text-neutral-70 flex items-center justify-center" onClick={() => open(`https://twitter.com/intent/tweet?url=${encoded}`)} title="X">
              <FaXTwitter size={22} />
            </button>
            <button className="w-12 h-12 rounded-full bg-emphasis border border-neutral_variant-20 text-neutral-70 flex items-center justify-center" onClick={() => open(`mailto:?subject=Check%20this&body=${encoded}`)} title="Email">
              <MdEmail size={22} />
            </button>
          </div>

          <div className="flex items-stretch gap-2">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="flex-1 rounded-lg bg-emphasis border border-neutral_variant-20 px-3 py-2 text-neutral-95 text-sm"
            />
            <button
              onClick={copy}
              className={`px-4 py-2 rounded-lg text-white text-sm flex items-center gap-1 ${copied ? "bg-green-600" : "bg-primary-50 hover:bg-primary-60 active:bg-primary-40"}`}
            >
              {copied ? (
                <>
                  <MdCheck size={18} />
                  Copied
                </>
              ) : (
                "Copy"
              )}
            </button>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
