import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    //paddingTop: '56.25%', // 16:9
    paddingTop: '100%',
  },
};

const Product = ({ classes, title, description, image, onClick }) => (
  <Card className={classes.card}>
    <CardMedia className={classes.media} image={image} title="Wallbox" />
    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        {title}
      </Typography>
      <Typography component="p">{description}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary" onClick={onClick}>
        Order now
      </Button>
    </CardActions>
  </Card>
);

export default withStyles(styles)(Product);
