import { ENERGIES } from "../utils/Constants";

const ColorLegend = () => {
  return (
    <div className="absolute md:right-4 md:bottom-8 mt-4 ml-4 ">
      <h3 className="text-white font-bold">Earthquake Energy</h3>
      {ENERGIES.map((energy, index) => (
        <div className="flex gap-2 items-center" key={index}>
          <div className={`h-2 w-2 rounded-full ${energy.style}`} />
          <p className="text-[#fff]">{energy.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ColorLegend;
