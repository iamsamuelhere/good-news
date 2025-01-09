import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link, useLocation } from 'react-router';

//icons
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import * as React from "react";


const BottomNav = () => {
  // const ref = React.useRef(null);

  return <div style={{ position: "fixed", bottom: "0px", left: "0px", right: "0px", elevation: "3",   width: '100%' }}>
    <BottomNavigation
      showLabels
      value={useLocation().pathname}
    >
      <BottomNavigationAction
        LinkComponent={Link}
        to="/home"
        value="/home"
        label="Home"
        icon={<HomeRoundedIcon />} />
      <BottomNavigationAction
        LinkComponent={Link}
        to="/good-news"
        value="/good-news"
        label="Good News"
        icon={<FavoriteIcon />} />
      <BottomNavigationAction
        LinkComponent={Link}
        to="/more"
        value="/more"
        label="More"
        icon={<MoreHorizRoundedIcon />}
      />
    </BottomNavigation>
  </div>
}

export default BottomNav;