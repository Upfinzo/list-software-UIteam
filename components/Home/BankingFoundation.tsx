'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Images } from '@/assets/images/images';
import './BankingFoundation.css';

const HEADING_WORDS = ['Build', 'on', 'a', 'Stronger', 'Banking', 'Foundation'];
const SIDE_LINKS = ['Dashboard', 'Customers', 'Accounts', 'Transactions', 'Lending', 'Compliance', 'Branches'];
const BAR_HEIGHTS = [40, 62, 48, 86, 58, 72, 44];
const ACTIVITY: [string, string][] = [
  ['RTGS settled', '₹2,50,000'],
  ['Loan EMI', '₹18,450'],
  ['NACH bulk credit', '₹4,82,500'],
];

export default function BankingFoundation() {
  const [ocArmed, setOcArmed] = useState(false);
  const [ocIn, setOcIn] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    setOcArmed(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setOcIn(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const ocClass = `${ocArmed ? 'oc-armed' : ''} ${ocIn ? 'oc-in' : ''}`.trim();

  return (
    <section id="cta" className={`oc ${ocClass}`}>
      <div className="oc-intro">
        <h2 className="oc-h">
          {HEADING_WORDS.map((w, i) => (
            <span key={w}>
              <span className="oc-w" style={{ '--i': i } as CSSProperties}>{w}</span>
              {i < HEADING_WORDS.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h2>
        <p className="oc-p">
          Whether you are strengthening your core banking environment, expanding digital channels, connecting payment
          systems, or modernizing operations, LIST Software brings the technology together around a proven banking
          foundation.
        </p>
        <div className="oc-btns">
          <a className="oc-btn oc-b1" href="#contact">Request a Demo</a>
          <a className="oc-btn oc-b2" href="#contact">Talk to Specialist</a>
        </div>
      </div>

      <div id="oc-stage" ref={stageRef} className="oc-stage">
        <span className="oc-glow" aria-hidden="true" />
        <div className="oc-frame">
          <div className="oc-dash">
            <div className="oc-side">
              <img className="oc-logo" src={Images.common.logo} alt="" aria-hidden="true" />
              {SIDE_LINKS.map((l, i) => (
                <span key={l} className={i === 0 ? 'on' : undefined}>{l}</span>
              ))}
            </div>
            <div className="oc-main">
              <div className="oc-top">
                <b>Hi, Welcome back.</b>
                <span className="oc-search">Search accounts</span>
              </div>
              <div className="oc-cards">
                <div className="oc-card">
                  <p>Total deposits</p>
                  <b>₹38,07,560</b>
                  <span className="oc-up">+1.3%</span>
                  <svg viewBox="0 0 200 50" preserveAspectRatio="none" aria-hidden="true">
                    <path className="oc-line" pathLength={1} d="M0 42 C30 40 40 30 70 32 S110 18 140 20 S180 6 200 4" stroke="#0548D5" strokeWidth={2.5} fill="none" />
                  </svg>
                </div>
                <div className="oc-card">
                  <p>Loans disbursed</p>
                  <b>₹9,60,000</b>
                  <span className="oc-up">+2.4%</span>
                  <div className="oc-split">
                    <i style={{ width: '50%', background: '#032E89' }} />
                    <i style={{ width: '30%', background: '#52AFE5' }} />
                    <i style={{ width: '20%', background: '#56E6BD' }} />
                  </div>
                </div>
              </div>
              <div className="oc-cards">
                <div className="oc-card">
                  <p>Transactions this week</p>
                  <div className="oc-bars">
                    {BAR_HEIGHTS.map((h, i) => (
                      <i key={i} style={{ height: `${h}%` }} className={i === 3 ? 'hl' : undefined} />
                    ))}
                  </div>
                </div>
                <div className="oc-card">
                  <p>Recent activity</p>
                  {ACTIVITY.map(([label, amount]) => (
                    <div key={label} className="oc-row">
                      <span>{label}</span>
                      <b>{amount}</b>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
