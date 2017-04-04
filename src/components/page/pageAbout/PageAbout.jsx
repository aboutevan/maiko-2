import React from 'react';
import { LayoutMain } from 'layout';
// import * as images from '../../../assets/img/a-base.png';

  // var context = require.context("../../../assets/img/", true, /\.png$/);
  //   var obj = {};
  //   context.keys().forEach(function (key) {
  //       const newObjKey = key.replace(/[./\-_(png|jpg)]/g,"")
  //       obj[newObjKey] = context(key);
  //   });
  //   console.log(obj);

const PageAbout = () => (
  <LayoutMain>
    <div className="page-about main-row">
      <div>
        <h2>About Page</h2>
        <img src={obj.abase} alt=""/>
      </div>
    </div>
  </LayoutMain>
);

export default PageAbout;
