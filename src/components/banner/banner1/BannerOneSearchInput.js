import React, { Component } from "react";
// import { FiSearch } from 'react-icons/fi'
// import SelectCountry from "../../common/SelectCountry";
import Select from "react-select";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  search,
  searchByCountry,
  search_res,
  moveto,
  get_cit,
  get_loc,
  get_cat,
  get_cit_has_apr_users,
  get_loc_has_apr_users,
  get_cat_has_apr_users,
  edt_cat,
} from "../../../store/action";
import { Link } from "react-router-dom";

class BannerOneSearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_city: null,
      selected_location: null,
      selectedCatOp: null,
      search_keyword: "",
      cities: [],
      locations: [],
      categories: [],
      total_categories: [],
      err_message: false,
    };
  }

  value(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleChangeCat = (ev) => {
    this.setState({
      selectedCatOp: ev.label,
    });
  };

  handleChangeLoc = (ev) => {
    this.setState({ selected_location: ev.label });
    let selected_city = this.state.selected_city;

    let filterCategoriesByCity = this.state.total_categories.filter(
      (category) => {
        let city = category.areas.find(
          (area) => area.city === this.state.selected_city
        );
        if (!!city) return true;
        return false;
      }
    );

    let filterCategoriesByLoc = filterCategoriesByCity.filter((category) => {
      let city = category.areas.find((area) => area.city === selected_city);
      if (!city) return false;
      let location = city.locations.find((loc) => loc.label === ev.label);
      if (!location) return false;
      return true;
    });

    this.setState({
      categories: filterCategoriesByLoc.sort((a, b) => {
        if (a.label < b.label) {
          return -1;
        }
        if (a.label > b.label) {
          return 1;
        }
        return 0;
      }),
    });
  };

  search() {
    const { selectedCatOp, selected_city, selected_location } = this.state;

    const search_body = {
      city: selected_city,
      location: selected_location,
      category: selectedCatOp,
    };

    if (selected_city === null) {
      this.setState({
        err_message: "Please Select City !",
      });
    } else if (selected_location === null) {
      this.setState({
        err_message: "Please Select Location !",
      });
    } else if (selectedCatOp === null) {
      this.setState({
        err_message: "Please Select Category !",
      });
    } else {
      this.props.actions.moveto(search_body);
      this.props.actions
        .search(search_body)
        .then((res) => {
          if (res.data) {
            this.props.actions.search_res(res.data);
          } else {
            this.props.actions.search_res(res);
          }
          this.props.history.push("/list");
        })
        .catch((err) => console.log(err));
    }
  }

  get_cit() {
    // this.props.actions.get_loc()
    this.props.actions.get_loc_has_apr_users().then((res) => {
      let array = res.data;
      let new_arr = [];
      if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          element.value = i;
          element.locations = array[i].locations.sort((a, b) => {
            if (a.label < b.label) {
              return -1;
            }
            if (a.label > b.label) {
              return 1;
            }
            return 0;
          });
          new_arr.push(element);
        }
        this.setState({
          cities: new_arr.sort((a, b) => {
            if (a.label < b.label) {
              return -1;
            }
            if (a.label > b.label) {
              return 1;
            }
            return 0;
          }),
        });
      }
    });
  }

  get_cat() {
    // this.props.actions.get_cat()
    this.props.actions.get_cat_has_apr_users().then((res) => {
      let array = res.data;
      let new_arr = [];
      if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          element.value = i;
          new_arr.push(element);
        }
        this.setState({
          total_categories: new_arr,
          categories: new_arr.sort((a, b) => {
            if (a.label < b.label) {
              return -1;
            }
            if (a.label > b.label) {
              return 1;
            }
            return 0;
          }),
        });
        console.log("Category", array);
      }
    });
  }

  handleChangeCit = (ev) => {
    this.setState({ selected_city: ev.label });
    if (ev.locations !== null) {
      let array = ev.locations;
      let new_arr = [];
      if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          element.value = i;
          new_arr.push(element);
        }
        this.setState({
          locations: new_arr,
          selected_location: null,
        });
      } else {
        this.setState({
          locations: [{ label: ev.label }],
          selected_location: ev.label,
        });
      }
    } else {
      this.setState({
        locations: [],
        selected_location: null,
      });
    }

    let filterCategories = this.state.total_categories.filter((category) => {
      let city = category.areas.find((area) => area.city === ev.label);
      if (!!city) return true;
      return false;
    });

    this.setState({
      categories: filterCategories.sort((a, b) => {
        if (a.label < b.label) {
          return -1;
        }
        if (a.label > b.label) {
          return 1;
        }
        return 0;
      }),
    });
  };

  componentDidMount() {
    this.get_cit();
    this.get_cat();
  }

  render() {
    const { cities, locations, categories, err_message } = this.state;
    return (
      <>
        <div className="main-search-input">
          <div className="main-search-input-item category">
            <Select
              value={this.selected_city}
              onChange={this.handleChangeCit.bind(this)}
              placeholder="Select a city"
              options={cities}
            />
          </div>
          <div className="main-search-input-item location">
            <Select
              value={this.selected_location}
              onChange={this.handleChangeLoc.bind(this)}
              placeholder="Select an area"
              options={locations}
            />
          </div>
          <div className="main-search-input-item category">
            <Select
              value={this.selectedCatOp}
              onChange={this.handleChangeCat.bind(this)}
              placeholder="Select a category"
              options={categories}
            />
          </div>

          <div className="main-search-input-btn">
            <button
              className="button theme-btn"
              style={{ padding: "inherit" }}
              onClick={this.search.bind(this)}
            >
              {" "}
              <Link to="/" style={{ color: "while" }}>
                <p className="button theme-btn"> Search</p>
              </Link>
            </button>
          </div>
        </div>
        {err_message && (
          <div className="alert alert-danger" role="alert">
            {err_message}
          </div>
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        search,
        search_res,
        searchByCountry,
        get_cit,
        get_loc,
        get_cat,
        get_cit_has_apr_users,
        get_loc_has_apr_users,
        get_cat_has_apr_users,
        moveto,
      },
      dispatchEvent
    ),
  };
};

const mapStateToProps = (state) => {
  return {
    item: state,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BannerOneSearchInput);
