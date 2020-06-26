import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 400,
    margin: 40
  },
  media: {
    height: 400,
  },
};

function CongressCard(props) {
  const { classes, member } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://theunitedstates.io/images/congress/original/${member.id}.jpg`}
          title="Congressional Photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {member.first_name} {member.last_name}
          </Typography>
          <Typography component="p">
          {member.party === 'D' ? 'Democrat' : 'Republican'}
          </Typography>
          <Typography component="p">
          Next Election: {member.next_election}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Twitter: @{member.twitter_id}
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

CongressCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CongressCard);
