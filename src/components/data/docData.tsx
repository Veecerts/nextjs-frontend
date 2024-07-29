type RowObj = {
    name: [string, boolean];
    type: string;
    quantity: number;
    date: string;
    info: boolean;
  };
  
  const docData: RowObj[] = [
    {
      name: ['Birth certficate', true],
      quantity: 2458,
      type: 'Personal',
      date: '12 Jan 2021',
      info: false,
    },
    {
      name: ['Results', true],
      quantity: 1485,
      type: 'Academic',
      date: '21 Feb 2021',
      info: true,
    },
    {
      name: ['Contract', true],
      quantity: 1024,
      type: 'Legal',
      date: '13 Mar 2021',
      info: true,
    },
    {
      name: ['Power of Attorney', true],
      quantity: 858,
      type: 'Legal',
      date: '24 Jan 2021',
      info: true,
    },
    {
      name: ['Passport', true],
      quantity: 258,
      type: 'Government',
      date: '24 Oct 2022',
      info: false,
    },
    {
      name: ['Diploma', true],
      quantity: 1485,
      type: 'Academic',
      date: '21 Feb 2021',
      info: true,
    },
    {
      name: ['VISA', true],
      quantity: 1024,
      type: 'Government',
      date: '13 Mar 2021',
      info: true,
    },
    {
      name: ['Property Deed', true],
      quantity: 858,
      type: 'Financial',
      date: '24 Jan 2021',
      info: true,
    },
    {
      name: ['Statement', true],
      quantity: 1485,
      type: 'Legal',
      date: '21 Feb 2021',
      info: true,
    },
    {
      name: ['BTech Certificate', true],
      quantity: 1024,
      type: 'Academic',
      date: '13 Mar 2021',
      info: true,
    },
    {
      name: ['Will', true],
      quantity: 858,
      type: 'Financial',
      date: '24 Jan 2021',
      info: true,
    },
  ];
  
  export default docData;
  