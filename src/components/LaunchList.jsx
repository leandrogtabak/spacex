import { useState, useEffect } from 'react';
import { Divider, Heading } from '@chakra-ui/react';
import { LaunchItem } from './LaunchItem';
import * as API from "../services/launches";


export function LaunchList() {
    const [launches, setLaunches] = useState([]); //Siempre el useState va colocado bien arriba, 
    //luego de la declaracion de la funcion componente

    useEffect(() => {
        API.getAllLaunches().then(setLaunches).catch(console.log);
    }, []);

    return (<>
        <Heading as="h1" size="lg" m={4}>SpaceX Launches</Heading>
        {launches.length === 0 ? (<div>Loading...</div>
        ) : (

            <section>
                {launches.map(launch => (
                    <LaunchItem key={launch.flight_number} {...launch} />

                ))}
            </section>)}
    </>
    )
}


