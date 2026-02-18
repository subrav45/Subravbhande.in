import React, { useEffect, useState } from "react";

export default function Footer() {
  const [visitors, setVisitors] = useState(null);

  

  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-gray-700">
            Subrav Bhande
          </span>
          . All rights reserved.
        </p>

        

        {/* Visitors */}
        {/* <p className="mt-3 text-xs text-gray-500">
          Visitors:{" "}
          <span className="font-medium text-gray-700">
            {visitors !== null ? visitors : "Loading..."}
          </span>
        </p> */}
      </div>
    </footer>
  );
}
