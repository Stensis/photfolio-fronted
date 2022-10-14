import React from "react";
import { Carousel } from "react-carousel-minimal";

function CarouseLComponent() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1534126506432-a0173ba75bf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      caption: ""
    },
    {
      image:
        "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      caption: ""
    },
    {
      image:
        "https://images.unsplash.com/photo-1640257257956-5fb3b38e95c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
      caption: ""
    },
    {
      image:
        "https://images.unsplash.com/photo-1522938974444-f12497b69347?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=809&q=80",
      caption: "Fashion that moves"
    },
    {
      image:
        "https://images.unsplash.com/photo-1543366749-4dad497ea0a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      caption: ""
    },
    {
      image:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
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
