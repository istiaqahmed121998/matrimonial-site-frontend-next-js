
function SelectGender(props) {
   
        return (
            <select defaultValue={props.select} onChange={(event) => props.handleChange(event.target.value)}>
                <option value="gender">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
            </select>
        );
    
}
 
export default SelectGender;