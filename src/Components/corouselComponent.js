import React from "react";
import { Carousel } from "react-carousel-minimal";

function CarouseLComponent() {
  const data = [
    {
      image:
        "https://i.pinimg.com/564x/19/9c/df/199cdf8d8948b2839ceb99a1d891b867.jpg",
      caption: ""
    },
    {
      image:
        "https://i.pinimg.com/236x/7b/3a/28/7b3a283319c2d4d0a6cf4fa2990f3338.jpg",
      caption: ""
    },
    {
      image:
        "https://i.pinimg.com/564x/f7/a9/ef/f7a9efa5ac3b60f9d5c8ec764e83f3df.jpg",
      caption: ""
    },
    {
      image:
        "https://i.pinimg.com/564x/9b/d9/f6/9bd9f63e5f2453e6caff55c32a72f7f3.jpg",
      caption: "Fashion that moves"
    },
    {
      image:
        "https://i.pinimg.com/750x/31/af/72/31af72d1e3c83c4973bf7f98b195bdd9.jpg",
      caption: ""
    },
    {
      image:
        "https://i.pinimg.com/564x/fc/2a/5a/fc2a5a12f87ab32501115bc96e3c2fc9.jpg",
      caption: ""
    }
  ];

  const captionStyle = {
    fontSize: "3em",
    fontWeight: "bold",
    width: "70%",
    color: "pinkie",
    marginBottom: "10px",
    marginTop: "10px"
  };

  return (
    <div className="mt-25">
      <div style={{ textAlign: "center" }}>
        <div style={{}}>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="600px"
            captionStyle={captionStyle}
            captionPosition="center"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideImageFit="fit"
            style={{
              textAlign: "center",
              maxWidth: "auto"
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default CarouseLComponent;
