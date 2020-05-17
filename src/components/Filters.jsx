import React from "react";
import PropTypes from "prop-types";


class Filters extends React.Component {
  render() {
    const { filter, orderBy, onFilterChange, onOrderByChange } = this.props;

    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              value={filter}
              onChange={(event) => onFilterChange(event.target.value)}
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          <button
            className={`filters__item ${orderBy === "name" && "is-selected"}`}
            onClick={() => onOrderByChange("name")}
          >
            Nome <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              orderBy === "country" && "is-selected"
            }`}
            onClick={() => onOrderByChange("country")}
          >
            País <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              orderBy === "company" && "is-selected"
            }`}
            onClick={() => onOrderByChange("company")}
          >
            Empresa <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              orderBy === "department" && "is-selected"
            }`}
            onClick={() => onOrderByChange("department")}
          >
            Departamento <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              orderBy === "admissionDate" && "is-selected"
            }`}
            onClick={() => onOrderByChange("admissionDate")}
          >
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>
    );
  }
}

Filters.propTypes = {
  filter: PropTypes.string,
  orderBy: PropTypes.string,
  onFilterChange: PropTypes.func,
  onOrderByChange: PropTypes.func,
};

Filters.defaultProps = {
  filter: "",
  orderBy: "",
  onFilterChange: () => undefined,
  onOrderByChange: () => undefined,
};

export default Filters;