import axios from "axios";

// const URI = "httpse://service64.herokuapp.com/app";
const URI = "http://localhost:9000/app";

export const selectCountry = (data) => ({
  type: "selecedtCountry",
  payload: data,
});

export const search_res = (data) => ({
  type: "search_res",
  payload: data,
});

export const upload_img = (data) => ({
  type: "upload_img",
  payload: data,
});

export const CROP_IMAGE = (data) => ({
  type: "CROP_IMAGE",
  payload: data,
});

export const CROPED_IMAGE = (data) => ({
  type: "CROPED_IMAGE",
  payload: data,
});

export const val = (data) => ({
  type: "val",
  payload: data,
});

export const ope_hrs = (data) => ({
  type: "ope_hrs",
  payload: data,
});

export const get_amenities = (data) => ({
  type: "get_amenities",
  payload: data,
});

export const listing_details = (data) => ({
  type: "listing_details",
  payload: data,
});

export const moveto = (data) => ({
  type: "moveto",
  payload: data,
});

// <<<<<<<<<<<<< Authentication >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< Authentication >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< Authentication >>>>>>>>>>>>>>>>>>

export function user_signup(body) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(`${URI}/auth/signup`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function user_signin(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(`${URI}/auth/signin`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

// <<<<<<<<<<<<< Searching >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< Searching >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< Searching >>>>>>>>>>>>>>>>>>

export function search(body) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(`${URI}/search`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function searchByCountry(body) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(`${URI}/searchbycountry`, body)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function searchByCity(body) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(`${URI}/searchbycity`, body)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function searchByLocation(body) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(`${URI}/searchbylocation`, body)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function searchByCategory(body) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(`${URI}/searchbycategory`, body)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function recommendedCityCategory(body) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(`${URI}/recommendedcategory`, body)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

// <<<<<<<<<<<<< listing >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< listing >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< listing >>>>>>>>>>>>>>>>>>
// http://localhost:9080/

export function add_listing(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/listing/add_listing`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function edit_listing(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/edit/saller/listing`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function edit_buyer_profile(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/edit/buyer/listing`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function edit_photo(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/edit/saller/photo`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function pwd_reset(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/pwdreset/update`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function get_listing(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/listing/get_listing`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function get_listing_usr(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/listing/get_listing/usr`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function del_listing(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/listing/del_listing`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

// <<<<<<<<<<<<< listing >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< listing >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< listing >>>>>>>>>>>>>>>>>>
// http://localhost:9080/
// https://service64.herokuapp.com/

// get_unapproved_listing

export function get_unapproved_listing(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/admin/get_unapproved_listing`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function get_approved_listing(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/admin/get_unapproved_listing`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function approved_listing(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/admin/apr_listing`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function unapproved_listing(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/admin/unapr_listing`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function admin_delete_listing(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/admin/admin_delete_listing`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function add_cat(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/admin/add_cat`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function get_cat() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${URI}/admin/get_cat`)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function del_cat(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/admin/del_cat`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function edt_cat(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/admin/edt_cat`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function add_cit(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/admin/add_loc`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function get_cit() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${URI}/admin/get_cit`)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function del_cit(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/admin/del_cit`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function edt_cit(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/admin/edt_cit`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function add_loc(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/admin/add_loc`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function get_loc() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${URI}/admin/get_loc`)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function del_loc(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/admin/del_loc`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function edt_loc(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/admin/edt_loc`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function mailtoadmin(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URI}/mail/mailtoadmin`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

// <<<<<<<<<<<<< Add Review >>>>>>>>>>>>>>>>>>

export function add_review(body) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(`${URI}/reviews/addreview`, body)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function get_reviews(id) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${URI}/reviews/${id}`)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}
