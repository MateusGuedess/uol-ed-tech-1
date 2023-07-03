import { useEffect, useState } from "react";

type Mouse = {
  x: number;
  y: number;
};

function MouseBlob() {
  const [mousePosition, setMousePosition] = useState<Mouse>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      className="blob w-72 h-80"
      style={{
        position: "absolute",
        transition: "0.5s linear",
        left: `${mousePosition.x - 150}px`,
        top: `${mousePosition.y - 150}px`,
      }}
    >
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
      >
        <path id="blob" fill="#a29bfe">
          <animate
            attributeName="d"
            dur="12000ms"
            repeatCount="indefinite"
            values="
            M438.5,319Q439,388,368,391Q297,394,243.5,415Q190,436,141,400.5Q92,365,46,307.5Q0,250,66,207Q132,164,164.5,125Q197,86,261,53.5Q325,21,384,65.5Q443,110,440.5,180Q438,250,438.5,319Z;
            M431.29782,308.19673Q411.22015,366.39345,354.62452,382.25449Q298.02888,398.11553,240.41335,427.86104Q182.79782,457.60655,132.25449,414.90437Q81.71117,372.20218,77.89538,311.10109Q74.0796,250,83.49102,193.11008Q92.90243,136.22015,144.95122,111.11008Q197,86,247.11008,95.16977Q297.22015,104.33955,342.84467,126.71856Q388.46918,149.09757,419.92233,199.54878Q451.37548,250,431.29782,308.19673Z;
            M439,322Q448,394,382.5,425Q317,456,247,465Q177,474,162.5,399Q148,324,107,287Q66,250,74,189Q82,128,139,105.5Q196,83,261,49Q326,15,358,81.5Q390,148,410,199Q430,250,439,322Z;
            M443.5,308.5Q411,367,354,380.5Q297,394,245.5,408.5Q194,423,145.5,392Q97,361,51,305.5Q5,250,63.5,203.5Q122,157,165,138Q208,119,250.5,118Q293,117,340.5,133.5Q388,150,432,200Q476,250,443.5,308.5Z;
            M416.5,315.5Q430,381,378,433Q326,485,252,477.5Q178,470,114.5,432Q51,394,61,322Q71,250,68.5,183.5Q66,117,127.5,89.5Q189,62,249.5,64Q310,66,367,94.5Q424,123,413.5,186.5Q403,250,416.5,315.5Z;
            M438.5,319Q439,388,368,391Q297,394,243.5,415Q190,436,141,400.5Q92,365,46,307.5Q0,250,66,207Q132,164,164.5,125Q197,86,261,53.5Q325,21,384,65.5Q443,110,440.5,180Q438,250,438.5,319Z;
        "
          ></animate>
        </path>
      </svg>
    </div>
  );
}

export default MouseBlob;
