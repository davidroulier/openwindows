const calculateDewPoint = ({
  temperature,
  humidity,
}: { temperature: number; humidity: number }): number => {
  const a = 17.27;
  const b = 237.7;

  const gamma =
    (a * temperature) / (b + temperature) + Math.log(humidity / 100);

  // Calculate dew point
  const dewPoint = (b * gamma) / (a - gamma);

  return dewPoint;
};

export default calculateDewPoint;
