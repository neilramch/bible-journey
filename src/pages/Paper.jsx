import React, { useState } from 'react';
import './Paper.css';

function Paper() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleVisibility = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  const [visibleSections, setVisibleSections] = useState({
    adamEve: false,
    abraham: false,
  });

  const toggleSectionVisibility = (section) => {
    setVisibleSections({
      ...visibleSections,
      [section]: !visibleSections[section],
    });
  };

  const [visibleSubSection, setVisibleSubSection] = useState(null);

  const toggleSubSectionVisibility = (subSection) => {
    setVisibleSubSection(visibleSubSection === subSection ? null : subSection);
  };

  return (
    <div className='journey-container'>
      <div className="journey adam-eve">
        <button onClick={() => toggleSectionVisibility('adamEve')}>
        {visibleSections.adamEve ? (
        <>
             Collapse <img src="data:image/png;base64,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" alt="menu" />
        </>
        ) : (
        <>
            Adam & Eve <img src="data:image/png;base64,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" alt="menu" />
        </>
        )}
        </button>
        {visibleSections.adamEve && (
          <section className="paper garden">
            <button onClick={() => toggleSubSectionVisibility('garden')}>
              {visibleSubSection === 'garden'
                ? 'Hide Garden of Eden ▲'
                : 'Garden of Eden ▼'}
            </button>
            {visibleSubSection === 'garden' && (
              <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vS6xj_pe5cfNKoaIlWSc5vX4Z6xe20mwZgqVS30Y5aMQ5aEFbaXi2VFbQ5dworLZT4RVyoB5Qa2Bvxn/pub?embedded=true"
                title="Garden of Eden Paper"
                className="research-iframe"
              ></iframe>
            )}
          </section>
        )}
      </div>

      <div className='journey noah'>

<button onClick={() => toggleSectionVisibility('noah')}>
{visibleSections.noah ? (
        <>
             Collapse <img src="data:image/png;base64,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" alt="menu" />
        </>
        ) : (
        <>
            Noah's Journey <img src="data:image/png;base64,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" alt="menu" />
        </>
        )}
    </button>
    {visibleSections.noah && (
    <>
    <section className="paper noah-pre">
    <button onClick={() => toggleVisibility('noah-pre')}>
        
        {visibleSection === 'noah-pre' ? 'Hide Section' : "Noah’s First Location: The Pre-Flood World ▼"}
    </button>
    {visibleSection === 'noah-pre' && (
        <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vRGfKZzjqpKL7cOJtt6DBQJ_Pg2Bj9KnVUUWfPDjKaGRWOYuQIUSAD_xgJOH5TumkKfQvVqEfCqViyT/pub?embedded=true"
        title="Noah’s First Location: The Pre-Flood World"
        className="research-iframe"
        ></iframe>
    )}
    </section>

    <section className="paper ark">
    <button onClick={() => toggleVisibility('ark')}>
        
        {visibleSection === 'ark' ? 'Hide Section' : "The Ark’s Construction and Preparation ▼"}
    </button>
    {visibleSection === 'ark' && (
        <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vR5Qor8WqjzQKphZ2IoiUF8gywjR4pcQ2mrW9tMcIiwsKo7leLWGaxTAGKAJVT6y3mE5WxlRNHmWEE0/pub?embedded=true"
        title="The Ark’s Construction and Preparation"
        className="research-iframe"
        ></iframe>
    )}
    </section>

    <section className="paper flood">
    <button onClick={() => toggleVisibility('flood')}>
        
        {visibleSection === 'flood' ? 'Hide Section' : "The Flood Event: A Global Judgment ▼"}
    </button>
    {visibleSection === 'flood' && (
        <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vTuGkGxasDkz5H3I2e6x0BuAOm5xyeMM1ln5UrT96cnCref1QVFf__qgB9Giai-Evq54ltVxC7o7M38/pub?embedded=true"
        title="The Flood Event: A Global Judgment"
        className="research-iframe"
        ></iframe>
    )}
    </section>

    <section className="paper ararat">
    <button onClick={() => toggleVisibility('ararat')}>
        
        {visibleSection === 'ararat' ? 'Hide Section' : "The Mountains of Ararat: A New Beginning ▼"}
    </button>
    {visibleSection === 'ararat' && (
        <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vSieBTuVorHUs5JEtUd_ryUsfsAINEBMP9PORqzHLHTXF3eixjG_vCKqvomGzlLdRJVb-AAy-JdiuXs/pub?embedded=true"
        title="The Mountains of Ararat: A New Beginning"
        className="research-iframe"
        ></iframe>
    )}
    </section>

    <section className="paper rainbow">
    <button onClick={() => toggleVisibility('rainbow')}>
        
        {visibleSection === 'rainbow' ? 'Hide Section' : "The Covenant and the Rainbow: God’s Promise of Renewal ▼"}
    </button>
    {visibleSection === 'rainbow' && (
        <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vTnh_onLBUtRCYIBTdpDlvCao8v-opDPFfhgfT8Q63pJl_63806gGqmY96cPQGCO-_tAbnuQXBt5KvC/pub?embedded=true"
        title="The Covenant and the Rainbow: God’s Promise of Renewal"
        className="research-iframe"
        ></iframe>
    )}
    </section>
    </> )}
      </div>
      <div className="journey abraham">
        <button onClick={() => toggleSectionVisibility('abraham')}>
        {visibleSections.abraham ? (
        <>
             Collapse <img src="data:image/png;base64,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" alt="menu" />
        </>
        ) : (
        <>
            Abraham's Journey <img src="data:image/png;base64,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" alt="menu" />
        </>
        )}
        </button>
        {visibleSections.abraham && (
          <>
        <section className="paper ur">
          <button onClick={() => toggleVisibility('ur')}>
            
            {visibleSection === 'ur' ? 'Hide Section' : "Abraham's Journey: Ur ▼"}
          </button>
          {visibleSection === 'ur' && (
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vQ1rz3mCfoekEw04Oitl45Ges6B6fEIUegCNMl0DllZ6KcD8Bdo3I_eXaX29s-ECDDF1bXnHd4Pascj/pub?embedded=true"
              title="Abraham's Journey: Ur"
              className="research-iframe"
            ></iframe>
          )}
        </section>

        <section className="paper haran">
          <button onClick={() => toggleVisibility('haran')}>
            {visibleSection === 'haran'
              ? 'Hide Section'
              : 'Haran: The Transitional Home of Abraham ▼'}
          </button>
          {visibleSection === 'haran' && (
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vSzGM81f7J2uJIkSX6Ugf5bS2S0eVLTrA8PvbR8XoFfAOmSYLK7O7iVNmjKXPyH4MVWCLk98ovWmlFg/pub?embedded=true"
              title="Haran Paper"
              className="research-iframe"
            ></iframe>
          )}
        </section>

        <section className="paper shechem">
          <button onClick={() => toggleVisibility('shechem')}>
            {visibleSection === 'shechem'
              ? 'Hide Section'
              : 'Shechem: The First Covenant in the Promised Land ▼'}
          </button>
          {visibleSection === 'shechem' && (
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vRq6fMJA-jA8fbZ5Ob9abbsThy4EkUsOQ2mGhQ0K06Uvp8OMLHpavgMqLZrtaoiEq_LyS15Hb9Om-9E/pub?embedded=true"
              title="Shechem Paper"
              className="research-iframe"
            ></iframe>
          )}
        </section>

        <section className="paper bethel">
          <button onClick={() => toggleVisibility('bethel')}>
            {visibleSection === 'bethel'
              ? 'Hide Section'
              : 'Bethel: A Place of Worship and Divine Encounter ▼'}
          </button>
          {visibleSection === 'bethel' && (
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vQ5gvs7nz4EaVgluTeL6MabpHa7NIGcra8BfKqQ2GgcIJZSst-swNJWaQo5mtgk7WUmsPX4hI7sNf8H/pub?embedded=true"
              title="Bethel Paper"
              className="research-iframe"
            ></iframe>
          )}
          </section>

        <section className="paper egypt">
          <button onClick={() => toggleVisibility('egypt')}>
            {visibleSection === 'egypt'
              ? 'Hide Section'
              : 'Egypt: Refuge During Famine ▼'}
          </button>
          {visibleSection === 'egypt' && (
            <iframe
              src= "https://docs.google.com/document/d/e/2PACX-1vRWnvNuHUZH_0tEob4DVmrHTGWwlKzzb1A6K6R2B4PJDQKJjY62HztExB4VsyFmDiju-S2gORbQmK3U/pub?embedded=true"
              title="egypt Paper"
              className="research-iframe"
            ></iframe>
          )}
        </section>
        <section className="paper hebron">
          <button onClick={() => toggleVisibility('hebron')}>
            {visibleSection === 'hebron'
              ? 'Hide Section'
              : 'Hebron: A City of Covenant and Legacy ▼'}
          </button>
          {visibleSection === 'hebron' && (
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vQKBuK6CRtc0olpVlfpgsEfrSwvQlaDlieLMQU8R_6hrD7WqtnyNcJ6q95EHG67WWsiimXBU-fyYkTO/pub?embedded=true"
              title="hebron Paper"
              className="research-iframe"
            ></iframe>
          )}
        </section>
        <section className="paper mount-moriah">
          <button onClick={() => toggleVisibility('mount-moriah')}>
            {visibleSection === 'mount-moriah'
              ? 'Hide Section'
              : 'Mount Moriah: The Place of Ultimate Faith ▼'}
          </button>
          {visibleSection === 'mount-moriah' && (
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vTNWd6BUrThS7daKugKWWIGdE8DjG9l3taCTljRMg0d83a3E1FPLlaM8DcZe3hwKZcloyL6wRCpjxcx/pub?embedded=true"
              title="mount-moriah Paper"
              className="research-iframe"
            ></iframe>
          )}
        </section>
        <section className="paper beersheba">
          <button onClick={() => toggleVisibility('beersheba')}>
            {visibleSection === 'beersheba'
              ? 'Hide Section'
              : 'Beersheba: A Site of Oaths and Divine Assurance ▼'}
          </button>
          {visibleSection === 'beersheba' && (
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vTIWHFLAi243fJkaut6wkfApheszlrXgtzc9yomoUwikpFVoKjaFtpOUvD-2v0tfPwc9hVBu-D_U0cv/pub?embedded=true"
              title="beersheba Paper"
              className="research-iframe"
            ></iframe>
          )}
        </section>
        <section className="paper sodom-gomorrah">
          <button onClick={() => toggleVisibility('sodom-gomorrah')}>
            {visibleSection === 'sodom-gomorrah'
              ? 'Hide Section'
              : 'Bethel: A Place of Worship and Divine Encounter ▼'}
          </button>
          {visibleSection === 'sodom-gomorrah' && (
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vReZGxs5hRImNhTzMbntYxS5zNuh5PrPBLLW0DiAw3qI5F9c3lU4DKTuBKfXuUaWZ3XLrghTHDpBwpB/pub?embedded=true"
              title="sodom-gomorrah Paper"
              className="research-iframe"
            ></iframe>
          )}
        </section>
        <section className="paper mamre">
          <button onClick={() => toggleVisibility('shamre')}>
            {visibleSection === 'mamre'
              ? 'Hide Section'
              : "Mamre: Near Hebron - Promise of Isaac's birth ▼" }
          </button>
          {visibleSection === 'shamre' && (
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vRqPhSCWid5_vyBF86LEUXRzvVzk9BTFgMUwwhbVI_EYPUupHhWXpMA7_NvpMrhWUVc8Sjiu1un4FdD/pub?embedded=true"
              title="Shamre Paper"
              className="research-iframe"
            ></iframe>
          )}
        </section>
        <section className="paper gerar">
          <button onClick={() => toggleVisibility('gerar')}>
            {visibleSection === 'gerar'
              ? 'Hide Section'
              : 'Gerar: Abraham Encounters Abimelech ▼'}
          </button>
          {visibleSection === 'gerar' && (
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vSF7EYuxMuimeKkBVvbC4CUDtRPv3OyJQ_eHjJXMLeEcubhgDa4OlD6Z7YUnaFKxqObeyMxpBtZWNYa/pub?embedded=true"
              title="Gerar Paper"
              className="research-iframe"
            ></iframe>
          )}
        </section>

        </>
    )}
      </div>

      <div className='journey moses'>

        <button onClick={() => toggleSectionVisibility('moses')}>
        {visibleSections.moses ? (
        <>
             Collapse <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAMZklEQVR4nO2d+VNV1x3Ar23T7bcmnWmb/g3NtHU6TafTkr5zQTjnicA5F3Fv1aAmKlGIxCW4J5rGuLQmNWZiqsY1xqpxCyouKHEFROPGE00n7iKIM4Isp/O9wIxp7rk88G7vve9n5swwvAfn3HO+9yzf8100DUEQBEEQBEEQBEEQBEEQBEFiEz0959nkNCOkh/loQvlCnfHPCBNlOuOndSYihPFaQnmTWRivhd+Zn1F+xPwu/E2Yjw7RrL/A//L7eRAbpk+f/h2Syn+jM5EPg6czXqczIZ0tHP7nNhI2JiZT49dQJw6KjyQlDfshCRv9CRObCON3nR9wYV+ouKNTvjGZCQPagsLgESnM6K0zsVin/Lbng87UswNhfCVhWbqmab1QGBzGMIzv64y/SKi46P9gi66E4UKIGiOgzSgIT0hqauoPCDNyCeVf+T+wolulvc1GXjgc/jEKQjdJSkr6HqF8PGHiZk8HIMwHyTHjJ8m58xfKf3+8Xu47UCrPnrsgIzVX5LXrN2RDwwPZ3NxsFvgZfgefnfnyvNy3/5D8aPU6OWfeO3L0+Fclyxr0JDPC9eQ0/rJhGN9FQYh2jafiWHc7mmUOlHmvTpPLV6yWJ8srzYF1itbWVnnxUkSu27hZTpv5pkwXQ7o/IzBeTsLGH1AIFJCMjGd0xj/QmWiLtlPTMgbIGXP/Lo98cVw+evRIekVT0yNZWnZUTp/zlkztl9OdZaFVZ3xZSorxNArCYySHeUp3pvtR4wrkls92yfv3G6Tf3L/fILds22m2KeoZgfIbHSeGxAbWRcL4jPY3o+uOyyuYKsuOHpdtbW0yiFSdPScLpsyIVhBgplvcu3fuU1oiEmLGL3UqDkbTWRMKi2TF6TMyViivrJITJr0e5WwgSvr0yfyFlngbPX6jq87JHjxS7ik5GNg33g5oc/HeA9IYNCKKDaK4BuplLREgjL9AGK+365DksCHnLVgi6+/fl7FOw4MHcumyD2VK3+yu9gUNoTQjWYtnQG9OmGi064gBw0aZa2m8cbrqrMwZmtvFbMAf6pRnafGIniZGdrXZmzL9DVlXH/tvvYq6uno5uWhOV0fFFsL4cC3u3nybwYfpcf0nW2Jyre8u8IxrN2w2lzk7IYibmQAMKuymfVDmHDh0RCYapWVHJc0cYCcETTG/Jwj15c/pVNxTPWRfPlieOFUpE5WK02dkv+yhNqcDXh8KZ/5Wi91zvvqoJwaNkNWRGpnoXKq+bPaF3REx5vQEHRq+vaqHSjeGyIvVEb/7PjBcrrkqM7KH2S0H+2PqNpFQMVf1MHB5ksjTvt1yYLsnYHyGFguAJa65i1Xs9g+Ulik7IdE5XHZMqTCCU1TgN4VJ4QE/tbvVg6MeYs+aDZ/aKYquB/oqueM+X6HkmZsQ5/wnBfpo2sx5NvsB8Z4WREg483cqZQ+od+NZw+eGxlClNjb7ODXzeS1wNnyMl6vW/XjU7Xtxd6DcDzB+IlCnAjDgVE1Z/3jvA9c7K15ZvPR9u6XgJS0wHjpMXLNqJNyFw3Uo0jPAWlmtJOLXnzeMH/k9/hrYvqukFIw5kCdjd3GJchYAc/MAeOyI/1o1bmJhEe76HToVgC2kpRBQftVXDyTw2lFJZ2XVWSeeH5HS1Jyq+hnc0Pwa/14qXz1w0ECcZezEyaq9wHlfHFJDjP9JJZVHj59y+PGRsqPH1ScCPzyOCBXvWzUGHCRQ4+c80Ke5YwuCoR2Eo5/K0GPr9t2OPfSZs+fk2Amvdcv9KigltV+OOW2Ds6lTbN66w1oAGK8FT2rPBAAic6ge2ilT7lu37/TICTNoJd0YIm/fuetIn0Dfql4GkpbFvRMAJjZZNWLmG29Lp9i2Y7fvg6c7VLbt+NyxfimaPV8xC4j1ngw+BEcy4+NYNAK8dJ0COs3vgdMdKtt3FTvWL2BPYVkPFXc8CVwFRooq/3wnXbTNJcCI/SWgX/ZQx5YAoLGpybSktqoLjHBdFwCd8gKrygunzZJOAxuocflTYnYTOD5/ihmVxGnyX5uuqvcV1wWAULHdqnKwZEG8YdWajZYCQKjY6roAqIIwfumCpCPq47GlADBe6+7gp+c8qwrI1NLSomgu4jTNzS3mnstqLJKo8XPXBMCMvWtRKUTjQrxFpRXUw0aSawKgM2OMVaVz31rk8eMjs+e9o1gGjFzXBIBQvsiq0pUfb8AR8ZiPVq2zngEoX+D5CQACKyLeAtZWiqPgNtcEoD2W/rcrdfLCA4kOsLS2XgJEqWsCQKiosqq05srVKJuNOEXkco1iCRCVrgmAzsQVq0pv3Lwl3QCvg9Vcv3FToQzil10TAFViBjciduJ1sD3gaaXYBN52TwAob7Kq1MnAzJ3gdbA9cPGm2AM0xokA4HVw8ATA6yUAr4ODtQR4vgnE62AlkODC+00gHgMT/BioUgSh+3diKILakzKiKjjIqmBXjUJUl0GQlAnxlhWr1np/GaS8Dp6/0OPHR2a9ucD762AzkbJFpZBaDfGW3JfzLQUgmWb92TUBgJClVpVCXj00CQuGSViob87PNDdR+QS6Yf6MdPcEwO+6Ovh2J4E16zcpmos4DVhgKZRAWzwQAJFvVfmkqS44hqB3sCWQRc3yBMCMPNcFALJbWe4DMgeaGTWdAq+DrWlsbFS6hulpxq88cg7lt60aAFkwnAKvg62B7CoKDeBNz0LF6JRvtGoE5NJ1CrwOtkYZR5jytZ4MfocAZKscIp2KCYzXwdYxhFP79bc+/zMjMxAhYiCps1PgdfA3+XTLduXxz9MQMYDO+L+sGoNBolwMEqXQ/umUv6t5TXJa1h/VYeJOutQNiZ1NRFf0t1/h43vpjF+wahAERkCcBaKlWSt/xDnNz3SwKqmEFOqIM5w4VaF++8Pib74JAAQqJpR/ZdWwCZNex4CRDq39MKMqBOBK7965T2l+QqgYp5LO4r0HnOiDhGbn53vVbz8zxmiBTxjRgAkjegr0HR84PNgJIwBIXKCS0iXvLu9xByQ6i/65TPn2h6gYpQUFSGCkU3HSqqGQ+AgSICHdzySqTDFPxTFPgkI6lTYue/BIebf2Xje7IHG5d69O9h/youLYx1uTKf+9FkRUIeShTC6ag6eCKHf9hdNm22z8+FItqJCMjGfsUsav3bA5mj5IaFav/UQ5+LDZZmzgT7QgA5bDquTRsKbtP3jY7z4OLCUHDyvXfZj6CcvStVhAp2KWffr4Cr/7OnCUV1apLX3MjZ9RpMUKptUQE8Wqh4FEEBerI373eWCI1FyRGdnDbNZ9sS9QqWKj9SFQKYigQEbMS9WXZaJzsTpikx3UnPq/dt3W3y3ASBECGKseri8fnNDLQXlllW0QDMJ4PRjharEMxK7VGX9otyeAzU+iUXrkqKSZNms+4w9ddfPyEp3yLNXJoPN0APkGEiHdXFtbm3nUU2r52qf9llA4K0OLJwjjw+2EoFNZBIaP8azhK5w2y26zZw5+MjX+qsUj5kzARKNdB+QMzY3Lu4OK02eU6t3Hp/24e/MVewLLrCOPLwnzFixxzMTcTxoePJBLl31oXorZDj4V9+JmzY/OvYxft38b2o+Ku/eUxOTeoK2tTe4q3mdzn//No54nbl1BoiPWwL6uOgdKXsFUebK8UsYKJ05V2Jlx/d/giz0xe853RmPIC7vaHD7ucwC+cUGdEU6WV9qkef9WaSNMzIs5DZ8b6GFOolkSOgvky/nPtp2B2CPU1dWbSZ2VThuWCh5xDS7N/O73QJGSYjwNadBVRiUqJRLk0j1YWmZm1PSKxsZGcyYCR02Vr55irW+F+/zAX+n6CaSmJUx8EW2ndpY+6f3lmLxJcvmK1eZU7GQa29bWVnnxUkSu27jZDIRhr8FT7vJP+uXBE3PAukioeMnuMqmrAgErYM8A2bUgpt7ekkNmbJ3qSI0ZZxcCXDc3N5sFfobfwWfwHQjCCH8DfwvLjSogU5Rv/ddgwBk4G75YwHQ8YWIoofxSTwfAx3IFQrYExnQ71gUhRI0ROuPnAzCw0v6NF+fAXct3j514JYUZvXUmFhPGb/k92HpnoeIeYXxlh8mWN2FaEh0IiEDSsjhhYr0fwkCYuKlTvg4ic8AM5Xd/JDq9Qn35czoTr0C0bDsjlJ4POK+F/w3reofaFt/0IANZtAnjL0DwZIigDRk1IZY+oaJCZyICYVUI5U1maU+FE4HP4Dvmdyl/2/zbsJGUsKpaBEEQBEEQBEEQBEEQBEEQJB74HxVC9ofhH83GAAAAAElFTkSuQmCC" alt="menu" />
        </>
        ) : (
        <>
            Moses's Journey <img src="data:image/png;base64,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" alt="menu" />
        </>
        )}
            </button>
            {visibleSections.moses && (
            <>
            <section className="paper moses-egypt">
            <button onClick={() => toggleVisibility('moses-egypt')}>
                
                {visibleSection === 'moses-egypt' ? 'Hide Section' : "Egypt: The Starting Point of Moses’ Journey ▼"}
            </button>
            {visibleSection === 'moses-egypt' && (
                <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vRqh1Vi1qYzgOnTPp8FmkozZoJZbPUb2aheT1bgq7WHk20jQgblZjBLuon55zEz5KtcAfsbSB_2YMnm/pub?embedded=true"
                title="Egypt: The Starting Point of Moses’ Journey"
                className="research-iframe"
                ></iframe>
            )}
            </section>

            <section className="paper moses-midian">
            <button onClick={() => toggleVisibility('moses-midian')}>
                
                {visibleSection === 'moses-midian' ? 'Hide Section' : "Midian: A Place of Refuge and Divine Calling ▼"}
            </button>
            {visibleSection === 'moses-midian' && (
                <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vQjFSVzO4Q88v4Jdxr9dZEsQau5vBe19jS5Om_5n6CvjIasRWClWkhSQnt_Sr0BfQxv-Vwb4EzJWNoP/pub?embedded=true"
                title="Midian: A Place of Refuge and Divine Calling"
                className="research-iframe"
                ></iframe>
            )}
            </section>

            <section className="paper red-sea">
            <button onClick={() => toggleVisibility('red-sea')}>
                
                {visibleSection === 'red-sea' ? 'Hide Section' : "The Red Sea: A Miraculous Crossing ▼"}
            </button>
            {visibleSection === 'red-sea' && (
                <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vTswQXrPRaGgLekyFXXSOJNyt992KEj2PaRFlzGS6wWprZ0Ua58_eiUh-XCVSVo0Ur_GFsEpnHwbSY4/pub?embedded=true"
                title="The Red Sea: A Miraculous Crossing"
                className="research-iframe"
                ></iframe>
            )}
            </section>

            <section className="paper sinai">
            <button onClick={() => toggleVisibility('sinai')}>
                
                {visibleSection === 'sinai' ? 'Hide Section' : "Mount Sinai (Horeb): The Mountain of Covenant ▼"}
            </button>
            {visibleSection === 'sinai' && (
                <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vSOsnCyA0GJjcrwsQ3fV0QOaMXepztrp1jKnwUgEi1C2BufGsPXdPHiXQM3Gdf2Wsb_xXk2yTnZ5sOm/pub?embedded=true"
                title="Mount Sinai (Horeb): The Mountain of Covenant"
                className="research-iframe"
                ></iframe>
            )}
            </section>

            <section className="paper wilderness">
            <button onClick={() => toggleVisibility('wilderness')}>
                
                {visibleSection === 'wilderness' ? 'Hide Section' : "The Wilderness Wanderings: A Journey of Faith and Testing ▼"}
            </button>
            {visibleSection === 'wilderness' && (
                <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vT8mcqwSV357lGUfz4WDBXKN-X_9tkOBqMmGEV0MvVWb35iWUSHZC01UHXiM4B21NAfOG6zj_2whr0B/pub?embedded=true"
                title="The Wilderness Wanderings: A Journey of Faith and Testing"
                className="research-iframe"
                ></iframe>
            )}
            </section>

            <section className="paper moses-borders">
            <button onClick={() => toggleVisibility('moses-borders')}>
                
                {visibleSection === 'moses-borders' ? 'Hide Section' : "The Borders of the Promised Land: Anticipation and Transition ▼"}
            </button>
            {visibleSection === 'moses-borders' && (
                <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vTjJKz2P53vHOMMAuLfBhm8ZraeEUv2pPr_lSvvIAx3hSclBmB9aQuFOAlQGezOjDX5w0nO4L0iiNhx/pub?embedded=true"
                title="The Borders of the Promised Land: Anticipation and Transition"
                className="research-iframe"
                ></iframe>
            )}
            </section>
            </> )}
      </div>
    </div>
        );
        }

export default Paper;


