import Hero from '@/sections/Hero/Hero';
import React from 'react';
import './blog.css';
import { blogsShort } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Appliance Repair Tips & News | Pro Appliance Express',
  description:
    'Explore expert appliance repair tips, maintenance advice, and the latest updates from Pro Appliance Express. Stay informed and keep your home running smoothly!',
  keywords: [
    'Appliance repair blog',
    'Home appliance maintenance',
    'DIY appliance tips',
    'Refrigerator repair advice',
    'Washer and dryer care',
    'Oven troubleshooting tips',
    'Appliance news Boston',
    'Pro Appliance Express blog',
  ],
  openGraph: {
    title: 'Blog | Appliance Repair Tips & News',
    description:
      'Useful tips and updates on appliance care and repair. Learn from the experts at Pro Appliance Express.',
    url: 'https://proapplianceexpress.com/blog',
    type: 'website',
    siteName: 'Pro Appliance Express',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Appliance Repair Blog - Pro Appliance Express',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Appliance Repair Tips & News | Pro Appliance Express',
    description:
      'Stay updated with expert advice on appliance maintenance and repairs from our Boston-based professionals.',
    images: ['/og-image.jpg'],
  },
};

export default function Blog() {
  return (
    <main id="main">
      <Hero title="blog" />
      <section className="blog">
        <div className="container">
          <div className="row">
            {blogsShort.map((blogItem) => (
              <div className="col-xl-6 col-lg-6" key={blogItem.id}>
                <div className="blog-item">
                  <div className="blog-item-img">
                    <Image
                      src={blogItem.imgUrl}
                      alt={'blog img'}
                      width={570}
                      height={435}
                      priority
                    />
                  </div>
                  <div className="blog-item-content">
                    <div className="blog-item-date">{blogItem.date}</div>
                    <h3 className="blog-item-title">
                      <Link href={`/blog/${blogItem.slug}`}>
                        {blogItem.title}
                      </Link>
                    </h3>
                    <div className="blog-item-desc">{blogItem.desc}</div>
                    <div className="blog-btn-box">
                      <Link href={`/blog/${blogItem.slug}`}>Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
