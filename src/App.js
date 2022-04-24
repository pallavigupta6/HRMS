import React, {useEffect,useState}from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LogInPage from "./pages/LogInPage/LogInPage";
import Signup from './pages/SignUpPage/Signup'
import Dashboard from "./component/Dashboard";
import Home from "./pages/Home/Home";
import Profile from "./component/Profile/Profile";
import Leave from "./pages/Leave/Leave";
import LeaveDetails from "./pages/Leave/LeaveDetails";
import Attendence from "./component/Attendence/Attendence";
import Calender from "./component/Calender/Calendar"


const sampleDataa = [
  {
    leaveId: 1,
    employeeName: "Siva",
    leaveDays: 2,
    startDate: "10-04-2022",
    endDate: "12-04-2022",
    reason:
      "Having a serious eye problem need to consult doctor and take some rest.",
    leaveType: "Annual Leave",
  },
  {
    leaveId: 2,
    employeeName: "Kumar",
    leaveDays: 3,
    startDate: "10-04-2022",
    endDate: "13-04-2022",
    reason: "Need to attend my cousins marriage.",
    leaveType: "Medical Leave",
  },
  {
    leaveId: 3,
    employeeName: "Pallavi",
    leaveDays: 2,
    startDate: "10-04-2022",
    endDate: "12-04-2022",
    reason: "Going to get married",
    leaveType: "Emergency Leave",
  }

];

function App() {
  // const[Data,setData]=useState(Data);
  const[sampleData,setSampleData]=useState(sampleDataa);
  const[addData,setAddData]=useState({});
  useEffect(()=>{
    const newData = [...sampleData,addData ]
    setSampleData(newData)

  },[addData])
  console.log('In App.js===>',addData);
const deleteItemHandler=(id)=>{
  setSampleData(prevData =>{
    const UpdatedData = prevData.filter(data => data.leaveId !== id);
  return UpdatedData;
  })
}
  return (
    
      <>
      <div>
      <Routes>
        <Route path="/" element={<LogInPage/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leave" element={<Leave data={sampleData} ondelete={deleteItemHandler}/>} />
        <Route path="/details/:id" element={<LeaveDetails sampleData={sampleData}/>}/>
        <Route path="/attendence" element={<Attendence/>}/>
        <Route path="/calender" element={<Calender/>}/>
        
        {/* <Route path="/new" element={<NewLeave setAddData={setAddData}/>}/> */}

        {/* <Route path="/attendance" element={<Calender/>}/> */}
        {/* <Link to="/Signup">Signup </Link> */}
      </Routes>
      </div>
    </>
  );
}

export default App;
