import React, { useEffect, useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../../scss/components/Subnav.scss'

const Example = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}  className="dropdown">
      <DropdownToggle caret>
        {props.name}
      </DropdownToggle>
      <DropdownMenu>
        {props.dropDownItem.dropdownMenu.map((item, index) =>
          <DropdownItem key={index} active={item.active} href={item.href}>{item.name}</DropdownItem>
        )}
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Example;