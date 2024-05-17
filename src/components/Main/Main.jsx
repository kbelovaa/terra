import React, { useEffect, useState } from 'react';
import sendData from '../../http/sendData';
import img1 from '../../images/img1.png';
import img1s from '../../images/img1_744.png';
import dot from '../../images/dot.png';
import img2 from '../../images/img2.png';
import img2m from '../../images/img2_1024.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import img5 from '../../images/img5.png';
import img5m from '../../images/img5_1024.png';
import img6 from '../../images/img6.png';
import img7 from '../../images/img7.png';
import img7s from '../../images/img7_744.png';
import img8 from '../../images/img8.png';
import img8s from '../../images/img8_744.png';
import img9 from '../../images/img9.png';
import img10 from '../../images/img10.png';
import img10s from '../../images/img10_744.png';
import img11 from '../../images/img11.png';
import img11m from '../../images/img11_1024.png';
import img11s from '../../images/img11_744.png';
import img12 from '../../images/img12.png';
import img12m from '../../images/img12_1024.png';
import img13 from '../../images/img13.png';
import img13m from '../../images/img13_1024.png';
import img14 from '../../images/img14.png';
import img14m from '../../images/img14_1024.png';
import img15 from '../../images/img15.png';
import img15m from '../../images/img15_1024.png';
import img16 from '../../images/img16.png';
import img16m from '../../images/img16_1024.png';
import img17 from '../../images/img17.png';
import img18 from '../../images/img18.png';
import img19 from '../../images/img19.png';
import img20 from '../../images/img20.png';
import img21 from '../../images/img21.png';
import './Main.scss';

