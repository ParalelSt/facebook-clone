interface RangeSliderProps {
  min: string;
  max: string;
  step: string;
  value: string;
  onChange: (value: string) => void;
}

const RangeSlider = ({ min, max, step, value, onChange }: RangeSliderProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className="range-slider"
      type="range"
      min={min}
      step={step}
      max={max}
      value={value}
      onChange={handleOnChange}
    />
  );
};

export default RangeSlider;
