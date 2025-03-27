import Hero from '@/sections/Hero/Hero';
import React from 'react';
import './blog.css';
import { blogsShort } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';

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
