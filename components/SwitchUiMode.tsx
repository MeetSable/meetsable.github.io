"use client";

import React from "react";

interface FloatingButtonProps {
    icon: React.ReactNode;
    onClick: () => void;
}

export default function SwitchUiMode( {icon, onClick} : FloatingButtonProps ) {
    return (
        <button
            onClick={onClick}
            style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            border: "none",
            background: "#333",
            color: "#fff",
            fontSize: "1.2rem",
            cursor: "pointer",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.3)",
            }}>
            {icon}
        </button>
  );
}