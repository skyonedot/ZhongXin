import React, { useEffect, useRef, useState } from 'react';

const ScrollList = ({ dataList, height = 200, mode = 'pause' }) => {
  const [isHovering, setIsHovering] = useState(false);
  const scrollContainerRef = useRef(null);
  const previousScrollAmountRef = useRef(0); // 用于记录上一次的滚动位置

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = previousScrollAmountRef.current; // 从上一次的滚动位置开始
    const maxScrollAmount = scrollContainer.scrollHeight - scrollContainer.clientHeight;

    const scrollStep = () => {
      if (isHovering && mode === 'pause') return;
      scrollContainer.scrollTop = scrollAmount;
      scrollAmount = (scrollAmount + 1) % maxScrollAmount;
    };

    const scrollInterval = setInterval(scrollStep, 50); // 调整间隔以控制滚动速度

    return () => clearInterval(scrollInterval);
  }, [isHovering, mode]);

  return (
    <div
      ref={scrollContainerRef}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      style={{ height: height, overflow: 'auto', backgroundColor: '#92AEB8' }}
    >
      {dataList.map((item, index) => (
        <div key={index}>{item.name},&nbsp;&nbsp;&nbsp;&nbsp;延期{item.time_delayed}天</div>
      ))}
    </div>
  );
};

export default ScrollList;
