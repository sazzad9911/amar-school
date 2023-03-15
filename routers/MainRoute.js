import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InitialPage from "./../screens/InitialPage";
import AutoSwipePage from "./../screens/AutoSwipePage";
import SubClassSelection from "./../screens/SubClassSelection";
import UserTabRoute from "./UserTabRoute";
import PhoneNumber from "../screens/PhoneNumber";
import CommonHeader from "../components/headers/CommonHeader";
import PhoneNumHeader from "../components/headers/PhoneNumHeader";
import PersonalInfo from "../screens/PersonalInfo";
import Home from "../screens/student/Home";
import UserHomeHeader from "../components/headers/UserHomeHeader";
import Settings from "../screens/student/Settings";
import Consultation from "../screens/student/Consultation";
import WishList from "../screens/student/WishList";
import Help from "../screens/student/Help";
import Affiliator from "../screens/student/Affiliator";
import CourseView from "../screens/student/CourseView";
import QuizSub from "../screens/student/QuizSub";
import Quiz from "../screens/student/Quiz";
import QuizHeader from "../components/headers/QuizHeader";
import OTP from "../screens/student/OTP";
import MyLearning from "../screens/student/MyLearning";
import CourseDetails from "../screens/student/CourseDetails";
import Overview from "../screens/student/Overview";
import BundleDetails from "../screens/student/BundleDetails";
import Book from "../screens/student/Book";
import InstructorProfileView from "../screens/student/InstructorProfileView";
import TeacherInfo from "../screens/Teacher/TeacherInfo";
import { useDispatch, useSelector } from "react-redux";
import TeacherTabRoute from "./TeacherTabRoute";
import LogIn from "../screens/LogIn";
import { getData, storeData } from "../functions/storage";
import { setUserInfo, updateUserInfo } from "../functions/userInfo";
import { getUserInfo } from "../apis/auth";
import ForgetPass from "../screens/ForgetPass";
import ResetPass from "../screens/ResetPass";
import TeacherProfile from "../screens/Teacher/TeacherProfile";
import UploadCourse from "../screens/Teacher/UploadCourse";
import SetQuiz from "../screens/Teacher/SetQuiz";
import AddQuestion from "../screens/Teacher/AddQuestion";
import Assignment from "../screens/Teacher/Assignment";
import BundleCourse from "../screens/Teacher/BundleCourse";
import Resources from "../screens/student/Resources";
import CreateAssignment from "../screens/Teacher/CreateAssignment";
import CreateQuiz from "../screens/Teacher/CreateQuiz";
import CreateBundleCourse from "../screens/Teacher/CreateBundleCourse";
import Finance from "../screens/Teacher/Finance";
import AllStudent from "../screens/Teacher/AllStudent";
import NoticeBoard from "../screens/Teacher/NoticeBoard";
import AddNotice from "../screens/Teacher/AddNotice";
import NoticeViewList from "../screens/Teacher/NoticeViewList";
import NoticeEdit from "../screens/Teacher/NoticeEdit";
import NoticeView from "../screens/Teacher/NoticeView";
import LiveClass from "../screens/Teacher/LiveClass";
import CreateLiveClass from "../screens/Teacher/CreateLiveClass";
import LiveClassViewList from "../screens/Teacher/LiveClassViewList";
import Discussion from "../screens/Teacher/Discussion";
import PaymentSettings from "../screens/Teacher/PaymentSettings";
import ZoomSettings from "../screens/Teacher/ZoomSettings";
import ViewProfile from "../screens/Teacher/ViewProfile";
import Analysis from "../screens/Teacher/Analysis";
import Withdraw from "../screens/Teacher/Withdraw";
import StudentDetails from "../screens/Teacher/StudentDetails";
import Certificate from "../screens/Teacher/Certificate";
import Upload from "../screens/Teacher/Upload";
import TeacherCourse from "../screens/Teacher/TeacherCourse";
import TeacherHome from "../screens/Teacher/TeacherHome";
import AssignmentDetails from "../screens/student/AssignmentDetails";
import AssignmentSubmit from "../screens/student/AssignmentSubmit";
import AssignmentTab from "../screens/student/AssignmentTab";
import AssignmentResult from "../screens/student/AssignmentResult";
import AssesmentDetails from "../screens/Teacher/AssesmentDetails";
import EditAssesment from "../screens/Teacher/EditAssesment";
import EditQuiz from "../screens/Teacher/EditQuiz";
import StartQuiz from "../screens/student/StartQuiz";
import SeeResult from "../screens/student/SeeResult";
import LeaderBoard from "../screens/student/LeaderBoard";
import TeacherResource from "../screens/Teacher/TeacherResource";
import AddResource from "../screens/Teacher/AddResource";
import EditTeacherCourse from "../screens/Teacher/EditTeacherCourse";
import { getStudentProfile } from "../apis/profile";
import LessonCart from "../components/TeacherParts/LessonCart";
import MyCart from "../screens/student/MyCart";
import Checkout from "../screens/Checkout";
import { getCategories } from "../apis/courses";
import { setCategories } from "../functions/categories";
import PaymentPage from "../screens/PaymentPage";
import * as SplashScreen from 'expo-splash-screen';
const Stack = createNativeStackNavigator();

