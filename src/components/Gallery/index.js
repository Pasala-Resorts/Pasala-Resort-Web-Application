import ImageGallery from "react-image-gallery";

import './gallery.css'
import "react-image-gallery/styles/css/image-gallery.css"


const images = [
    {
      original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1696595859/WhatsApp_Image_2023-10-06_at_4.01.40_PM_tzvk02.jpg",
      thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1696595859/WhatsApp_Image_2023-10-06_at_4.01.40_PM_tzvk02.jpg",
    },
    {
      original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1696597438/WhatsApp_Image_2023-10-06_at_4.01.41_PM_vlfrfz.jpg",
      thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1696597438/WhatsApp_Image_2023-10-06_at_4.01.41_PM_vlfrfz.jpg",
    },
    {
      original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1696597466/WhatsApp_Image_2023-10-06_at_4.01.44_PM_1_xw8qw7.jpg",
      thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1696597466/WhatsApp_Image_2023-10-06_at_4.01.44_PM_1_xw8qw7.jpg",
    },
    {
        original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693582902/REN_13_-_Photo_kxrrma.jpg",
        thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693582902/REN_13_-_Photo_kxrrma.jpg",
      },
      {
        original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1696597464/WhatsApp_Image_2023-10-06_at_4.01.45_PM_ddegz4.jpg",
        thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1696597464/WhatsApp_Image_2023-10-06_at_4.01.45_PM_ddegz4.jpg",
      },
      {
        original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693584325/WhatsApp_Image_2023-09-01_at_8.39.27_PM_x16srw.jpg",
        thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693584325/WhatsApp_Image_2023-09-01_at_8.39.27_PM_x16srw.jpg",
      },
      {
        original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1696597466/WhatsApp_Image_2023-10-06_at_4.01.43_PM_wtje1b.jpg",
        thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1696597466/WhatsApp_Image_2023-10-06_at_4.01.43_PM_wtje1b.jpg",
      },
  ];

const Gallery=()=>{
    return <div style={{marginTop:'8vh',width:'100vw'}}><ImageGallery  items={images} /></div>
}

export default Gallery