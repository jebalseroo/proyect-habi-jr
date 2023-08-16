"use client";
import PropTypes from "prop-types";
import InputsStyles from "./inputs.styles";
import { useState } from "react";
import { useLocationFacades } from "@/hooks/ui/useUiFacades";

export interface Iinputs {
  placeholder: string;
  name: string;
  required?: boolean;
  label: string;
  type: string;
}

const Inputs = ({ placeholder, name, required, label, type }: Iinputs) => {
  const [valuee, setValuee] = useState("");
  const { doSaveData } = useLocationFacades();
  const handleChange = (value: string) => {
    setValuee(value);
    if(type === 'number'){
      doSaveData({ [name]: parseInt(value) });
    }else doSaveData({ [name]: value });
  };

  return (
    <InputsStyles>
      <div className='form__group field'>
        <input
          type={type}
          className='form__field'
          placeholder={placeholder}
          name={name}
          id={name}
          required={required}
          onChange={({ target }) => handleChange(target.value)}
          value={valuee}
        />
        <label htmlFor='name' className='form__label'>
          {label}
        </label>
      </div>
    </InputsStyles>
  );
};

Inputs.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
};

export default Inputs;
