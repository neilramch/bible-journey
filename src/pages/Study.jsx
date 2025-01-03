import React, { useState } from 'react';
import './Study.css';

function Study() {

  return (
    <div className="study-container">
      <header className="study-header">
        <h1>The Geography of Biblical Journeys</h1>
        <p>Understanding the significance of locations in biblical narratives</p>
      </header>

      <main className="study-content">
      
        {/* Introduction Section */}
        <section id="introduction" className="study-section">
          <h2>Introduction</h2>
          <p>
            Geography plays a critical role in understanding biblical texts. From the
            journeys of Abraham to the exodus led by Moses, locations provide not just
            physical backdrops but also theological and cultural significance. This study
            explores key geographical locations mentioned in Genesis and the Five Books
            of Moses, analyzing their historical, theological, and archaeological contexts.
          </p>
          <p>
            <strong>Research Questions:</strong>
            <ul>
              <li>How do geographical locations enhance the narratives in biblical texts?</li>
              <li>What archaeological evidence supports these locations?</li>
              <li>How does understanding these locations influence theological interpretation?</li>
            </ul>
          </p>
        </section>

        {/* Methodology Section */}
        <section id="methodology" className="study-section">
          <h2>Methodology</h2>
          <p>
            To create this study, a multi-step approach was employed:
          </p>
          <ol>
            <li>
              Data Collection: Key locations and events were identified from biblical
              texts, primarily Genesis and Exodus.
            </li>
            <li>
              Map Creation: An interactive map was created using Google My Maps,
              embedding theological, historical, and archaeological details for each
              marker.
            </li>
            <li>
              Source Analysis: Insights were drawn from biblical commentaries,
              archaeological studies, and scholarly research.
            </li>
          </ol>
          <p>
            Analytical tools like Google My Maps and academic databases were used to
            organize and visualize the data.
          </p>
        </section>

        {/* Analysis Section */}
        <section id="analysis" className="study-section">
          <h2>Analysis</h2>
          <p>
            This analysis focuses on three major aspects:
          </p>
          <h3>Theological Implications</h3>
          <p>
            Locations such as Mount Sinai and the Garden of Eden serve as symbols of
            divine revelation and human relationship with God. For example, Mount Sinai
            represents God's covenant with Israel, while the Garden of Eden illustrates
            humanity's original state and fall from grace.
          </p>

          <h3>Historical Context</h3>
          <p>
            Historical evidence supports the plausibility of certain locations. For
            example, the city of Ur, Abraham's birthplace, has been extensively excavated,
            revealing its prominence in ancient Mesopotamia. Similarly, the region of
            Goshen, where Joseph settled his family, aligns with records of Semitic
            peoples in Egypt during the Hyksos period.
          </p>

          <h3>Archaeological Insights</h3>
          <p>
            Archaeological findings provide tangible links to biblical narratives. Sites
            like Hebron and Shechem reveal evidence of ancient settlement patterns,
            bolstering their historical credibility as key locations in the patriarchal
            era.
          </p>
        </section>
     
        {/* Conclusion Section */}
        <section id="conclusion" className="study-section">
          <h2>Conclusion</h2>
          <p>
            This study demonstrates that geography is integral to understanding the
            theological and cultural richness of biblical texts. By exploring these
            locations, readers gain a deeper appreciation for the historical realities and
            spiritual messages embedded in the Bible.
          </p>
          <p>
            <strong>Future Research:</strong>
            <ul>
              <li>Expanding the map to include New Testament locations.</li>
              <li>Incorporating more advanced GIS tools for spatial analysis.</li>
              <li>Collaborating with biblical scholars for deeper theological insights.</li>
            </ul>
          </p>
        </section>
      </main>
    </div>
  );
}

export default Study;
