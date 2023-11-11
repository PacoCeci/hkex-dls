const propTypesTemplate = ({ componentName, jsx, exports }, { tpl }) => {
  return tpl`
  
  import * as React from "react";
  import { propTypes, defaultProps, ISvgProps } from "../constants";

  function ${componentName}(props: ISvgProps) {
    const { size, color } = props;
    return ${jsx};
  }
  
  ${componentName}.propTypes = propTypes;
  
  ${componentName}.defaultProps = defaultProps;

  ${exports}
    `;
};

module.exports = propTypesTemplate;
