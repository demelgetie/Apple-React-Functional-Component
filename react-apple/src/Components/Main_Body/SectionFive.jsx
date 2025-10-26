import React from "react";
import tvLogo from "../../assets/images/icons/apple-tv-logo.png";
import banker from "../../assets/images/home/banker.png";
import watchSeries5Logo from "../../assets/images/icons/watch-series5-logo.png";

function SectionFive() {
  return (
    // <!-- Fifth section starts here -->
    <section class="fifth-heghlight-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="left-side-wrapper col-sm-12 col-md-6">
            <div class="left-side-container">
              <div class="top-logo-wrapper">
                <div class="logo-wrapper">
                  <img src={tvLogo} />
                </div>
              </div>

              <div class="tvshow-logo-wraper">
                <img src={banker} />
              </div>

              <div class="watch-more-wrapper">
                <a href="#">Watch now on the Apple TV App</a>
              </div>
            </div>
          </div>
          <div class="right-side-wrapper col-sm-12 col-md-6">
            <div class="right-side-container">
              <div class="top-logo-wrapper">
                <div class="logo-wrapper">
                  <img src={watchSeries5Logo} />
                </div>
              </div>
              <div class="description-wraper">
                With the Always-On Retina display.
                <br />
                You’ve never seen a watch like this.
              </div>
              <div class="links-wrapper">
                <ul>
                  <li>
                    <a href="">Learn more</a>
                  </li>
                  <li>
                    <a href="">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- Fifth section ends here -->
  );
}

export default SectionFive;
