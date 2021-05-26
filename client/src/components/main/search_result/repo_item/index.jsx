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

const RepoItem = ({ repo }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.root} alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={repo.avatar} />
      </ListItemAvatar>
      <ListItemText
        className={classes.list_text}
        primary={repo.name}
        secondary={
          <React.Fragment>
            <span>
              {repo.description
                ? repo.description
                : "This repository doesn't have a description."}
            </span>
            <div className={classes.footer}>
              <span>watches : {repo.watch_count}</span>
            </div>
          </React.Fragment>
        }
      />
      <ListItemSecondaryAction>
        <Checkbox edge="end" />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default RepoItem;
