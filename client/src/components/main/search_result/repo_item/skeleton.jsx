import React from "react";
import {
  List,
  makeStyles,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
  Divider,
  ListItemSecondaryAction,
  Checkbox,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  divider: {
    height: 10,
    margin: 4,
    display: "inline",
  },

  footer: {
    dispaly: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "1rem",
  },

  list_text: {
    paddingRight: "2rem",
  },
}));

const SkeletonRepo = () => {
  const classes = useStyles();
  return (
    <ListItem className={classes.root} alignItems="flex-start">
      <ListItemAvatar>
        <Skeleton animation="wave" variant="circle" width={40} height={40} />
      </ListItemAvatar>
      <ListItemText
        className={classes.list_text}
        primary={
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        secondary={
          <React.Fragment>
            <span>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </span>
            <div className={classes.footer}>
              <span>
                <Skeleton animation="wave" height={10} width="20%" />
              </span>
            </div>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default SkeletonRepo;
