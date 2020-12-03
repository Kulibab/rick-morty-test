import React from 'react';

import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import classes from './ShowCard.module.scss'

const ListItem = ({ name, id, air_date, episode, type, dimension }) => {

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.root_block}>
        <CardContent className={classes.title_block}>
          {name && <CardContent className={classes.content}>
            <Typography className={classes.text}>
              Name:
          </Typography>
            <Typography className={classes.text}>
              {name}
            </Typography>
          </CardContent>}
          {episode && <CardContent className={classes.content}>
            <Typography className={classes.text}>
              Episode:
          </Typography>
            <Typography className={classes.text}>
              {episode}
            </Typography>
          </CardContent>}
          {air_date && <CardContent className={classes.content}>
            <Typography className={classes.text}>
              Air date:
          </Typography>
            <Typography className={classes.text}>
              {air_date}
            </Typography>
          </CardContent>}
          {type && <CardContent className={classes.content}>
            <Typography className={classes.text}>
              Type:
          </Typography>
            <Typography className={classes.text}>
              {type}
            </Typography>
          </CardContent>}
          {dimension && <CardContent className={classes.content}>
            <Typography className={classes.text}>
              Dimension:
          </Typography>
            <Typography className={classes.text}>
              {dimension}
            </Typography>
          </CardContent>}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ListItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
};

export default ListItem;
