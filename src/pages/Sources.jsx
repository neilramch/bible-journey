import React from 'react';
import './Sources.css';

function Sources() {
  return (
    <div className="sources-container">
      <header className="sources-header">
        <h1>Sources and References</h1>
        <p>A curated list of scholarly materials and resources for further exploration</p>
      </header>

      <main className="sources-content">
        <section className="sources-section">
          <h2>Biblical Commentaries</h2>
          <ul>
            <li>
              Wenham, G. J. (1987). <em>Genesis 1–15</em>. Word Biblical Commentary.
            </li>
            <li>
              Hamilton, V. P. (1995). <em>The Book of Genesis: Chapters 18–50</em>.
              Eerdmans.
            </li>
            <li>
              Alter, R. (2004). <em>The Five Books of Moses: A Translation with Commentary</em>. W. W. Norton & Company.
            </li>
          </ul>
        </section>

        <section className="sources-section">
          <h2>Archaeological Studies</h2>
          <ul>
            <li>
              Dever, W. G. (2001). <em>What Did the Biblical Writers Know and When Did They Know It?</em> Eerdmans.
            </li>
            <li>
              Finkelstein, I., & Silberman, N. A. (2001). <em>The Bible Unearthed: Archaeology's New Vision of Ancient Israel and the Origin of Its Sacred Texts</em>. Simon & Schuster.
            </li>
            <li>
              Hoffmeier, J. K. (1997). <em>Israel in Egypt: The Evidence for the Authenticity of the Exodus Tradition</em>. Oxford University Press.
            </li>
          </ul>
        </section>

        <section className="sources-section">
          <h2>Historical Context</h2>
          <ul>
            <li>
              Kitchen, K. A. (2003). <em>On the Reliability of the Old Testament</em>. Eerdmans.
            </li>
            <li>
              Matthews, V. H. (1991). <em>The Cultural World of the Bible</em>. Zondervan.
            </li>
            <li>
              Walton, J. H. (2001). <em>The NIV Application Commentary: Genesis</em>. Zondervan.
            </li>
          </ul>
        </section>

        <section className="sources-section">
          <h2>Digital Resources</h2>
          <ul>
            <li>
              <a href="https://biblearchaeology.org/" target="_blank" rel="noopener noreferrer">
                Associates for Biblical Research
              </a>
            </li>
            <li>
              <a href="https://www.biblicalarchaeology.org/" target="_blank" rel="noopener noreferrer">
                Biblical Archaeology Society
              </a>
            </li>
            <li>
              <a href="https://www.blueletterbible.org/" target="_blank" rel="noopener noreferrer">
                Blue Letter Bible
              </a>
            </li>
          </ul>
        </section>
      </main>

    </div>
  );
}

export default Sources;
