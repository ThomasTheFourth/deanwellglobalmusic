import {
	Card,
	CardContent,
	makeStyles,
	Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
	container: {
		maxWidth: 1200,
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '0 auto',
	},
	card: {
		margin: 16,
		width: 350,
		textAlign: 'left',
	},
	image: {
		width: '100%',
		marginBottom: 8,
	}
}));

export default function Releases() {
	const { card, container, image, imageContainer } = useStyles();
	console.log(process);
	return (
		<div className={ container }>
			<Card className={ card }>
				<CardContent>
					<img className={ image } src={process.env.PUBLIC_URL + '/images/across_the_depths.jpg'} />
					<Typography color="textSecondary">
						Picture One
					</Typography>
					<Typography variant="h6" component="h2">
						Across The Depths of Seven Lakes
					</Typography>
					<Typography variant="body2" component="p">
						Catalog Number: DWGM-20
						<br />
						Formats: Vinyl LP/Cassette Tape/Digital
					</Typography>
				</CardContent>
			</Card>
			<Card className={ card }>
				<CardContent>
					<img className={ image } src={process.env.PUBLIC_URL + '/images/across_the_depths.jpg'} />
					<Typography color="textSecondary">
						Picture One
					</Typography>
					<Typography variant="h6" component="h2">
						Across The Depths of Seven Lakes
					</Typography>
					<Typography variant="body2" component="p">
						Catalog Number: DWGM-20
						<br />
						Formats: Vinyl LP/Cassette Tape/Digital
					</Typography>
				</CardContent>
			</Card>
			<Card className={ card }>
				<CardContent>
					<img className={ image } src={process.env.PUBLIC_URL + '/images/across_the_depths.jpg'} />
					<Typography color="textSecondary">
						Picture One
					</Typography>
					<Typography variant="h6" component="h2">
						Across The Depths of Seven Lakes
					</Typography>
					<Typography variant="body2" component="p">
						Catalog Number: DWGM-20
						<br />
						Formats: Vinyl LP/Cassette Tape/Digital
					</Typography>
				</CardContent>
			</Card>
			<Card className={ card }>
				<CardContent>
					<img className={ image } src={process.env.PUBLIC_URL + '/images/across_the_depths.jpg'} />
					<Typography color="textSecondary">
						Picture One
					</Typography>
					<Typography variant="h6" component="h2">
						Across The Depths of Seven Lakes
					</Typography>
					<Typography variant="body2" component="p">
						Catalog Number: DWGM-20
						<br />
						Formats: Vinyl LP/Cassette Tape/Digital
					</Typography>
				</CardContent>
			</Card>
			<Card className={ card }>
				<CardContent>
					<img className={ image } src={process.env.PUBLIC_URL + '/images/across_the_depths.jpg'} />
					<Typography color="textSecondary">
						Picture One
					</Typography>
					<Typography variant="h6" component="h2">
						Across The Depths of Seven Lakes
					</Typography>
					<Typography variant="body2" component="p">
						Catalog Number: DWGM-20
						<br />
						Formats: Vinyl LP/Cassette Tape/Digital
					</Typography>
				</CardContent>
			</Card>
		</div>
	)
};