const MainRoute = ({ navigation }) => {
  const instructorInfo = useSelector((state) => state.instructorInfo);
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      await SplashScreen.hideAsync();
      let res = await getData("userInfo");
      if(res){
        dispatch(setUserInfo(res));
        
      }
    })();
  }, []);
  React.useEffect(() => {
    if (userInfo) {
      getUserInfo(userInfo.meta.token).then((res) => {
        dispatch(setUserInfo(res.data));
        storeData("userInfo", res.data);
      });
      getCategories(userInfo)
        .then((res) => {
          //console.log(res.data.data.categories)
          dispatch(setCategories(res.data.data.categories));
        })
        .catch((err) => {
          console.warn(err.response.data.message);
        });
    }
  }, []);
  return (
    <Stack.Navigator>
      {!userInfo && (
        <Stack.Screen
          options={{ headerShown: false }}
          name="InitialPage"
          component={InitialPage}
        />
      )}

      <Stack.Screen
        options={{ headerShown: false }}
        name="UserTabRoute"
        component={
          userInfo ? (!instructorInfo ? UserTabRoute : TeacherTabRoute) : LogIn
        }
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PaymentPage"
        component={PaymentPage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="AutoSwipePage"
        component={AutoSwipePage}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="SubClassSelection"
        component={SubClassSelection}
      />
      <Stack.Screen
        options={{
          header: (props) => (
            <CommonHeader name="Enter your mobile number" {...props} />
          ),
        }}
        name="PhoneNumber"
        component={PhoneNumber}
      />
      <Stack.Screen
        options={{
          header: (props) => (
            <CommonHeader name="OTP Verification" {...props} />
          ),
        }}
        name="OTP"
        component={OTP}
      />
      <Stack.Screen
        options={{
          header: (props) => (
            <CommonHeader name="Personal Information" {...props} />
          ),
        }}
        name="PersonalInfo"
        component={PersonalInfo}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="সেটিংস" {...props} />,
        }}
        name="Settings"
        component={Settings}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="My Consultation" {...props} />,
        }}
        name="Consultation"
        component={Consultation}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Wishlist" {...props} />,
        }}
        name="WishList"
        component={WishList}
      />
      <Stack.Screen
        options={{
          header: (props) => (
            <CommonHeader name="Help and Support" {...props} />
          ),
        }}
        name="Help"
        component={Help}
      />
      <Stack.Screen
        options={{
          header: (props) => (
            <CommonHeader name="Become an affiliator" {...props} />
          ),
        }}
        name="Affiliator"
        component={Affiliator}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Details" {...props} />,
        }}
        name="CourseView"
        component={CourseView}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Free Quiz" {...props} />,
        }}
        name="QuizSub"
        component={QuizSub}
      />
      <Stack.Screen
        options={{
          header: (props) => <QuizHeader {...props} />,
        }}
        name="Quiz"
        component={Quiz}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="My Learning" {...props} />,
        }}
        name="MyLearning"
        component={MyLearning}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Course Details" {...props} />,
        }}
        name="CourseDetails"
        component={CourseDetails}
      />
      <Stack.Screen
        options={{
          header: (props) => (
            <CommonHeader name="Create Assignment" {...props} />
          ),
        }}
        name="CreateAssignment"
        component={CreateAssignment}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Create Quiz" {...props} />,
        }}
        name="CreateQuiz"
        component={CreateQuiz}
      />
      <Stack.Screen
        options={{
          header: (props) => (
            <CommonHeader name="Create Bundle Course" {...props} />
          ),
        }}
        name="CreateBundleCourse"
        component={CreateBundleCourse}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Finance" {...props} />,
        }}
        name="Finance"
        component={Finance}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Details" {...props} />,
        }}
        name="BundleDetails"
        component={BundleDetails}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Booking Now" {...props} />,
        }}
        name="Book"
        component={Book}
      />
      {userInfo && (
        <Stack.Screen
          options={{
            header: (props) => (
              <CommonHeader name="About Instructor" {...props} />
            ),
          }}
          name="InstructorProfileView"
          component={InstructorProfileView}
        />
      )}
      <Stack.Screen
        options={{
          header: (props) => (
            <CommonHeader name="Personal information" {...props} />
          ),
        }}
        name="TeacherInfo"
        component={TeacherInfo}
      />

      {!userInfo && (
        <Stack.Screen
          options={{
            header: (props) => <CommonHeader name="LogIn" {...props} />,
          }}
          name="LogIn"
          component={LogIn}
        />
      )}
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Forgot Password" {...props} />,
        }}
        name="ForgetPass"
        component={ForgetPass}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Reset Password" {...props} />,
        }}
        name="ResetPass"
        component={ResetPass}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Profile" {...props} />,
        }}
        name="TeacherProfile"
        component={TeacherProfile}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Profile" {...props} />,
        }}
        name="TeacherTabRoute"
        component={TeacherTabRoute}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Upload Course" {...props} />,
        }}
        name="UploadCourse"
        component={UploadCourse}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Quiz" {...props} />,
        }}
        name="SetQuiz"
        component={SetQuiz}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Add Question" {...props} />,
        }}
        name="Add Question"
        component={AddQuestion}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Resources" {...props} />,
        }}
        name="Resources"
        component={Resources}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Assignment" {...props} />,
        }}
        name="Assignment"
        component={Assignment}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Bundle Courses" {...props} />,
        }}
        name="BundleCourse"
        component={BundleCourse}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="All Student" {...props} />,
        }}
        name="AllStudent"
        component={AllStudent}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Notice Board" {...props} />,
        }}
        name="NoticeBoard"
        component={NoticeBoard}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Add Notice " {...props} />,
        }}
        name="AddNotice"
        component={AddNotice}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="All Notice " {...props} />,
        }}
        name="NoticeViewList"
        component={NoticeViewList}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Edit Notice " {...props} />,
        }}
        name="NoticeEdit"
        component={NoticeEdit}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="View Notice " {...props} />,
        }}
        name="NoticeView"
        component={NoticeView}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Live Class " {...props} />,
        }}
        name="LiveClass"
        component={LiveClass}
      />
      <Stack.Screen
        options={{
          header: (props) => (
            <CommonHeader name="Create Live Class " {...props} />
          ),
        }}
        name="CreateLiveClass"
        component={CreateLiveClass}
      />
      <Stack.Screen
        options={{
          header: (props) => (
            <CommonHeader name="Live Class Lists" {...props} />
          ),
        }}
        name="LiveClassViewList"
        component={LiveClassViewList}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Discussion" {...props} />,
        }}
        name="Discussion"
        component={Discussion}
      />
      <Stack.Screen
        options={{
          header: (props) => (
            <CommonHeader name="Add Account For Withdraw" {...props} />
          ),
        }}
        name="PaymentSettings"
        component={PaymentSettings}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Zoom Settings" {...props} />,
        }}
        name="ZoomSettings"
        component={ZoomSettings}
      />

      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Profile" {...props} />,
        }}
        name="ViewProfile"
        component={ViewProfile}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Zoom Settings" {...props} />,
        }}
        name="Analysis"
        component={Analysis}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Zoom Settings" {...props} />,
        }}
        name="Withdraw"
        component={Withdraw}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Details" {...props} />,
        }}
        name="StudentDetails"
        component={StudentDetails}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Certificate" {...props} />,
        }}
        name="Certificate"
        component={Certificate}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Upload" {...props} />,
        }}
        name="Upload"
        component={Upload}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="My Courses" {...props} />,
        }}
        name="TeacherCourse"
        component={TeacherCourse}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="TeacherHome"
        component={TeacherHome}
      />
      <Stack.Screen
        options={{
          header: (props) => (
            <CommonHeader name="Assignment Details" {...props} />
          ),
        }}
        name="AssignmentDetails"
        component={AssignmentDetails}
      />
      <Stack.Screen
        options={{
          header: (props) => (
            <CommonHeader name="Assignment Upload" {...props} />
          ),
        }}
        name="AssignmentSubmit"
        component={AssignmentSubmit}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="AssignmentTab"
        component={AssignmentTab}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Result" {...props} />,
        }}
        name="AssignmentResult"
        component={AssignmentResult}
      />
      <Stack.Screen
        options={{
          header: (props) => (
            <CommonHeader name="Assesment Details" {...props} />
          ),
        }}
        name="AssesmentDetails"
        component={AssesmentDetails}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Edit Assesment " {...props} />,
        }}
        name="EditAssesment"
        component={EditAssesment}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Edit Quiz " {...props} />,
        }}
        name="EditQuiz"
        component={EditQuiz}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Start Quiz " {...props} />,
        }}
        name="StartQuiz"
        component={StartQuiz}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Quiz Result " {...props} />,
        }}
        name="SeeResult"
        component={SeeResult}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Leader Board " {...props} />,
        }}
        name="LeaderBoard"
        component={LeaderBoard}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Resources " {...props} />,
        }}
        name="TeacherResource"
        component={TeacherResource}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Add Resource " {...props} />,
        }}
        name="AddResource"
        component={AddResource}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Edit Course " {...props} />,
        }}
        name="EditTeacherCourse"
        component={EditTeacherCourse}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Lesson " {...props} />,
        }}
        name="LessonCart"
        component={LessonCart}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Cart" {...props} />,
        }}
        name="MyCart"
        component={MyCart}
      />
      <Stack.Screen
        options={{
          header: (props) => <CommonHeader name="Checkout" {...props} />,
        }}
        name="Checkout"
        component={Checkout}
      />
    </Stack.Navigator>
  );
};

export default MainRoute;
