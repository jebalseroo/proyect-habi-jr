"use client";
import PropTypes from "prop-types";
import TablesStyles from "./tables.styles";
export interface ITables {
  heders: any[];
  content: any[];
}

const Tables = ({ heders, content }: ITables) => {
  return (
    <TablesStyles>
      <section>
        <div className='tbl-header'>
          <table cellPadding='0' cellSpacing='0' border={0}>
            <thead>
              <tr>
                {heders.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
          </table>
        </div>
        <div className='tbl-content'>
          <table cellPadding='0' cellSpacing='0' border={0}>
            <tbody>
              {content?.map((item, index) => (
                <tr key={index}>
                  {heders.map((items, indexs) => (
                    <td key={indexs}>{item[items]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </TablesStyles>
  );
};

Tables.propTypes = {
  heders: PropTypes.object,
  content: PropTypes.object,
};

export default Tables;
