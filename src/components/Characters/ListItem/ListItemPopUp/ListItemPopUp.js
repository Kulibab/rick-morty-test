import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import classes from './ListItemPopUp.module.scss'
import { charactersAPI } from '../../../../apiRuquests/apiRequests';

const ListItemPopUp = ({ open, handleClose, id }) => {
  const [{ name, image, species, gender, status, origin, created }, setItemData] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    charactersAPI.getCharacter(id)
      .then(r => setItemData(r))
      .then(r => setIsLoading(false))
  }, [id])


  if (isLoading) {
    return <div>
      <Dialog open={open} onClose={handleClose} className={classes.wrap} >
        <DialogContent className={classes.root}>
          <Typography>
            Data is loading...
        </Typography>
        </DialogContent>

      </Dialog>
    </div>
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} className={classes.wrap} >
        <DialogContent className={classes.root}>
          {image && <CardMedia className={classes.media} image={image} title={name} />}
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
          <CardContent className={classes.content}>
            <Typography className={classes.text}>
              Origin:
            </Typography>
            <Typography className={classes.text}>
              {origin.name}
            </Typography>
          </CardContent>
          <CardContent className={classes.content}>
            <Typography className={classes.text}>
              Created:
            </Typography>
            <Typography className={classes.text}>
              {new Date(created).toLocaleString()}
            </Typography>
          </CardContent>
        </DialogContent>
      </Dialog>
    </div>
  );
};

ListItemPopUp.propTypes = {
  open: PropTypes.bool,
  image: PropTypes.string,
  handleClose: PropTypes.func,
  id: PropTypes.number,
};

export default ListItemPopUp;