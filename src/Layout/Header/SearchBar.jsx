import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { Form,Input } from "reactstrap";

const SearchBar = () => {
    const searchIcon ={
      content: "",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      right: "0px",
      "z-index": 1,
      cursor: "pointer",
      "font-size": "18px",
      color: "rgb(255, 255, 255)",
      "font-style": "normal",
      "background-color": "rgb(255, 165, 59)",
      "font-family": "remixicon !important",
      padding: "10px 18px 9px",
      "border-radius": "0px 8px 8px 0px",
    }
  return (
    <Form className="form-inline search-full">
      <div className="form-group w-100">
        <div className="Typeahead Typeahead--twitterUsers">
            <div className="u-posRelative">
            <Input className="demo-input Typeahead-input form-control-plaintext w-100" type="text" placeholder="SearchFastkart" name="search-bar" title="searchbar" autoFocus />
              <div>
            <RiSearchLine  style={searchIcon}/>
            </div>
            </div>
            <div className="spinner-border Typeahead-spinner" role="status">
              <span className="sr-only">Loading</span>
          </div>
            <div className="Typeahead-menu" />
        </div>
      </div>
    </Form>

  );
};
export default SearchBar;
