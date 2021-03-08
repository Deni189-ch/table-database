export const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: {
      compare: (a, b) => a.id - b.id,
    },
  },
  {
    title: 'First name',
    dataIndex: 'firstName',
    sorter: {
      compare: (a, b) => a.firstName.length - b.firstName.length
    },
  },
  {
    title: 'Last name',
    dataIndex: 'lastName',
    sorter: {
      compare: (a, b) => a.lastName.length - b.lastName.length
    },
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: {
      compare: (a, b) => a.email.length - b.email.length
    },
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    sorter: {
      compare: (a, b) => a.phone.replace(/\D+/g,"") - b.phone.replace(/\D+/g,"")
    },
  },
];