import { useEffect, useMemo, useState } from "react";

function StarBackground() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : true
  );

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);
    const observer = new MutationObserver(() => {
      const nowDark = document.documentElement.classList.contains("dark");
      setIsDark(nowDark);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let index = 0; index < numberOfStars; index++) {
      newStars.push({
        id: index,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let index = 0; index < numberOfMeteors; index++) {
      newMeteors.push({
        id: index,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 50,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  const lightDecorations = useMemo(() => {
    const count = Math.max(
      12,
      Math.floor((window.innerWidth * window.innerHeight) / 35000)
    );
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 160 + 80,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.35 + 0.25,
    }));
  }, [isDark]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {isDark ? (
        <>
          {stars.map((star) => (
            <div
              key={star?.id}
              className="star animate-pulse-subtle"
              style={{
                width: `${star?.size}px`,
                height: `${star?.size}px`,
                left: `${star?.x}%`,
                top: `${star?.y}%`,
                opacity: star?.opacity,
                animationDuration: `${star?.animationDuration}s`,
              }}
            />
          ))}
          {meteors.map((meteor) => (
            <div
              key={meteor?.id}
              className="meteor animate-meteor"
              style={{
                width: `${meteor?.size * 50}px`,
                height: `${meteor?.size * 2}px`,
                left: `${meteor?.x}%`,
                top: `${meteor?.y}%`,
                animationDelay: meteor?.delay,
                animationDuration: `${meteor?.animationDuration}s`,
              }}
            />
          ))}
        </>
      ) : (
        <>
          {/* Sun */}
          <div
            className="sun-hoverable"
            style={{
              position: "absolute",
              right: "6vw",
              top: "6vh",
              zIndex: 0,
            }}
          >
            <div
              className="sun"
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                width: "220px",
                height: "220px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%) scale(0.9)",
              }}
            />
          </div>
          {/* Passing clouds */}
          {Array.from({ length: 6 }).map((_, i) => {
            const baseTop = 15 + i * 12 + Math.random() * 6;
            const height = 70 + Math.random() * 50;
            const width = 220 + Math.random() * 240;
            const delay = -Math.random() * 28;
            return (
              <div
                key={`cloud-${i}`}
                className="cloud"
                style={{
                  top: `${baseTop}vh`,
                  left: `-30vw`,
                  width: `${width}px`,
                  height: `${height}px`,
                  borderRadius: `${height}px`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${28 + i * 4}s`,
                }}
              >
                {/* cloud bubbles for organic shape */}
                <div
                  className="cloud-bubble"
                  style={{
                    width: `${height * 0.9}px`,
                    height: `${height * 0.9}px`,
                    left: `${width * 0.15}px`,
                    top: `${-height * 0.25}px`,
                  }}
                />
                <div
                  className="cloud-bubble"
                  style={{
                    width: `${height * 1.2}px`,
                    height: `${height * 1.2}px`,
                    left: `${width * 0.35}px`,
                    top: `${-height * 0.35}px`,
                  }}
                />
                <div
                  className="cloud-bubble"
                  style={{
                    width: `${height * 0.8}px`,
                    height: `${height * 0.8}px`,
                    left: `${width * 0.6}px`,
                    top: `${-height * 0.2}px`,
                  }}
                />
                <div
                  className="cloud-bubble"
                  style={{
                    width: `${height * 0.7}px`,
                    height: `${height * 0.7}px`,
                    left: `${width * 0.25}px`,
                    top: `${height * 0.05}px`,
                  }}
                />
                <div
                  className="cloud-bubble"
                  style={{
                    width: `${height * 0.6}px`,
                    height: `${height * 0.6}px`,
                    left: `${width * 0.55}px`,
                    top: `${height * 0.1}px`,
                  }}
                />
              </div>
            );
          })}
          {/* Occasional sparkles */}
          {Array.from({ length: 18 }).map((_, i) => {
            const size = Math.random() * 4 + 2;
            return (
              <div
                key={`ls-${i}`}
                className="light-sparkle"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  borderRadius: `${size}px`,
                  animationDelay: `${Math.random() * 4}s`,
                }}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default StarBackground;
