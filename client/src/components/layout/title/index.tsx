import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import Button from "@mui/material/Button";

import { logo } from "assets";
import { Box } from "@mui/material";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                     <img src={logo} width={40} height={40} style={{borderRadius: "50%"}} alt="Oasis Realty" />
                    ) : (
                        <>
                        <Box sx={{display: "flex",gap: 1, alignItems: "center"}}>
                            <img src={logo} width={40} height={40} style={{borderRadius: "50%"}} alt="Oasis Realty" />
                            <h4>Oasis Realty</h4>
                        </Box>
                    </>
                )}
            </Link>
        </Button>
    );
};
