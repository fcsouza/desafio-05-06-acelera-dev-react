import React from "react";
import PropTypes from "prop-types";

import DateHelper from "../utils/dateFormat";

class Contact extends React.Component {
  render() {
    const { data } = this.props;

    return data ? (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={data.avatar} alt="Contact Avatar" />
        </span>
        <span className="contact__data" data-testid="contact-name">
          {data.name}
        </span>
        <span className="contact__data" data-testid="contact-phone">
          {data.phone}
        </span>
        <span className="contact__data" data-testid="contact-country">
          {data.country}
        </span>
        <span className="contact__data" data-testid="contact-date">
          {DateHelper.formatDateBR(data.admissionDate)}
        </span>
        <span className="contact__data" data-testid="contact-company">
          {data.company}
        </span>
        <span className="contact__data">{data.department}</span>
      </article>
    ) : (
      <article className="contact">
        <span className="contact__avatar" />
        <span className="contact__data">Nome</span>
        <span className="contact__data">Telefone</span>
        <span className="contact__data">País</span>
        <span className="contact__data">Admissão</span>
        <span className="contact__data">Empresa</span>
        <span className="contact__data">Departamento</span>
      </article>
    );
  }
}

Contact.propTypes = {
  data: PropTypes.object,
};

Contact.defaultProps = {
  data: null,
};

export default Contact;