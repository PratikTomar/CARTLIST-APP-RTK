import React from "react";

const RenderListComp = ({data , onDelete}) => {

const renderList = data.map((playlist)=> {
    return (
      <div key={playlist.name} className={`panel`}>
      <h1>
        {playlist.name} - ${playlist.cost}
      </h1>
      <button
        className="button is-danger"
        onClick={()=> onDelete(playlist)}
      >
        Delete
      </button>
    </div>
    )
  });
  return renderList;
}

export { RenderListComp };