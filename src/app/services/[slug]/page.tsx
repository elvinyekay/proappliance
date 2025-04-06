'use client';
import React, { useEffect, useState } from 'react';
import MainButton from '@/component/MainButton/MainButton';
import { notFound, useParams } from 'next/navigation';
import SectionTitle from '@/component/SectionTitle/SectionTitle';
import Hero from '@/sections/Hero/Hero';
import Image from 'next/image';
import { services } from '@/data/data';
import './servicedetail.css';
import LoadScreen from '@/component/LoadScreen/LoadScreen';

export default function ServicesPage() {
  const params = useParams();
  const [service, setService] = useState<any | null>(null);

  useEffect(() => {
    if (params?.slug) {
      const foundService = services.find((s) => s.slug === params.slug);
      if (foundService) {
        setService(foundService);
      } else {
        notFound();
      }
    }
  }, [params?.slug]);

  if (!service) return <LoadScreen />;

  return (
    <section>
      <Hero title={service.slug} />
      <div className="service-details">
        <div className="container">
          <div className="row service-details_row">
            <div className="col-xl-6 col-lg-6">
              <Image
                className="service-details_img"
                src={service.imgUrl}
                alt={'blog img'}
                width={570}
                height={435}
                priority
              />
            </div>
            <div className="col-xl-6 col-lg-6 service-details_col">
              <SectionTitle tag={service.tag} title={service.title} />
              <p className="service-details_text">{service.text_1}</p>
              <MainButton title="+1 (945) 333-5363" href="tel:+19453335363" />
            </div>
          </div>
          {service?.isContent && (
            <div className="row">
              <div className="col-xl-12 service-details_content">
                <h2>{service?.subhead_1}</h2>
                <h5>{service?.subtitle_2}</h5>
                <p>{service?.subtext_2}</p>
                <h5>{service?.subtitle_3}</h5>
                <p>{service?.subtext_3}</p>
                <h5>{service?.subtitle_4}</h5>
                <p>{service?.subtext_4}</p>
                <h5>{service?.subtitle_5}</h5>
                <p>{service?.subtext_5}</p>
                <h2>{service?.subhead_2}</h2>
                <ul>
                  <li>{service?.subtext_6}</li>
                  <li>{service?.subtext_7}</li>
                  <li>{service?.subtext_8}</li>
                  <li>{service?.subtext_9}</li>
                </ul>
                <h2>{service?.subhead_3}</h2>
                <p>{service?.subtext_10}</p>
                <ul className="service-details_list">
                  <li>{service?.sublist_1}</li>
                  <li>{service?.sublist_2}</li>
                  <li>{service?.sublist_3}</li>
                </ul>
                <h2>{service?.subhead_4}</h2>
                <p>{service?.subtext_11}</p>
                <ul>
                  <li>{service?.sublist_4}</li>
                  <li>{service?.sublist_5}</li>
                  <li>{service?.sublist_6}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
