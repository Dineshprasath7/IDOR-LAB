/*import React, { useEffect, useState } from "react";
import ProfileIcon from "../Components/ProfileIcon";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [name, setName] = useState("");
  const [phn_num, setPhoneNum] = useState("");
  const [clg, setCollege] = useState("");
  const [country, setCountry] = useState("");
  const [Role, setRole] = useState("");
  const [Id, setId] = useState("");
  const [userFound, setUserFound] = useState(true);

  const navigate = useNavigate();

  const getDetails = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/getdetails", {
        withCredentials: true,
      });
      if (response.status == 200) {
        const user = response.data.user;
        setUserFound(true);
        setName(user.name);
        setPhoneNum(user.phn_num);
        setCollege(user.clg);
        setCountry(user.country);
        setRole(user.role);
        setId(user.role_id);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status == 404) {
          setUserFound(false);
        }
      } else {
        console.log("Error fetching user details:", error);
      }
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="h-screen bg-black flex justify-center items-center">
  <div className="w-2/6 bg-gray-800 shadow-lg h-1/2 flex flex-col items-center rounded-lg p-6">
    <div className="flex flex-col items-center">
      <ProfileIcon height="150px" width="150px" />
      {!userFound ? (
        <div className="w-full bg-red-600 flex items-center justify-center h-min mt-6 border-4 border-red-800 rounded-lg">
          <div className="text-xl p-4 font-['Roboto'] text-green-400">
            User Not Found
          </div>
        </div>
      ) : (
        <table className="table-fixed text-center mt-12 font-['Roboto'] text-xl text-green-400 w-full">
          <tbody>
            <tr>
              <td className="p-2">Name: {name}</td>
              <td className="p-2">Phone: {phn_num}</td>
              <td className="p-2">Id: {Id}</td>
            </tr>
            <tr>
              <td className="p-2">College: {clg}</td>
              <td className="p-2">Role: {Role}</td>
              <td className="p-2">Country: {country}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  </div>
</div>


  );
}

export default Profile;
*/
import React, { useEffect, useState } from "react";
import ProfileIcon from "../Components/ProfileIcon";
import axios from "axios";

function Profile() {
  const [name, setName] = useState("");
  const [phn_num, setPhoneNum] = useState("");
  const [clg, setCollege] = useState("");
  const [country, setCountry] = useState("");
  const [Role, setRole] = useState("");
  const [Id, setId] = useState("");
  const [userFound, setUserFound] = useState(true);

  const getDetails = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/getdetails", {
        withCredentials: true,
      });
      if (response.status === 200) {
        const user = response.data.user;
        setUserFound(true);
        setName(user.name);
        setPhoneNum(user.phn_num);
        setCollege(user.clg);
        setCountry(user.country);
        setRole(user.role);
        setId(user.role_id);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setUserFound(false);
      } else {
        console.log("Error fetching user details:", error);
      }
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <div className="w-3/6 bg-gray-800 shadow-lg h-auto flex flex-col items-center rounded-lg p-8">
        <div className="flex flex-col items-center">
          <ProfileIcon height="150px" width="150px" />
          {!userFound ? (
            <div className="w-full bg-red-600 flex items-center justify-center h-min mt-6 border-4 border-red-800 rounded-lg">
              <div className="text-xl p-4 font-['Roboto'] text-green-400">
                User Not Found
              </div>
            </div>
          ) : (
            <table className="table-fixed text-left mt-8 font-['Roboto'] text-lg text-green-400 w-full">
              <tbody>
                <tr>
                  <td className="p-4 w-1/3">Name:</td>
                  <td className="p-4 w-2/3">{name || 'N/A'}</td>
                </tr>
                <tr>
                  <td className="p-4 w-1/3">Phone:</td>
                  <td className="p-4 w-2/3">{phn_num || 'N/A'}</td>
                </tr>
                <tr>
                  <td className="p-4 w-1/3">ID:</td>
                  <td className="p-4 w-2/3">{Id || 'N/A'}</td>
                </tr>
                <tr>
                  <td className="p-4 w-1/3">College:</td>
                  <td className="p-4 w-2/3">{clg || 'N/A'}</td>
                </tr>
                <tr>
                  <td className="p-4 w-1/3">Role:</td>
                  <td className="p-4 w-2/3">{Role || 'N/A'}</td>
                </tr>
                <tr>
                  <td className="p-4 w-1/3">Country:</td>
                  <td className="p-4 w-2/3">{country || 'N/A'}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
