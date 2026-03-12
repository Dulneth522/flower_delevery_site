import React from 'react';
import './Delivery.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const Delivery = ({ cartItems, removeFromCart }) => {
  const colomboLeft = [
    'Colombo 01 (00100)', 'Colombo 02 (00200)', 'Colombo 03 (00300)',
    'Colombo 04 (00400)', 'Colombo 05 (00500)', 'Colombo 06 (00600)',
    'Colombo 07 (00700)', 'Colombo 08 (00800)', 'Colombo 09 (00900)',
    'Colombo 10 (01000)', 'Colombo 11 (01100)', 'Colombo 12 (01200)',
    'Colombo 13 (01300)', 'Colombo 14 (01400)', 'Colombo 15 (01500)',
    'Attidiya (10300)', 'Battaramulla (10120)', 'Boralagamuwa (10400)',
    'Dahiwala (10350)', 'Ethulikota (10110)', 'Hokandara (10115)',
    'Ja-Ela (11350)'
  ];

  const colomboRight = [
    'Kalinoya (11200)', 'Kalubowila (10450)', 'Kattuthedda (10410)',
    'Kiribathgoda (11800)', 'Kahuwala (10230)', 'Kottawa (10250)',
    'Kottikawatta (10500)', 'Maharagama (10280)', 'Malabe (10150)',
    'Moratuwa (10440)', 'Mount Lavinia (10370)', 'Narangapitiya (11840)',
    'Nawala (10110)', 'Nuwegoda (10250)', 'Pelawatte (10120)',
    'Pillywadala (10350)', 'Pitakotte (10115)', 'Rajajiriya (10107)',
    'Ratmalana (10300)', 'Thalawa (10300)', 'Wattala (11300)'
  ];

  const kandyLeft = [
    'Kandu (20000)', 'Paradeniya (20400)', 'Katugasthota (20500)',
    'Gampola (20600)', 'Geliyo (20800)', 'Gurudeniya (20700)',
    'Pillimathalawa (20800)', 'Kadugannawa (20900)', 'Ampitiya (21000)',
    'Thalathu Oya (21100)', 'Poojapitiya (21200)', 'Bokkewela (21300)',
    'Akurana (21400)', 'Digana (21500)'
  ];

  const kandyRight = [
    'Halliwa (21600)', 'Medawala (21700)', 'Lawella (21800)',
    'Watthagama (21900)', 'Thennekumbara (22000)', 'Aladaniya (22100)',
    'Thaldeniya (22200)', 'Haragama (22300)', 'Kundasale (22400)',
    'Mennikhina (22500)', 'Paliekela (22600)', 'Polgolla (22700)',
    'Balana (22800)'
  ];

  const negomboLeft = [
    'Negombo Town (11500)', 'Dalupotha (11520)', 'Kochchikade (11510)',
    'Wailikala (11530)', 'Bolawaththa (11540)', 'Wennapuwa (11600)',
    'Maravila (11610)'
  ];

  const negomboRight = [
    'Katana (11620)', 'Kattuwa (11630)', 'Pitipana (11640)',
    'Kurana (11650)'
  ];

  return (
    <>
      <Navigation cartItems={cartItems} removeFromCart={removeFromCart} />
      <div className="delivery-container">
        <h1 className="page-title">Delivery Areas</h1>

        {/* Colombo Section */}
        <section className="delivery-section">
          <h2 className="section-title">Delivery Areas in Colombo</h2>
          <div className="area-grid">
            <ul className="area-column">
              {colomboLeft.map((area, index) => (
                <li key={index} className="area-item">{area}</li>
              ))}
            </ul>
            <ul className="area-column">
              {colomboRight.map((area, index) => (
                <li key={index} className="area-item">{area}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Kandy Section */}
        <section className="delivery-section">
          <h2 className="section-title">Delivery Areas in Kandy</h2>
          <div className="area-grid">
            <ul className="area-column">
              {kandyLeft.map((area, index) => (
                <li key={index} className="area-item">{area}</li>
              ))}
            </ul>
            <ul className="area-column">
              {kandyRight.map((area, index) => (
                <li key={index} className="area-item">{area}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="delivery-section">
          <h2 className="section-title">Delivery Areas in Negombo</h2>
          <div className="area-grid">
            <ul className="area-column">
              {negomboLeft.map((area, index) => (
                <li key={index} className="area-item">{area}</li>
              ))}
            </ul>
            <ul className="area-column">
              {negomboRight.map((area, index) => (
                <li key={index} className="area-item">{area}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Delivery;