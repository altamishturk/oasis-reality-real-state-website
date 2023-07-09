import { useEffect, useRef } from "react";
import { useLogin } from "@refinedev/core";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { logo } from "../assets";

import { CredentialResponse } from "../interfaces/google";

// Todo: remove this id from here to .env
const GOOGLE_CLIENT_ID = "299624348096-kie4qiop52mg405l402g7rcan2oqhjg2.apps.googleusercontent.com";
// const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;



export const Login: React.FC = () => {
    const { mutate: login } = useLogin<CredentialResponse>({
        v3LegacyAuthProviderCompatible: true,
    });

    const GoogleButton = (): JSX.Element => {
        const divRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            if (
                typeof window === "undefined" ||
                !window.google ||
                !divRef.current
            ) {
                return;
            }

            try {
                window.google.accounts.id.initialize({
                    ux_mode: "popup",
                    client_id: GOOGLE_CLIENT_ID || "",
                    callback: async (res: CredentialResponse) => {
                        if (res.credential) {
                            login(res);
                        }
                    },
                });
                window.google.accounts.id.renderButton(divRef.current, {
                    theme: "filled_blue",
                    size: "medium",
                    type: "standard",
                });
            } catch (error) {
                console.log(error);
            }
        }, []); // you can also add your client id as dependency here

        return <div ref={divRef} />;
    };

    return (
        <Box component="div" sx={{ backgroundColor: "#FCFCFC" }}>
            <Container
                component="main"
                maxWidth="xs"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100vh",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div style={{display: "flex",gap: "10px",alignItems: "center"}}>
                        <img src={logo} width={60} height={60} style={{borderRadius: "50%"}} alt="Oasis Reality" />
                        <h1>Oasis Realty</h1>
                    </div>
                    <Box mt={4}>
                        <GoogleButton />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

