import React from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

import ContactService from "./services/contactService";

import "./App.scss";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      filter: "",
      orderBy: "",
    };

    this.fetchContacts = this.fetchContacts.bind(this);
    this.getFiltredData = this.getFiltredData.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleOrderByChange = this.handleOrderByChange.bind(this);
  }

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts() {
    ContactService.fetchContacts().then((contacts) =>
      this.setState({ contacts })
    );
  }

  getFiltredData() {
    const { contacts, filter, orderBy } = this.state;

    let result = contacts;

    if (filter) {
      result = result.filter(({ name }) =>
        name.toLowerCase().startsWith(filter.toLowerCase())
      );
    }

    if (orderBy) {
      result = result.sort((first, second) => {
        if (first[orderBy] > second[orderBy]) {
          return 1;
        }

        if (first[orderBy] < second[orderBy]) {
          return -1;
        }

        return 0;
      });
    }

    return result;
  }

  handleFilterChange(filter) {
    this.setState({ filter });
  }

  handleOrderByChange(orderBy) {
    this.setState({ orderBy });
  }

  render() {
    const { filter, orderBy } = this.state;
    const contacts = this.getFiltredData();

    return (
      <div className="app" data-testid="app">
        <Topbar />
        <Filters
          filter={filter}
          orderBy={orderBy}
          onFilterChange={this.handleFilterChange}
          onOrderByChange={this.handleOrderByChange}
        />
        <Contacts contacts={contacts} />
      </div>
    );
  }
}

export default App;