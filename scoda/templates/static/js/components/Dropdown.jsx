import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}  className="dropdown">
      <DropdownToggle caret>
        {props.name}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>{props.dropDownItem}</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Example;