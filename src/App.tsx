import { useMemo, useState } from "react";
import Temperature from "./component/Temperature";
import calculateDewPoint from "./lib/calculate-dewpoint";
import type { TCalculateDewpointParams } from "./typing";

const TemperatureWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-1 border border-gray-100 rounded-lg p-6 gap-y-4 flex-col bg-white">
    {children}
  </div>
);

function App() {
  const [indoor, setIndoor] = useState<number | null>(null);
  const [outdoor, setOutdoor] = useState<number | null>(null);

  const handleOnCalculateIndoorDewpoint = (
    params: TCalculateDewpointParams,
  ) => {
    setIndoor(calculateDewPoint(params));
  };

  const handleOnCalculateOutdoorDewpoint = (
    params: TCalculateDewpointParams,
  ) => {
    setOutdoor(calculateDewPoint(params));
  };

  const shouldOpenWindows = useMemo(() => {
    if (!indoor || !outdoor) return null;
    return indoor > outdoor;
  }, [indoor, outdoor]);

  return (
    <div className="container mx-auto p-4 md:p-0 flex flex-col gap-y-8 md:pt-4 antialiased leading-tight">
      <p className="text-4xl font-bold text-center">
        Puis-je ouvrir mes fen&ecirc;tres pour a&eacute;rer ?
      </p>
      <p className="italic text-center">
        Vous le saurez bient&ocirc;t gr&acirc;ce &agrave; ce calculateur...
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
        <TemperatureWrapper>
          <span className="text-2xl">Conditions int&eacute;rieures</span>
          <Temperature onCalculateDewpoint={handleOnCalculateIndoorDewpoint} />
        </TemperatureWrapper>
        <TemperatureWrapper>
          <span className="text-2xl">Conditions ext&eacute;rieures</span>
          <Temperature onCalculateDewpoint={handleOnCalculateOutdoorDewpoint} />
        </TemperatureWrapper>
      </div>
      {shouldOpenWindows ? (
        <span
          className={`text-3xl font-bold flex justify-center ${shouldOpenWindows ? "text-green-500" : "text-red-500"}`}
        >
          {!shouldOpenWindows ? "Fermez les fenêtres" : "Ouvrez les fenêtres"}
        </span>
      ) : null}
    </div>
  );
}

export default App;
