import './hero.css';
import Link from 'next/link';

interface IProp {
  title: string;
}

export default function Hero({ title }: IProp) {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="hero-inner">
              <h1 className="hero-title">{title}</h1>
              <ul className="hero-bredcrumbs">
                <li>
                  <Link href={'/'}>Home</Link>
                </li>
                <span>/</span>
                <li>{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
