import { Box, IconButton, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { observer } from "mobx-react-lite";

export interface IProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Search = (props: IProps) => {
  return (
    <Box
      textAlign="center"
      mt="10px"
      display="flex"
      justifyContent="center"
      alignItems="baseline"
    >
      <Input
        type="search"
        placeholder="Filter"
        value={props.value}
        onChange={props.onChange}
        w="350px"
        p="0 15px"
        bg="0"
        color="white"
        border="0"
        css={{
          "&::-webkit-input-placeholder": {
            color: "white",
            textAlign: "right",
          },
        }}
      />
      <IconButton
        icon={<SearchIcon />}
        aria-label="Search database"
        onClick={props.onClick}
        bg="0"
        size="md"
        color="white"
        css={{
          ":hover": {
            background: "#171923",
          },
        }}
      />
    </Box>
  );
};

export default observer(Search);
