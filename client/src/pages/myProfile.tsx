import { useGetIdentity, useOne } from "@refinedev/core";

import { Error, Loading, Profile } from "components";

const MyProfile = () => {
    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });
    const { data, isLoading, isError } = useOne({
        resource: "users",
        id: user?.userid,
    });

    const myProfile = data?.data ?? {};

    if (isLoading) return <Loading/>;
    if (isError) return <Error />;

    return (
        <Profile
            type="My"
            name={myProfile.name}
            email={myProfile.email}
            avatar={myProfile.avatar}
            properties={myProfile.allProperties}
        />
    );
};

export default MyProfile;
