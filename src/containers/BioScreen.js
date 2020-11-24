import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Picture } from "react-responsive-picture";
import Axios from "axios";
import Cookie from "js-cookie";

import "../styles/styles.css";

// Components import
import SEO from "../components/SEO";
import BiblioLoader from "../components/BiblioLoader";

// Images import
import portrait from "../images/MichelVerjux2.jpg";
import portraits from "../images/MichelVerjux2s.jpg";
import famille1 from "../images/famille/famille1.png";
import ref1 from "../images/ref/ref1.jpg";
import ref2 from "../images/ref/ref2.jpg";
import ref3 from "../images/ref/ref3.jpg";
import ref4 from "../images/ref/ref4.jpg";
import ref5 from "../images/ref/ref5.jpg";
import ref6 from "../images/ref/ref6.jpg";
import ref7 from "../images/ref/ref7.jpg";
import ref8 from "../images/ref/ref8.png";
import ref9 from "../images/ref/ref9.jpg";
import ref10 from "../images/ref/ref10.jpg";
import ref11 from "../images/ref/ref11.jpg";
import ref12 from "../images/ref/ref12.jpg";
import ref13 from "../images/ref/ref13.jpg";
import ref14 from "../images/ref/ref14.jpg";
import ref15 from "../images/ref/ref15.jpg";
import ref16 from "../images/ref/ref16.jpg";
import ref17 from "../images/ref/ref17.jpg";
import ref18 from "../images/ref/ref18.jpg";
import ref19 from "../images/ref/ref19.jpg";
import ref20 from "../images/ref/ref20.jpg";
import ref21 from "../images/ref/ref21.jpg";
import ref22 from "../images/ref/ref22.jpg";
import ref23 from "../images/ref/ref23.jpg";
import ref24 from "../images/ref/ref24.jpg";
import ref25 from "../images/ref/ref25.jpg";

