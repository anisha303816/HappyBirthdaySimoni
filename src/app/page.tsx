"use client";
import React from "react";
import { useRouter } from "next/navigation";

const bubbles = [
  { label: "i'll be there for you", top: "20%", left: "40%" },
  { label: "simu day!", top: "80%", left: "70%" },
  { label: "down the memory lane", top: "80%", left: "20%" },
];

export default function Home() {
  const router = useRouter();

  function handleBubbleClick(label: string) {
    const routes: Record<string, string> = {
      "i'll be there for you": "/ill-be-there-for-you",
      "simu day!": "/simu-stories",
      "down the memory lane": "/memory-lane",
    };

    const route = routes[label];
    if (route) {
      router.push(route);
      return;
    }

    console.warn("No route defined for:", label);
  }

  return (
    <div
      className="collage-background"
      style={{
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Confetti */}
      <div className="confetti">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="confetti-piece"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${0.5 + Math.random() * 1})`,
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 70%)`,
            }}
          ></div>
        ))}
      </div>

      {/* Floating Bubbles */}
      {bubbles.map((bubble, idx) => (
        <button
          key={bubble.label}
          className="bubble"
          style={{
            position: "absolute",
            top: bubble.top,
            left: bubble.left,
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            transition: "transform 0.2s",
            animation: `float${idx} 4s ease-in-out infinite alternate`,
            zIndex: 10,
            outline: "none",
            fontFamily: "var(--header-font), cursive",
          }}
          onClick={() => handleBubbleClick(bubble.label)}
        >
          {bubble.label}
        </button>
      ))}

      {/* Bubble floating keyframes + responsive styles */}
      <style>{`
        @keyframes float0 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-30px); }
        }
        @keyframes float1 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-40px); }
        }
        @keyframes float2 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-25px); }
        }

        .bubble {
          padding: clamp(1rem, 3vw, 2.5rem) clamp(1.2rem, 4vw, 3rem);
          font-size: clamp(0.9rem, 2.5vw, 1.3rem);
          background: rgba(255,255,255,0.85);
          color: #ff91a4;
          font-weight: 700;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }

        .bubble:hover {
          transform: scale(1.08);
          background: #ff91a4;
          color: #fff;
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .bubble {
            padding: 1rem 1.2rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
