/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const Example = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button id="Popover1" type="button">
        Cookie Policy
      </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>Our Cookie Policy</PopoverHeader>
        <PopoverBody><p>Our site uses cookies to help provide a better user experience. In general, cookies are used to retain user preferences and provide <strong><i>anonymised</i></strong> tracking data to third party applications like Google Analytics.<br/><br/> If you don’t want to accept any cookies from any site, the most effective way to do this is to disable cookies in your browser. If you need help with this check out the <a className='inline' target='blank' href='https://www.aboutcookies.com/'>About Cookies</a> website which offers guidance for all modern browsers.</p></PopoverBody>
      </Popover>
    </div>
  );
}

export default Example;