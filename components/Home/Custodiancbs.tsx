'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CustodianCBS() {
  const [cbsArmed, setCbsArmed] = useState(false);
  const [cbsIn, setCbsIn] = useState(false);
  const flowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCbsArmed(true);
    const el = flowRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setCbsIn(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setCbsIn(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  const cbsClass = `${cbsArmed ? 'cbs-armed' : ''} ${cbsIn ? 'cbs-in' : ''}`.trim();

  return (
    <section id="cbs" className={`cx ${cbsClass}`} aria-labelledby="cbs-title">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes cxDrift {
          from { transform: translateX(-40px); }
          to { transform: translateX(40px); }
        }

        @keyframes cxBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: .55; }
        }

        @keyframes cxFlow {
          to { stroke-dashoffset: -16; }
        }

        @keyframes cxPop {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(.7); }
          70% { opacity: 1; transform: translate(-50%, -50%) scale(1.04); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        .cx {
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #FFFFFF 0%, #DDEBFA 8%, #8CBCEE 20%, #3B83D8 34%, #1A5DC3 50%, #124FB5 66%, #2E72CC 82%, #F6F9FC 100%);
          font-family: 'Inter Tight', 'Helvetica Neue', Arial, sans-serif;
        }
        .cx-box {
          position: relative;
          height: 880px;
        }
        .cx-stage {
          position: absolute;
          left: 50%;
          top: 0;
          width: 1240px;
          height: 880px;
          margin-left: -620px;
          transform-origin: 50% 0;
        }
        .cx-cloud {
          position: absolute;
          border-radius: 50%;
          background: #FFFFFF;
          filter: blur(34px);
          pointer-events: none;
        }
        .cx-cl-a {
          animation: cxDrift 34s ease-in-out infinite alternate;
        }
        .cx-cl-b {
          animation: cxDrift 42s ease-in-out infinite alternate-reverse;
        }
        .cx-veil {
          position: absolute;
          left: 50%;
          top: 440px;
          width: 760px;
          height: 480px;
          margin: -240px 0 0 -380px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(3, 38, 131, .4), rgba(3, 38, 131, 0) 70%);
          pointer-events: none;
        }
        .cx-line {
          position: absolute;
          left: -200px;
          right: -200px;
          top: 440px;
          height: 0;
          border-top: 1.5px dashed rgba(255, 255, 255, .55);
          -webkit-mask-image: linear-gradient(90deg, #000 0, #000 calc(50% - 320px), transparent calc(50% - 270px), transparent calc(50% + 270px), #000 calc(50% + 320px));
          mask-image: linear-gradient(90deg, #000 0, #000 calc(50% - 320px), transparent calc(50% - 270px), transparent calc(50% + 270px), #000 calc(50% + 320px));
        }
        .cx-dot {
          position: absolute;
          top: 440px;
          width: 9px;
          height: 9px;
          margin: -4.5px 0 0 -4.5px;
          border-radius: 50%;
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(3, 38, 131, .25);
        }
        .cx-ring {
          position: absolute;
          left: 50%;
          top: 440px;
          width: 1020px;
          height: 674px;
          margin: -337px 0 0 -510px;
          border-radius: 50%;
          border: 1.5px dashed rgba(255, 255, 255, .6);
        }
        .cx-badge {
          position: absolute;
          top: 440px;
          width: 58px;
          height: 58px;
          margin: -29px 0 0 -29px;
          border-radius: 50%;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 14px 28px -12px rgba(3, 38, 131, .55);
          z-index: 1;
        }
        .cx-badge i {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          border: 1.5px dashed rgba(255, 255, 255, .7);
          border-left-color: transparent;
          border-bottom-color: transparent;
          animation: spin 16s linear infinite;
        }
        .cx-badge-ic {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #52AFE5, #032683);
        }
        .cx-copy {
          position: absolute;
          left: 50%;
          top: 440px;
          width: 470px;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 2;
        }
        .cx-h {
          margin: 0;
          font-weight: 600;
          font-size: clamp(34px, 3.6vw, 46px);
          line-height: 1.08;
          letter-spacing: -0.04em;
          color: #FFFFFF;
          text-shadow: 0 2px 24px rgba(3, 38, 131, .25);
        }
        .cx-p {
          margin: 18px auto 0;
          max-width: 450px;
          text-wrap: pretty;
          font-size: 16px;
          line-height: 1.6;
          color: #FFFFFF;
        }
        .cx-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 26px;
          height: 48px;
          padding: 0 28px;
          border-radius: 12px;
          background: #06123A;
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 600;
          box-shadow: 0 16px 30px -14px rgba(3, 10, 40, .8), inset 0 1px 0 rgba(255, 255, 255, .18);
          transition: transform .25s ease, background-color .25s ease;
          text-decoration: none;
        }
        .cx-btn:hover {
          color: #FFFFFF;
          background: #032683;
          transform: translateY(-2px);
        }
        .cx-btn:focus-visible {
          outline: 2px solid #FFFFFF;
          outline-offset: 3px;
        }
        .cx-squash {
          position: absolute;
          left: 50%;
          top: 440px;
          width: 0;
          height: 0;
          transform: scaleY(.66);
          z-index: 3;
        }
        .cx-orbit {
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 0;
          animation: spin 120s linear infinite;
        }
        .cx-slot {
          position: absolute;
          left: 0;
          top: 0;
          transform: rotate(var(--a)) translateX(510px) rotate(calc(var(--a) * -1));
        }
        .cx-up {
          position: absolute;
          left: 0;
          top: 0;
          animation: spin 120s linear infinite reverse;
        }
        .cx-fix {
          position: absolute;
          left: 0;
          top: 0;
          transform: scaleY(1.51515);
        }
        .cx-card {
          position: absolute;
          left: 0;
          top: 0;
          width: 214px;
          transform: translate(-50%, -50%);
          padding: 14px 14px 14px;
          border-radius: 14px;
          background: #FFFFFF;
          box-shadow: 0 26px 50px -24px rgba(3, 20, 80, .55), 0 0 0 1px rgba(255, 255, 255, .9);
          color: #06123A;
          font-size: 12px;
          text-align: left;
          transition: box-shadow .3s ease;
        }
        .cx-orbit:hover, .cx-orbit:hover .cx-up {
          animation-play-state: paused;
        }
        .cx-card:hover {
          box-shadow: 0 34px 60px -24px rgba(3, 20, 80, .7), 0 0 0 2px #52AFE5;
        }
        .cx-hd {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .cx-ico {
          position: relative;
          flex: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #032683;
          box-shadow: 0 0 0 4px #E3F1FC, 0 4px 12px -4px rgba(0, 148, 211, .45);
        }
        .cx-ico:after {
          content: "";
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1px dashed #7FB8E6;
        }
        .cx-t {
          margin: 0;
          flex: 1;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #032683;
        }
        .cx-ar {
          flex: none;
          width: 24px;
          height: 24px;
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #F1F5FB;
          color: #32416A;
        }
        .cx-vis {
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px solid #EEF2F8;
        }
        .cx-m {
          margin: 8px 0 0;
          font-size: 11px;
          color: #6A789A;
        }
        .cx-k {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-size: 11px;
          color: #6A789A;
        }
        .cx-k b {
          font-size: 17px;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #06123A;
        }
        .cx-bar {
          margin-top: 8px;
          height: 5px;
          border-radius: 4px;
          background: #EAF0F7;
          overflow: hidden;
        }
        .cx-bar i {
          display: block;
          height: 100%;
          border-radius: 4px;
          background: linear-gradient(90deg, #0094D3, #032683);
        }
        .cx-avs {
          display: flex;
          align-items: center;
        }
        .cx-avs span {
          width: 26px;
          height: 26px;
          margin-left: -7px;
          border-radius: 50%;
          border: 2px solid #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9.5px;
          font-weight: 700;
          color: #FFFFFF;
        }
        .cx-avs span:first-child {
          margin-left: 0;
        }
        .cx-avs em {
          margin-left: 8px;
          font-style: normal;
          font-size: 11px;
          font-weight: 600;
          color: #06123A;
        }
        .cx-chip {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 3px 8px;
          border-radius: 999px;
          background: #DDF8EF;
          color: #0E8F6E;
          font-size: 10.5px;
          font-weight: 700;
        }
        .cx-seg {
          display: grid;
          grid-template-columns: 46fr 32fr 22fr;
          gap: 3px;
        }
        .cx-seg i {
          display: block;
          height: 6px;
          border-radius: 3px;
        }
        .cx-leg {
          margin-top: 8px;
          display: grid;
          grid-template-columns: repeat(3, auto);
          justify-content: space-between;
          font-size: 10.5px;
          color: #6A789A;
        }
        .cx-leg b {
          display: block;
          font-size: 12px;
          color: #06123A;
        }
        .cx-brs {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 4px;
        }
        .cx-brs span {
          height: 16px;
          border-radius: 4px;
          background: #E3F1FC;
        }
        .cx-brs span.on {
          background: linear-gradient(180deg, #52AFE5, #0548D5);
          animation: cxBlink 3.2s ease-in-out infinite;
        }
        .cx-chs {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .cx-chs span {
          padding: 3px 8px;
          border-radius: 6px;
          background: #EEF4FC;
          color: #032683;
          font-size: 10.5px;
          font-weight: 600;
        }
        .cx-spark {
          display: block;
          width: 100%;
          height: 30px;
          margin-top: 8px;
        }
        .cx-flow {
          stroke-dasharray: 4 4;
          animation: cxFlow 1.6s linear infinite;
        }
        .cx-steps {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          font-weight: 600;
          color: #6A789A;
        }
        .cx-steps span {
          flex: 1;
          text-align: center;
          padding: 4px 0;
          border-radius: 6px;
          background: #F1F4F9;
        }
        .cx-steps span.done {
          background: #E3F1FC;
          color: #032683;
        }
        .cx-steps span.cur {
          background: linear-gradient(90deg, #0094D3, #032683);
          color: #FFFFFF;
        }
        .cx-rails {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .cx-rails div {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #33405F;
        }
        .cx-rails b {
          font-weight: 600;
          color: #06123A;
        }
        .cbs-armed:not(.cbs-in) .cx-copy > * {
          opacity: 0;
          filter: blur(10px);
          transform: translateY(18px);
        }
        .cbs-armed:not(.cbs-in) .cx-card {
          opacity: 0;
          transform: translate(-50%, -50%) scale(.7);
        }
        .cbs-armed:not(.cbs-in) .cx-ring {
          opacity: 0;
          transform: scale(.85);
        }
        .cx-copy > * {
          transition: opacity .9s ease, filter .9s ease, transform 1s cubic-bezier(.2, .7, .2, 1);
        }
        .cx-copy > :nth-child(2) {
          transition-delay: .12s;
        }
        .cx-copy > :nth-child(3) {
          transition-delay: .24s;
        }
        .cx-ring {
          transition: opacity 1.2s ease, transform 1.4s cubic-bezier(.16, .84, .3, 1);
        }
        .cbs-in .cx-card {
          animation: cxPop .8s cubic-bezier(.2, .7, .2, 1) both;
          animation-delay: var(--d);
        }

        @media (max-width: 1300px), (max-height: 900px) {
          .cx-stage { transform: scale(.9); }
          .cx-box { height: 792px; }
        }
        @media (max-width: 1160px), (max-height: 820px) {
          .cx-stage { transform: scale(.8); }
          .cx-box { height: 704px; }
        }
        @media (max-width: 1030px), (max-height: 740px) {
          .cx-stage { transform: scale(.72); }
          .cx-box { height: 634px; }
        }
        @media (max-width: 900px) {
          .cx {
            background: linear-gradient(180deg, #FFFFFF 0, #9CC6F1 50px, #2F77D4 150px, #1656BC 40%, #124FB5 70%, #2E72CC 92%, #F6F9FC 100%);
          }
          .cx-box {
            height: auto;
          }
          .cx-stage {
            position: relative;
            left: auto;
            width: auto;
            height: auto;
            margin: 0;
            transform: none;
            padding: 130px 20px 110px;
          }
          .cx-ring, .cx-line, .cx-dot, .cx-badge {
            display: none;
          }
          .cx-copy {
            position: relative;
            left: auto;
            top: auto;
            width: auto;
            transform: none;
          }
          .cx-veil {
            top: 280px;
          }
          .cx-squash {
            position: relative;
            left: auto;
            top: auto;
            width: auto;
            height: auto;
            transform: none;
            margin-top: 52px;
          }
          .cx-orbit {
            position: relative;
            width: auto;
            height: auto;
            animation: none;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }
          .cx-slot, .cx-up, .cx-fix {
            position: static;
            transform: none;
            animation: none;
          }
          .cx-card {
            position: relative;
            transform: none;
            width: 100%;
          }
          .cx-up, .cx-fix {
            display: contents;
          }
          .cx-slot {
            display: flex;
          }
          .cx-slot > * > * > .cx-card {
            flex: 1;
          }
          .cbs-armed:not(.cbs-in) .cx-card {
            transform: scale(.9);
          }
          .cbs-in .cx-card {
            animation: none;
          }
          .cx-card {
            transition: opacity .7s ease, transform .7s cubic-bezier(.2, .7, .2, 1), box-shadow .3s ease;
          }
        }
        @media (max-width: 560px) {
          .cx-orbit {
            grid-template-columns: minmax(0, 1fr);
            justify-items: center;
          }
          .cx-slot {
            width: 100%;
            max-width: 340px;
          }
        }
      `}</style>

      <div className="cx-box">
        {/* clouds */}
        <span
          className="cx-cloud cx-cl-a"
          aria-hidden="true"
          style={{ left: '-6%', top: '70px', width: '46%', height: '150px', opacity: 0.55 }}
        />
        <span
          className="cx-cloud cx-cl-b"
          aria-hidden="true"
          style={{ right: '-8%', top: '120px', width: '40%', height: '130px', opacity: 0.45 }}
        />
        <span
          className="cx-cloud cx-cl-b"
          aria-hidden="true"
          style={{ left: '-10%', bottom: '40px', width: '52%', height: '230px', opacity: 0.6 }}
        />
        <span
          className="cx-cloud cx-cl-a"
          aria-hidden="true"
          style={{ left: '28%', bottom: '-40px', width: '50%', height: '220px', opacity: 0.65 }}
        />
        <span
          className="cx-cloud cx-cl-b"
          aria-hidden="true"
          style={{ right: '-10%', bottom: '60px', width: '44%', height: '210px', opacity: 0.55 }}
        />

        <div className="cx-stage">
          <span className="cx-veil" aria-hidden="true" />
          <span className="cx-line" aria-hidden="true" />
          <span className="cx-ring" aria-hidden="true" />
          <span className="cx-dot" aria-hidden="true" style={{ left: '40px' }} />
          <span className="cx-dot" aria-hidden="true" style={{ left: '190px' }} />
          <span className="cx-dot" aria-hidden="true" style={{ left: '1050px' }} />
          <span className="cx-dot" aria-hidden="true" style={{ left: '1200px' }} />

          <span className="cx-badge" aria-hidden="true" style={{ left: '110px' }}>
            <i />
            <span className="cx-badge-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5" />
              </svg>
            </span>
          </span>

          <span className="cx-badge" aria-hidden="true" style={{ left: '1130px' }}>
            <i />
            <span className="cx-badge-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 10l9-6 9 6M5 10v9M19 10v9M9 10v9M15 10v9M3 21h18" />
              </svg>
            </span>
          </span>

          <div className="cx-copy">
            <h2 id="cbs-title" className="cx-h">
              Custodian CBS Built for<br />Everyday Banking
            </h2>
            <p className="cx-p">
              LIST Software provides a Custodian Core Banking System, bringing customer management, accounts, deposits, lending, transactions, accounting, and branch operations together on one operational foundation.
            </p>
            <div>
              <a className="cx-btn" href="#contact">Get Started</a>
            </div>
          </div>

          <div className="cx-squash">
            <div id="cbs-flow" ref={flowRef} className="cx-orbit" aria-label="Custodian CBS modules">
              {/* Card 1: Customers */}
              <div className="cx-slot" style={{ '--a': '-90deg' } as React.CSSProperties}>
                <div className="cx-up">
                  <div className="cx-fix">
                    <div className="cx-card" style={{ '--d': '0.2s' } as React.CSSProperties}>
                      <div className="cx-hd">
                        <span className="cx-ico" aria-hidden="true">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="8" r="3.5" />
                            <path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5" />
                            <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.6c2 .8 3.2 2.6 3.6 5.4" />
                          </svg>
                        </span>
                        <p className="cx-t">Customers</p>
                        <span className="cx-ar" aria-hidden="true">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                            <path d="M7 17L17 7M9 7h8v8" />
                          </svg>
                        </span>
                      </div>
                      <div className="cx-vis">
                        <div className="cx-k">
                          <span className="cx-avs">
                            <span style={{ background: '#0094D3' }}>RM</span>
                            <span style={{ background: '#032683' }}>SI</span>
                            <span style={{ background: '#14A37F' }}>AK</span>
                            <em>+12k profiles</em>
                          </span>
                        </div>
                        <div className="cx-k" style={{ marginTop: '10px' }}>
                          <span>Re-KYC complete</span>
                          <span className="cx-chip">96%</span>
                        </div>
                        <div className="cx-bar">
                          <i style={{ width: '96%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Accounts */}
              <div className="cx-slot" style={{ '--a': '-30deg' } as React.CSSProperties}>
                <div className="cx-up">
                  <div className="cx-fix">
                    <div className="cx-card" style={{ '--d': '0.3s' } as React.CSSProperties}>
                      <div className="cx-hd">
                        <span className="cx-ico" aria-hidden="true">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 7h15a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7z" />
                            <path d="M4 7l12-3v3" />
                            <path d="M15 13.5h2" />
                          </svg>
                        </span>
                        <p className="cx-t">Accounts</p>
                        <span className="cx-ar" aria-hidden="true">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                            <path d="M7 17L17 7M9 7h8v8" />
                          </svg>
                        </span>
                      </div>
                      <div className="cx-vis">
                        <div className="cx-seg">
                          <i style={{ background: '#0094D3' }} />
                          <i style={{ background: '#032683' }} />
                          <i style={{ background: '#56E6BD' }} />
                        </div>
                        <div className="cx-leg">
                          <span><b>46%</b>Savings</span>
                          <span><b>32%</b>Current</span>
                          <span><b>22%</b>Term deposits</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Branches */}
              <div className="cx-slot" style={{ '--a': '30deg' } as React.CSSProperties}>
                <div className="cx-up">
                  <div className="cx-fix">
                    <div className="cx-card" style={{ '--d': '0.4s' } as React.CSSProperties}>
                      <div className="cx-hd">
                        <span className="cx-ico" aria-hidden="true">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" />
                            <path d="M15 9h3a1 1 0 0 1 1 1v11M3 21h18M9 8h2M9 12h2M10 21v-4h1" />
                          </svg>
                        </span>
                        <p className="cx-t">Branches</p>
                        <span className="cx-ar" aria-hidden="true">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                            <path d="M7 17L17 7M9 7h8v8" />
                          </svg>
                        </span>
                      </div>
                      <div className="cx-vis">
                        <div className="cx-k" style={{ marginBottom: '8px' }}>
                          <span>Connected</span>
                          <b>800+</b>
                        </div>
                        <div className="cx-brs">
                          <span className="on" style={{ animationDelay: '0.0s' }} />
                          <span className="on" style={{ animationDelay: '0.2s' }} />
                          <span className="on" style={{ animationDelay: '0.4s' }} />
                          <span className="" style={{ animationDelay: '0.6s' }} />
                          <span className="on" style={{ animationDelay: '0.8s' }} />
                          <span className="on" style={{ animationDelay: '1.0s' }} />
                          <span className="on" style={{ animationDelay: '1.2s' }} />
                          <span className="" style={{ animationDelay: '1.4s' }} />
                          <span className="on" style={{ animationDelay: '1.6s' }} />
                          <span className="on" style={{ animationDelay: '1.8s' }} />
                          <span className="" style={{ animationDelay: '2.0s' }} />
                          <span className="on" style={{ animationDelay: '2.2s' }} />
                          <span className="on" style={{ animationDelay: '2.4s' }} />
                          <span className="on" style={{ animationDelay: '2.6s' }} />
                          <span className="" style={{ animationDelay: '2.8s' }} />
                          <span className="on" style={{ animationDelay: '3.0s' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Digital & APIs */}
              <div className="cx-slot" style={{ '--a': '90deg' } as React.CSSProperties}>
                <div className="cx-up">
                  <div className="cx-fix">
                    <div className="cx-card" style={{ '--d': '0.5s' } as React.CSSProperties}>
                      <div className="cx-hd">
                        <span className="cx-ico" aria-hidden="true">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 8.5a4.5 4.5 0 0 1-1 9" />
                            <path d="M12 12v8M9 15l3-3 3 3" />
                          </svg>
                        </span>
                        <p className="cx-t">Digital &amp; APIs</p>
                        <span className="cx-ar" aria-hidden="true">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                            <path d="M7 17L17 7M9 7h8v8" />
                          </svg>
                        </span>
                      </div>
                      <div className="cx-vis">
                        <div className="cx-chs">
                          <span>Mobile</span>
                          <span>Internet</span>
                          <span>WhatsApp</span>
                          <span>e-Passbook</span>
                        </div>
                        <svg className="cx-spark" viewBox="0 0 180 30" preserveAspectRatio="none" aria-hidden="true" fill="none">
                          <path d="M0 24 L20 20 L40 22 L60 12 L80 16 L100 8 L120 12 L140 5 L160 9 L180 3" stroke="#0094D3" strokeWidth="2" className="cx-flow" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5: Lending */}
              <div className="cx-slot" style={{ '--a': '150deg' } as React.CSSProperties}>
                <div className="cx-up">
                  <div className="cx-fix">
                    <div className="cx-card" style={{ '--d': '0.6s' } as React.CSSProperties}>
                      <div className="cx-hd">
                        <span className="cx-ico" aria-hidden="true">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="15.5" cy="6.5" r="3.5" />
                            <path d="M15.5 5v3M14 6.5h3" />
                            <path d="M3 14h3l4 1.8h3.5a1.7 1.7 0 0 1 0 3.4H10" />
                            <path d="M13.5 19.2l5.3-2.6a1.6 1.6 0 0 1 1.6 2.8L14 22H6" />
                            <path d="M3 14v8" />
                          </svg>
                        </span>
                        <p className="cx-t">Lending</p>
                        <span className="cx-ar" aria-hidden="true">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                            <path d="M7 17L17 7M9 7h8v8" />
                          </svg>
                        </span>
                      </div>
                      <div className="cx-vis">
                        <div className="cx-steps">
                          <span className="done">Applied</span>
                          <span className="cur">Appraisal</span>
                          <span>Sanction</span>
                        </div>
                        <div className="cx-k" style={{ marginTop: '10px' }}>
                          <span>Awaiting sanction</span>
                          <b>24</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 6: Transactions */}
              <div className="cx-slot" style={{ '--a': '210deg' } as React.CSSProperties}>
                <div className="cx-up">
                  <div className="cx-fix">
                    <div className="cx-card" style={{ '--d': '0.7s' } as React.CSSProperties}>
                      <div className="cx-hd">
                        <span className="cx-ico" aria-hidden="true">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 8h15l-3.5-3.5M20 16H5l3.5 3.5" />
                          </svg>
                        </span>
                        <p className="cx-t">Transactions</p>
                        <span className="cx-ar" aria-hidden="true">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                            <path d="M7 17L17 7M9 7h8v8" />
                          </svg>
                        </span>
                      </div>
                      <div className="cx-vis">
                        <div className="cx-rails">
                          <div><span>RTGS</span><b>312</b></div>
                          <div><span>EFT</span><b>1,840</b></div>
                          <div><span>IMPS</span><b>10,688</b></div>
                        </div>
                        <div className="cx-bar">
                          <i style={{ width: '72%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { CustodianCBS, CustodianCBS as Custodiancbs };

