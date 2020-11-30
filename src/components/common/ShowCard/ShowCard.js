import React from 'react';

import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import ShowDetailsPopup from 'components/ShowDetails/ShowDetails';

import classes from './ShowCard.module.scss'


const ShowCard = ({ imgURL, title, date, place, children, id }) => {
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
        <CardMedia className={classes.media} image={imgURL} title={title} />
        <CardContent className={classes.title_block}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          {place && (
            <CardContent className={classes.place_wrap}>
              <Typography className={classes.place}>
                <span className={classes.row}>row</span>
                <span className={classes.seat_number}>{place.row}</span>
              </Typography>
              <Typography className={classes.place}>
                <span className={classes.row}>seat</span>
                <span className={classes.seat_number}>{place.seat}</span>
              </Typography>
            </CardContent>
          )}
        </CardContent>
      </CardActionArea>
      {/* {open && <ShowDetailsPopup open={open} handleClose={handleClose} id={id} />} */}
    </Card>
  );
};

ShowCard.propTypes = {
  imgURL: PropTypes.string,
  place: PropTypes.shape({
    seat: PropTypes.number,
    row: PropTypes.number,
  }),
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.number,
};

export default ShowCard;
