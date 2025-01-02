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
    <div>
      <div className="journey adam-eve">
        <button onClick={() => toggleSectionVisibility('adamEve')}>
          {visibleSections.adamEve ? 'Adam & Eve ▲' : 'Adam & Eve ▼'}
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
      <div className="journey abraham">
        <button onClick={() => toggleSectionVisibility('abraham')}>
          {visibleSections.abraham ? "Abraham's Journey ▲" : "Abraham's Journey ▼"}
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
    </div>
  );
}

export default Paper;


