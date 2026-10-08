const markets = ['Cleveland, OH','Detroit, MI','Indianapolis, IN','Memphis, TN','Birmingham, AL','Kansas City, MO'];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="/"><span className="mark">O</span><span>ORVANTA<small>PROPERTY EXCHANGE</small></span></a>
        <nav><a href="#opportunities">Opportunities</a><a href="#sell">Sell Your Property</a><a href="#investors">Investors</a><a href="#markets">Markets</a><a href="#about">About</a></nav>
        <a className="navCta" href="#investors">Join Investor Network</a>
      </header>

      <section className="hero">
        <div className="eyebrow">NATIONWIDE REAL ESTATE OPPORTUNITIES</div>
        <h1>Connecting Property Owners With <em>Investment Opportunities.</em></h1>
        <p>Orvanta Property Exchange identifies off-market residential opportunities and connects property owners with qualified real estate investors across growing U.S. markets.</p>
        <div className="actions"><a className="primary" href="#sell">Tell Us About Your Property</a><a className="secondary" href="#investors">I'm an Investor</a></div>
        <div className="trust"><span>Off-Market Focus</span><span>Nationwide Reach</span><span>Investor-Driven Analysis</span></div>
      </section>

      <section className="stats">
        <div><b>01</b><span>Property Owners</span><p>A straightforward way to present a property for consideration.</p></div>
        <div><b>02</b><span>Opportunity Analysis</span><p>We evaluate property fundamentals and investor fit.</p></div>
        <div><b>03</b><span>Investor Network</span><p>Qualified opportunities are matched with relevant buyers.</p></div>
      </section>

      <section className="section" id="opportunities">
        <div className="sectionHead"><div><span className="kicker">INVESTMENT OPPORTUNITIES</span><h2>Built for disciplined real estate investors.</h2></div><p>Our focus is practical residential real estate: understandable acquisition costs, realistic renovation assumptions and rental demand.</p></div>
        <div className="cards">
          <article><span className="tag">COMING SOON</span><h3>Single-Family Opportunities</h3><p>Off-market homes evaluated for rental and value-add investment strategies.</p><a href="#investors">Get deal notifications →</a></article>
          <article><span className="tag">INVESTOR FOCUSED</span><h3>Clear Deal Information</h3><p>Property facts, estimated rents, renovation considerations and comparable-market context.</p><a href="#investors">Join the network →</a></article>
          <article><span className="tag">TARGETED MATCHING</span><h3>Deals That Fit Your Buy Box</h3><p>Tell us the markets, price range and property profile you want to acquire.</p><a href="#investors">Submit criteria →</a></article>
        </div>
      </section>

      <section className="split" id="sell">
        <div><span className="kicker">FOR PROPERTY OWNERS</span><h2>Considering selling a property?</h2><p>Share the basics with Orvanta. We review the property and determine whether it may fit the criteria of investors in our network.</p><ul><li>No obligation to submit a property</li><li>Residential properties in markets nationwide</li><li>Clear communication throughout the process</li></ul></div>
        <form><h3>Tell Us About Your Property</h3><input placeholder="Property address" /><div className="row"><input placeholder="City" /><input placeholder="State" /></div><select defaultValue=""><option value="" disabled>Property condition</option><option>Move-in ready</option><option>Needs light repairs</option><option>Needs significant repairs</option></select><input placeholder="Your desired price (optional)" /><div className="row"><input placeholder="Your name" /><input placeholder="Phone or email" /></div><button type="button">Submit Property</button><small>Submitting this form does not create an offer, contract, or obligation.</small></form>
      </section>

      <section className="dark" id="investors">
        <div><span className="kicker">FOR INVESTORS</span><h2>Build your acquisition pipeline.</h2><p>Join the Orvanta investor network and tell us exactly what you buy. As suitable opportunities become available, we can match them to your acquisition criteria.</p></div>
        <form><div className="row"><input placeholder="Name / Company" /><input placeholder="Email" /></div><input placeholder="Markets or ZIP codes you buy in" /><div className="row"><input placeholder="Purchase price range" /><input placeholder="Maximum rehab budget" /></div><select defaultValue=""><option value="" disabled>Primary strategy</option><option>Long-term rental</option><option>Fix and flip</option><option>Both</option></select><button type="button">Join Investor Network</button></form>
      </section>

      <section className="section" id="markets">
        <span className="kicker">MARKETS</span><h2>Focused on investable U.S. housing markets.</h2><div className="markets">{markets.map(m=><span key={m}>{m}</span>)}</div><p className="note">Market coverage will expand as opportunities and investor demand are verified.</p>
      </section>

      <section className="about" id="about"><span className="kicker">ABOUT ORVANTA</span><h2>A professional exchange between property opportunity and investor demand.</h2><p>Orvanta Property Exchange is designed to make residential investment opportunities easier to evaluate and easier to match. We focus on transparent information, practical underwriting and direct communication.</p></section>

      <footer><div className="brand"><span className="mark">O</span><span>ORVANTA<small>PROPERTY EXCHANGE</small></span></div><p>Real estate opportunity sourcing and investor connections.</p><p className="legal">Orvanta Property Exchange is not representing itself as a real estate brokerage. Availability, property information, projections and investment outcomes are not guaranteed. Additional disclosures may apply by jurisdiction.</p><p>© 2026 Orvanta Property Exchange. All rights reserved.</p></footer>
    </main>
  );
}