import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

import ExtendedPageHeader from "../ExtendedPageHeader";
import Skeleton from "../Skeleton";

const decorate = withStyles(
  theme => ({
    title: {
      flex: 1,
      paddingBottom: theme.spacing.unit * 2
    }
  }),
  { name: "PageHeader" }
);

interface PageHeaderProps {
  back: boolean;
  className?: string;
  title?: string;
}

const PageHeader = decorate<PageHeaderProps>(
  ({ back, children, classes, className, title }) => (
    <ExtendedPageHeader
      back={back}
      className={className}
      title={
        <Typography className={classes.title} variant="title">
          {title !== undefined ? title : <Skeleton style={{ width: "10em" }} />}
        </Typography>
      }
    >
      {children}
    </ExtendedPageHeader>
  )
);
PageHeader.displayName = "PageHeader";
export default PageHeader;
