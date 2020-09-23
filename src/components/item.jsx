import React from "react";
function Item(props) {
  return (
    <div class="row ">
      <div class="col-5 it">
        <li>{props.work}</li>
      </div>
      <div class="col-4">
        <a
          href="#"
          onClick={function () {
            props.onItem(props.id);
          }}
        >
          <i class="fas fa-trash"></i>
        </a>
      </div>
    </div>
  );
}
export default Item;
