import React, {useState} from 'react'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox';

export default function TodoItem({name,done,id}) {
    const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

    return (
        <div>
            <Checkbox
            color="primary"
        checked={done}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
            {/* <p { ...done?style :style }>{name}</p> */}
        </div>
    )
}
