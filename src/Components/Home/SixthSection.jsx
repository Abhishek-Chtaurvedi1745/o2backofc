import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import check from '../../../public/Image/check.png';
import cross from '../../../public/Image/cross.png';
import './Home.css'

const SixthSection = () => {
  return (
    <Row className="d-md-flex d-none justify-content-center align-items-center py-5" style={{ backgroundColor: "#f8f5f5" }}>
      <Col xs={12} className="text-center">
        <h1 className="hed1">Why Choose Outsource2Backoffice Over Other BPOs</h1>
        <h3 className='hed3 pb-4'>Commitment to Quality Services and Customer Satisfaction</h3>
      </Col>
      <Col xs={12} lg={10} className='table-responsive'>
        <Table className='custom-table'>
          <thead>
            <tr>
              <th>What you get from us</th>
              <th>How you get it from us</th>
              <th>Outsource2backoffice</th>
              <th>Others</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col1" data-label="What you get from us">Boutique Outsourcing Agency</td>
              <td className="col2" data-label="How you get it from us">We are an agency working closely with selected clientele</td>
              <td className="col3" data-label="Outsource2backoffice"><img src={check} alt="check" /></td>
              <td className="col4" data-label="Others"><img src={cross} alt="cross" /></td>
            </tr>
            <tr>
              <td className="col1" data-label="What you get from us">Privacy and Confidentiality</td>
              <td className="col2" data-label="How you get it from us">We do not work with same industry clients for same city which ensure your business information won't go in to competitors</td>
              <td className="col3" data-label="Outsource2backoffice"><img src={check} alt="check" /></td>
              <td className="col4" data-label="Others"><img src={cross} alt="cross" /></td>
            </tr>
            <tr>
              <td className="col1" data-label="What you get from us">Recruitment process</td>
              <td className="col2" data-label="How you get it from us">We fully handled the recruitment process</td>
              <td className="col3" data-label="Outsource2backoffice"><img src={check} alt="check" /></td>
              <td className="col4" data-label="Others"><img src={cross} alt="cross" /></td>
            </tr>
            <tr>
              <td className="col1" data-label="What you get from us">Staff Training</td>
              <td className="col2" data-label="How you get it from us">We train your recruited staff our Industry based experts</td>
              <td className="col3" data-label="Outsource2backoffice"><img src={check} alt="check" /></td>
              <td className="col4" data-label="Others"><img src={cross} alt="cross" /></td>
            </tr>
            <tr>
              <td className="col1" data-label="What you get from us">Performance Monitoring</td>
              <td className="col2" data-label="How you get it from us">We monitor staff performance live using latest softwares</td>
              <td className="col3" data-label="Outsource2backoffice"><img src={check} alt="check" /></td>
              <td className="col4" data-label="Others"><img src={cross} alt="cross" /></td>
            </tr>
            <tr>
              <td className="col1" data-label="What you get from us">Dedicated Account Manager</td>
              <td className="col2" data-label="How you get it from us">You will get a dedicated account manager</td>
              <td className="col3" data-label="Outsource2backoffice"><img src={check} alt="check" /></td>
              <td className="col4" data-label="Others"><img src={cross} alt="cross" /></td>
            </tr>
            <tr>
              <td className="col1" data-label="What you get from us">Daily Reporting</td>
              <td className="col2" data-label="How you get it from us">Your account manager will provide you daily report on staff performance</td>
              <td className="col3" data-label="Outsource2backoffice"><img src={check} alt="check" /></td>
              <td className="col4" data-label="Others"><img src={cross} alt="cross" /></td>
            </tr>
            <tr>
              <td className="col1" data-label="What you get from us">Secure online payments</td>
              <td className="col2" data-label="How you get it from us">You can easily pay via direct debit using your bank card with our secure payment gateway</td>
              <td className="col3" data-label="Outsource2backoffice"><img src={check} alt="check" /></td>
              <td className="col4" data-label="Others"><img src={cross} alt="cross" /></td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default SixthSection;