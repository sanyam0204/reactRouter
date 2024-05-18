import React from "react";
import { useParams } from "react-router";

function User() {
  const { id } = useParams();
  return (
    <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl">
      User: {id}
    </div>
  );
}

export default User;