const Main = () => {
  const [name, setName] = useState('');
  const [isNameActive, setIsNameActive] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [text, setText] = useState('');
  const [isTextActive, setIsTextActive] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isFormSended, setIsFormSended] = useState(false);
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleEmailChange = (email) => {
    setEmail(email);

    const isEmailValid = email === '' || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email);
    setIsEmailValid(isEmailValid);
  };

  const checkIsFormValid = () => {
    if (name && email && isEmailValid) {
      return true;
    }

    return false;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (checkIsFormValid()) {
      const data = new FormData();
      data.append('Name', name);
      data.append('Email', email);
      data.append('Text', text);

      setLoading(true);

      const result = await sendData(data);

      if (result.status === 200) {
        setIsFormSended(true);
        setIsFormValid(true);
        setName('');
        setEmail('');
        setText('');
        setLoading(false);
      }
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="circle circle_1"></div>
        <div className="circle circle_2"></div>
        <div className="circle circle_3"></div>
        <div className="circle circle_4"></div>
        <div className="circle circle_5"></div>
        <div className="circle circle_6"></div>
        <div className="circle circle_7"></div>
        <div className="circle circle_8"></div>
        <div className="circle circle_9"></div>
        <section className="info-block">
          <div className="info-block__block"></div>
          <div className="image">
            {windowWidth <= 1024 ? (
              <img src={img1s} className="image__pic" alt="Building" />
            ) : (
              <img src={img1} className="image__pic" alt="Building" />
            )}
            <div className="image__ref">
              <span className="image__place">Here is it!</span>
              <p className="image__text">.. your new address in the mediterranean.</p>
              <p className="image__text">Ready to move in June.</p>
            </div>
            <div className="image__area">
              <img src={dot} className="image__dot" alt="Building" />
              <div className="image__circle1">
                <div className="image__circle2"></div>
              </div>
            </div>
            {windowWidth <= 744 ? (
              <svg
                className="image__arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="82"
                height="89"
                viewBox="0 0 82 89"
                fill="none"
              >
                <path
                  d="M79.2679 87.2513C79.2679 87.9059 79.7986 88.4365 80.4531 88.4365C81.1077 88.4365 81.6383 87.9059 81.6383 87.2513C81.6383 86.5968 81.1077 86.0662 80.4531 86.0662C79.7986 86.0662 79.2679 86.5968 79.2679 87.2513ZM0.314815 1.5C0.314815 2.15456 0.84544 2.68519 1.5 2.68519C2.15456 2.68519 2.68519 2.15456 2.68519 1.5C2.68519 0.84544 2.15456 0.314815 1.5 0.314815C0.84544 0.314815 0.314815 0.84544 0.314815 1.5ZM80.6166 87.1008L1.66348 1.34948L1.33652 1.65052L80.2896 87.4019L80.6166 87.1008Z"
                  fill="white"
                />
              </svg>
            ) : windowWidth <= 1024 ? (
              <svg
                className="image__arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="74"
                height="69"
                viewBox="0 0 74 69"
                fill="none"
              >
                <path
                  d="M0.787471 67.1895C0.787471 67.8441 1.3181 68.3747 1.97266 68.3747C2.62722 68.3747 3.15784 67.8441 3.15784 67.1895C3.15784 66.535 2.62722 66.0043 1.97266 66.0043C1.3181 66.0043 0.787471 66.535 0.787471 67.1895ZM71.3148 2C71.3148 2.65456 71.8454 3.18519 72.5 3.18519C73.1546 3.18519 73.6852 2.65456 73.6852 2C73.6852 1.34544 73.1546 0.814815 72.5 0.814815C71.8454 0.814815 71.3148 1.34544 71.3148 2ZM2.12349 67.3527L72.6508 2.16319L72.3492 1.83681L1.82182 67.0263L2.12349 67.3527Z"
                  fill="white"
                />
              </svg>
            ) : windowWidth <= 1440 ? (
              <svg
                className="image__arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="97"
                height="96"
                viewBox="0 0 97 96"
                fill="none"
              >
                <path
                  d="M0.478877 94.0099C0.478877 94.6645 1.0095 95.1951 1.66406 95.1951C2.31862 95.1951 2.84925 94.6645 2.84925 94.0099C2.84925 93.3553 2.31862 92.8247 1.66406 92.8247C1.0095 92.8247 0.478877 93.3553 0.478877 94.0099ZM93.8148 2C93.8148 2.65456 94.3454 3.18519 95 3.18519C95.6546 3.18519 96.1852 2.65456 96.1852 2C96.1852 1.34544 95.6546 0.814815 95 0.814815C94.3454 0.814815 93.8148 1.34544 93.8148 2ZM1.82007 94.1682L95.156 2.15825L94.844 1.84175L1.50806 93.8516L1.82007 94.1682Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                className="image__arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="129"
                height="175"
                viewBox="0 0 129 175"
                fill="none"
              >
                <path
                  d="M0.92419 172.889C0.92419 173.543 1.45482 174.074 2.10938 174.074C2.76393 174.074 3.29456 173.543 3.29456 172.889C3.29456 172.234 2.76393 171.704 2.10938 171.704C1.45482 171.704 0.92419 172.234 0.92419 172.889ZM125.815 2C125.815 2.65456 126.345 3.18519 127 3.18519C127.655 3.18519 128.185 2.65456 128.185 2C128.185 1.34544 127.655 0.814815 127 0.814815C126.345 0.814815 125.815 1.34544 125.815 2ZM2.28879 173.02L127.179 2.13112L126.821 1.86888L1.92996 172.758L2.28879 173.02Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
          <h1 className="info-block__title">
            Marbella - Terra
            <br />
            Brand New Apartment
          </h1>
          <p className="info-block__text">
            Welcome to Terra - a modern apartment with everything conveniently located within walking distance - the
            beach with its promenade and restaurants, the vibrant boulevard, the state-of-the-art I/O Luxury Health and
            Paddle Club, Laude International School, and Puerto Banus.
          </p>
          <div className="info-block__parameters">
            <div className="info-block__parameter">
              <span className="info-block__key">Price</span>
              <span className="info-block__value">€ 945 000,-</span>
            </div>
            <div className="info-block__parameter">
              <span className="info-block__key">Bed / Bath</span>
              <span className="info-block__value">3 / 2</span>
            </div>
            <div className="info-block__parameter">
              <span className="info-block__key">Interior / Exterior</span>
              <span className="info-block__value">104m² / 33m²</span>
            </div>
            <div className="info-block__parameter">
              <span className="info-block__key">Floor</span>
              <span className="info-block__value">3</span>
            </div>
            <div className="info-block__parameter">
              <span className="info-block__key">Housing type</span>
              <span className="info-block__value">Apartment</span>
            </div>
            <div className="info-block__parameter">
              <span className="info-block__key">Completion</span>
              <span className="info-block__value">June 2024</span>
            </div>
          </div>
        </section>
        <section className="rooms">
          <div className="rooms__info info">
            <h2 className="rooms__title title">Modern apartment in great location</h2>
            <p className="text">
              3 bed/2 bath, southwest orientation, large terrace, lift, double indoor parking and a storage room.
              Walking distance to beach, health club and restaurants.
            </p>
          </div>
          <div className="rooms__block"></div>
          <div className="rooms__images">
            {windowWidth <= 1440 ? (
              <img src={img2m} className="rooms__img_1" alt="Photo" />
            ) : (
              <img src={img2} className="rooms__img_1" alt="Photo" />
            )}
            <img src={img3} className="rooms__img_2" alt="Photo" />
            <img src={img4} className="rooms__img_3" alt="Photo" />
            {windowWidth <= 1440 ? (
              <img src={img5m} className="rooms__img_4" alt="Photo" />
            ) : (
              <img src={img5} className="rooms__img_4" alt="Photo" />
            )}
          </div>
        </section>
        <section className="nature">
          <img src={img6} className="nature__img1" alt="Photo" />
          <p className="nature__text">
            Everything you need for a great life: a beautiful view of the mountains and sea, good all-year weather
            (averaging 19°C yearly, reaching 26°C in summer months), and the delight and longevity that come with
            Mediterranean food.
          </p>
          {windowWidth <= 1024 ? (
            <img src={img7s} className="nature__img2" alt="Photo" />
          ) : (
            <img src={img7} className="nature__img2" alt="Photo" />
          )}
          {windowWidth <= 1024 ? (
            <img src={img8s} className="nature__img3" alt="Photo" />
          ) : (
            <img src={img8} className="nature__img3" alt="Photo" />
          )}
        </section>
        <section className="apartment">
          <div className="apartment__block"></div>
          <div className="apartment__info info">
            <h2 className="title">The apartment</h2>
            <p className="text">
              This luxurious 3-bedroom, 2-bathroom apartment with a large terrace is located in Terra, a contemporary
              residential complex situated near the Mediterranean seafront of San Pedro de Alcantara (Marbella). Terra
              is a beautiful new gated 4-story development featuring stunning apartments and penthouses, renowned as one
              of the finest residences in the area. It is completely sold out, and this is the sale of one of the
              best-located apartments in the complex. It has been designed and constructed by Taylor Wimpey, a prominent
              and established developer on the Costa del Sol.
            </p>
          </div>
          <img src={img9} className="apartment__img" alt="Photo" />
        </section>
        <section className="kitchen">
          <div className="kitchen__block"></div>
          <div className="kitchen__info info">
            <h2 className="title">The kitchen</h2>
            <p className="text">
              The living room features an open-plan kitchen with an island, complete with integrated oven, induction
              hob, dishwasher, and fridge-freezer. The décor has smooth fronts and a quartz worktop with an undermount
              sink.
            </p>
          </div>
          {windowWidth <= 1024 ? (
            <img src={img10s} className="kitchen__img1" alt="Photo" />
          ) : (
            <img src={img10} className="kitchen__img1" alt="Photo" />
          )}
          {windowWidth <= 1024 ? (
            <img src={img11s} className="kitchen__img2" alt="Photo" />
          ) : windowWidth <= 1440 ? (
            <img src={img11m} className="kitchen__img2" alt="Photo" />
          ) : (
            <img src={img11} className="kitchen__img2" alt="Photo" />
          )}
        </section>
        <section className="livingroom">
          <div className="livingroom__block"></div>
          <div className="livingroom__info info">
            <h2 className="title">The living room</h2>
            <p className="text">
              As you take the lift to the third floor you are met by a beautiful entrance with a view to the living room
              and terrace. Next to the kitchen there is a dining area and a lounge area with a sofa, lounge chairs and a
              tv/entertainment system.
            </p>
          </div>
          {windowWidth <= 1440 ? (
            <img src={img12m} className="livingroom__img" alt="Photo" />
          ) : (
            <img src={img12} className="livingroom__img" alt="Photo" />
          )}
        </section>
        <section className="bedroom">
          <div className="bedroom__block"></div>
          <div className="bedroom__info info">
            <h2 className="title">The bedroom</h2>
            <p className="text">
              The apartment has three bedrooms and two elegant bathrooms with tiles, underfloor heating and downlights.
              The master bedroom has an en-suite bathroom with a large shower. Both have wall-mounted toilets, while the
              second bathroom also has a rainfall shower. All three bedrooms have fitted wardrobes.
            </p>
          </div>
          {windowWidth <= 1440 ? (
            <div className="bedroom__images">
              <img src={img13m} className="bedroom__img1" alt="Photo" />
              <img src={img14m} className="bedroom__img2" alt="Photo" />
              <img src={img15m} className="bedroom__img3" alt="Photo" />
              <img src={img16m} className="bedroom__img4" alt="Photo" />
            </div>
          ) : (
            <div className="bedroom__images">
              <img src={img13} className="bedroom__img1" alt="Photo" />
              <img src={img14} className="bedroom__img2" alt="Photo" />
              <img src={img15} className="bedroom__img3" alt="Photo" />
              <img src={img16} className="bedroom__img4" alt="Photo" />
            </div>
          )}
        </section>
        <section className="terraces">
          <div className="terraces__info info">
            <h2 className="title">Terraces and pool</h2>
            <p className="text">
              The apartment has an impressive terrace of 33 m² that allows for several zones with ample space for dining
              and sun-lounging. The view is green and beautiful and you enjoy the sunset from the terrace. The common
              grounds are park-like with lush plants and a sheltered pool area, featuring sun loungers, showers and
              bathrooms.
            </p>
          </div>
          <img src={img17} className="terraces__img" alt="Photo" />
        </section>
        <section className="plan">
          <div className="plan__info info">
            <h2 className="title">Floor plan</h2>
          </div>
          <img src={img18} className="plan__img" alt="Plan" />
          <div className="plan__data">
            <div className="plan__area">
              <div className="plan__line">
                <span className="plan__key">Built Area</span>
                <span className="plan__value">103, 28m²</span>
              </div>
              <div className="plan__line">
                <span className="plan__key">Terrace Area</span>
                <span className="plan__value">36, 77m²</span>
              </div>
              <div className="plan__line">
                <span className="plan__key">Communal Area</span>
                <span className="plan__value">14, 73m²</span>
              </div>
              <div className="plan__line">
                <span className="plan__key">Total Area</span>
                <span className="plan__value">154, 78m²</span>
              </div>
            </div>
            <div className="plan__items">
              <div className="plan__item">
                <span className="plan__key">Block</span>
                <span className="plan__value">3</span>
              </div>
              <div className="plan__item">
                <span className="plan__key">Floor</span>
                <span className="plan__value">3</span>
              </div>
              <div className="plan__item">
                <span className="plan__key">Door</span>
                <span className="plan__value">13</span>
              </div>
              <div className="plan__item">
                <span className="plan__key">Parking</span>
                <span className="plan__value">55</span>
              </div>
              <div className="plan__item">
                <span className="plan__key">Storage</span>
                <span className="plan__value">T35</span>
              </div>
            </div>
          </div>
        </section>
        <section className="location">
          <div className="location__info info">
            <h2 className="title">Location</h2>
          </div>
          <img src={img19} className="location__img" alt="Map" />
          <img src={img20} className="location__img" alt="Map" />
          <img src={img21} className="location__img" alt="Map" />
        </section>
        <section className="data">
          <div className="data__line">
            <span className="data__label"></span>
            <p className="data__info">First luxury realty marbella sl</p>
          </div>
          <div className="data__line">
            <span className="data__label">Phone nr</span>
            <p className="data__info">(+34) 695 963 500</p>
          </div>
          <div className="data__line">
            <span className="data__label">Email</span>
            <p className="data__info">info@first-luxury.es</p>
          </div>
          <div className="data__line">
            <span className="data__label">Address</span>
            {windowWidth <= 744 ? (
              <p className="data__info">
                {`Carretera de Cadiz, km\u00A0176,`}
                <br />
                Centro de Negocios
                <br />
                Oasis, local 9, 29602,
                <br />
                Marbella (Málaga)
                <br />
                NIF72522485
              </p>
            ) : (
              <p className="data__info">
                Carretera de Cadiz, km 176, Centro de Negocios
                <br />
                Oasis, local 9, 29602, Marbella (Málaga)
                <br />
                NIF72522485
              </p>
            )}
          </div>
          <div className="data__line">
            <span className="data__label"></span>
            <div className="form">
              <h2 className="form__title title">Contact us</h2>
              {isFormSended ? (
                <p className="data__info">Your message has been sent. We will contact you soon!</p>
              ) : (
                <form className={isFormValid ? '' : 'invalid'} onSubmit={handleFormSubmit}>
                  <div className={`input-wrap ${isNameActive || name ? 'active' : ''}`}>
                    <input
                      type="text"
                      className={`input ${!isFormValid && !name && 'invalid-field'}`}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={() => setIsNameActive(true)}
                      onBlur={() => setIsNameActive(false)}
                    />
                    <label className="label">Name</label>
                  </div>
                  <div className={`input-wrap ${isEmailActive || email ? 'active' : ''}`}>
                    <input
                      type="email"
                      className={`input ${!isFormValid && (!email || !isEmailValid) && 'invalid-field'}`}
                      value={email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      onFocus={() => setIsEmailActive(true)}
                      onBlur={() => setIsEmailActive(false)}
                    />
                    <label className="label">Email</label>
                    {!isEmailValid && <p className="message">Please enter a valid email address</p>}
                  </div>
                  <div className={`input-wrap ${isTextActive || text ? 'active' : ''}`}>
                    <textarea
                      rows="1"
                      className="input"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      onInput={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = `${e.target.scrollHeight + 2}px`;
                      }}
                      onFocus={() => setIsTextActive(true)}
                      onBlur={() => setIsTextActive(false)}
                    ></textarea>
                    <label className="label">Text (optional)</label>
                    {!isFormValid && (!name || !email) && <p className="message">Please fill in all fields</p>}
                  </div>
                  {loading ? (
                    <div className="spinner spinner_small"></div>
                  ) : (
                    <button className={`btn form__btn ${checkIsFormValid() ? '' : 'inactive'}`} type="submit">
                      Send
                    </button>
                  )}
                </form>
              )}
            </div>
          </div>
        </section>
        <section className="footer">
          <span className="footer__text">Copyright First, S.L.© 2024. All rights reserved</span>
          <div className="footer__text-wrap">
            <span className="footer__text">Terms of Use</span>
            <span className="footer__text">Cookies</span>
            <span className="footer__text">Privacy Policy</span>
            <span className="footer__text">Legal Notice</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
