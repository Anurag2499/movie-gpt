import React from 'react';
const Footer = () => {
  return (
    <div className="grid grid-cols-12 w-full relative bg-black">
      <div className="col-span-12 md:col-span-3"></div>
      <div className="col-span-12 md:col-span-6 font-light text-gray-500 text-sm p-8">
        <div className="grid grid-cols-12">
          <h1 className=" col-span-6 gap-2 py-4">
            Questions? Call 000-800-919-1694
          </h1>
          <h1 className="col-span-6 gap-2 py-4">@ Anurag Singh Dangi</h1>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3 gap-4">
            <div className="pb-4">FAQ</div>
            <div>Cookie Preferences</div>
          </div>
          <div className="col-span-3 gap-4">
            <div className="pb-4">Help Centre</div>
            <div>Corporate Information</div>
          </div>
          <div className="col-span-3 gap-4">
            <div>Terms of Use</div>
          </div>
          <div className="col-span-3 gap-4">
            <div>Privacy</div>
          </div>
        </div>
      </div>
      <div className="col-span-3"></div>
    </div>
  );
};

export default Footer;
