
function SelectStatus(props) {
  return (
    <select defaultValue={props.select} onChange={(event) => props.handleChange(event.target.value)}>
      <option value="Single">Single</option>
      <option value="Divorced">Divorced</option>
      <option value="Married">Married</option>
    </select>
  );
}

export default SelectStatus;
