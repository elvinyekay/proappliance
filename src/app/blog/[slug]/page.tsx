'use client';
import React, { useEffect, useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/sections/Hero/Hero';
import LoadScreen from '@/component/LoadScreen/LoadScreen';
import { blogs } from '@/data/data';
import './blogdetail.css';
import Head from 'next/head';

export default function BlogPage() {
  const params = useParams();
  const [blog, setBlog] = useState<any | null>(null);

  useEffect(() => {
    if (params?.slug) {
      const foundBlog = blogs.find((b) => b.slug === params.slug);
      if (foundBlog) {
        setBlog(foundBlog);
      } else {
        notFound();
      }
    }
  }, [params?.slug]);

  if (!blog) return <LoadScreen />;

  const url = `https://proapplianceexpress.com/blog/${blog.slug}`;
  const imageUrl = blog.imgUrl || '/og-image.jpg';

  return (
    <section className="blogdetail">
      <Head>
        <title>{`${blog.title} | Pro Appliance Express Blog`}</title>
        <meta
          name="description"
          content={
            blog.description ||
            'Explore expert tips and repair guides for your home appliances.'
          }
        />
        <meta
          property="og:title"
          content={`${blog.title} | Pro Appliance Express Blog`}
        />
        <meta
          property="og:description"
          content={
            blog.description ||
            'Learn how to fix a leaking dishwasher quickly and efficiently.'
          }
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Pro Appliance Express" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta
          name="twitter:description"
          content={
            blog.description ||
            'Learn how to fix a leaking dishwasher quickly and efficiently.'
          }
        />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content="@ProApplianceExpress" />
      </Head>
      <Hero title={blog.title} hideBreadcrumbs />
      <div className="container blogdetail-content">
        <div className="blogdetail-hero-img">
          <Image
            src={blog.imgUrl}
            alt={'blog img'}
            width={570}
            height={435}
            priority
          />
        </div>
        <div className="blogdetail-items">
          <p className="blogdetails-date">{blog?.date}</p>
          <h2>{blog?.h2Title1}</h2>
          <p>{blog?.h2Title1_text}</p>
          <div className="blogdetail-items-img">
            {blog?.blog_img && (
              <Image
                src={blog?.blog_img}
                alt={'blog img'}
                width={570}
                height={435}
                priority
              />
            )}
          </div>
          <h3>{blog?.h3Title1}</h3>
          <p>{blog?.h3Title1_text}</p>
          <h3>{blog?.h3Title2}</h3>
          <p>{blog?.h3Title2Text}</p>
          <ol>
            <li>{blog?.h3Title2Text1_1}</li>
            <li>{blog?.h3Title2Text1_2}</li>
            <li>{blog?.h3Title2Text1_3}</li>
            <li>{blog?.h3Title2Text1_4}</li>
          </ol>
          <h3>{blog?.h3Title3}</h3>
          <p>{blog?.h3Title3Text}</p>
          <h4>{blog?.h4Title1}</h4>
          <p>{blog?.h4Title1Text}</p>
          <p>{blog?.h4Title1Text1}</p>
          <ol>
            <li>{blog?.h4Title1Text1_1}</li>
            <li>{blog?.h4Title1Text1_2}</li>
          </ol>
          <h4>{blog?.h4Title2}</h4>
          <p>{blog?.h4Title2Text}</p>
          <ol>
            <li>{blog?.h4Title2Text1_1}</li>
            <li>{blog?.h4Title2Text1_2}</li>
            <li>{blog?.h4Title2Text1_3}</li>
          </ol>
          <h4>{blog?.h4Title3}</h4>
          <p>{blog?.h4Title3Text}</p>
          <ol>
            <li>{blog?.h4Title3Text1_1}</li>
            <li>{blog?.h4Title3Text1_2}</li>
            <li>{blog?.h4Title3Text1_3}</li>
            <li>{blog?.h4Title3Text1_4}</li>
          </ol>
          <h4>{blog?.h4Title4}</h4>
          <p>{blog?.h4Title4Text}</p>
          <ol>
            <li>{blog?.h4Title4Text1_1}</li>
            <li>{blog?.h4Title4Text1_2}</li>
            <li>{blog?.h4Title4Text1_3}</li>
          </ol>
          <h3>{blog?.h3Title4}</h3>
          <p>{blog?.h3Title4Text}</p>
          <h4>{blog?.h4Title5}</h4>
          <p>{blog?.h4Title5Text}</p>
          <ol>
            <li>{blog?.h4Title5Text1_1}</li>
            <li>{blog?.h4Title5Text1_2}</li>
            <li>{blog?.h4Title5Text1_3}</li>
            <li>{blog?.h4Title5Text1_4}</li>
          </ol>
          <h4>{blog?.h4Title6}</h4>
          <p>{blog?.h4Title6Text}</p>
          <h4>{blog?.h4Title7}</h4>
          <p>{blog?.h4Title7Text}</p>
          <h3>{blog?.h3Title5}</h3>
          <p>{blog?.h3Title5Text}</p>
          <p>{blog?.h3Title5Text2}</p>
          <h3>{blog?.h3Title6}</h3>
          <p>{blog?.h3Title6Text}</p>
        </div>
      </div>
      <div className="featured-blogs-head container">
        <h2>Related article</h2>
      </div>
      <div className="featured-blogs container">
        {blogs.map((blog) => (
          <Link
            href={`/blog/${blog.slug}`}
            key={blog.id}
            className="featured-blogs-item"
          >
            <Image
              src={blog.imgUrl}
              alt={'blog img'}
              width={570}
              height={435}
              priority
            />
            <div className="featured-item-content">
              <h6>{blog.title}</h6>
              <p>{blog.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
