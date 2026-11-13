// Markup of the invitation updated with Rohit & Sucheta's card details
export default function Page() {
  return (
    <>
      <div id="opening">
        <video
          className="open-video"
          id="introVideo"
          playsInline
          webkit-playsinline=""
          preload="auto"
          muted
          poster="assets/opening-poster.jpg"
          aria-hidden="true"
        >
          <source src="assets/opening.mp4" type="video/mp4" />
        </video>
        <div className="opening-shade"></div>
        <div className="opening-ui" id="openingUI">
          <div className="invitation-shloka" style={{ color: '#f6d889', fontFamily: 'Cinzel, serif', fontSize: '13px', letterSpacing: '0.15em', maxWidth: '340px', lineHeight: 1.6, textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}>
            <div>卐 || Shree Ganeshay Namah || 卐</div>
            <div style={{ fontSize: '11px', marginTop: '6px', opacity: 0.9 }}>
              Vighna Haran Mangal Karan, Shri Ganpati Maharaj |<br />
              Pratham Nimantran Aapko, Pooran Keejiye Kaaj ||
            </div>
          </div>
          <button className="open-btn" id="openBtn">Open Invitation</button>
        </div>
      </div>

      <div id="dissolve"></div>

      <main>
        {/* BLESSINGS & INVITATION SECTION */}
        <section className="section" id="blessings" style={{ backgroundImage: "url('assets/06-temple-book.png')" }}>
          <div className="content blessings-raw-content">
          

            {/* Shloka in Raw Text */}
            <div className="shloka-raw">
              <div className="shloka-raw-title">
                卐 “Shree Ganeshay Namah” 卐
              </div>
            </div>

            {/* Heavenly Blessings */}
            <div className="blessings-raw-intro">
              With the heavenly blessings of
            </div>
            <div className="blessings-raw-ancestors">
              Late Smt. Dharmo Devi &amp; Late Sh. Sain Dass
            </div>

            <div className="orn">卐</div>

            {/* Host Parents */}
            <div className="blessings-raw-hosts">
              Smt. Shiksha Devi &amp; Hony Capt. Rajesh Kumar
            </div>
            <p className="blessings-raw-invite">
              take immense joy &amp; pride in inviting you to the wedding ceremony of their beloved son
            </p>
          </div>
          <div className="scroll-cue" aria-hidden="true">SCROLL TO EXPLORE</div>
        </section>

        {/* GROOM SECTION */}
        <section className="section" id="groom" style={{ backgroundImage: "url('assets/01-groom-vesti.png')" }}>
          <div className="content">
            <div className="eyebrow role-heading">Groom</div>
            <div className="name">Rohit</div>
            <div className="relation">
              {"S/o Smt. Shiksha Devi & Hony Capt. Rajesh Kumar"}
            </div>
          </div>
        </section>

        {/* BRIDE SECTION */}
        <section className="section" id="bride" style={{ backgroundImage: "url('assets/02-bride-saree.png')" }}>
          <div className="content">
            <div className="eyebrow role-heading">Bride</div>
            <div className="name">Sucheta</div>
            <div className="relation">
              {"D/o Smt. Kiran Bala & Sh. Satish Kumar"}
            </div>
          </div>
        </section>

        {/* SAVE THE DATE / SCRATCH CARD */}
        <section className="section" id="scratch">
          <div className="content">
            <div className="script">Save the Date</div>
            <div className="scratch-card" id="scratchCard">
              <div className="scratch-under">
                <div className="scratch-kicker">WEDDING CELEBRATIONS</div>
                <div className="date">12 DECEMBER 2026</div>
                <div className="day">SATURDAY</div>
              </div>
              <canvas className="scratch-canvas" id="scratchCanvas"></canvas>
            </div>
            <div className="scratch-hint">Scratch to reveal ✨</div>
            <div className="burst" id="burst"></div>
          </div>
        </section>

        {/* GOLDEN MOMENTS / EVENTS */}

        {/* Monday 7th December - Lunch & Jagran */}
        <section className="section" id="event-jagran" style={{ backgroundImage: "url('assets/03-thali-moment.png')" }}>
          <div className="content">
            <div className="event-card editorial-card">
              <div className="event-kicker">GOLDEN MOMENTS</div>
              <div className="event-date">
                {"7 "}<span>DECEMBER</span>{" 2026"}
              </div>
              <div className="event-day">MONDAY</div>
              <div className="gold-rule"></div>

              <div className="event-row">
                <span className="event-icon">🍲</span>
                <div>
                  <b>LUNCH</b>
                  <strong>2:00 PM</strong>
                </div>
              </div>

              <div className="event-row">
                <span className="event-icon">🪔</span>
                <div>
                  <b>JAGRAN</b>
                  <strong>9:00 PM</strong>
                </div>
              </div>

              <div className="event-row">
                <span className="event-icon">⌖</span>
                <div>
                  <b>VENUE</b>
                  <strong>At Residence</strong>
                  <p>Rattan Colony, Gandhla Lahri (Pathankot)</p>
                </div>
              </div>

              <a
                className="map-btn"
                target="_blank"
                rel="noopener"
                href="https://www.google.com/maps/search/?api=1&query=Rattan+Colony%2C+Gandhla+Lahri%2C+Pathankot"
              >
                <span className="map-symbol">⌖</span> Open Map
              </a>
            </div>
          </div>
        </section>

        {/* Thursday 10th December - Haldi & Jaago */}
        <section className="section" id="event-haldi-jaago" style={{ backgroundImage: "url('assets/04-temple-kulam.png')" }}>
          <div className="content">
            <div className="event-card editorial-card">
              <div className="event-kicker">GOLDEN MOMENTS</div>
              <div className="event-date">
                {"10 "}<span>DECEMBER</span>{" 2026"}
              </div>
              <div className="event-day">THURSDAY</div>
              <div className="gold-rule"></div>

              <div className="event-row">
                <span className="event-icon">💛</span>
                <div>
                  <b>HALDI</b>
                  <strong>12:30 PM</strong>
                </div>
              </div>

              <div className="event-row">
                <span className="event-icon">✨</span>
                <div>
                  <b>JAAGO</b>
                  <strong>7:00 PM</strong>
                </div>
              </div>

              <div className="event-row">
                <span className="event-icon">⌖</span>
                <div>
                  <b>VENUE</b>
                  <strong>At Residence</strong>
                  <p>Rattan Colony, Gandhla Lahri (Pathankot)</p>
                </div>
              </div>

              <a
                className="map-btn"
                target="_blank"
                rel="noopener"
                href="https://www.google.com/maps/search/?api=1&query=Rattan+Colony%2C+Gandhla+Lahri%2C+Pathankot"
              >
                <span className="map-symbol">⌖</span> Open Map
              </a>
            </div>
          </div>
        </section>

        {/* Friday 11th December - Shagun */}
        <section className="section" id="event-shagun" style={{ backgroundImage: "url('assets/05-dinner-stage.png')" }}>
          <div className="content">
            <div className="event-card editorial-card">
              <div className="event-kicker">GOLDEN MOMENTS</div>
              <div className="event-date">
                {"11 "}<span>DECEMBER</span>{" 2026"}
              </div>
              <div className="event-day">FRIDAY</div>
              <div className="gold-rule"></div>

              <div className="event-row">
                <span className="event-icon">🎁</span>
                <div>
                  <b>SHAGUN</b>
                  <strong>12:30 PM</strong>
                </div>
              </div>

              <div className="event-row">
                <span className="event-icon">⌖</span>
                <div>
                  <b>VENUE</b>
                  <strong>Virasat Resort</strong>
                  <p>Gosainpur, Pathankot</p>
                </div>
              </div>

              <a
                className="map-btn"
                target="_blank"
                rel="noopener"
                href="https://www.google.com/maps/search/?api=1&query=Virasat+Resort%2C+Gosainpur%2C+Pathankot"
              >
                <span className="map-symbol">⌖</span> Open Map
              </a>
            </div>
          </div>
        </section>

        {/* Saturday 12th December - Departure of Barat */}
        <section className="section" id="event-barat" style={{ backgroundImage: "url('assets/04-temple-kulam.png')" }}>
          <div className="content">
            <div className="event-card editorial-card dinner-card">
              <div className="event-kicker">THE WEDDING DAY</div>
              <div className="event-date">
                {"12 "}<span>DECEMBER</span>{" 2026"}
              </div>
              <div className="event-day">SATURDAY</div>
              <div className="gold-rule"></div>

              <div className="event-row">
                <span className="event-icon">🎺</span>
                <div>
                  <b>DEPARTURE OF BARAT</b>
                  <strong>8:00 PM</strong>
                </div>
              </div>

              <div className="event-row">
                <span className="event-icon">⌖</span>
                <div>
                  <b>VENUE</b>
                  <strong>Rockland Resort</strong>
                  <p>Dinanagar, Pathankot</p>
                </div>
              </div>

              <a
                className="map-btn"
                target="_blank"
                rel="noopener"
                href="https://www.google.com/maps/search/?api=1&query=Rockland+Resort%2C+Dinanagar%2C+Pathankot"
              >
                <span className="map-symbol">⌖</span> Open Map
              </a>
            </div>
          </div>
        </section>

        {/* MESSAGE & FAMILY DETAILS SECTION */}
        <section className="section" id="message">
          <div className="content">
            <div className="panel">
              <div className="eyebrow">From our hearts</div>
              <div className="script">A Message for You</div>
              <div className="orn">❦</div>
              <div className="guest-message">
                “Your presence, blessings and love will make our celebration truly complete.”
              </div>
              <div className="orn">❦</div>
              <div className="name" style={{ fontSize: "32px", marginBottom: "20px" }}>
                {"Rohit & Sucheta"}
              </div>

              {/* Family Flowers */}
              <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid rgba(246,216,137,0.3)' }}>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '0.22em', color: '#f7d985', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Family Flowers
                </div>
                <div style={{ fontSize: '18px', color: '#fff1cd', fontStyle: 'italic' }}>
                  Amira, Aviraj, Himanshi, Samaira, Samiley
                </div>
              </div>

              {/* Warm Regards */}
              <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid rgba(246,216,137,0.2)' }}>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '0.22em', color: '#f7d985', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Warm Regards
                </div>
                <div style={{ fontSize: '17px', color: '#ffeec5' }}>
                  Nanke &amp; Dadke
                </div>
              </div>

              {/* RSVP Details */}
              <div style={{ marginTop: '22px', padding: '16px', background: 'rgba(255,246,215,0.06)', borderRadius: '16px', border: '1px solid rgba(246,216,137,0.35)' }}>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '12px', letterSpacing: '0.25em', color: '#f7d985', fontWeight: 600, marginBottom: '6px' }}>
                  R.S.V.P
                </div>
                <div style={{ fontSize: '19px', color: '#fff6d7', fontWeight: 500, marginBottom: '8px' }}>
                  All Chandal Family
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '15px', color: '#ffe49f', letterSpacing: '0.05em' }}>
                  <a href="tel:8493871572" style={{ color: 'inherit', textDecoration: 'none' }}>📞 8493871572</a>
                  <a href="tel:7837507117" style={{ color: 'inherit', textDecoration: 'none' }}>📞 7837507117</a>
                  <a href="tel:9878841175" style={{ color: 'inherit', textDecoration: 'none' }}>📞 9878841175</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COUNTDOWN */}
        <section className="section" id="countdown">
          <div className="content countdown-content">
            <div className="script">The Big Day</div>
            <div className="countdown-sub">{"COUNTING DOWN TO ROHIT & SUCHETA"}</div>
            <div className="countdown-box">
              <div className="count-unit"><strong id="cdDays">0</strong><span>DAYS</span></div>
              <div className="count-sep">:</div>
              <div className="count-unit"><strong id="cdHours">0</strong><span>HOURS</span></div>
              <div className="count-sep">:</div>
              <div className="count-unit"><strong id="cdMinutes">0</strong><span>MIN</span></div>
              <div className="count-sep">:</div>
              <div className="count-unit"><strong id="cdSeconds">0</strong><span>SEC</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="footer-line">See you there</div>
        <div className="footer-copy">With love, laughter, and a beautiful beginning to forever.</div>
        <div className="made">With best compliments from Chandal Family</div>
      </footer>

      <audio id="bgMusic" preload="auto" loop>
        <source src="assets/song.webm" type="audio/webm" />
      </audio>
      <button id="music-control" className="music-disabled" aria-label="Turn background music on or off">
        <span className="music-pill">
          <span className="music-icon">♫</span>
          <span id="musicText">MUSIC</span>
          <span className="music-state" id="musicState">OFF</span>
        </span>
      </button>
    </>
  )
}
