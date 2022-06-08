import { Select } from "antd";

const { Option } = Select;

const CountrySelect = () => {
  const countrys = [
    "Baden-Würtenberg",
    "Bayern",
    "Berlin",
    "Brandenburg",
    "Bremen",
    "Hamburg",
    "Hessen",
    "Mecklenburg-Vorpommern",
    "Niedersachsen",
    "NRW",
    "Rheinland-Pfalz",
    "Saarland",
    "Sachsen",
    "Sachsen-Anhalt",
    "Schleswig-Holstein",
    "Thüringen",
    "Luxemburg",
    "Österreich",
    "Schweiz",
    "Sonstiges",
  ];

  return (
    <Select>
      {countrys.map((country) => {
        return <Option key={country}>{country}</Option>;
      })}
    </Select>
  );
};

export default CountrySelect;
