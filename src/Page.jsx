// Markup of the invitation updated with Rohit & Sucheta's card details
export default function Page() {
  return (
    <>
      <div id="opening">
        <div className="opening-bg-doors" id="gateDoors" aria-hidden="true">
          <div className="royal-gate-door gate-left"></div>
          <div className="royal-gate-door gate-right"></div>
        </div>
        <div className="opening-shade"></div>

        <div className="opening-ui" id="openingUI">
          {/* Sacred Ganpati Welcome in Hindi */}
          <div className="opening-ganesh-mark">
            <span className="ganesh-text"> श्री गणेशाय नम  </span>
          </div>


          {/* Couple Names Only with Clean Luxurious Typography */}
          <div className="opening-couple-wrap">
            <div className="opening-couple-stacked">
              <span className="opening-name-text">Rohit</span>
              <span className="opening-love-symbol" title="love">❤</span>
              <span className="opening-name-text">Sucheta</span>
            </div>
          </div>

          <button
            className="open-btn"
            id="openBtn"
            onClick={() => {
              const op = document.getElementById('opening');
              if (op) op.classList.add('doors-open');
            }}
          >
            <span className="btn-text">Open Invitation</span>
            <span className="btn-shine"></span>
          </button>
        </div>
      </div>

      <div id="dissolve"></div>

      <main>
        {/* BLESSINGS & INVITATION SECTION */}
        <section className="section" id="blessings" style={{ backgroundImage: "linear-gradient(180deg, rgba(20, 9, 4, 0.45), rgba(20, 9, 4, 0.7)), url('assets/punjabi-grand-entry.jpg')" }}>
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
        <section className="section" id="groom" style={{ backgroundImage: "url('assets/punjabi-groom-dress.jpg')" }}>
          <div className="content">
            <div className="eyebrow role-heading">Groom</div>
            <div className="name">Rohit</div>
            <div className="relation">
              {"S/o Smt. Shiksha Devi & Hony Capt. Rajesh Kumar"}
            </div>
          </div>
        </section>

        {/* BRIDE SECTION */}
        <section className="section" id="bride" style={{ backgroundImage: "url('assets/punjabi-bride-dress.jpg')" }}>
          <div className="content">
            <div className="eyebrow role-heading">Bride</div>
            <div className="name">Sucheta</div>
            <div className="relation">
              {"D/o Smt. Kiran Bala & Sh. Satish Kumar"}
            </div>
          </div>
        </section>

        {/* SAVE THE DATE / SCRATCH CARD */}
        <section className="section" id="scratch" style={{ backgroundImage: "url('assets/north-haveli.jpg')" }}>
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

            {/* Couple Name below Save the Date */}
            <div className="save-date-couple">
              <div className="save-date-name">Rohit &amp; Sucheta</div>
              <div className="gold-rule" style={{ margin: '14px auto 0' }}></div>
            </div>
          </div>
        </section>

        {/* GOLDEN MOMENTS / EVENTS */}

        {/* Monday 7th December - Lunch & Jagran */}
        <section className="section" id="event-jagran" style={{ backgroundImage: "url('assets/north-diya.jpg')" }}>
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
        <section className="section" id="event-haldi-jaago" style={{ backgroundImage: "url('assets/north-marigold.jpg')" }}>
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
        <section className="section" id="event-shagun" style={{ backgroundImage: "url('assets/punjabi-shagun-stage.jpg')" }}>
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
        <section className="section" id="event-barat" style={{ backgroundImage: "url('assets/north-golden-night.jpg')" }}>
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
        <section className="section" id="message" style={{ backgroundImage: "linear-gradient(180deg, rgba(20, 9, 4, 0.45), rgba(20, 9, 4, 0.7)), url('assets/punjabi-family-pavilion.jpg')" }}>
          <div className="content">
            <div className="panel">
              <div className="eyebrow">From our hearts</div>
              <div className="script">A Message for You</div>
              <div className="orn">❦</div>
              <div className="guest-message">
                “Your presence, blessings and love will make our celebration truly complete.”
              </div>
              <div className="orn">❦</div>
              <div className="name couple-name-stylish">
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

        {/* INTERACTIVE WHATSAPP RSVP SECTION */}
        <section className="section" id="rsvp-interactive" style={{ backgroundImage: "url('assets/north-haveli.jpg')" }}>
          <div className="content">
            <div className="event-card editorial-card rsvp-interactive-card" style={{ maxWidth: '440px', padding: '26px 20px' }}>
              <div className="event-kicker">JOIN OUR CELEBRATION</div>
              <div className="script" style={{ fontSize: 'clamp(36px, 8vw, 54px)', color: '#ffe7a0', margin: '4px 0 8px' }}>
                Will You Attend?
              </div>
              <p style={{ fontSize: '14px', color: '#ffe9bd', margin: '0 auto 16px', maxWidth: '380px', lineHeight: 1.4, fontStyle: 'italic' }}>
                Please confirm your presence so we can warmly prepare for your arrival.
              </p>

              <form id="whatsappRsvpForm" className="rsvp-form" onSubmit={(e) => {
                e.preventDefault();
                const name = document.getElementById('rsvpGuestName')?.value?.trim() || '';
                const guests = document.getElementById('rsvpGuestCount')?.value || '1';
                const isAttending = document.querySelector('input[name="attendance"]:checked')?.value === 'Joyfully Attending';
                const wishes = document.getElementById('rsvpWishes')?.value?.trim() || '';

                if (!name) {
                  alert('Please enter your name.');
                  return;
                }

                // Construct full clear multi-line message
                let fullMessage = `Hi Rohit & Sucheta,\n\n` +
                  `This is ${name}.\n\n` +
                  (isAttending
                    ? `I am joyfully attending your wedding celebration!\nNumber of guests: ${guests}`
                    : `Warm congratulations! Regretfully, I will not be able to attend, but sending my heartfelt blessings.`);

                if (wishes) {
                  fullMessage += `\n\nWarm Wishes: ${wishes}`;
                }

                const encodedText = encodeURIComponent(fullMessage);
                const phone = '918493871572';
                window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`, '_blank');
              }}>
                <div className="form-group" style={{ marginBottom: '12px' }}>
                  <label htmlFor="rsvpGuestName" style={{ fontSize: '11px', marginBottom: '5px' }}>Your Name *</label>
                  <input
                    type="text"
                    id="rsvpGuestName"
                    required
                    placeholder="e.g. Rahul Sharma & Family"
                    className="rsvp-input"
                    style={{ padding: '9px 12px', fontSize: '14px' }}
                  />
                </div>

                <div className="form-row-grid" style={{ marginBottom: '12px', gap: '10px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor="rsvpGuestCount" style={{ fontSize: '11px', marginBottom: '5px' }}>Guests</label>
                    <select id="rsvpGuestCount" className="rsvp-select" style={{ padding: '9px 10px', fontSize: '13px' }}>
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="5+">5+ (Family)</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label style={{ fontSize: '11px', marginBottom: '5px' }}>Attendance</label>
                    <div className="radio-pill-group" style={{ gap: '4px' }}>
                      <label className="radio-pill" style={{ padding: '5px 8px', fontSize: '12px' }}>
                        <input type="radio" name="attendance" value="Joyfully Attending" defaultChecked />
                        <span>Attending 🎉</span>
                      </label>
                      <label className="radio-pill" style={{ padding: '5px 8px', fontSize: '12px' }}>
                        <input type="radio" name="attendance" value="Regretfully Decline" />
                        <span>Cannot attend</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '14px' }}>
                  <label htmlFor="rsvpWishes" style={{ fontSize: '11px', marginBottom: '5px' }}>Warm Wishes (Optional)</label>
                  <input
                    type="text"
                    id="rsvpWishes"
                    placeholder="Blessings or message for the couple..."
                    className="rsvp-input"
                    style={{ padding: '9px 12px', fontSize: '13px' }}
                  />
                </div>

                <button type="submit" className="confirm-rsvp-btn" style={{ padding: '12px 20px', fontSize: '12px' }}>
                  <span className="wa-icon">💬</span>
                  <span>Confirm RSVP on WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* COUNTDOWN */}
        <section className="section" id="countdown" style={{ backgroundImage: "linear-gradient(180deg,rgba(30,10,3,.45),rgba(30,10,3,.75)), url('assets/punjabi-bigday-night.jpg')" }}>
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
