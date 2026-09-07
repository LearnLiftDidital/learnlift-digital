"use client";

export default function DownloadButton() {
  return (
    <>
      <style>{`
        @media print {
          .download-btn {
            display: none !important;
          }
        }
      `}</style>

      <button
        className="download-btn"
        onClick={() => window.print()}
        style={{
          background: "#1557ff",
          color: "#ffffff",
          border: "none",
          padding: "12px 28px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "15px",
          fontWeight: 600,
        }}
      >
        ⬇ Download PDF
      </button>
    </>
  );
}