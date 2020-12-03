import React from 'react';

import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import classes from './ListItem.module.scss'
import ListItemPopUp from './ListItemPopUp/ListItemPopUp';


const ListItem = ({ name, image, species, id, gender, status }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.root_block} onClick={handleClickOpen}>
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent className={classes.title_block}>
          <CardContent className={classes.content}>
            <Typography className={classes.text}>
              Name:
          </Typography>
            <Typography className={classes.text}>
              {name}
            </Typography>
          </CardContent>
          <CardContent className={classes.content}>
            <Typography className={classes.text}>
              Species:
          </Typography>
            <Typography className={classes.text}>
              {species}
            </Typography>
          </CardContent>
          <CardContent className={classes.content}>
            <Typography className={classes.text}>
              Gender:
          </Typography>
            <Typography className={classes.text}>
              {gender}
            </Typography>
          </CardContent>
          <CardContent className={classes.content}>
            <Typography className={classes.text}>
              Status:
          </Typography>
            <Typography className={classes.text}>
              {status}
            </Typography>
          </CardContent>

        </CardContent>
      </CardActionArea>
      {open && <ListItemPopUp open={open} handleClose={handleClose} id={id} />}
    </Card>
  );
};

ListItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
};

export default ListItem;
