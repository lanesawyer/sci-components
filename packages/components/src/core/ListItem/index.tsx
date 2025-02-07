import { ListItemProps as RawListItemProps } from "@mui/material";
import { ListItemExtraProps, ListItemLabel, StyledListItem } from "./style";

export { ListItemLabel };

export type ListItemProps = Omit<
  RawListItemProps,
  "nonce" | "rev" | "rel" | "autoFocus" | "content"
> &
  ListItemExtraProps;

/**
 * @see https://mui.com/material-ui/react-list/
 */
const ListItem = (props: ListItemProps): JSX.Element => {
  return <StyledListItem disableGutters {...props} />;
};

export default ListItem;
