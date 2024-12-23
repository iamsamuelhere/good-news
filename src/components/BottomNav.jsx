import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";


//icons
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import * as React from "react";


const BottomNav = ({value, setValue})=>{
  // const ref = React.useRef(null);

  return <div style={{position:"fixed", bottom:"0px", left:"0px", right:"0px", elevation:"3"}}>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} />
      <BottomNavigationAction label="Good News" icon={<FavoriteIcon />} />
      <BottomNavigationAction
        label="More"
        icon={<MoreHorizRoundedIcon />}
      />
    </BottomNavigation> 
  </div>
}

export default BottomNav;