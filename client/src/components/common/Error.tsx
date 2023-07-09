import { Box,Alert,AlertTitle } from "@mui/material";

function Error() {
  return (
    <Box sx={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Something went wrong! — <strong>Refresh your browser</strong>
        </Alert>
    </Box>
  )
}

export default Error;