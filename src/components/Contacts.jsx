import React from "react";
import PropTypes from "prop-types";

import Contact from "./Contact";

class Contacts extends React.Component {
  render() {
    const { contacts } = this.props;

    return (
      <div className="container" data-testid="contacts">
        <section className="contacts">
          <Contact />
          {contacts.map((contact) => (
            <Contact data={contact} key={contact.id} />
          ))}
        </section>
      </div>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array,
};

Contacts.defaultProps = {
  contacts: [],
};

export default Contacts;