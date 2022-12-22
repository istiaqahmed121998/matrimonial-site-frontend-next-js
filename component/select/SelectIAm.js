const SelectIAm = (props) => {
    return (
        <select defaultValue={props.select} onChange={(event) => props.handleChange(event.target.value)}>
          <option value="self">Self</option>
          <option value="father">Father</option>
          <option value="mother">Mother</option>
          <option value="sister">Sister</option>
          <option value="brother">Brother</option>
          <option value="uncle">Uncle</option>
          <option value="aunty">Aunty</option>
          <option value="relative">Relative</option>
          <option value="other">Other</option>
        </select>
      );
}
 
export default SelectIAm;

