import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, IconButton, Stack, Text } from "@chakra-ui/react";
import { IButton } from "../../interfaces";

export const Buttons: React.FC<IButton> = (props) => {
  const { backPagination, pagination, nextPagination } = props;

  return (
    <Stack
      spacing={2}
      direction="row"
      display="flex"
      alignItems="center"
      color="white"
    >
      <Button
        onClick={backPagination}
        size="xs"
        border="0"
        bg="0"
        css={{
          ":hover": {
            background: "none",
          },
        }}
      >
        <IconButton
          icon={<ChevronLeftIcon />}
          aria-label="button back"
          bg="0"
          css={{
            ":hover": {
              background: "none",
              color: "red",
            },
          }}
        />
      </Button>
      <Text>Pagina {pagination} de 10</Text>
      <Button
        onClick={nextPagination}
        size="xs"
        border="0"
        bg="0"
        css={{
          ":hover": {
            background: "none",
          },
        }}
      >
        <IconButton
          icon={<ChevronRightIcon />}
          aria-label="button next"
          bg="0"
          css={{
            ":hover": {
              background: "none",
              color: "red",
            },
          }}
        />
      </Button>
    </Stack>
  );
};
