import React, { useEffect } from 'react';


interface ItemProps {
  label: string;
  value: string;
}

const options: ItemProps[] = [];

for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i;
  options.push({
    label: `Long Label: ${value}`,
    value,
  });
}


export default (props: any): React.ReactNode => {
  const fetchData = () => {};

  useEffect(() => {
    fetchData();

    const obj = { test: { a: 'sdf' }, aaa: 'ff' };
    console.log(Object.entries(obj));
    const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
    console.log(arr.flat(2));
  }, []);

  return (
    <>
    的店
    </>
  );
};