export default function BioScreen() {
  // Theme definition
  const [theme] = useContext(ThemeContext);
  const { themeSelected, themeOne, themeTwo } = theme;
  let option;
  switch (themeSelected) {
    case true:
      option = themeOne;
      break;
    case false:
      option = themeTwo;
      break;
    default:
      console.log("default");
  }

  const [biblios, setBiblios] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const token = Cookie.get("token");

  const fetchBiblios = async () => {
    try {
      const response = await Axios.get(
        process.env.REACT_APP_WEBADDRESS + "/biblio"
      );
      console.log(response.data);
      setBiblios(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchBiblios();
  }, []);

  return (
    <section className="bio-page" style={{ background: option.bg }}>
      <SEO title="Bio Page" description="About Michel Verjux" />
      <div className="bloc-image-reference">
        <h5 style={{ color: option.syntax }}>Références édifiantes</h5>

        <img src={ref1} alt="Fontenay" />
        <img src={ref2} alt="Pierro della Francesca" />
        <img src={ref3} alt="Caravage" />
        <img src={ref4} alt="De la Tour" />
        <img src={ref5} alt="Manet" />
        <img src={ref6} alt="Rodin" />
        <img src={ref7} alt="Cézanne" />
        <img src={ref8} alt="Peirce" />
        <img src={ref9} alt="Duchamp" />
        <img src={ref10} alt="Wittgenstein" />
        <img src={ref11} alt="Mondrian" />
        <img src={ref12} alt="Van Doesburg" />
        <img src={ref13} alt="Bachelard" />
        <img src={ref14} alt="Albert Camus René Char" />
        <img src={ref15} alt="Ponge" />
        <img src={ref16} alt="Mark di Suvero" />
        <img src={ref17} alt="Hugo Jehle" />
        <img src={ref18} alt="Barnett Newman" />
        <img src={ref19} alt="Jackson Pollock" />
        <img src={ref20} alt="Niele Toroni" />
        <img src={ref21} alt="Niele Toroni" />
        <img src={ref22} alt="François Morellet" />
        <img src={ref23} alt="François Morellet" />
        <img src={ref24} alt="Carl Andre" />
        <img src={ref25} alt="Daniel Buren" />
      </div>
      <div className="bloc-bio">
        <div>
          <Picture
            alt="Friends Michel Verjux"
            className=""
            sources={[
              {
                // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
                srcSet: ` ${portraits} 2x`,
                media: "(max-width: 1200px)",
                //     type: "image/jpeg"
              },
              {
                // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
                srcSet: ` ${portrait} 2x`,
                media: "(min-width: 1201px)",
                //     type: "image/jpeg"
              },
            ]}
          />
        </div>
        <div>
          <h5 style={{ color: option.syntax }}>Bio</h5>
          <p className="bio" style={{ color: option.syntax }}>
            Né en 1956 à Chalon-sur-Saône, en Bourgogne. Après une pratique du
            dessin et de la poésie (1968-1983), du théâtre (1976-1979) et de la
            performance (1979-1983), il réalise ses premiers "éclairages" en
            1983, création qu'il poursuit encore aujourd'hui. Diplômé de l'École
            des Beaux-Arts de Dijon en 1982, il enseigne, à partir de 1996, les
            arts plastiques à l'université Paris 1 Panthéon-Sorbonne.
          </p>
        </div>
        <div>
          <h5 style={{ color: option.syntax }}>Contact</h5>
          <p style={{ color: option.syntax }}>
            michel.verjux@gmail.com / 06 84 64 77 59.
          </p>
        </div>
        <div>
          <h5 style={{ color: option.syntax }}>Bibliographie</h5>
          {isLoading ? (
            <BiblioLoader />
          ) : (
            biblios.map((biblio, index) => {
              return (
                <p
                  className="biblio"
                  key={index}
                  style={{ color: option.syntax }}
                >
                  - <span style={{ color: option.syntax }}>{biblio.title}</span>
                  ,{" "}
                  <span style={{ color: option.syntax }}>{biblio.editor}</span>,{" "}
                  <span style={{ color: option.syntax }}>{biblio.collect}</span>
                  , <span style={{ color: option.syntax }}>{biblio.year}</span>.{" "}
                  {token && (
                    <button
                      className="delete-cross"
                      onClick={() => {
                        const deleteBiblio = async () => {
                          try {
                            const formData = new FormData();
                            formData.append("id", biblio._id);
                            const response = await Axios.post(
                              process.env.REACT_APP_WEBADDRESS +
                                "/biblio/delete",
                              formData,
                              {
                                headers: {
                                  Authorization: "Bearer " + token,
                                  "Content-Type": "multipart/form-data",
                                },
                              }
                            );
                            if (response.data) {
                              console.log(response.data);
                            }
                          } catch (error) {
                            console.log(error);
                            alert(error.message);
                          }
                        };
                        deleteBiblio();
                      }}
                    >
                      supprimer
                    </button>
                  )}
                </p>
              );
            })
          )}
        </div>
      </div>
      <div className="bloc-image-famille">
        <h5 style={{ color: option.syntax }}>Rencontres décisives</h5>
        <Picture
          alt="Friends Michel Verjux"
          className=""
          sources={[
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${famille1} 2x`,
              media: "(max-width: 1200px)",
              //     type: "image/jpeg"
            },
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${famille1} 2x`,
              media: "(min-width: 1201px)",
              //     type: "image/jpeg"
            },
          ]}
        />
        <Picture
          alt="Friends Michel Verjux"
          className=""
          sources={[
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${famille1} 2x`,
              media: "(max-width: 1200px)",
              //     type: "image/jpeg"
            },
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${famille1} 2x`,
              media: "(min-width: 1201px)",
              //     type: "image/jpeg"
            },
          ]}
        />
        <Picture
          alt="Friends Michel Verjux"
          className=""
          sources={[
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${famille1} 2x`,
              media: "(max-width: 1200px)",
              //     type: "image/jpeg"
            },
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${famille1} 2x`,
              media: "(min-width: 1201px)",
              //     type: "image/jpeg"
            },
          ]}
        />
        <Picture
          alt="Friends Michel Verjux"
          className=""
          sources={[
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${famille1} 2x`,
              media: "(max-width: 1200px)",
              //     type: "image/jpeg"
            },
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${famille1} 2x`,
              media: "(min-width: 1201px)",
              //     type: "image/jpeg"
            },
          ]}
        />
      </div>
    </section>
  );
}
