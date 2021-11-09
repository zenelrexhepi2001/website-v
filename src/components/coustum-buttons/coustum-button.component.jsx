import React from 'react';

const CoustumButton = ({children,...othercoustumProp}) => (
    <button {...othercoustumProp}>{children}</button>
)

export default CoustumButton;