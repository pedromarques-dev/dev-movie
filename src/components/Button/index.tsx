import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, IconButton, Stack, Text } from "@chakra-ui/react";
import { IButton } from "../../interfaces";

export const Buttons = (props: IButton) => {
  return (
    <Stack
      spacing={2}
      direction="row"
      display="flex"
      alignItems="center"
      color="white"
    >
      <Button
        onClick={props.backPagination}
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
      <Text>Pagina {props.pagination} de 10</Text>
      <Button
        onClick={props.nextPagination}
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
