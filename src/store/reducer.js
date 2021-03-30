const initialState = {
  search_res: [""],
  selecedtCountry: null,
  upload_img: null,
  ope_hrs: null,
  listing_details: "",
  loading_control: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "selecedtCountry":
      return {
        ...state,
        selecedtCountry: action.payload,
      };
    case "search_res":
      return {
        ...state,
        search_res: action.payload,
      };
    case "upload_img":
      return {
        ...state,
        upload_img: action.payload,
      };
    case "CROP_IMAGE":
      return {
        ...state,
        CROP_IMAGE: action.payload,
      };
    case "CROPED_IMAGE":
      return {
        ...state,
        CROPED_IMAGE: action.payload,
      };

    case "val":
      return {
        ...state,
        val: action.payload,
      };
    case "ope_hrs":
      return {
        ...state,
        ope_hrs: action.payload,
      };
    case "listing_details":
      return {
        ...state,
        listing_details: action.payload,
      };
    case "get_amenities":
      return {
        ...state,
        get_amenities: action.payload,
      };
    case "moveto":
      return {
        ...state,
        moveto: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
