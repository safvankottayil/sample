import React, { useEffect, useRef } from "react";

export default function DocumentInput({ value, setItems, items }) {
  const DocumnetRef = useRef(null);
  return (
    <>
      <button
        onClick={() => DocumnetRef.current.click()}
        className="flex w-full node-msg-btn text-sm text-abz items-center justify-center"
      >
        Uplod Document
      </button>
      <input
        ref={DocumnetRef}
        accept=".pdf, .xlsx, application/pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        onChange={(e) =>
          setItems(
            items.map((item) => {
              if (item.id == value.id) {
                return { ...item, file: e.target.files[0] };
              } else {
                return item;
              }
            })
          )
        }
        type="file"
        className="hidden"
      />
    </>
  );
}
