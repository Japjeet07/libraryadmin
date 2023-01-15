// import styles from "./styles.module.css";

// const Main = () => {
// 	const handleLogout = () => {
// 		localStorage.removeItem("token");
// 		window.location.reload();
// 	};

// 	return (
// 		<div className={styles.main_container}>
// 			<nav className={styles.navbar}>
// 				<h1>fakebook</h1>
// 				<button className={styles.white_btn} onClick={handleLogout}>
// 					Logout
// 				</button>
// 			</nav>
// 		</div>
// 	);
// };

// export default Main;

// import styles from "./styles.module.css";
import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";






	 const Main = () => {
			const handleLogout = () => {
				localStorage.removeItem("token");
				window.location.reload();
			};


  return (
    <div>
	{/* // 	<div className={styles.main_container}>
 	// 		<nav className={styles.navbar}>
 				
 	// 			<button className={styles.white_btn} onClick={handleLogout}>
 	// 				Logout
 	// 			</button>
	// 		</nav>
 		//</div> */}
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">View All products</Typography>
        </Button>
      </Box>
	 
    </div>

     
  );
  };

export default Main;



