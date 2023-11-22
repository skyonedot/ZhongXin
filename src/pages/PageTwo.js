// // PageTwo.js 的代码
// import React from 'react';

// const PageTwo = () => {
//   return <div><h2>页面二</h2>{/* 相应的内容 */}</div>;
// };

// export default PageTwo;

import React from 'react';
import ScrollList from '../components/ScrollList';

const PageTwo = () => {
    const dataList_big = [
        { name: 'BIG_Item 1', time_delayed: 5 },
        { name: 'BIG_Item 2', time_delayed: 7 },
        { name: 'BIG_Item 3', time_delayed: 3 },
        { name: 'BIG_Item 4', time_delayed: 4 },
        { name: 'BIG_Item 5', time_delayed: 6 },
        { name: 'BIG_Item 6', time_delayed: 2 },
        { name: 'BIG_Item 7', time_delayed: 5 },
        { name: 'BIG_Item 8', time_delayed: 7 },
        { name: 'BIG_Item 9', time_delayed: 3 },
        { name: 'BIG_Item 10', time_delayed: 4 },
        { name: 'BIG_Item 11', time_delayed: 6 },
        { name: 'BIG_Item 12', time_delayed: 2 },
        { name: 'BIG_Item 13', time_delayed: 5 },
        { name: 'BIG_Item 14', time_delayed: 7 },
        { name: 'BIG_Item 15', time_delayed: 3 },
        { name: 'BIG_Item 16', time_delayed: 4 },
        { name: 'BIG_Item 17', time_delayed: 6 },
        { name: 'BIG_Item 18', time_delayed: 2 },
        { name: 'BIG_Item 19', time_delayed: 5 },
        { name: 'BIG_Item 20', time_delayed: 7 },
        { name: 'BIG_Item 21', time_delayed: 3 },
        // ...更多项...
      ];


      const dataList_small = [
        { name: 'Small_Item 1', time_delayed: 5 },
        { name: 'Small_Item 2', time_delayed: 7 },
        { name: 'Small_Item 3', time_delayed: 3 },
        { name: 'Small_Item 4', time_delayed: 4 },
      ];

  return (
    <div>
      <h2>页面二</h2>
      <div style={{marginBottom:32}}>
        <div style={{marginBottom:2}}>
        1. 单步暂停滚动（鼠标在区域内时会停止滚动，鼠标离开则继续滚动），如下所示
        </div>

      <ScrollList dataList={dataList_big} />
      </div>

      <div style={{marginBottom:32,marginTop:32}}>
      <div style={{marginBottom:2}}>
        2. 静态展示，如下所示
        </div>
      <ScrollList dataList={dataList_small} />
      </div>

      <div style={{marginTop:32}}>
      <div style={{marginBottom:2}}>
        3. 单步暂停滚动（鼠标存在与否不影响数据的滚动），如下所示
        </div>
      <ScrollList dataList={dataList_big} mode={"auto"} />
      </div>

    </div>
  );
};

export default PageTwo;
