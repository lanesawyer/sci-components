import { Clear } from "@mui/icons-material";
import { ChipProps as RawChipProps } from "@mui/material";
import {
  SDSWarningTypes,
  showWarningIfFirstOccurence,
} from "src/common/warnings";
import { ChipExtraProps, StyledChip } from "./style";

type ChipProps = ChipExtraProps &
  Omit<RawChipProps, "nonce" | "rev" | "rel" | "autoFocus" | "content">;

export type { ChipProps };

/**
 * @see https://mui.com/material-ui/react-chip/
 */
const Chip = (props: ChipProps): JSX.Element => {
  showWarningIfFirstOccurence(SDSWarningTypes.ChipDeprecated);
  const { onDelete } = props;

  if (onDelete) {
    return <StyledChip deleteIcon={<Clear />} {...props} />;
  }
  return <StyledChip {...props} />;
};

export default Chip;
