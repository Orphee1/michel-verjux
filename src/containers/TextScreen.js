import React from "react";
import { Link } from "react-router-dom";

import "../styles/styles.css";

const id = "4533456";

export default function TextScreen() {
  return (
    <div className="texts-page">
      <div className="menu-text"></div>
      <div className="bloc-text-container">
        <Link to={"/selected-text/" + id}>
          <div className="bloc-text">
            <h4 className="texts-page-title">
              <span className="guill">"</span>
              Trois notes numérotées à mon nombre de jours de vie
            </h4>
            <div className="text-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                finibus commodo accumsan. Phasellus ultricies semper ligula, nec
                maximus ipsum pretium vitae. Integer aliquet facilisis semper.
                Suspendisse ultrices condimentum laoreet. Cras sit amet aliquam
                mi, quis maximus odio. Pellentesque sagittis non turpis sed
                elementum. Nullam id ligula tincidunt, vestibulum purus sit
                amet, finibus nisl. Vivamus et erat felis. Sed nec tincidunt
                odio. Sed at cursus augue. Maecenas dignissim enim lorem, ac
                euismod tortor euismod vel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nulla finibus commodo accumsan.
                Phasellus ultricies semper ligula, nec maximus ipsum pretium
                vitae. Integer aliquet facilisis semper. Suspendisse ultrices
                condimentum laoreet. Cras sit amet aliquam mi, quis maximus
                odio. Pellentesque sagittis non turpis sed elementum. Nullam id
                ligula tincidunt, vestibulum purus sit amet, finibus nisl.
                Vivamus et erat felis. Sed nec tincidunt odio. Sed at cursus
                augue. Maecenas dignissim enim lorem, ac euismod tortor euismod
                vel. Donec ornare pretium neque sed blandit. Nunc eget commodo
                justo. Integer interdum egestas mi, sed efficitur ligula congue
                nec. Proin mattis augue metus, at rhoncus nunc sodales ut.
              </p>
            </div>
            <p className="texts-page-legend">
              Notes numérotées à mon nombre de jours de vie, notes n° 9 987, n°
              10 042 et n° 10 054, rééd. Michel Verjux, Morceaux réfléchis.
              Écrits 1977-2011, op. cit., p. 172 et 753.{" "}
            </p>
          </div>
        </Link>
      </div>
      <div className="bloc-other-text">
        <div className="other-text">
          <h5 className="">
            {" "}
            <span style={{ fontWeight: "bold", fontSize: "2.5rem" }}>"</span>
            Titre autre texte
          </h5>
          <p>
            Notes numérotées à mon nombre de jours de vie, notes n° 9 987, n° 10
            042 et n° 10 054, rééd. Michel Verjux, Morceaux réfléchis. Écrits
            1977-2011, op. cit., p. 172 et 753.
          </p>
        </div>
        <div className="other-text">
          <h5>
            <span style={{ fontWeight: "bold", fontSize: "2.5rem" }}>"</span>
            Titre autre texte
          </h5>
          <p>
            Notes numérotées à mon nombre de jours de vie, notes n° 9 987, n° 10
            042 et n° 10 054, rééd. Michel Verjux, Morceaux réfléchis. Écrits
            1977-2011, op. cit., p. 172 et 753.
          </p>
        </div>
        <div className="other-text">
          <h5>
            <span style={{ fontWeight: "bold", fontSize: "2.5rem" }}>"</span>
            Titre autre texte
          </h5>
          <p>
            Notes numérotées à mon nombre de jours de vie, notes n° 9 987, n° 10
            042 et n° 10 054, rééd. Michel Verjux, Morceaux réfléchis. Écrits
            1977-2011, op. cit., p. 172 et 753.
          </p>
        </div>
        <div className="other-text">
          <h5>
            <span style={{ fontWeight: "bold", fontSize: "2.5rem" }}>"</span>
            Titre autre texte
          </h5>
          <p>
            Notes numérotées à mon nombre de jours de vie, notes n° 9 987, n° 10
            042 et n° 10 054, rééd. Michel Verjux, Morceaux réfléchis. Écrits
            1977-2011, op. cit., p. 172 et 753.
          </p>
        </div>
        <div className="other-text">
          <h5>
            <span style={{ fontWeight: "bold", fontSize: "2.5rem" }}>"</span>
            Titre autre texte
          </h5>
          <p>
            Notes numérotées à mon nombre de jours de vie, notes n° 9 987, n° 10
            042 et n° 10 054, rééd. Michel Verjux, Morceaux réfléchis. Écrits
            1977-2011, op. cit., p. 172 et 753.
          </p>
        </div>
        <div className="other-text">
          <h5>
            <span style={{ fontWeight: "bold", fontSize: "2.5rem" }}>"</span>
            Titre autre texte
          </h5>
          <p>
            Notes numérotées à mon nombre de jours de vie, notes n° 9 987, n° 10
            042 et n° 10 054, rééd. Michel Verjux, Morceaux réfléchis. Écrits
            1977-2011, op. cit., p. 172 et 753.
          </p>
        </div>
      </div>
    </div>
  );
}
