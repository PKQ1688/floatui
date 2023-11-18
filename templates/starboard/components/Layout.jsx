/*
 * @Author       : adolf adolf1321794021@gmail.com
 * @Date         : 2023-11-16 13:28:50
 * @LastEditors  : adolf adolf1321794021@gmail.com
 * @LastEditTime : 2023-11-16 13:39:02
 * @FilePath     : /floatui/templates/starboard/components/Layout.jsx
 * @Description  : 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// components/Layout.js
import React from 'react';
import Navbar from "../components/ui/Navbar";

const Layout = ({ children }) => (
    <div>
        {/* <nav>Navbar</nav> */}
        <Navbar />
        {/* <aside>Sidebar</aside> */}
        <main>{children}</main>
    </div>
);

export default Layout;
