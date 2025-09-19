"use client";
import React from "react";
import Link from "next/link";

export default function SimuStoriesPage() {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  }

  return (
    <div className="party-root">
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="background-video"
          src="/videos/simu-stories.mp4"
          controls
          playsInline
        >
          Your browser does not support the video tag.
        </video>


        {/* Happy Birthday arc over video */}
        {/* <div className="birthday-arc">
          {"🎉 Happy Birthday Simu 🎉".split("").map((char, i) => (
            <span
              key={i}
              style={{
                transform: `rotate(${i * 12}deg) translate(120px) rotate(-${i * 12}deg)`,
              }}
            >
              {char}
            </span>
          ))}
        </div> */}
      </div>

      {/* sparkles */}
      <div className="sparkles" aria-hidden>
        {[...Array(35)].map((_, i) => (
          <span
            key={i}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      
        <header className="top">
        <h1>Happiest Birthday Dear Simoni!!! From all of us to you!</h1>
      </header>

      <style>{`
        :root{
          --accent1: #fab0beff;
          --accent2: #ffcf4d;
          --accent3: #6effa6;
        }

        .party-root{
          position:relative;
          min-height:100vh;
          width:100vw;
          overflow:hidden;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:flex-start;
          font-family: "Comic Sans MS", cursive, sans-serif;
          color:#fff;
          background: radial-gradient(circle at top, #ffdee9, #b5fffc);
        }

        /* center video instead of full screen */
        .video-wrapper {
          position: relative;
          margin: 100px auto 40px;
          width: 80%;
          height: 12cm;
          max-width: 900px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(0,0,0,0.3);
        }

        .background-video{
          width:100%;
          height:100%;
          display:block;
        }

        .top{
          position:absolute;
          top:20px;
          left:0;
          right:0;
          z-index:5;
          width:100%;
          max-width:1200px;
          display:flex;
          align-items:center;
          gap:16px;
          padding:20px;
          justify-content:flex-start;
        }
        .back{
          text-decoration:none;
          color:#fff;
          font-weight:700;
          padding:.45rem .7rem;
          border-radius:999px;
          background:rgba(0,0,0,0.4);
          box-shadow:0 10px 30px rgba(0,0,0,0.4);
        }
        h1{
          margin:0;
          color:var(--accent1);
          font-size:1.4rem;
          text-shadow: 0 2px 10px rgba(247, 242, 242, 0.96);
        }
        .mini-play{
          margin-left:auto;
          background: linear-gradient(135deg, var(--accent1), var(--accent2));
          border:none;
          color:#fff;
          padding:.45rem .65rem;
          border-radius:10px;
          cursor:pointer;
          box-shadow:0 10px 24px rgba(0,0,0,0.3);
        }

        /* birthday arc */
        .birthday-arc {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          width: 260px;
          height: 160px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          pointer-events: none;
        }
        .birthday-arc span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: center;
          font-size: 1.2rem;
          color:#fff;
          text-shadow:0 0 6px var(--accent1), 0 0 12px var(--accent2);
          animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow{
          from{ text-shadow:0 0 4px #fff, 0 0 8px var(--accent1); }
          to{ text-shadow:0 0 10px #fff, 0 0 20px var(--accent2); }
        }

        /* sparkles */
        .sparkles{
          position:fixed;
          inset:0;
          z-index:1;
          pointer-events:none;
        }
        .sparkle{
          position:absolute;
          width:6px;
          height:6px;
          background: radial-gradient(circle, #fff, transparent);
          border-radius:50%;
          opacity:0.9;
          animation: sparkle 3s infinite ease-in-out;
        }
        @keyframes sparkle{
          0%,100%{ transform: scale(0.5); opacity:0; }
          50%{ transform: scale(1.4); opacity:1; }
        }
      `}</style>
    </div>
  );
}
