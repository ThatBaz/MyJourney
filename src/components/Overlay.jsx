import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            Barry's Journey
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>
          <p className="intro__scroll">Scroll to begin the journey</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Buckle up!
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear overlay--enable" : ""}`}>
        <p className="outro__text">Finally, Currently exploring 3D website design using Three JS..</p>
        <p className="outro__text">Check out my full portfolio!</p>
        <button
            className="explore"
            onClick={() => {
              window.open("https://thatbaz.github.io/site/", "_self");
            }}
          >
            Portfolio & Services
          </button>
      </div>
    </div>
  );
};
