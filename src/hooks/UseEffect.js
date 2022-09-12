import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEffect = () => {
  const [data, setData] = useState("");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getData(data);
  }, [data]);

  //    const getData = async (x) => {
  //    await axios.get(
  //       `https://api.unsplash.com/search/photos?page=1&query=${x}&client_id=giBv7LE_SvXIBDFEWmDV7ycT0c-OORavc4lXj9CthhI`
  //     ).then((jsonRes) => setPhotos(jsonRes.data.results));
  //   };
  const getData = async (x) => {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${x}&client_id=giBv7LE_SvXIBDFEWmDV7ycT0c-OORavc4lXj9CthhI`
    );
    const resparse = await res.json();
    // console.log( resparse.results);
    setPhotos(resparse.results);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row p-1">
          <div className="col-12 bg-success p-2 d-flex justify-content-center align-items-center ">
            <button
              className="btn btn-primary mx-2"
              onClick={() => setData("Jeep")}
            >
              Car pic{" "}
            </button>
            <button
              className="btn btn-secondary mx-2"
              onClick={() => setData("Food & Drink")}
            >
              Food pic{" "}
            </button>
            <button
              className="btn btn-danger mx-2"
              onClick={() => setData("Macbook")}
            >
              Mackbook pic{" "}
            </button>
            <button
              className="btn btn-info mx-2"
              onClick={() => setData("Nature")}
            >
              Nature pic{" "}
            </button>
            <button
              className="btn btn-dark mx-2"
              onClick={() => setData(" Fashion ")}
            >
              Fashion pic{" "}
            </button>
          </div>
          <div className="row">
            {photos.map((photo, index) => {
              return (
                <div className="col-3 my-1 px-5" key={index}>
                  <div className="card" style={{ width: "18rem" }} key={index}>
                    <img
                      src={photo.urls.small}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{photo.alt_description}</h5>
                      <p className="card-text">{photo.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UseEffect;
