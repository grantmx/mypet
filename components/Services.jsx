import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Image from 'next/image';

function Services(){
    return(
        <ImageList sx={{ width: "100%" }}>
            {itemData.map((item) => (
                <ImageListItem key={item.img} sx={{ width: "50%" }}>
                    <Image
                        src={`${item?.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        width={248}
                        height={172}
                        style={{ objectFit: "contain", width: "100%", height: "auto" }}
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={<span>by: {item.author}</span>}
                        position="below"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default Services;


const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },


  ];