import React from 'react';
import './brandsrepair.css';
import { logos } from '@/data/data';
import Image from 'next/image';
import SectionTitle from '@/component/SectionTitle/SectionTitle';

export default function BrandsRepair() {
  return (
    <section className="brands">
      <div className="container">
        <div className="brands-title">
          <SectionTitle tag="Brands" title="Brands We Repair" />
        </div>
        <div className="row brands-items">
          {logos.map((brand) => (
            <div className="brands-item" key={brand.id}>
              <Image
                src={brand.imgUrl}
                alt={'brand logo'}
                width={140}
                height={100}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
