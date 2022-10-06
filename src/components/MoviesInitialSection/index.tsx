import React from "react";
import { Box } from "@chakra-ui/react";
import { Buttons, Loading, MoviesSection } from "../index";
import { ICategory } from "../../interfaces";


interface IProps {
    buttonsCommands: {
        pagination: number,
        backPagination: () => void;
        nextPagination: () => void;
    },
    loading: boolean;
    moviesList: ICategory[];
}

export const MovieInitialSection: React.FC<IProps> = (props) => {
    const { buttonsCommands, loading, moviesList } = props;

    return (
        <Box mt='40px'>
            <Box
                bg="#000"
                display="flex"
                justifyContent="right"
                px='15px'
            >
                <Buttons
                    pagination={buttonsCommands.pagination}
                    backPagination={buttonsCommands.backPagination}
                    nextPagination={buttonsCommands.nextPagination}
                />
            </Box>
            { loading ? <Loading /> : <MoviesSection scrollMovie={moviesList} /> }
            <Box
                bg="#111111"
                p="5px"
                display="flex"
                justifyContent="center"
                mt="20px"
                alignItems="center"
            >
                <Buttons
                    pagination={buttonsCommands.pagination}
                    backPagination={buttonsCommands.backPagination}
                    nextPagination={buttonsCommands.nextPagination}
                />
            </Box>
        </Box>
    )
}