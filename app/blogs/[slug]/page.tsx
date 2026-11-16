import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

interface BlogPostData {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  sections: BlogSection[];
}

const blogDatabase: Record<string, BlogPostData> = {
  'guide-to-hotel-outcalls-karachi': {
    title: 'A Gentleman’s Guide to Secure Hotel Outcalls in Karachi',
    description:
      'Everything you need to know about discreet companion arrangements across 5-star hotels, DHA Phase 8, and Clifton residences.',
    category: 'Hotel Outcalls',
    date: 'November 15, 2026',
    readTime: '4 min read',
    sections: [
      {
        paragraphs: [
          'When staying at top establishments like Pearl Continental Hotel, Marriott, Avari Towers, or luxury apartments in DHA and Clifton, finding dependable and discrete companionship is essential for visiting guests[span_6](start_span)[span_6](end_span).',
          'Rocky Escorts Karachi provides professional 24/7 outcall service[span_7](start_span)[span_7](end_span), ensuring prompt arrivals and absolute privacy for your stay.',
        ],
      },
      {
        heading: '1. 100% Real, Verified Profiles',
        paragraphs: [
          'Transparency matters. Every profile published on Rocky Escorts Karachi features genuine, verified photos so you receive the exact companion you choose[span_8](start_span)[span_8](end_span).',
        ],
      },
      {
        heading: '2. Simple WhatsApp Booking & Fast Dispatch',
        paragraphs: [
          'Simply connect via WhatsApp at 03708540579[span_9](start_span)[span_9](end_span), share your location (DHA, Clifton, Bahria Town, or hotel name)[span_10](start_span)[span_10](end_span), and get instant confirmation with rapid dispatch within 30 to 45 minutes.',
        ],
      },
    ],
  },
  'discretion-and-privacy-verified-companions': {
    title: 'Why Total Discretion is Essential When Booking Karachi Escorts',
    description:
      'Discover how top verified agencies safeguard client privacy, enforce data confidentiality, and guarantee 100% genuine profiles.',
    category: 'Privacy & Security',
    date: 'November 11, 2026',
    readTime: '3 min read',
    sections: [
      {
        paragraphs: [
          'Client confidentiality is our primary commitment. Whether you are a local executive or an international visitor, your privacy is strictly protected under our secure protocols[span_11](start_span)[span_11](end_span).',
        ],
      },
      {
        heading: 'Transparent Pricing & No Hidden Fees',
        paragraphs: [
          'We maintain clear, transparent rates starting from short-time visits (PKR 30,000 – 45,000 for college/young girls) to full-night companion bookings[span_12](start_span)[span_12](end_span), confirmed instantly over WhatsApp with zero surprises.',
        ],
      },
    ],
  },
  'vip-companionship-dha-clifton-bahria-town': {
    title: 'Navigating VIP Companionship Across DHA, Clifton & Bahria Town',
    description:
      'A curated overview for clients seeking elite independent models, young university companions, and 24/7 outcall service in Karachi.',
    category: 'VIP Lifestyle',
    date: 'November 06, 2026',
    readTime: '5 min read',
    sections: [
      {
        paragraphs: [
          'Karachi’s prime districts—including DHA Phases 1 through 8, Clifton Block blocks, PECHS, and Bahria Town—are fully covered by our rapid outcall network[span_13](start_span)[span_13](end_span).',
        ],
      },
      {
        heading: 'Wide Selection of Elite Categories',
        paragraphs: [
          'From VIP model escorts and independent call girls to GFE companions and mature profiles[span_14](start_span)[span_14](end_span), our roster caters to every preference with uncompromising standards of elegance and respect.',
        ],
      },
    ],
  },
  'transparent-rates-booking-call-girls-karachi': {
    title: 'Transparent Rates & Booking Guide for Karachi Call Girls',
    description:
      'Clear breakdown of short-time vs. full-night bookings, rates, and direct WhatsApp confirmation with zero hidden charges.',
    category: 'Booking Guide',
    date: 'October 30, 2026',
    readTime: '4 min read',
    sections: [
      {
        paragraphs: [
          'Booking call girls in Karachi should be straightforward and secure[span_15](start_span)[span_15](end_span). Rocky Escorts Karachi ensures verified profiles[span_16](start_span)[span_16](end_span) and clear pricing guidelines before any dispatch takes place.',
        ],
      },
      {
        heading: 'How to Reach Us 24/7',
        paragraphs: [
          'Call or message us directly on WhatsApp at 03708540579 to check model availability tonight[span_17](start_span)[span_17](end_span).',
        ],
      },
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogDatabase[slug];

  if (!post) {
    return {
      title: 'Article Not Found | Rocky Escorts Karachi',
    };
  }

  return {
    title: `${post.title} | Rocky Escorts Karachi`,
    description: post.description,
    alternates: {
      canonical: `https://rockykarachi1.vercel.app/blogs/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogDatabase[slug];

  if (!post) {
    notFound();
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        backgroundImage:
          'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.08) 0%, rgba(10, 10, 10, 1) 50%)',
        color: '#f5f5f4',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: '56px 20px 96px',
      }}
    >
      <style>{`
        .rocky-article-wrap {
          max-width: 780px;
          margin: 0 auto;
        }
        .rocky-back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #d4af37;
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 600;
          margin-bottom: 24px;
          padding: 8px 14px;
          border-radius: 8px;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.25);
        }
        .rocky-article-card {
          background: linear-gradient(180deg, rgba(22, 22, 22, 0.95) 0%, rgba(12, 12, 12, 0.99) 100%);
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: 16px;
          padding: clamp(24px, 4vw, 44px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
        }
        .rocky-article-title {
          font-size: clamp(1.65rem, 3.8vw, 2.4rem);
          font-weight: 800;
          line-height: 1.2;
          color: #ffffff;
          margin: 14px 0;
        }
        .rocky-article-lead {
          font-size: 16.5px;
          line-height: 1.65;
          color: #d6d3d1;
          padding-bottom: 22px;
          margin-bottom: 26px;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }
        .rocky-section-h {
          font-size: 20px;
          font-weight: 700;
          color: #d4af37;
          margin: 28px 0 10px;
        }
        .rocky-p {
          font-size: 15.5px;
          line-height: 1.7;
          color: #b8b2a6;
          margin: 0 0 16px;
        }
      `}</style>

      <div className="rocky-article-wrap">
        <Link href="/blogs" className="rocky-back-link">
          <span aria-hidden="true">←</span>
          <span>Back to All Articles</span>
        </Link>

        <article className="rocky-article-card">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px',
              fontSize: '12.5px',
              color: '#a8a29e',
            }}
          >
            <span
              style={{
                color: '#d4af37',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                background: 'rgba(212, 175, 55, 0.12)',
                padding: '4px 10px',
                borderRadius: '999px',
                border: '1px solid rgba(212, 175, 55, 0.3)',
              }}
            >
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="rocky-article-title">{post.title}</h1>
          <p className="rocky-article-lead">{post.description}</p>

          <div>
            {post.sections.map((section, idx) => (
              <section key={idx}>
                {section.heading && <h2 className="rocky-section-h">{section.heading}</h2>}
                {section.paragraphs.map((text, pIdx) => (
                  <p key={pIdx} className="rocky-p">
                    {text}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Embedded WhatsApp / Call Action Strip */}
          <div
            style={{
              marginTop: '36px',
              padding: '24px',
              borderRadius: '12px',
              background: 'rgba(10, 10, 10, 0.9)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
            }}
          >
            <div style={{ maxWidth: '420px' }}>
              <h3 style={{ margin: '0 0 6px', fontSize: '18px', fontWeight: 700, color: '#fff' }}>
                Book Verified Escorts 24/7
              </h3>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#a8a29e', lineHeight: 1.4 }}>
                Instant confirmation on WhatsApp 03708540579 across DHA, Clifton &amp; Hotels
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/923708540579"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  padding: '11px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                }}
              >
                WhatsApp
              </a>
              <a
                href="tel:+923708540579"
                style={{
                  backgroundColor: '#d4af37',
                  color: '#0a0a0a',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  padding: '11px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                }}
              >
                Call Now
              </a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

