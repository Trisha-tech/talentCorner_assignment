import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import CreateWorkshop from './CreateWorkshop';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', height: '100%' }}
    >
      <Tabs
        orientation="vertical"

        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab style={{ paddingTop: 30,paddingBottom:30, textTransform: 'capitalize', fontSize: "30px", fontFamily: "Roboto",width:"450px" }} label="Create Workshop" {...a11yProps(0)} />
        <Tab style={{ paddingTop:30,paddingBottom:30, textTransform: 'capitalize', fontSize: "30px", fontFamily: "Roboto",width:"450px" }} label="Display Workshops" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0} style={{ minWidth: 0, width: '75%', padding: '18px 60px' }}>
        <CreateWorkshop />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Display Workshops
      </TabPanel>
    </Box>
  );
}