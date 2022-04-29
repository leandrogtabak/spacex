import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Flex, Spacer, Tag, Text } from "@chakra-ui/react";
import * as API from "../services/launches";

export function LaunchDetails() {
    const [launch, setLaunch] = useState({});
    const { launchId } = useParams();

    useEffect(() => {
        API.getLaunchByFlightNumber(launchId).then(setLaunch).catch(console.log);
        { console.log(launch) }
    }, [launchId]);

    return (

        <Box bg="gray.100" p={4} m={4} borderRadius="lg">
            {Object.keys(launch).length === 0 ? (
                <div>Loading...</div>
            ) : (
                <>
                    <Flex>
                        <Text fontSize="2xl">
                            Mission <strong>{launch.mission_name}</strong> (
                            {launch.launch_year})
                        </Text>
                        <Spacer />
                        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                            {launch.launch_success ? "Success" : "Failure"}
                        </Tag>
                    </Flex>
                    <Box>
                        Rocket:{" "}
                        <Link to={`/rockets/${launch.rocket?.rocket_id}`}>
                            {launch.rocket?.rocket_name}
                        </Link>
                    </Box>
                </>
            )}
        </Box>
    );
}