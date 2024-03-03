import "./userList.scss";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userApi } from "@/apis/user.api";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function UserList() {
  const [userdata, setuserData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await userApi.getUser();
      setuserData(res.data);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id: any) => {
    try {
      await userApi.deleteUser(id);
      setuserData(userdata.filter((item: any) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params: any) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: any) => {
        return (
          <>
            <Link to={"/admin/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userdata}
        // disableSelectionOnClick
        columns={columns}
        checkboxSelection
        pagination
      />
    </div>
  );
}
