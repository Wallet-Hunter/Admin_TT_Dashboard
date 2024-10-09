// export const userColumns = [
//   { field: "id", headerName: "ID", width: 70 },
//   {
//     field: "user",
//     headerName: "User",
//     width: 230,
//     renderCell: (params) => {
//       return (
//         <div className="cellWithImg">
//           <img className="cellImg" src={params.row.img} alt="avatar" />
//           {params.row.username}
//         </div>
//       );
//     },
//   },
//   {
//     field: "email",
//     headerName: "Email",
//     width: 230,
//   },

//   {
//     field: "address",
//     headerName: "Address",
//     width: 100,
//   },
//   {
//     field: "status",
//     headerName: "Status",
//     width: 160,
//     renderCell: (params) => {
//       return (
//         <div className={`cellWithStatus ${params.row.status}`}>
//           {params.row.status}
//         </div>
//       );
//     },
//   },
// ];

export const userColumns = [
    { field: "id", headerName: "Telegram ID", width: 150 },
    // {
    //   field: "user",
    //   headerName: "User",
    //   width: 230,
    //   renderCell: (params) => {
    //     return (
    //       <div className="cellWithImg">
    //         <img className="cellImg" src={params.row.img} alt="avatar" />
    //         {params.row.username}
    //       </div>
    //     );
    //   },
    // },
    {
      field: "firstname",
      headerName: "First Name",
      width: 150,
    },
  
    {
      field: "lastname",
      headerName: "Last Name",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  