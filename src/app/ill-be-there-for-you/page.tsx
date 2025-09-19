"use client";
import React from "react";
import Link from "next/link";


export default function IllBeThereForYouPage() {
  return (
    <div className="ill-container">

      <main className="stage">
        <div className="left-decor" aria-hidden />
        <div className="glass-card">
          <div className="badge">Dearest badamiii!!!</div>

          <div className="video-wrap">
            <video
              className="video"
              src="/videos/friends.mp4"
              poster="/images/video-poster.jpg"
              controls
              playsInline
            >
              Your browser does not support the video tag.
            </video>

          </div>

          <p className="caption">
            Monica n Rachel are nothing compared to us hehe. I'll be there for you...when the rain starts to fall...like I've been there before...
          </p>
        </div>

        <div className="right-decor" aria-hidden />
      </main>

      <div className="confetti">
        {[...Array(18)].map((_, i) => (
          <i
            key={i}
            className="c-piece"
            style={{
              left: `${(i * 23) % 100}%`,
              animationDelay: `${(i % 7) * 0.25}s`,
              backgroundColor: `hsl(${(i * 57) % 360} 75% 75%)`,
              transform: `rotate(${(i * 33) % 360}deg) scale(${0.6 + (i % 4) * 0.15})`,
            }}
          />
        ))}
      </div>

      <style>{`
        :root{
          --soft-pink: #ffd6de;
          --rose: #ff91a4;
          --cream: #fff6f7;
          --glass: rgba(255,255,255,0.6);
        }
        .ill-container{
          min-height:100vh;
          width:100vw;
          display:flex;
          flex-direction:column;
          background:
            radial-gradient(circle at 10% 20%, rgba(255,230,235,0.55), transparent 12%),
            radial-gradient(circle at 90% 80%, rgba(255,245,240,0.6), transparent 12%),
            linear-gradient(180deg,#fffafc 0%, #fff2f6 100%);
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          color:#333;
          overflow:hidden;
        }
        .top-bar{
          display:flex;
          align-items:center;
          gap:1rem;
          padding:1.25rem 2rem;
          z-index:20;
        }
        .back{
          text-decoration:none;
          color:var(--rose);
          font-weight:700;
          padding:.35rem .6rem;
          border-radius:999px;
          background:linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3));
          box-shadow:0 4px 12px rgba(0,0,0,0.08);
        }
        .title{
          margin:0;
          font-family: "Segoe Script", "Brush Script MT", cursive;
          font-size:1.45rem;
          color:#8b3b4b;
          letter-spacing:.6px;
        }

        .stage{
          flex:1;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:2rem;
          padding:2rem;
          position:relative;
        }

        .left-decor, .right-decor{
          width:120px;
          height:420px;
          border-radius:20px;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,210,220,0.35)),
            url('/images/collage-frag-left.png');
          background-size:cover;
          filter:blur(2px) saturate(1.05);
          transform:rotate(-6deg);
          opacity:.95;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
        }
        .right-decor{
          transform:rotate(6deg);
          background-image: url('/images/collage-frag-right.png');
        }

        .glass-card{
          width:min(880px, 92%);
          max-width:920px;
          background: linear-gradient(180deg, var(--glass), rgba(255,255,255,0.35));
          border-radius:20px;
          padding:2rem;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
          backdrop-filter: blur(6px) saturate(1.05);
          display:flex;
          flex-direction:column;
          align-items:center;
          text-align:center;
          position:relative;
        }

        .badge{
          position:absolute;
          left:1rem;
          top:1rem;
          background:var(--soft-pink);
          color:#9b2b3b;
          padding:.35rem .65rem;
          border-radius:999px;
          font-weight:700;
          box-shadow:0 6px 18px rgba(155,43,59,0.08);
          font-size:.85rem;
        }

        .video-wrap{
  width:100%;
  max-width:420px;       /* phone width */
  aspect-ratio:5/6;     /* portrait mode */
  position:relative;
  border-radius:20px;
  overflow:hidden;
  margin: .5rem 0 1rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  background: linear-gradient(180deg, #fff, #fffaf6);
  display:flex;
  justify-content:center;
  align-items:center;
}

.video{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}
        .big-play{
          position:absolute;
          right:1rem;
          bottom:1rem;
          background: linear-gradient(135deg, rgba(255,145,164,0.95), rgba(255,200,210,0.95));
          border:none;
          color:white;
          width:54px;
          height:54px;
          border-radius:999px;
          font-size:1.1rem;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          box-shadow:0 8px 22px rgba(255,145,164,0.25);
          backdrop-filter: blur(2px);
        }

        .caption{
          margin:0;
          color:#6b4750;
          max-width:760px;
          font-size:1rem;
          opacity:.95;
          padding:0 1rem 1rem;
        }

        .confetti{
          position:absolute;
          inset:0;
          pointer-events:none;
          z-index:5;
        }
        .c-piece{
          position:absolute;
          top:-8%;
          width:12px;
          height:18px;
          border-radius:3px;
          opacity:.95;
          animation: fall 6s linear infinite;
        }
        @keyframes fall{
          0%{ transform:translateY(-10vh) rotate(0deg); opacity:1 }
          100%{ transform:translateY(120vh) rotate(360deg); opacity:.85 }
        }

        @media (max-width:720px){
          .left-decor, .right-decor{ display:none }
          .title{ font-size:1.2rem }
          .big-play{ width:46px; height:46px }
        }
      `}</style>
    </div>
  );
}