import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './Home.css'

const comparisonRows = [
  {
    feature: "Boutique Outsourcing Agency",
    detail: "We are an agency working closely with selected clientele",
  },
  {
    feature: "Privacy and Confidentiality",
    detail: "We do not work with same industry clients for same city which ensure your business information won't go in to competitors",
  },
  {
    feature: "Recruitment process",
    detail: "We fully handled the recruitment process",
  },
  {
    feature: "Staff Training",
    detail: "We train your recruited staff our Industry based experts",
  },
  {
    feature: "Performance Monitoring",
    detail: "We monitor staff performance live using latest softwares",
  },
  {
    feature: "Dedicated Account Manager",
    detail: "You will get a dedicated account manager",
  },
  {
    feature: "Daily Reporting",
    detail: "Your account manager will provide you daily report on staff performance",
  },
  {
    feature: "Secure online payments",
    detail: "You can easily pay via direct debit using your bank card with our secure payment gateway",
  },
];

const SixthSection = () => {
  return (
    <Row className="compare-section d-flex justify-content-center align-items-center py-5">
      <Col xs={11} lg={10} className="text-center compare-section-header">
        <h1 className="hed1">Why Choose Outsource2Backoffice Over Other BPOs</h1>
        <h3 className="hed3 pb-4">Commitment to Quality Services and Customer Satisfaction</h3>
      </Col>
      <Col xs={11} lg={10} className="table-responsive compare-table-wrap">
        <Table className="custom-table">
          <thead>
            <tr>
              <th className="th-feature">What you get from us</th>
              <th className="th-detail">How you get it from us</th>
              <th className="th-us">Outsource2backoffice</th>
              <th className="th-others">Others</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, index) => (
              <tr key={index}>
                <td className="col1" data-label="What you get from us">{row.feature}</td>
                <td className="col2" data-label="How you get it from us">{row.detail}</td>
                <td className="col3" data-label="Outsource2backoffice">
                  <span className="compare-icon compare-icon-check" aria-label="Included">
                    <FaCheck />
                  </span>
                </td>
                <td className="col4" data-label="Others">
                  <span className="compare-icon compare-icon-cross" aria-label="Not included">
                    <FaTimes />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default SixthSection;
