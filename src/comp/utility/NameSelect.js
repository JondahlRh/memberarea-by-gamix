import { Select } from "antd";

const { Option } = Select;

const CountrySelect = (props) => {
  const names = ["BluuBerry", "LuQQi", "WattVolt", "Tjörck", "DragZ"];

  return (
    <Select onChange={props.onChange}>
      {names.map((name) => {
        return <Option key={name}>{name}</Option>;
      })}
    </Select>
  );
};

export default CountrySelect;
