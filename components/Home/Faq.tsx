'use client';

import React, { useEffect, useRef, useState } from 'react';

interface FaqItem {
  n: string;
  q: string;
  a: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    n: '01',
    q: 'Can LIST Software integrate with our existing banking systems?',
    a: 'Yes. The solution supports integration with existing banking applications, payment systems, digital channels, and third-party services through APIs, middleware, and interfaces.',
  },
  {
    n: '02',
    q: 'Can the platform be configured around our business requirements?',
    a: 'Yes. The platform provides modular capabilities that align with your operational processes, business needs, technology environment, and implementation priorities.',
  },
  {
    n: '03',
    q: 'Can the solution support our growth and changing requirements?',
    a: 'Yes. The technology is designed to accommodate evolving needs across transaction volumes, branches, digital channels, and functional requirements.',
  },
  {
    n: '04',
    q: 'How can the platform support our operational transformation?',
    a: 'The solution provides capabilities that help modernize banking workflows, strengthen operational processes, and introduce new digital capabilities while aligning with your organisation’s technology and business priorities.',
  },
  {
    n: '05',
    q: 'What should we consider when evaluating the solution?',
    a: 'Key considerations include functional coverage, scalability, deployment approach, technology requirements, and the areas where you want to enhance your banking capabilities.',
  },
  {
    n: '06',
    q: 'How can we discuss our specific requirements?',
    a: 'You can connect with the team to discuss your business objectives, operational requirements, technology environment, and potential solution approach.',
  },
];

export default function Faq() {
  const [fq, setFq] = useState<number>(0);
  const [fqArmed, setFqArmed] = useState(false);
  const [fqIn, setFqIn] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFqArmed(true);
    const el = listRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setFqIn(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setFqIn(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleToggle = (index: number) => {
    setFq((prev) => (prev === index ? -1 : index));
  };

  const fqClass = `${fqArmed ? 'fq-armed' : ''} ${fqIn ? 'fq-in' : ''}`.trim();

  return (
    <section id="faq" className={`of ${fqClass}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

        @keyframes tcRv {
          to {
            background-position: 0 0;
          }
        }

        @keyframes ofIn {
          from {
            opacity: 0;
            transform: translateY(26px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        .of {
          position: relative;
          background: #FFFFFF;
          padding: 120px 0 110px;
          font-family: 'Inter Tight', 'Helvetica Neue', Arial, sans-serif;
        }

        .of-h {
          margin: 0;
          font-weight: 600;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.1;
          letter-spacing: -0.035em;
          background: linear-gradient(90deg, #0A1330 0 50%, #B8C3D6 50% 100%);
          background-size: 200% 100%;
          background-position: 0 0;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .fq-armed .of-h {
          background-position: 100% 0;
        }

        .fq-in .of-h {
          animation: tcRv 1.6s cubic-bezier(.4, 0, .2, 1) both;
        }

        .of-list {
          margin-top: 44px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          text-align: left;
        }

        .of-item {
          border-radius: 14px;
          background: #EEF4FC;
          transition: background .45s ease, box-shadow .45s ease, transform .35s ease, opacity .7s ease;
        }

        .of-item:hover {
          transform: translateY(-2px);
        }

        .of-item.on {
          background: linear-gradient(120deg, #52AFE5 0%, #0548D5 100%);
          box-shadow: 0 24px 44px -24px rgba(5, 72, 213, .7);
        }

        .of-q {
          width: 100%;
          min-height: 58px;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: none;
          border: 0;
          cursor: pointer;
          text-align: left;
          font: inherit;
          color: #0A1330;
        }

        .of-n {
          flex: none;
          font-size: 13px;
          font-weight: 600;
          color: #7584A6;
          font-variant-numeric: tabular-nums;
          transition: color .3s ease;
        }

        .of-qt {
          flex: 1;
          font-size: 15.5px;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .of-ch {
          flex: none;
          color: #32416A;
          transition: transform .45s cubic-bezier(.2, .7, .2, 1), color .3s ease;
        }

        .of-item.on .of-q,
        .of-item.on .of-n,
        .of-item.on .of-ch {
          color: #FFFFFF;
        }

        .of-item.on .of-ch {
          transform: rotate(180deg);
        }

        .of-a {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .5s cubic-bezier(.2, .7, .2, 1);
        }

        .of-a > div {
          overflow: hidden;
        }

        .of-a p {
          margin: 0;
          padding: 0 48px 20px 50px;
          font-size: 14.5px;
          line-height: 1.65;
          color: rgba(255, 255, 255, .92);
          opacity: 0;
          transition: opacity .4s ease;
        }

        .of-item.on .of-a {
          grid-template-rows: 1fr;
        }

        .of-item.on .of-a p {
          opacity: 1;
          transition-delay: .15s;
        }

        .fq-armed:not(.fq-in) .of-item {
          opacity: 0;
          transform: translateY(26px);
        }

        .fq-in .of-item {
          animation: ofIn .7s cubic-bezier(.2, .7, .2, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .fq-armed:not(.fq-in) .of-item {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
          .fq-armed .of-h {
            background-position: 0 0 !important;
            animation: none !important;
          }
          .fq-in .of-item {
            animation: none !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 28px', textAlign: 'center' }}>
        <h2 className="of-h">Frequently Asked Questions</h2>
        <p style={{ margin: '16px auto 0', maxWidth: '560px', fontSize: '16px', lineHeight: 1.6, color: '#5B6785' }}>
          Everything institutions usually ask before moving their core banking to LIST.
        </p>

        <div id="fq-list" ref={listRef} className="of-list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = fq === index;
            return (
              <div
                key={item.n}
                className={`of-item ${isOpen ? 'on' : ''}`}
                style={{ animationDelay: `${(0.3 + index * 0.08).toFixed(2)}s` }}
              >
                <button
                  type="button"
                  className="of-q"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="of-n">{item.n}</span>
                  <span className="of-qt">{item.q}</span>
                  <svg
                    className="of-ch"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className="of-a">
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Faq, Faq as FAQ, Faq as FAQPage };

