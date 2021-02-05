import {
  Card,
	makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
	container: {
    maxWidth: 1200,
    margin: '0 auto',
	},
  card: {
    margin: 16,
    width: 350,
    float: 'left',
  }
}));

export default function Releases() {
	const { card, container } = useStyles();
  return (
    <div className={ container }>
      <Card className={ card }>test</Card>
      <Card className={ card }>test</Card>
      <Card className={ card }>test</Card>
    </div>
  )
};
