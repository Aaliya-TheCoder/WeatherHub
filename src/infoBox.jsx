import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function Infobox({info}){
    const init_URl="https://images.unsplash.com/photo-1641970304222-b2b332808a4b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let cold_url="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let hot_url="https://images.unsplash.com/photo-1697966436829-4e9d1070100f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let Rainy_url="https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className='InfoBox'>
        <div className="cardcontainer">
        <Card sx={{     width: "50%",
    maxWidth: 345, }}>
        <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?Rainy_url:info.temp>15?hot_url:cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperatur: {info.temp}&deg;</p>
          <p>Humidity: {info.humidity}</p>
          <p>Feels Like: {info.feelsLike} &deg;</p>
          <p>Weather: {info.weather}</p>
          <p>Min Temperature: {info.tempMin}&deg;</p>
          <p>Max Temperature: {info.tempMax}&deg;</p>
        
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );

}