import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import "./AddColorForm.css";
const AddColorForm = ({addColor}) => {
    const INITIAL_COLOR = {
		name: '',
		hex: ''
	};

    const [formData, setFormData]= useState(INITIAL_COLOR)
    const history = useHistory();
   

const handleChange= (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
        ...formData,
        [name]: value
        }))
}

const {hex, name} = formData;

const handleSubmit = (e) => {
    e.preventDefault();
    addColor({[name]: hex});
    setFormData(INITIAL_COLOR);
    history.push("/colors");
}



    return (
        <div>
<form onSubmit={handleSubmit}>
    <div>
    <label htmlFor="name">Color Name</label>
<input  name="name"
            id="name"
            placeholder="Enter color name"
            onChange={handleChange}
            value={name}
            />
            </div>
<div>
<label htmlFor="hex">Color value</label>
        <input
            type="color"
            name="hex"
            id="hex"
            onChange={handleChange}
            value={hex}
        />
</div>
<input type="Submit" value="Add Color" readOnly />
</form>
</div>
);
}

export default AddColorForm;