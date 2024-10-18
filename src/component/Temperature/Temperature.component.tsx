import { type FC, useEffect, useState } from "react";
import type { TCalculateDewpointParams } from "../../typing";

interface IProps {
  onCalculateDewpoint: (params: TCalculateDewpointParams) => void;
}

export const Temperature: FC<IProps> = ({ onCalculateDewpoint }) => {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);

  useEffect(() => {
    if (!temperature || !humidity) return;
    return onCalculateDewpoint({ temperature, humidity });
  }, [temperature, humidity, onCalculateDewpoint]);

  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <label
          htmlFor="temperature"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Temp&eacute;rature
        </label>
        <input
          id="temperature"
          required
          type="number"
          placeholder="Temp&eacute;rature"
          onChange={(e) => setTemperature(Number(e.target.value))}
          step="0.1"
          className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        />
      </div>
      <div>
        <label
          htmlFor="humidity"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Humidit&eacute;
        </label>
        <input
          id="humidity"
          required
          type="number"
          placeholder="Humidit&eacute;"
          onChange={(e) => setHumidity(Number(e.target.value))}
          step="1"
          className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        />
      </div>
    </div>
  );
};
