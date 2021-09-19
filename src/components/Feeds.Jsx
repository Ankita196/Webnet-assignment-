import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function Feed() {
  const classes = useStyles();
  const itemData=[1,2,2,3,4,5,6,7,8]

  return (
<div className={classes.roots}>
<div style={{display:"flex"}}>
<Typography style={{color:"black"}}>
feed
</Typography>
<Typography style={{display:"flex",marginLeft:210,color:"blue"}}>
See  All
</Typography>
</div>
<ImageList className={classes.imageList} cols={2.5}>
{itemData.map((item) => (
  <ImageListItem key={item.img}>
    <img src={item.img} alt={item.title} style={{width:100,height:150,borderColor:'blue'}}/>
    
  </ImageListItem>
))}
</ImageList>
</div>
  )}