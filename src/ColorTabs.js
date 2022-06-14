import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export function ColorTabs() {
  const [value, setValue] = useState('one');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" onClick={()=>navigate("/")} label="HOME" />
        <Tab value="two" onClick={()=>navigate("/movies")} label="MOVIES" />
        
      </Tabs>
    </Box>
  );
}
