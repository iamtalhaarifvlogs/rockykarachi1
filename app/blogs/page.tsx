import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Luxury Lifestyle Guides | Rocky Escorts Karachi',
  description:
    'Explore expert guides on hotel outcalls, VIP companionship, and discreet lifestyle updates across DHA, Clifton, and Bahria Town in Karachi.',
  alternates: {
    canonical: 'https://rockykarachi1.vercel.app/blogs',
  },
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tagBadge: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'guide-to-hotel-outcalls-karachi',
    title: 'A Gentleman’s Guide to Secure Hotel Outcalls in Karachi',
    excerpt:
      'Everything you need to know about discreet companion arrangements across 5-star hotels, DHA Phase 8, and Clifton residences.',
    category: 'Hotel Outcalls',
    date: 'November 15, 2026',
    readTime: '4 min read',
    tagBadge: '5-STAR HOTELS & DHA',
  },
  {
    slug: 'discretion-and-privacy-verified-companions',
    title: 'Why Total Discretion is Essential When Booking Karachi Escorts',
    excerpt:
      'Discover how top verified agencies safeguard client privacy, enforce data confidentiality, and guarantee 100% genuine profiles.',
    category: 'Privacy & Security',
    date: 'November 11, 2026',
    readTime: '3 min read',
    tagBadge: '100% VERIFIED PROFILES',
  },
  {
    slug: 'vip-companionship-dha-clifton-bahria-town',
    title: 'Navigating VIP Companionship Across DHA, Clifton & Bahria Town',
    excerpt:
      'A curated overview for clients seeking elite independent models, young university companions, and 24/7 outcall service in Karachi.',
    category: 'VIP Lifestyle',
    date: 'November 06, 2026',
    readTime: '5 min read',
    tagBadge: '24/7 VIP DISPATCH',
  },
  {
    slug: 'transparent-rates-booking-call-girls-karachi',
    title: 'Transparent Rates & Booking Guide for Karachi Call Girls',
    excerpt:
      'Clear breakdown of short-time vs. full-night bookings, rates, and direct WhatsApp confirmation with zero hidden charges.',
    category: 'Booking Guide',
    date: 'October 30, 2026',
    readTime: '4 min read',
    tagBadge: 'UPFRONT RATES',
  },
];

export default function BlogPageIndex() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        backgroundImage:
          'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.1) 0%, rgba(10, 10, 10, 1) 60%)',
        color: '#f5f5f4',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: '64px 20px 96px',
      }}
    >
      <style>{`
        .rocky-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .rocky-badge {
          display: inline-block;
          color: #d4af37;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          margin-bottom: 16px;
        }
        .rocky-hero-title {
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          margin: 0 0 14px;
          color: #ffffff;
        }
        .rocky-gold-divider {
          width: 56px;
          height: 3px;
          background: #d4af37;
          margin: 0 auto 18px;
          border-radius: 2px;
        }
        .rocky-hero-subtitle {
          color: #a8a29e;
          font-size: 16px;
          line-height: 1.6;
          max-width: 620px;
          margin: 0 auto;
        }
        .rocky-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 48px;
        }
        .rocky-card {
          background: linear-gradient(180deg, rgba(24, 24, 24, 0.95) 0%, rgba(14, 14, 14, 0.98) 100%);
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: 14px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.2s ease, border-color 0.2s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        .rocky-card:hover {
          transform: translateY(-3px);
          border-color: rgba(212, 175, 55, 0.6);
        }
        .rocky-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 16px;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.18);
          padding: 10px 14px;
          border-radius: 8px;
        }
        .rocky-cat {
          color: #d4af37;
          font-size: 11.5px;
          font-weight: 700;
          text-transform: uppercase;
        }
        .rocky-tag {
          color: #a8a29e;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.06em;
        }
        .rocky-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #78716c;
          margin-bottom: 10px;
        }
        .rocky-card-title {
          font-size: 20px;
          font-weight: 700;
          line-height: 1.35;
          color: #ffffff;
          margin: 0 0 10px;
        }
        .rocky-card-excerpt {
          font-size: 14px;
          line-height: 1.6;
          color: #b8b2a6;
          margin: 0 0 20px;
        }
        .rocky-read-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #d4af37;
          font-weight: 700;
          font-size: 13.5px;
          text-decoration: none;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .rocky-cta-box {
          margin-top: 60px;
          background: linear-gradient(145deg, rgba(22, 22, 22, 0.98), rgba(12, 12, 12, 0.99));
          border: 1px solid rgba(212, 175, 55, 0.35);
          border-radius: 16px;
          padding: 36px 20px;
          text-align: center;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
        }
        .rocky-btn-group {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }
        .rocky-wa-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background-color: #25D366;
          color: #ffffff;
          font-weight: 700;
          font-size: 14px;
          padding: 13px 26px;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(37, 211, 102, 0.25);
        }
        .rocky-call-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background-color: #d4af37;
          color: #0a0a0a;
          font-weight: 700;
          font-size: 14px;
          padding: 13px 26px;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(212, 175, 55, 0.25);
        }
      `}</style>

      <div className="rocky-container">
        {/* Header Section */}
        <header style={{ textAlign: 'center', marginBottom: '20px' }}>
          <span className="rocky-badge">ROCKY ESCORTS KARACHI • INSIGHTS &amp; GUIDES</span>
          <h1 className="rocky-hero-title">
            Karachi Escorts <span style={{ color: '#d4af37' }}>Lifestyle &amp; Guides</span>
          </h1>
          <div className="rocky-gold-divider" />
          <p className="rocky-hero-subtitle">
            Verified information, hotel outcall tips, and discreet booking insights across DHA, Clifton,
            and Bahria Town[span_1](start_span)[span_1](end_span).
          </p>
        </header>

        {/* Blog Cards Grid */}
        <section className="rocky-grid" aria-label="Blog Articles">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rocky-card">
              <div>
                <div className="rocky-card-header">
                  <span className="rocky-cat">{post.category}</span>
                  <span className="rocky-tag">{post.tagBadge}</span>
                </div>

                <div className="rocky-meta">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="rocky-card-title">
                  <Link
                    href={`/blogs/${post.slug}`}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="rocky-card-excerpt">{post.excerpt}</p>
              </div>

              <Link href={`/blogs/${post.slug}`} className="rocky-read-link">
                <span>Read Full Article</span>
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </section>

        {/* Bottom CTA matching site styling */}
        <section className="rocky-cta-box">
          <span className="rocky-badge" style={{ marginBottom: '10px' }}>
            AVAILABLE 24/7 • FAST 30-MIN DISPATCH[span_2](start_span)[span_2](end_span)
          </span>
          <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', margin: '0 0 10px' }}>
            Book Verified Call Girls in Karachi Today
          </h3>
          <p
            style={{
              color: '#b8b2a6',
              maxWidth: '540px',
              margin: '0 auto',
              fontSize: '14.5px',
              lineHeight: 1.5,
            }}
          >
            Connect instantly on WhatsApp or direct call for real profile verification and rapid outcalls[span_3](start_span)[span_3](end_span).
          </p>

          <div className="rocky-btn-group">
            <a
              href="https://wa.me/923708540579"
              target="_blank"
              rel="noopener noreferrer"
              className="rocky-wa-btn"
            >
              WhatsApp 03708540579[span_4](start_span)[span_4](end_span)
            </a>
            <a href="tel:+923708540579" className="rocky-call-btn">
              Call Now[span_5](start_span)[span_5](end_span)
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

